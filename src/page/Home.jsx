import React, { useRef,useContext } from 'react'
import Header from './layout/Header'
import SideBare from '../Component/SideBare'
import AddPost from '../Component/AddPost'
import Post from '../Component/Post'
import ProfilSumary from '../Component/ProfilSumary'
import InputText from '../Component/InputText'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
  import {
    FormControl,
    FormLabel,
  FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Textarea
  } from '@chakra-ui/react'


export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isLoggedIn } = useContext(AuthContext); 
    const navigate = useNavigate();
  const title = useRef();
  const description = useRef();
  const type = useRef();
  const filed = useRef();
  const end_date = useRef();
  
  const handleCollab = async()=>{
    if (!isLoggedIn) {
        navigate('/login'); 
        return;
    }

    const postData = {
        title:title.current.value,
        description:description.current.value,
        type:type.current.value,
        filed:filed.current.value,
        end_date:end_date.current.value,
      }
      try {
        const addPostApi = 'post/addPost.php'
        const token = localStorage.getItem('token');
        const response = await axios.post(addPostApi, postData, {
            headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
        console.log(error)
      }
  } 

  return (
    <>
    <Header />
      <Modal
       
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ask for Collab</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Project Title</FormLabel>
              <Input ref={title}  placeholder='Project Title' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Project Description</FormLabel>
              <Textarea ref={description} placeholder='Project Description' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Field your looking for</FormLabel>
              <select required ref={filed}  defaultValue="" id="field" className="bg-gray-100  text-gray-700  rounded-xl focus:outline-none focus:shadow-outline block w-full py-3 px-3 ">
                <option value="">Field</option>
                <option value="1">Full-stack developer</option>
                <option value="2">graphic designer</option>
                <option value="3">Marketing</option>
                <option value="4">Comptabel</option>
              </select>
            </FormControl>
            <FormControl mt={4}>
             
              <div className='flex '>
             
                        <div className=" mt-2 mr-2">
                        <FormLabel>Project Deadline</FormLabel>
                            <InputText  
                            defaultValue=""
                            id="birday" 
                            type="date" 
                            placeholder="MM/DD/YYYY"
                            ref={end_date}
                            required
                            />
                           
                        </div>
                    <div className='mt-2 w-full '>
                    <FormLabel>Project type</FormLabel>
                    <select required  ref={type} defaultValue="" id="City" className="bg-gray-100 w-full  text-gray-700  rounded-xl focus:outline-none focus:shadow-outline block py-3 px-3 ">
                        <option value="">PFE</option>
                        <option value="ma">Projet personnele</option>
                        <option value="ra">UFM</option>
                        
                        </select>
                       
                    </div>
                        
                        </div>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleCollab} colorScheme='blue' mr={3}>
              Collab
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    <div className='flex mt-[41px] ml-[151px]'>
        <SideBare className={"w-1/4 mr-5 rounded-lg h-[566px] "} />
        <div className="w-1/2 ">
            <AddPost onAddPost={onOpen} />
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
