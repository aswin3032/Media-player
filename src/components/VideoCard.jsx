import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Addhistory, deleteVideo } from '../services/allApi';



function VideoCard({displayVideo,setDeletevideo,ispresent}) {
  // console.log(displayVideo);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // function to add history
  const handleShow = async() => {
    setShow(true);
    let Caption = displayVideo.Caption
    let url = displayVideo.empedLink
    let time = new Date()
    let timeStamp =   new Intl.DateTimeFormat('en-GB', {hour:'2-digit',minute:'2-digit',second:'2-digit',year:'numeric',month:'2-digit',day:'2-digit'}).format(time)
  
  //  console.log(caption,url,time,timeStamp);
  let reqBody = {
    Caption,url,time,timeStamp
  }
     const response = await Addhistory(reqBody)
     console.log(response);
  }
  // function to delete a video
  const handleDelete = async (id)=>{
   const response =  await deleteVideo(id)
   console.log(response);
   setDeletevideo(true)

  }
  // function to drag
  const videoDrag = (e,id)=>{
    console.log(`card with id ${id} have dragged`);
    e.dataTransfer.setData("Videoid",id)
  }

  return (
    <>
         <Card onClick={handleShow}  style={{ width: '100%' }} className='mt-4' draggable onDragStart={(e)=>videoDrag(e,displayVideo.id)}>
     {!ispresent && <Card.Img  variant="top" src= {displayVideo?.imageURL} width={'100%'} height={'300px'}/>}
      <Card.Body className='d-flex'>
     
        <Card.Text>
        
           {displayVideo?.Caption.slice(0,20)}
        </Card.Text>
       {!ispresent && <Button variant="danger" onClick={()=>handleDelete(displayVideo?.id)} className='ms-auto'><FontAwesomeIcon icon={faTrash} /></Button>}
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.Caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="360" src={`${displayVideo?.empedLink}?autoplay=1`} title="Maheshinte Prathikaaram | Idukki Song Video, Fahadh Faasil | Official" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe></Modal.Body>
       v
      </Modal>
    </>
  )
}

export default VideoCard