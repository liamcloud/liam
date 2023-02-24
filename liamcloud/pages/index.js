import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import Link from 'next/link'
import liam from '../public/liam.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div></div>
        <div className="grid">
          <div>
            <h1>Liam Cloud</h1>
          </div>
        </div>
        <div className="socials">
          <Link
            href="https://www.twitter.com/imliamcloud"
            target="_blank"
            className="socialEl"
          >
            <AiOutlineTwitter />
          </Link>
          <Link
            href="https://github.com/liamcloud"
            target="_blank"
            className="socialEl"
          >
            <AiFillGithub />
          </Link>
          <Link
            href="https://github.com/liamcloud"
            target="_blank"
            className="socialEl"
          >
            <FaTelegramPlane />
          </Link>
        </div>
      </main>
    </>
  )
}
