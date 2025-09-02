import { Search } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  return (
    <div className="flex gap-2 border-[1px] border-slate-300 rounded px-3 py-2 w-full max-w-md items-center dark:text-slate-300">
        <Search />
        <input type="text" placeholder='Search for courses' className='outline-none border-none bg-transparent w-full text-purple-400' />
    </div>
  )
}

export default SearchInput