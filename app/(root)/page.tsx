import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <p>HOme</p>
      
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Home