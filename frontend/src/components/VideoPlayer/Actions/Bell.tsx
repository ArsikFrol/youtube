'use client'

import { BellOff, BellRing, UserRoundX, BellIcon, ChevronDown } from "lucide-react";
import React, { JSX, useRef, useState } from "react";
import { useClickAway } from "react-use";

import { cn } from "@/lib/utils";
import { TNotification } from "@/types/video";


type Props = {
    notification: TNotification | null,
    subscriptionId: string | null

    toggleSuscribe: () => Promise<void>,
    changeNotification: (value: TNotification) => Promise<void>
}

type TNotificationAction = TNotification | 'UNSUBSCRIBE'

type TElemBell = {
    id: number,
    elem: JSX.Element,
    text: string,
    action: TNotificationAction
}

const listBell: TElemBell[] = [
    { id: 1, elem: <BellRing size={30} strokeWidth={1.5} />, text: 'All', action: 'ALL' },
    { id: 2, elem: <BellIcon size={30} strokeWidth={1.5} />, text: 'Personalized', action: 'PERSONALIZED' },
    { id: 3, elem: <BellOff size={30} strokeWidth={1.5} />, text: 'None', action: 'NONE' },
    { id: 4, elem: <UserRoundX size={30} strokeWidth={1.5} />, text: 'Unsubscribe', action: 'UNSUBSCRIBE' },
]

export default function Bell(props: Props) {
    const [showBell, setShowBell] = useState<boolean>(false)

    const ref = useRef<HTMLDivElement>(null)

    useClickAway(ref, () => {
        setShowBell(false)
    })

    const handleClick = (action: TNotificationAction) => {
        setShowBell(false)
        switch (action) {
            case 'ALL':
                props.changeNotification('ALL')
                break
            case 'PERSONALIZED':
                props.changeNotification('PERSONALIZED')
                break
            case 'NONE':
                props.changeNotification('NONE')
                break
            case 'UNSUBSCRIBE':
                props.toggleSuscribe()
                break
        }
    }

    return (
        <div className='relative' ref={ref}>
            <div className={cn(
                'bg-gray-100 rounded-2xl flex items-center gap-x-[15px] py-[7px] px-[15px]',
                'hover:scale-101 transition-transform duration-300 cursor-pointer'
            )} onClick={() => setShowBell(true)}>
                {
                    listBell.map((obj, index) => {
                        return (
                            <div key={index} className={cn(
                                props.notification === obj.action ? '' : 'hidden'
                            )}>{obj.elem}</div>
                        )
                    })
                }
                <ChevronDown size={30} strokeWidth={1.5} />
            </div>
            {showBell &&
                <div className={cn(
                    'absolute right-[-160px] bottom-0 bg-gray-100 rounded-2xl flex flex-col z-10'
                )}>
                    {
                        listBell.map((obj, index) => {
                            return (
                                <div key={index} className={cn(
                                    'flex items-center gap-x-[10px] p-[7px]',
                                    props.notification === obj.action
                                        ? 'bg-gray-200' : 'hover:scale-101 transition-transform duration-300 cursor-pointer',
                                    obj.text === 'All' && 'rounded-t-2xl',
                                    obj.text === 'Unsubscribe' && 'rounded-b-2xl'
                                )} onClick={() => handleClick(obj.action)}>
                                    {React.cloneElement(obj.elem, {
                                        className: ''
                                    })}
                                    {obj.text}
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}