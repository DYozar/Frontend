import React, { useEffect, useState } from 'react';
import { searchingPosts } from '../../GraphQL/SearchQuerie';
import { CgClose } from 'react-icons/cg';
import Link from 'next/link';

const Search = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newArticles = await searchingPosts();
        setSearchResults(newArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    try {
      const newArticles = await searchingPosts();
      const filteredResults = search(newArticles, query);
      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const search = (list, text) => {
    const words = text.split(" ").filter((word) => word.trim() !== "");
    return list.filter((article) => {
      const title = article.attributes.Title.toLowerCase();
      return words.every((word) => title.includes(word.toLowerCase()));
    });
  };
  const clearSearch = () => {
    setSearchQuery(''); // Clear the search input
    setSearchResults([]); // Clear search results
  };

  return (
    <form className="w-500 relative">
      <div className="relative md:w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full p-4 rounded-full text-gray-50 bg-slate-900"
        />
        {(searchQuery && searchResults.length > 0)&& (
        <CgClose className="absolute right-1 top-1/2 -translate-y-1/2 text-[32px] text-gray-50 mx-3 hover:bg-slate-600 rounded-full"  onClick={clearSearch}/>
         )}
       
      </div>

      {(searchQuery.trim() !== '' && searchResults.length > 0 )&& (
        <div className="absolute z-50 top-[70px] p-4 bg-gray-900 text-gray-50 md:w-1/2 rounded-xl left-1/2 w-full md:left-1/2  -translate-x-1/2 flex flex-col gap-4 overscroll-auto overflow-auto h-[400px] text-[15px] ">
          {searchResults.map((result) => (
            <span key={result.attributes.slug}><Link href={`/Article/${result.attributes.slug}`} className=' hover:underline underline-offset-4' onClick={ () => {props.closeMobileMenu() }}>{result.attributes.Title}</Link></span>
          ))}
        </div>
      )}
    </form>
  );
};

export default Search;
