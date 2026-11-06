

import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef } from "react"
import toast from "react-hot-toast"

type Props = {
    isCopy: boolean,
    setIsCopy: (value: boolean) => void
}

type TElemMessenger = {
    id: number,
    name: string,
    logo: string
}

const listElemMessenger: TElemMessenger[] = [
    { id: 1, name: 'Vk', logo: '' },
    { id: 2, name: 'Telegram', logo: '' },
    { id: 3, name: 'Messages', logo: '' },
    { id: 4, name: 'WhatsApp', logo: '' },
    { id: 5, name: 'X', logo: '' },
    { id: 6, name: 'Facebook', logo: '' },
]

export default function PopUpWindow(props: Props) {

    const clickCopy = () => {
        props.setIsCopy(true)

        if (!props.isCopy) toast.success('Ссылка скопирована')
    }

    return (
        <div className={cn(
            'absolute left-[-450px] bottom-[50px] p-[10px]',
            'bg-gray-100 rounded-t-2xl rounded-l-2xl'
        )}>
            <div className='text-[18px] text-center mb-[10px]'>Share in a post</div>
            <div className={cn(
                'flex items-center justify-between w-[500px] my-[20px]',
            )}>
                {
                    listElemMessenger.map((obj, index) => {
                        return (
                            <div key={index} className={cn(
                                'flex flex-col items-center gap-y-[5px]',
                                'hover:scale-101 transition-transform duration-300 cursor-pointer'
                            )}>
                                <div className='w-[50px] h-[50px] rounded-2xl bg-gray-200'></div>
                                <div className='font-light'>{obj.name}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={cn(
                'flex items-center gap-x-[10px] p-[10px] border rounded-2xl',
                props.isCopy ? 'bg-blue-100 border-gray-400' : 'group border-gray-200 cursor-pointer'
            )} onClick={clickCopy}>
                <div className={cn(
                    'w-[400px] select-none transition-transform duration-500'
                )}>https://youtu.be/paQhTFON5b0?si=gZLwJDdT1QjHGiTS</div>
                <div className={cn(
                    'border rounded-2xl px-[15px] py-[5px] transition-transform duration-300',
                    props.isCopy
                        ? 'border-gray-400'
                        : 'border-gray-200 group-hover:scale-107 cursor-pointer'
                )}>Copy</div>
            </div>
        </div>
    )
}