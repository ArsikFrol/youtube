'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import { useClickAway } from 'react-use'
import { useRef, useState } from 'react'

import logo from '../../../public/logo.webp'
import { useTypedRouter } from '@/hooks/useTypedRouter'
import Navigation from '../Navigation/Navigation'

export default function Logo() {
    const router = useTypedRouter()

    const [showNav, setShowNav] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const clickMenu = () => setShowNav(!showNav)

    useClickAway(ref, () => setShowNav(false))

    return (
        <>
            <div className='flex items-center gap-x-[30px]'>
                <Menu className='hover:scale-110 transition-transform duration-300 cursor-pointer'
                    onClick={clickMenu} />
                <Image src={logo} alt='' width={95} height={21} draggable='false'
                    className='hover:rotate-1 transition-transform duration-300 cursor-pointer'
                    onClick={() => router.push('/')} />
            </div>
            {showNav &&
                <div className='fixed top-0 left-0 w-full h-screen bg-black/50 z-50'>
                    <div className='absolute left-0 top-[0px] bg-white' ref={ref}>
                        <div className='flex items-center gap-x-[30px] px-[30px] my-[20px]'>
                            <Menu className='hover:scale-110 transition-transform duration-300 cursor-pointer'
                                onClick={clickMenu} />
                            <Image src={logo} alt='' width={95} height={21} draggable='false'
                                className='hover:rotate-1 transition-transform duration-300 cursor-pointer'
                                onClick={() => router.push('/')} />
                        </div>
                        <div className='mx-[20px]'>
                            <Navigation popUpWindow />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}