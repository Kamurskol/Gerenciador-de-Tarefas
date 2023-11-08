
const Search = ({search, setSearch}) => {
  return (
    <div className="search">
        <h2>Pesquisar:</h2>
        {/*o value tem o valor do state 
        ao modificar será alterado o state com o e.target.value*/}
        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder="Digite para pesquisar."/>
    </div>
  )
}

export default Search