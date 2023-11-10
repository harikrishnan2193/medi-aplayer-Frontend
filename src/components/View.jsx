import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VedioCard from './VedioCard'
import { getAllVideos } from '../services/allAPI'

export default function View({uploadVideoStatus}) {
  const [allVideo , setAllVideo] = useState([])

  const [deleteVedioStatus ,setDeleteVedioStatus]= useState(false)// state for automaticaly refresh after detete

  const getAllUploadeVideos = async()=>{
    const response = await getAllVideos()
    // console.log(response);
    const {data} = response
    // console.log(data);
    setAllVideo(data)
  }

  console.log(allVideo);


  useEffect(()=>{
    getAllUploadeVideos()
    setDeleteVedioStatus(false)
  },[uploadVideoStatus, deleteVedioStatus])

  return (
    <>
     <Row>
       { allVideo.length>0?
       allVideo.map((video)=>(<Col sm={12} md={6} lg={4} xl={3}>
        <VedioCard displyVideo={video} setDeleteVedioStatus={setDeleteVedioStatus}/>
      </Col>))
        :
        <p>Nothing to display</p>
        }
     </Row>
    </> 
  )
}
