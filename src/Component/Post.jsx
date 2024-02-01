import React, { useEffect,useState } from 'react'
import UserProfilQuic from './UserProfilQuic'
import Link from '../Component/Link'
import Button from './Button/Button'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'



export default function Post({idpost,title , iduser , src,text,idField,type ,date , isfrom=false , isNotAccpted=false}) {
  const [user, setUser] = useState({});
  const [field, setField] = useState({});
  const toast = useToast()
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`/user/getuser.php?userId=${iduser}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const userData = response.data.user;
      
          setUser(userData)
         
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };
  
      fetchUserData();
  }, [iduser]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/field/getfiled.php?fieldId=${idField}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const Data = response.data.filed;
    
        setField(Data)
       
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchData();
}, [idField]);

   // useEffect to log user when it's updated
   useEffect(() => {
    console.log(field);
   
  }, [field]);
  const handleColab = async ()=>{
    const token = localStorage.getItem('token');
    const response = await axios.get(`/collab/asskcolab.php?postId=${idpost}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if(!response.data.success ){
      toast({
        title: response.data.message,
        status: 'info',
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

  }
  return (
    <div className='relative py-4 px-5 mt-3 bg-gray-50 rounded-lg'>
    {user && Object.keys(user).length !== 0 && field && Object.keys(field).length !== 0 && (
        <>
          <h1 className='Inter-font font-bold text-2xl mb-3'>{title}</h1>
          <UserProfilQuic name={user.fr_name + ' ' + user.ls_name} src={src} isFromPost={true} specialite={''} lokinFor={field.label} ecole={user.school} />
          <p className='w-full'>
            {text}
          </p>
          <Link title='more' link={'#'} className='orange-color underline' />
          <div className='flex mb-3 mt-3'>
            <div className='flex mr-16 '>
              <h3 className='text-gray-500 font-normal text-sm mr-3'>{type}</h3>
              <h3 className='text-gray-500 font-normal text-sm '>{date}</h3>
            </div>
            <div className='flex'>
              <h3 className='text-gray-500 font-normal text-sm mr-3 '>{field.label}</h3>
              <h3 className='text-gray-500 font-normal text-sm '>{user.school}</h3>
            </div>
          </div>
          <div className='flex justify-between '>
            <h3 className='text-gray-500 font-normal text-sm '>Posted 21 hours ago</h3>
            {!isfrom && !isNotAccpted ? (
                <Button className={'background-orange'} title={'Collab'} onCollab={handleColab} />
            ) : null}
           
          </div>
        </>
      )}
    </div>
  )
}
