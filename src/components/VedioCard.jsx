import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteAVideo } from '../services/allAPI';
import Modal from 'react-bootstrap/Modal';



export default function VedioCard({displyVideo,setDeleteVedioStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)

    const {caption ,embedLink} = displyVideo
    const today = new Date
    let timestamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit', day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamp);
    
    let videoDetails = {
      caption, embedLink,timestamp
    }

    const response = await addToHistory(videoDetails)
    console.log(response);

  }

  const removeVedio = async(id)=>{
    const response= await deleteAVideo(id)
    setDeleteVedioStatus(true)

  }

  //function to drage a perticuler card

  const drageStart = (e,id)=>{
    console.log(`card that dragged is : ${id}`);
    //to transfer id from vediocard to catogary
    e.dataTransfer.setData("vedioID",id)
  }

  
  return (
    <>
     <Card style={{ width: '100%' , height:'370px'}} className='mb-4' draggable onDragStart={(e)=>drageStart(e,displyVideo?.id)}>
      <Card.Img onClick={handleShow} height={'200px'} variant="top" src={displyVideo.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>Card Title</Card.Title>
         <h6>{displyVideo.caption}</h6>
        <button onClick={()=>removeVedio(displyVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displyVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${displyVideo.embedLink}?autoplay=1`} title={displyVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>


    </>
  )
}

