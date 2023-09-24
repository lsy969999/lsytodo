'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'

const page = () => {
    useEffect(()=>{
        window.addEventListener('flutterInAppWebViewPlatformReady', function(event){
            console.log('events', JSON.stringify(event))
        })
    }, [])
    return (
        <>
            <div>Flutter test</div>
            <Link href="/">back</Link>
        </>
    )
}

export default page