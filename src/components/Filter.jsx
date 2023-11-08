//FUNÇÃO DE FILTRAR POR ORDEM CANCELADA
//lembrar das props
//PORRA DE CHAVES MALDITAS 
//não esquecer das chaves

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
      <h2>Filtrar</h2>
      <div className="filter-options">
        <div>
          <p className="status">Status</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}> 
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
      </div>
      <div>
        {/* CANCELEI ESSA FUNÇÃO */}
        {/* <p>Ordem alfabética</p>
        <button onClick={setSort("Ascendente")}>Ascendente</button>
        <button onClick={setSort("Desc")}>Descendente</button> */}
      </div>
    </div>
    
  )
}

export default Filter