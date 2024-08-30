import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-black max-w-screen overflow-x-hidden min-h-screen flex text-[#FAF9F6] items-center justify-start' >
      <h1
      className='text-[7.5rem] font-bold leading-none tracking-tighter text-center'
      >
        Vi er et web-og app designfirma

      </h1>


    </div>
  )
}
