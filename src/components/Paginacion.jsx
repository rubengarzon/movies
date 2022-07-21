export const Paginacion = (props) => {
  const getPages = () => {
    const results = [];
    for (let index = 0; index < props.total; index++) {
      let pagina = index + 1;
      results.push(
        <a
          onClick={() => props.onChange(pagina)}
          className={props.pagina === pagina + 1 ? "active" : ""}
        >
          {pagina}
        </a>
      );
    }

    return results;
  };

  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>
          Página {props.pagina} de {props.total}:
        </span>

        {getPages()}
      </div>
    </div>
  );
};
