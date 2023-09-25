import React from 'react'
import Header from './components/Header'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <header>
            <Header></Header>
        </header>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout