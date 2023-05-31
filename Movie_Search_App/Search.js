import React from "react";

function Search({handleInput, searchResult}){
return(
<div className="search-input mt-3 mb-5">
<input type="text" name="movie" className="w-50 p-2"
placeholder="Search Movie" onChange={handleInput}
onKeyDown={searchResult}
>


</input>

</div>
)
}
export default Search;