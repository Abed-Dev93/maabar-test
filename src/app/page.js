"use client"

import { useState, useEffect } from "react"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import Loading from "./layouts/Loading"
import Podcast from "./components/Podcast"
import Announcement from "./components/Announcement"
import Release from "./components/Release"
import MaabarInfo from "./components/MaabarInfo"
import Project from "./components/Project"

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Header />
      <main className="flex flex-col gap-7 items-center">
        <Podcast />
        <Announcement />
        <Release />
        <MaabarInfo />
        <Project />
      </main>
      <Footer />
    </>
  );
}
