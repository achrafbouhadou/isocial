import React, { useEffect, useState } from 'react'
import Header from './layout/Header'
import SideBare from '../Component/SideBare'

import Post from '../Component/Post'
import ProfilSumary from '../Component/ProfilSumary'
import axios from 'axios'


export default function Collabs() {
    
const [posts ,setPostes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`/collab/collabs.php`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            const Data = response.data.postes;
            setPostes(Data)
            console.log(Data);
           
           
          } catch (error) {
            console.error('Error fetching user:', error);
          }
        };
    
        fetchData();
    },[] );

  return (
    <>
    <Header />
      
    <div className='flex mt-[41px] ml-[151px]'>
        <SideBare className={"w-1/4 mr-5 rounded-lg h-[566px] "} />
        <div className="w-1/2 ">
            
            
        {Array.isArray(posts) && posts.map(post => (
    <div className='mb-4' key={post.id}>
        <Post  
            isfrom={true}
            idpost={post.id}
            title={post.title} 
            iduser={post.id_user_request} 
            src={post.image_url} 
            text={post.description}
            idField={post.id_field}
            type={post.type}
            date={post.end_date}
        />
    </div>
))}

              
           
        </div>
        
        <ProfilSumary className={"w-1/3"}/>
    </div>
    </>
  )
}
