import React from 'react'
import Header from './layout/Header'
import SideBare from '../Component/SideBare'
import AddPost from '../Component/AddPost'
import Post from '../Component/Post'
import ProfilSumary from '../Component/ProfilSumary'


export default function Home() {
  return (
    <>
    <Header />
    <div>
        <SideBare />
        <div>
            <AddPost />
            <Post />
        </div>
        <ProfilSumary />
    </div>
    </>
  )
}
