'use client'

import { ChevronDown, Clapperboard, Clock, Download, House, ListVideo, PcCase, RotateCcwClock, SquareUserRound, ThumbsUp } from "lucide-react"
import { useCallback, useState } from "react"
import { JSX } from "react/jsx-runtime"

import { TypeRoutes, useTypedRouter } from "@/hooks/useTypedRouter"
import ElemNav from "./ElemNav"
import ElemSubscription from "./ElemSubscription"
import { cn } from "@/lib/utils"

type Props = {
    popUpWindow?: boolean
}

export type TActiveElemNav = | 'Home' | 'Shorts' | 'Your channel' | 'History' | 'Playlists' | 'Watch later' | 'Liked videos' | 'Your videos' | 'Downloads'

export type TElemNav = {
    id: number,
    elem: JSX.Element,
    text: TActiveElemNav,
    link: TypeRoutes
}

const listElem: TElemNav[] = [
    { id: 1, elem: <House size={24} />, text: 'Home', link: '/' },
    { id: 2, elem: <PcCase size={24} />, text: 'Shorts', link: '/shorts' },
    { id: 3, elem: <SquareUserRound size={24} />, text: 'Your channel', link: '/your-channel' },
    { id: 4, elem: <RotateCcwClock size={24} />, text: 'History', link: '/history' },
    { id: 5, elem: <ListVideo size={24} />, text: 'Playlists', link: '/playlists' },
    { id: 6, elem: <Clock size={24} />, text: 'Watch later', link: '/watch-later' },
    { id: 7, elem: <ThumbsUp size={24} />, text: 'Liked videos', link: '/liked-videos' },
    { id: 8, elem: <Clapperboard size={24} />, text: 'Your videos', link: '/your-videos' },
    { id: 9, elem: <Download size={24} />, text: 'Downloads', link: '/downloads' }
]

export type TElemSubscription = {
    id: number,
    nameProfile: string,
    avatar: string,
    link: TypeRoutes
}

const listSubscriptions: TElemSubscription[] = [
    { id: 1, nameProfile: 'MrBeast', avatar: '', link: '/@mrbeast' },
    { id: 2, nameProfile: 'PewDiePie', avatar: '', link: '/@pewdiepie' },
    { id: 3, nameProfile: 'Kurzgesagt', avatar: '', link: '/@kurzgesagt' },
    { id: 4, nameProfile: 'Veritasium', avatar: '', link: '/@veritasium' },
    { id: 5, nameProfile: 'Markiplier', avatar: '', link: '/@markiplier' },
    { id: 6, nameProfile: 'Jacksepticeye', avatar: '', link: '/@jacksepticeye' },
    { id: 7, nameProfile: 'Dude Perfect', avatar: '', link: '/@dudeperfect' },
    { id: 8, nameProfile: 'SmarterEveryDay', avatar: '', link: '/@smartereveryday' },
    { id: 9, nameProfile: 'Tom Scott', avatar: '', link: '/@tomscott' },
    { id: 10, nameProfile: 'TechLinked', avatar: '', link: '/@techlinked' },
]

export default function Navigation(props: Props) {
    const router = useTypedRouter()

    const [activeELemNav, setActiveELemNav] = useState<TActiveElemNav>('Home')
    const [showAllSubsc, setShowAllSubsc] = useState<boolean>(false)

    const clickElemNav = useCallback((obj: { text: TActiveElemNav, link: TypeRoutes }) => {
        setActiveELemNav(obj.text)
        router.push(obj.link)
    }, [])

    const clickSubscription = useCallback((link: TypeRoutes) => {
        router.push(link)
    }, [])

    return (
        <div className={cn(
            "flex flex-col  overflow-y-auto w-[200px]",
            props.popUpWindow ? 'h-[calc(100vh-65px)] pt-[10px]' : 'h-[calc(100vh-75px)] mt-[10px]'
        )}>
            <div className='flex flex-col gap-y-[5px] border-b border-gray-100 pb-[10px]'>
                {
                    listElem.slice(0, 2).map((obj, index) => {
                        return (
                            <ElemNav key={index} obj={obj} activeELemNav={activeELemNav} clickElem={clickElemNav} />
                        )
                    })
                }
            </div>
            <div className='flex flex-col gap-y-[5px] border-b border-gray-100 py-[10px]'>
                {
                    listElem.slice(2, 9).map((obj, index) => {
                        return (
                            <ElemNav key={index} activeELemNav={activeELemNav} obj={obj} clickElem={clickElemNav} />
                        )
                    })
                }
            </div>
            <div className=''>
                <div className='mt-[10px]'>Subscritions</div>
                <div className=''>
                    {
                        listSubscriptions.slice(0, showAllSubsc ? listSubscriptions.length : 5).map((obj, index) => {
                            return (
                                <ElemSubscription key={index} obj={obj} clickSubscription={clickSubscription} />
                            )
                        })
                    }
                </div>
                <div className={cn(
                    'group flex justify-center items-center gap-x-[10px] cursor-pointer py-[10px]',
                    'hover:bg-gray-50 hover:rounded-2xl'
                )} onClick={() => setShowAllSubsc(!showAllSubsc)}>
                    <ChevronDown size={24} className={cn(
                        showAllSubsc ? 'rotate-180' : '',
                        "group-hover:scale-110 transition-transform duration-300"
                    )} />
                    <div className=''>Show more</div>
                </div>
            </div>
        </div>
    )
}