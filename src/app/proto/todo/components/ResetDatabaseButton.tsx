import React from 'react'
import { resetDatabase } from '../models/db'

const ResetDatabaseButton = () => {
  return (
    <button onClick={()=>resetDatabase()}>
        RESET
    </button>
  )
}

export default ResetDatabaseButton