import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addToCategory, deleteACatogary, getAVideo, getAllCategory, updateCatogary } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';
import VedioCard from './VedioCard';


export default function Category() {
  const [show, setShow] = useState(false);
  const [CategoryName, setCategoryName] = useState("")
  const [category, setCatogary] = useState([])
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function to add category
  const handleAddCategory = async()=>{
    console.log(CategoryName);
    if(CategoryName){

      let body = {
        CategoryName,
        allvideos:[]

      }
      const response = await addToCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('catrgory added successfully')
        //to empty the state
        setCategoryName("")
        //close model
        handleClose()
      }
      else{
        toast.error('something went wrong. Please try Again')
      }
    }
    else{
      toast.warning('please fill the category name')
    }
  }

  //functions to get all catogarys
  const allCategory = async()=>{
    const{data} = await getAllCategory()
    // console.log(data);
    setCatogary(data)
  }

  console.log(category);

  //function to delete catogarty
  const removeCatogary =async(id)=>{
    await deleteACatogary(id)
    //to get the remaining catogary
    allCategory()
    }
  useEffect(()=>{
    allCategory()
  },[]) //category -cntnus


  //function to privent reload
  const dragOver = (e)=>{
    e.preventDefault()
  }

  //function for drope vedio card to catogary
  const vedioDrope = async(e,Catogaryid)=>{
    console.log(`Catogary in which the vedio card is droped :${Catogaryid}`);
    let vedioID = e.dataTransfer.getData("vedioID")
    console.log(vedioID);

    //api to get allvedio
    const {data} = await getAVideo(vedioID)
    console.log(data);

    let selectedCatogary = category.find((item)=>item?.id==Catogaryid)
    selectedCatogary.allvideos.push(data)
    console.log(selectedCatogary);

    await updateCatogary(Catogaryid,selectedCatogary)
    console.log(allCategory);

    allCategory() // all catogary

  }


  return (
    <>
    <div className='d-grid ms-3 '>
        <button onClick={handleShow} className='btn btn-warning' style={{width:'200px'}}>Add New Categary</button>
    </div>

    { category?.length>0?
    category?.map((item)=>(<div className='m-5 border border-secondary p-3 rounded' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>vedioDrope(e, item?.id)}>
    <div className='d-flex jestify-content-between align-items-center'>
      <h4>{item.CategoryName}</h4>
    
    <button onClick={()=>removeCatogary(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
    </div>
    <Row>
      <Col>
      {
        item?.allvideos.length>0?
        item?.allvideos.map((card)=>( <VedioCard displyVideo={card}/>))
        : <p>Nothing to display</p>
      }
      </Col>
    </Row>

  </div>)) 
      
    :
    <p className='fw-bolder fs-5 text-danger m-3'>nothing to display</p>
    }
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <i class="fa-solid fa-pencil text-warning me-2"> Add new category</i> </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <form className='border border-secondary rounded p-3'>
            <Form.Group className='mb-3' controlId='forBasicEmail' >
              <Form.Label>category name</Form.Label>
              <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type='text' placeholder='enter category name'></Form.Control>
            </Form.Group>
          </form>

          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    


    </>
  )
}

