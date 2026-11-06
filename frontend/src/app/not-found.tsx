'use client'

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import notFound from '../../public/404.png'

import Header from "@/components/Header/Header";
import { cn } from "@/lib/utils";
import { useTypedRouter } from "@/hooks/useTypedRouter";

export default function NotFound() {
    const router = useTypedRouter()

    return (
        <>
            <Header />
            <div className="h-[calc(100vh-64px)] flex items-center justify-center flex-col gap-y-[50px]">
                <div className='text-[30px] font-light'>
                    Такой страницы не найдено :(
                </div>
                <Image src={notFound} alt='' draggable='false' />
                <div className={cn(
                    'group w-[350px] h-[50px] rounded-2xl mx-auto flex items-center justify-center gap-x-[10px]',
                    'bg-blue-500 hover:translate-y-[-2px] transition-transform duration-300 cursor-pointer'
                )} onClick={() => router.push('/')}>
                    <div className='text-[18px] text-white'>
                        Вернуться на главную
                    </div>
                    <ArrowRight size={20} color="white"
                        className="group-hover:translate-x-[5px] transition-transform duration-300" />
                </div>
            </div>
        </>
    )
}