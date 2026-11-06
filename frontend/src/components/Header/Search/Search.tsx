'use client'

import { SearchIcon } from "lucide-react"
import { useRef, useState } from "react"
import { useClickAway } from "react-use"

import { cn } from "@/lib/utils"
import { List } from "./List"

export default function Search() {

    const [value, setValue] = useState<string>('')
    const [showList, setShowList] = useState<boolean>(false)

    const ref = useRef<HTMLDivElement>(null)

    useClickAway(ref, () => setShowList(false))

    return (
        <div className="flex flex-col">
            <div className={cn(
                "relative flex items-center border border-gray-300 rounded-2xl",
                'focus-within:border-gray-400'
            )} ref={ref}>
                <input value={value} onChange={e => setValue(e.target.value)}
                    spellCheck='false'
                    className={cn(
                        'w-[550px] h-[40px] px-[20px]',
                        'focus:outline-none'
                    )} placeholder='Search' onClick={() => setShowList(true)}
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                            e.currentTarget.blur()
                            setShowList(false)
                        }
                    }} />
                <div className={cn(
                    'group bg-gray-100 w-[60px] h-[40px] flex items-center justify-center rounded-r-2xl',
                    'border-l border-gray-300 cursor-pointer',
                    'hover:bg-gray-200 transition-colors'
                )}>
                    <SearchIcon className="group-hover:scale-110 transition-transform duration-300" />
                </div>
            </div>
            <div className='relative w-[610px]'>
                <List value={value} showList={showList} />
            </div>
        </div>
    )
}