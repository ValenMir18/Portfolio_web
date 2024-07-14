'use client'

import { gsap } from "gsap"
import React, { useRef, useEffect } from "react"
import { moveCursor } from "readline"


export default function CustomCursor(){

    
    

    const cursorRef = useRef<HTMLDivElement>(null)
    const cursorRef2 = useRef<HTMLDivElement>(null)

    const moveCursor = (e: MouseEvent): void => {
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
        });
        gsap.to(cursorRef2.current, {
            x: e.clientX,
            y: e.clientY,
        })
    }

    useEffect(() => {
        gsap.set(cursorRef, {
            xPercent:100,
            yPercent: 100
        })
        gsap.set(cursorRef2, {
            xPercent: -20,
            yPercent: -20
        })
        window.addEventListener('mousemove', moveCursor )
    }, [])


    return (
        <div>
            <div ref={cursorRef} className="w-[6px] h-[6px] bg-white rounded-[50%] z-[999] fixed"></div>
            <div ref={cursorRef2} className=" w-[30px] h-[30px] bg-transparent border-solid border-2 border-white rounded-[50%] z-[999]"></div>
        </div>
    )
}