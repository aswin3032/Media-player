import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getCategory, getUploadedVideoApi, updateCategory, uploadVideoApi } from '../services/allApi'


function View({uploadVideoStatus,setVideoDragAndRemoveStatus}) {
  const [Video,setVideo] = useState([])
  const [deleteVideo,setDeletevideo] = useState(false)
  
  const getVideos =async()=>{
    const response = await getUploadedVideoApi()
     const {data} = response
     //console.log(data);
     setVideo(data)
  }

  console.log(Video);
  const dragOver = (e)=>{
    e.preventDefault()
  }
  const videoDrop = async (e)=>{
     const {categoryId,videoId}= JSON.parse(e.dataTransfer.getData("dataShared"))
     console.log(categoryId,videoId);
 // get all category
  const {data}= await getCategory()
  // access the object with the category id from all category
  let selectedCategory = data.find((item)=>item.id==categoryId)
  // filtering the category object by removing the video object from the allvideos
    let  result = selectedCategory.allvideo.filter((item)=>item.id!=videoId)
    console.log(result);

    let newCategory = {
      category:selectedCategory.category,allvideo:result,id:categoryId
    }
    // updating the category
    await updateCategory(categoryId,newCategory)
    setVideoDragAndRemoveStatus(true)
    
   
   
  }

  useEffect(()=>{  // to handle side effect
    getVideos()
  setDeletevideo(false)

  },[uploadVideoStatus,deleteVideo]) // dependency [] - content will be fetched when the page loads
  return (
    <>
   <Row className='w-100' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
  { Video?.length>0?
   Video?.map((item)=>(
     <Col sm={12} md={6} lg={4} xl={3}>
     <VideoCard displayVideo={item} setDeletevideo={setDeletevideo}/>
   </Col>
  )):<p className='text-primary fs-3'>No Video Uploaded Yet</p>
  
    }
   </Row>
    </>
  )
}

export default View