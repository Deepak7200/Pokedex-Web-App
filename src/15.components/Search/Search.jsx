import useDebounce from '../../hooks/useDebounce';
import './Search.css'

function Search({updateSearchTerm}){
    const debouncedCallback = useDebounce((e) => updateSearchTerm(e.target.value)) // e → input change event (given by JS from onChange)
//     You pass (e) => updateSearchTerm(e.target.value) to tell debounce WHAT to do,
//     and later you pass e to tell it WITH WHAT DATA to do it.
    return(
        <div className='search-wrapper'>
            <input
                id='pokemon-name-search'
                type="text"
                placeholder="pokemon name...."
                onChange={debouncedCallback} // here, onChange (inbuilt) giving value of e to useDebounce
                // means, onChange={(e) => debouncedCallback(e)} // react do it automatically for us
            />
        </div>
    );
}

// Render time:
//   useDebounce(cb)        ← NO e
//   returns debounced fn

// Later (user types):
//   debouncedCallback(e)   ← e exists HERE
//   cb(e)


export default Search;