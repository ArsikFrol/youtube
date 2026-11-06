'use client'

import { Bookmark, Ellipsis } from "lucide-react"

import Reaction from "./Reaction"
import Profile from "./Profile"
import Share from "./Share/Share"
import { TGetVideo } from "@/types/video"

type Props = {
    objVideo: TGetVideo
}

export default function Actions(props: Props) {
    return (
        <div className='flex justify-between items-center mb-[20px]'>
            <Profile objVideo={props.objVideo} />
            <div className='flex items-center gap-x-[20px]'>
                <Reaction objVideo={props.objVideo} />
                <Share objVideo={props.objVideo} />
                <div className='bg-gray-100 rounded-2xl py-[7px] px-[15px] flex items-center gap-x-[10px]'>
                    <Bookmark size={30} strokeWidth={1.5} />
                    <div className=''>Save</div>
                </div>
                <div className='bg-gray-100 rounded-2xl py-[7px] px-[10px]'>
                    <Ellipsis size={30} strokeWidth={1.5} />
                </div>
            </div>
        </div>
    )
}