import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Page = async() => {

  return (
    <>
    <UserButton/>
    <Link href="/browse">Browse</Link>
    <Link href="/dashboard">Dashboard</Link>
    </>
  )
}

export default Page