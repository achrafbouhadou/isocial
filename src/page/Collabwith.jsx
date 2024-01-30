import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import SideBare from '../Component/SideBare'
import Header from './layout/Header'
import ProfilSumary from '../Component/ProfilSumary'
import { Avatar } from '@chakra-ui/react'
import { data } from 'autoprefixer'
import { useToast } from '@chakra-ui/react'




function Collabwith() {
    const [collabs, setcollabs] = useState([]);
    const toast = useToast()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem('token');
            const response = await axios.get('/collab/getAskCollab.php', {
              headers: { Authorization: `Bearer ${token}` },
            });
            const Data = response.data;
            console.log(Data);
            setcollabs(response.data.collabs)
        
      
           
          } catch (error) {
            console.error('Error fetching user:', error);
          }
        };
    
        fetchData();
    }, []);

    const handleColabaccept = async (id,idpost)=>{
        const data = {
            userid:id,
            idpost:idpost
        }
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('/collab/acceptedColab.php',data, {
              headers: { Authorization: `Bearer ${token}` },
            } );
            const Data = response.data;
            if(!response.data.success ){
                toast({
                  title: response.data.message,
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                })
               }else{
                toast({
                  title: response.data.message,
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
               }
        
      
           
          } catch (error) {
            console.error('Error fetching user:', error);
          }
    }
  return (
    <>
    <Header />
    <div className='flex mt-[41px] ml-[151px]'>
        <SideBare className={"w-1/4 mr-5 rounded-lg h-[566px] "} />
        <div className="w-1/2 flex flex-col items-center ">
            {collabs && collabs.length > 0 ? collabs.map(collab => (
                <div key={collab.id} className="w-full max-w-sm mt-3 bg-white border border-gray-200 rounded-lg shadow">
                    <div className="flex flex-col items-center pb-10">
                        <Avatar className='mt-3' size="lg" name={`${collab.fr_name} ${collab.ls_name}`} />
                        <h5 className="mb-1 text-xl font-medium text-gray-900">{`${collab.fr_name} ${collab.ls_name}`}</h5>
                        <span className="text-sm text-gray-500 ">collabe Title : {collab.title}</span>
                        <div className="flex mt-4 md:mt-6">
                            <button onClick={() => handleColabaccept(collab.id_user_ask, collab.id_post)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Collab</button>
                            <button  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  ms-3">View profil</button>
                        </div>
                    </div>
                </div>
            )) : <p>No collabs found.</p>}
        </div>
        <ProfilSumary className={"w-1/3"} />
    </div>
</>
  )
}

export default Collabwith