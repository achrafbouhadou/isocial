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
    <div className='flex mt-[41px] ml-[151px]'>
        <SideBare className={"w-1/4 mr-5 rounded-lg h-[566px] "} />
        <div className="w-1/3">
            <AddPost />
            <Post />
        </div>
        <ProfilSumary className={"w-1/3"}/>
    </div>
    </>
  )
}
