import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import { searchItems } from "../data/searchIndex";
import "./Search.css";

const normalize = (value) => value.toLocaleLowerCase("ru-RU").trim();

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const normalizedQuery = normalize(query);

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    const words = normalizedQuery.split(/\s+/).filter(Boolean);

    return searchItems.filter((item) => {
      const searchText = normalize(
        [item.type, item.title, item.description, item.keywords].join(" "),
      );

      return words.every((word) => searchText.includes(word));
    });
  }, [normalizedQuery]);

  return (
    <div className="search-page">
      <Header2 activePage="search" />
      <main className="search-main">
        <section className="search-hero">
          <div className="search-breadcrumbs">
            <a href="/">Главная</a>
            <span>/</span>
            <span>Поиск</span>
          </div>
          <div className="search-heading">
            <h1>Поиск по сайту</h1>
            <SearchBox className="search-page-box" initialValue={query} />
          </div>
        </section>

        <section className="search-results" aria-label="Результаты поиска">
          {normalizedQuery ? (
            <div className="search-results-head">
              <h2>
                Найдено: <span>{results.length}</span>
              </h2>
              <p>Запрос: {query}</p>
            </div>
          ) : (
            <div className="search-empty">
              <h2>Введите запрос</h2>
              <p>Например: КТП, сертификат, контакты, Роснефть.</p>
            </div>
          )}

          {normalizedQuery && results.length === 0 && (
            <div className="search-empty">
              <h2>Ничего не найдено</h2>
              <p>Попробуйте изменить запрос или использовать более короткое слово.</p>
            </div>
          )}

          {results.map((item) => (
            <a className="search-result-card" href={item.url} key={`${item.type}-${item.title}`}>
              <span>{item.type}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </a>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
