import { cn } from "@/lib/utils"

type Props = {

}

export function Empty(props: Props) {
    return (
        <div className={cn(
            "z-20 h-[300px] w-[700px] bg-white shadow p-[20px] rounded-2xl",
            'flex items-center justify-center text-[22px]',
            'absolute top-[170px] left-0 -translate-x-[40px] -translate-y-1/2'
        )}>
            Список пуст
        </div>
    )
}