'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
  return (
    <main> 
        <button onClick={()=>router.back()}>back</button>
        <div>page</div>
    </main>
    
  )
}

export default page