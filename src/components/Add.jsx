import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [videos, setVideos] =useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })
  console.log(videos);

  const embedVideoLink = (e)=>{
    const {value} = e.target
    console.log(value.slice(-11));
    const link =`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideos({...videos, embedLink:link})
  }
  const handleUpload = async ()=>{
    const {id, caption, url, embedLink}= videos
    if(!id || !caption || !url || !embedLink){
      toast.warning('please fill all the fields')
    }
    else{
      const response = await uploadAllVideo(videos)
      console.log(response);

      if(response.status>=200 && response.status<300){
        setUploadVideoStatus(response.data)
        toast.success(`${response.data.caption} is successfully Uploaded`)
        // make state into initial value
        setVideos({
          id:"",
          caption:"",
          url:"",
          embedLink:""
        })
        // to close the model
        handleClose()
      }
      else{
        console.log(response);
        toast.error('something went wrong please try again')
      }
    }
  }



  return (
    <>
    <div className='d-flex align-items-center'>
        <h5>Upload New video</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film "></i> Upload videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following detils</p>
          <form className='border border-secondary rounded p-2' action="">
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Control onChange={(e)=>setVideos({...videos,id:e.target.value})} type="text" placeholder="Enter video Id" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={(e)=>setVideos({...videos,caption:e.target.value})} type="text" placeholder="Enter video caption" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={(e)=>setVideos({...videos,url:e.target.value})} type="text" placeholder="Enter video image url" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onClick={embedVideoLink} type="text" placeholder="youtub video link" />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cansel
          </Button>
          <Button variant="warning" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}


