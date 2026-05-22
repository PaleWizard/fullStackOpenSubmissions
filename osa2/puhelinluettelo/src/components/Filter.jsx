const Filter = ({filter, filterHandler}) => {
  return (
    <div>Filter shown with <input value={filter} onChange={filterHandler}/></div>
  )
}

export default Filter