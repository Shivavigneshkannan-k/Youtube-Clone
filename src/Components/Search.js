import { useEffect, useState } from "react";
import { SEARCH_ICON, YOUTUBE_SUGGESTION_API } from "../utils/constant";
import Suggestion from "./Suggestion";
import { useDispatch,useSelector } from "react-redux";
import { addToCache } from "../utils/cacheSlice";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const cache = useSelector(store=> store.cache);
  

  useEffect(() => {
    if(inputText in cache){
      setSuggestion(cache[inputText]);
      return;
    }
    const fetchSuggestions = async () => {
      try {
      const response = await fetch(YOUTUBE_SUGGESTION_API + inputText);
        if (!response.ok)
          throw new Error("error occurred at fetching suggestions");

        const data = await response.json();
        setSuggestion(data[1]);
        dispatch(addToCache({ [inputText]: data[1] }));
      } catch (err) {
        console.error("error occurred at fetching suggestions");
      }
    };

    const timer = setTimeout(fetchSuggestions, 200);
    return () => {
      clearInterval(timer);
    };
  }, [inputText]);

  return (
    // <div></div>
    <form
      className="justify-center items-center flex flex-1 relative col-span-10 dark:bg-black text-white"
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <input
        type="text"
        placeholder="Search"
        className="w-1/2 px-4 py-1 text-md  outline-none focus:outline-blue-700 rounded-l-full dark:bg-black text-white"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        onScroll={() => setShowSuggestions(false)}
      />
      {showSuggestion && suggestions.length !== 0 && (
        <div className="w-[40%] absolute top-full px-2 py-1 shadow-lg left-1/4 rounded-lg bg-black">
          {suggestions.map((suggest) => (
            <Suggestion key={suggest} name={suggest} />
          ))}
        </div>
      )}

      <button className=" ml-1 py-2 pl-3 pr-6 bg-gray-900 rounded-r-full">
        <img alt="search" src={SEARCH_ICON} className="w-6" />
      </button>
    </form>
  );
};

export default Search;
