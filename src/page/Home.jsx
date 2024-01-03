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
        <div className="w-1/2 ">
            <AddPost />
            <div className='mb-4'>
                <Post  
                title={'Delivery Mobile App UI/UX Design. '} 
                name={"Achraf Bouhadou"} src={"https://bit.ly/dan-abramov"} 
                text={"I'm on the lookout for a skilled UX/UI designer who shares my enthusiasm for innovation. Someone who can breathe life into the app, making it not just functional but a joy to interact..."}
            />
            </div>
            <div className='mb-4'>
                <Post  
                title={'Delivery Mobile App UI/UX Design. '} 
                name={"Achraf Bouhadou"} src={"https://bit.ly/dan-abramov"} 
                text={"I'm on the lookout for a skilled UX/UI designer who shares my enthusiasm for innovation. Someone who can breathe life into the app, making it not just functional but a joy to interact..."}
            />
            </div>
            <div className='mb-4'>
                <Post  
                title={'Delivery Mobile App UI/UX Design. '} 
                name={"Achraf Bouhadou"} src={"https://bit.ly/dan-abramov"} 
                text={"I'm on the lookout for a skilled UX/UI designer who shares my enthusiasm for innovation. Someone who can breathe life into the app, making it not just functional but a joy to interact..."}
            />
            </div>
            <div className='mb-4'>
                <Post  
                title={'Delivery Mobile App UI/UX Design. '} 
                name={"Achraf Bouhadou"} src={"https://bit.ly/dan-abramov"} 
                text={"I'm on the lookout for a skilled UX/UI designer who shares my enthusiasm for innovation. Someone who can breathe life into the app, making it not just functional but a joy to interact..."}
            />
            </div>
            
        </div>
        <ProfilSumary className={"w-1/3"}/>
    </div>
    </>
  )
}
