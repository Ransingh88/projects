import React, { useEffect, useState } from 'react'
import { Links } from '../components/Links'
import { useDebounce } from 'use-debounce'
import {useResultContext} from '../contexts/ResultContextProvider'

const Search = () => {

    const [text, setText] = useState()
    const { setSearchTerm } = useResultContext('Delhi India');
    const [debouncedValue] = useDebounce(text, 300)


    useEffect(() => {
            if(debouncedValue) setSearchTerm(debouncedValue)
    },[debouncedValue])

    return (
        <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
           <input type="text" value={text} className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-md p-6 text-black hover:shadow-md outline-none" placeholder="Search..." onChange={(e)=> setText(e.target.value)} />
            {!text && (
                <button type="button" className="absolute top-1.5 right-4 text-2xl text-gry-500 font-medium" onClick={()=>setText('')}>x</button>
           )}
            <Links/>
        </div>
    )
}

export  {Search}
