import React from "react"

import { cn } from "@/lib/utils"
import { TActiveElemNav, TElemNav } from "./Navigation"
import { TypeRoutes } from "@/hooks/useTypedRouter"

type Props = {
    obj: TElemNav,

    activeELemNav: TActiveElemNav,
    clickElem: (obj: { text: TActiveElemNav, link: TypeRoutes }) => void
}

export default function ElemNav(props: Props) {
    return (
        <div className={cn(
            'group flex items-center gap-x-[20px] px-[10px] py-[15px]',
            props.activeELemNav === props.obj.text && [
                'font-medium bg-gray-100 rounded-2xl'
            ],
            props.activeELemNav !== props.obj.text && [
                'hover:bg-gray-50 hover:rounded-2xl cursor-pointer'
            ]
        )} onClick={() => props.clickElem(props.obj)}>
            {React.cloneElement(props.obj.elem, {
                className: cn(
                    props.activeELemNav !== props.obj.text && [
                        'group-hover:scale-105 transition-all duration-300'
                    ]
                )
            })}

            <div>{props.obj.text}</div>
        </div>
    )
}