'use client'

import { Bell, Plus, UserCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";

export default function Profile() {

    const clickCreate = () => {

    }

    const clickBell = () => {

    }

    const clickProfile = () => {

    }

    return (
        <div className="flex items-center gap-x-[25px]">
            <div className={cn(
                'flex items-center gap-x-[5px] bg-gray-100 rounded-2xl py-[10px] px-[20px]',
                'hover:bg-gray-200 transition-all duration-300 cursor-pointer'
            )} onClick={clickCreate} >
                <Plus />
                <div className=''>Create</div>
            </div>
            <Bell size={30} className="hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={clickBell} />
            <UserCircle2 size={30} className="hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={clickProfile} />
        </div>
    )
}