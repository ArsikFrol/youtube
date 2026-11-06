'use client'

import { useSearch } from "@/hooks/useSearch"
import { cn } from "@/lib/utils"
import { Empty } from "./Empty"

type Props = {
    value: string,
    showList: boolean
}

export function List({ value, showList }: Props) {

    const { listSearch, error, loading } = useSearch(value)

    if (!showList || !listSearch) return
    if (listSearch.length === 0) return <Empty />

    return (
        <div className={cn(
            'z-20 bg-white shadow p-[20px] rounded-2xl w-[700px] h-[300px] overflow-y-auto',
            'flex flex-col gap-y-[20px]',
            'absolute top-[170px] left-0 -translate-x-[40px] -translate-y-1/2',
        )}>
            {
                listSearch.map((obj, i) => {
                    return (
                        <div key={i} className={cn(
                            'flex items-center justify-between',
                            'hover:scale-101 transition-transform duration-300 cursor-pointer',
                        )}>
                            <div className='text-[18px]'>{obj.name}</div>
                            <div className='w-[60px] h-[30px] bg-gray-400 rounded-[5px]'></div>
                        </div>
                    )
                })
            }
        </div>
    )
}