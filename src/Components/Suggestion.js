import { SEARCH_ICON } from "../utils/constant";

const Suggestion = ({ name }) => {
  return (
    <div className="px-2 py-1 flex items-center cursor-pointer hover:bg-gray-200 rounded-md">
      <div className="w-4 m-2">
        <img alt="search icon" src={SEARCH_ICON}  />
      </div>
      <p className="font-semibold">{name}</p>
    </div>
  );
};

export default Suggestion;
