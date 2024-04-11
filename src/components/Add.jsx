import { faCircleArrowUp, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { uploadVideoApi } from "../services/allApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);
  const [video,setVideo] = useState({
    id:"",
    Caption:"",
    imageURL:"",
    empedLink:""
  })

  const getEmpedlink = (e)=>{
    // console.log(e.target.value);
      const text = e.target.value
 
       if(text.endsWith('?featured=shared')){
        console.log(text.slice(-31,-20));
        const link = `https://www.youtube.com/embed/${text.slice(-26,-15)}`
        setVideo({...video,empedLink:link})
       }
       else if(text.startsWith('https://youtu.be/')){
        console.log(text.slice(17,28));
        const link = `https://www.youtube.com/embed/${text.slice(17,28)}`
        setVideo({...video,empedLink:link})
       }
       else{
        console.log(text.slice(-11));
        const link = `https://www.youtube.com/embed/${text.slice(-11)}`
        setVideo({...video,empedLink:link})
       }
  }
  console.log(video);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async()=>{
       const {id,Caption,imageURL,empedLink} = video
       console.log(id,Caption,imageURL,empedLink);
       if(!id || !Caption || !imageURL || !empedLink){
        toast.info('please fill the form completely')
       }else{
         const response =   await uploadVideoApi (video)
         console.log(response);
         if(response.status>=200 && response.status<300){
          toast.success('video Uploaded Successfully')

          setUploadVideoStatus(response.data)
          
          setVideo({
            id:"",
            Caption:"",
            imageURL:"",
            empedLink:""
          })
          handleClose()
         }else{
          console.log(response);
          toast.error("Something Went Wrong")
         }
       }
  }


  return (
    <>
      <div className="d-flex alingn-items-center">
        <h4 className="text-dark me-2 mt-2">Upload New Video</h4>
        <button onClick={handleShow}>
          {" "}
          <FontAwesomeIcon icon={faCircleArrowUp} size="xl" />
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faFilm} className="me-2 " />
            Upload videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className="border rounded p-3 border-primary">
            <Form.Group className="mb-3" >
              <Form.Control type="text"placeholder="Enter the Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Control type="text"placeholder="Enter the Video Caption" onChange={(e)=>setVideo({...video,Caption:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Control type="text"placeholder="Enter the Video Image URL " onChange={(e)=>setVideo({...video,imageURL:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Control type="text"placeholder="Enter the Youtube Video LInk" onChange={(e)=>getEmpedlink(e)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={handleUpload}>
            Upload
          </button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000}/>
    </>
  );
}

export default Add;
