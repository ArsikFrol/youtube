import { cn } from "@/lib/utils"
import { TElemSubscription } from "./Navigation"
import { TypeRoutes } from "@/hooks/useTypedRouter"
import { UserCircle2Icon } from "lucide-react"

type Props = {
    obj: TElemSubscription,

    clickSubscription: (link: TypeRoutes) => void
}

export default function ElemSubscription(props: Props) {
    return (
        <>
            <div className={cn(
                'group flex items-center gap-x-[15px] px-[10px] py-[15px]',
                'hover:bg-gray-50 hover:rounded-2xl cursor-pointer'
            )} onClick={() => props.clickSubscription(props.obj.link)}>
                <UserCircle2Icon size={30} strokeWidth={1} className="group-hover:scale-110 transition-transform duration-300" />
                <div>{props.obj.nameProfile}</div>
            </div>
        </>
    )
}