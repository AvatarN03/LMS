"use client";
import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";

const SearchInput = ({ onSearch, delay = 300 }) => {
  const [value, setValue] = useState("");      // what’s in the box
  const [term, setTerm] = useState("");        // what we actually send

  // run the callback only after user stops typing for `delay` ms
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(term.trim());
    }, delay);

    return () => clearTimeout(timer); // clear if user keeps typing
  }, [term, delay, onSearch]);

  const handleChange = (e) => {
    setValue(e.target.value);
    setTerm(e.target.value);
  };

  return (
    <div className="flex gap-2 border font-bold text-purple-600 bg-neutral-200 dark:bg-neutral-800 border-slate-300 rounded-md py-1 px-4 w-full max-w-4xl mx-auto items-center dark:text-slate-300 my-4">
      <Search className="dark:text-slate-400 text-purple-600" />
      <input
        type="text"
        placeholder="Search for courses"
        value={value}
        onChange={handleChange}
        className="outline-none border-none bg-transparent w-full flex-1 py-3"
      />
    </div>
  );
};

export default SearchInput;
