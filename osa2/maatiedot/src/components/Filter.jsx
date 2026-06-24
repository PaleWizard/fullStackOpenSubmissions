const Filter = ({filter, handleFilter}) => {
    
    return (
        <div>
            <label className='filterLabel'>Find countries</label> 
            <input className='filterInput' value={filter} onChange={handleFilter}/>
        </div>
    )
}

export default Filter