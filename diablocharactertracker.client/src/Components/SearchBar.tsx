import React from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search for an item..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="m-2 p-2 rounded bg-blood-700 text-blood-50 placeholder-blood-400 focus:outline-none focus:ring focus:ring-blood-500 sm:w-80 md:w-96 lg:w-2/5"
    />
  );
};

export default SearchBar;
