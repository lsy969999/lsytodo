'use client'

import React from 'react'
import { resetDatabase } from '../models/db'

const ResetDatabaseButton = () => {
  return (
    <button
        onClick={()=>{
            resetDatabase()
        }}
    >
        Reset Database
    </button>
  )
}

export default ResetDatabaseButton