
const Filter = ( {filterByTitle, filterByRate} ) =>{

    return(
      <div className="filterMovie">
        
  
        <label> Search By Movie Title: </label>
        <input type="text" id= "filterTitle" onChange={filterByTitle} />
  
        <label> Search By Movie Ratings:</label>
        <input type="number" id= "filterRating" onChange={filterByRate} />
      </div>
    );
  }
  export default Filter;