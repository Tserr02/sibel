const http = require("http");
const nodemailer = require("nodemailer");
require("dotenv").config();

const PORT = Number(process.env.MAIL_SERVICE_PORT || process.env.PORT || 4000);
const MAIL_TO = process.env.MAIL_TO || "sibel.tomsk@mail.ru";
const MAX_BODY_SIZE = 1024 * 16;

const normalizePhone = (phone) => String(phone || "").replace(/[^\d+]/g, "");

const isValidPhone = (phone) => {
  const value = String(phone || "").trim();
  const digits = normalizePhone(value).replace(/\D/g, "");

  return /^\+?\d[\d\s\-()]{9,}$/.test(value) && digits.length >= 10;
};

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const readJsonBody = (request) =>
  new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;

      if (body.length > MAX_BODY_SIZE) {
        reject(new Error("REQUEST_TOO_LARGE"));
        request.destroy();
      }
    });

    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("INVALID_JSON"));
      }
    });

    request.on("error", reject);
  });

const sendJson = (response, statusCode, payload) => {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": process.env.CORS_ORIGIN || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  response.end(JSON.stringify(payload));
};

const validateConfig = () => {
  const requiredVariables = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
  const missingVariables = requiredVariables.filter((key) => !process.env[key]);

  if (missingVariables.length) {
    throw new Error(`Missing mail settings: ${missingVariables.join(", ")}`);
  }
};

const createTransporter = () => {
  validateConfig();

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: String(process.env.SMTP_SECURE || "true") === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const buildMail = ({ name, company, phone }) => {
  const safeName = String(name).trim();
  const safeCompany = String(company).trim();
  const safePhone = String(phone).trim();

  const text = [
    "Новая заявка с формы «Связаться по проекту».",
    "",
    `Имя: ${safeName}`,
    `Компания: ${safeCompany}`,
    `Телефон: ${safePhone}`,
    "",
    "Согласие на обработку персональных данных: да",
  ].join("\n");

  const html = `
    <h2>Новая заявка с сайта Сибэл</h2>
    <p>Поступила заявка с формы «Связаться по проекту».</p>
    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse">
      <tr><td><b>Имя</b></td><td>${escapeHtml(safeName)}</td></tr>
      <tr><td><b>Компания</b></td><td>${escapeHtml(safeCompany)}</td></tr>
      <tr><td><b>Телефон</b></td><td>${escapeHtml(safePhone)}</td></tr>
      <tr><td><b>Согласие</b></td><td>Да</td></tr>
    </table>
  `;

  return {
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to: MAIL_TO,
    replyTo: process.env.MAIL_REPLY_TO || process.env.SMTP_USER,
    subject: "Заявка с сайта Сибэл",
    text,
    html,
  };
};

const handleContactRequest = async (request, response) => {
  try {
    const body = await readJsonBody(request);
    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const phone = String(body.phone || "").trim();
    const consent = Boolean(body.consent);

    if (!name || !company || !phone) {
      sendJson(response, 400, {
        ok: false,
        message: "Заполните имя, компанию и телефон.",
      });
      return;
    }

    if (!isValidPhone(phone)) {
      sendJson(response, 400, {
        ok: false,
        message: "Введите корректный телефон.",
      });
      return;
    }

    if (!consent) {
      sendJson(response, 400, {
        ok: false,
        message: "Нужно согласие на обработку персональных данных.",
      });
      return;
    }

    const transporter = createTransporter();
    await transporter.sendMail(buildMail({ name, company, phone }));

    sendJson(response, 200, {
      ok: true,
      message: "Заявка отправлена.",
    });
  } catch (error) {
    const isConfigError = error.message && error.message.startsWith("Missing mail settings");

    console.error("Mail service error:", error);
    sendJson(response, isConfigError ? 500 : 400, {
      ok: false,
      message: isConfigError
        ? "Сервис отправки писем не настроен."
        : "Не удалось отправить заявку. Попробуйте позже.",
    });
  }
};

const server = http.createServer((request, response) => {
  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (request.method === "POST" && request.url === "/api/contact") {
    handleContactRequest(request, response);
    return;
  }

  sendJson(response, 404, {
    ok: false,
    message: "Not found",
  });
});

server.listen(PORT, () => {
  console.log(`Mail service is running on http://localhost:${PORT}`);
});
