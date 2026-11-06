'use client'

import { useState } from "react"

import Header from "../Header/Header"
import ListVideos from "../ListVideos/ListVideos"
import Navigation from "../Navigation/Navigation"

export default function MainPage() {
    return (
        <>
            <Header />
            <div className='grid grid-cols-[200px_auto] gap-x-[10px]'>
                <Navigation />
                <ListVideos />
            </div>
        </>
    )
}