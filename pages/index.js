import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Typography } from '@mui/material'
import SsrDynamic from '../components/SsrDynamic'
import Navbar from '../components/Navbar'
import Body from '../components/main/Body'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
    {/* <SearchBar/> */}
    <SsrDynamic/>
    <Navbar/>
    <Body/>
    </>
  )
}
