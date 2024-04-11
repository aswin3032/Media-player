import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import VideoCard from "../components/VideoCard";
import { Col, Row } from "react-bootstrap";
import { addCategoryApi, deleteCategory, getAVideoApi, getCategory, updateCategory } from "../services/allApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

faTrash;

function Category({videoDragAndRemoveStatus,setVideoDragAndRemoveStatus}) {
  const [categoryName, SetCategoryName] = useState("");
  const [show, setShow] = useState(false);
  const [allcategory,SetAllCategory] = useState([])
  const [addcategorystatus,SetAddCategoryStatus] = useState(false)
  const [deletecategorystatus,SetDeleteCategoryStatus] = useState(false)
 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // function to add category
  const handleCategoryAdd = async()=>{
    if (categoryName){
      let reqBody ={
        category: categoryName,
        allvideo: []
      }
      const response = await addCategoryApi (reqBody)
      // console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success("Category added successfully")
        SetAddCategoryStatus(true)
        handleClose()
      }else{
        toast.error("Category added failed")
      }
      
      
    } else{
      toast.warning('please enter the Category name')
    }
  };
  // function to get category
  const getAllCategory = async()=>{
   const response = await getCategory()
   console.log(response.data);
   SetAllCategory(response.data)
   
  }
  // 
  // console.log(allcategory);
  // function to delete category
  const handleDeleteCategory = async(id)=>{
    await deleteCategory(id)
    SetDeleteCategoryStatus(true)
  }
  // function to prevent the data lose on drag
  const dragOver = (e)=>{
   e.preventDefault()
  }
  //function for drop
  const videoDrop = async(e,categoryId)=>{
    console.log(`category id is${categoryId}`);
    // get the videoid send from the videoCard component
   const videoid =  e.dataTransfer.getData("Videoid")
   console.log(`video is ${videoid}`);
   // api call to get a details of a  a particular video that is dragged 
   const {data} = await getAVideoApi(videoid)
   console.log(data);
   // selected category 
    
   const selectedCategory = allcategory.find((item)=>item.id==categoryId)
   console.log(selectedCategory);

   if(selectedCategory.allvideo.find(item=>item.id==videoid)){
    toast.error("video already exist")
   }else{
    selectedCategory.allvideo.push(data)
    // console.log(selectedCategory);
   }
  
  

   // function to update category

   await updateCategory(categoryId,selectedCategory)
   getAllCategory()

  }
  // function to delete cards from category 

  const dragStart = (e,categoryId, videoId)=>{
     console.log(`category id is ${categoryId}`);
     console.log(`video id is ${videoId}`);

     let dataaShared = {
      categoryId,videoId
     }
     e.dataTransfer.setData('dataShared',JSON.stringify(dataaShared))
  }

  useEffect(()=>{
    getAllCategory()
    SetAddCategoryStatus(false)
    SetDeleteCategoryStatus(false)
    setVideoDragAndRemoveStatus(false)
  },[addcategorystatus,deletecategorystatus,videoDragAndRemoveStatus])
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <button className="btn btn-success w-100" onClick={handleShow}>
          Add New Category
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faPencil} className="me-3" />
            Add New Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="border rounded p-3 border-primary">
            <p>Category name</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter the Category name"
                onChange={(e)=> SetCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
     { allcategory?.length>0?
      allcategory?.map((item)=>(<div className="border border-primary w-100 p-3 rounded mt-3" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>
      <div className="d-flex justify-content-center align-items-center">
        <p>{item.category}</p>
        <button className="btn btn-danger ms-auto" onClick={()=>handleDeleteCategory(item.id)}>
          <FontAwesomeIcon  icon={faTrash} />
        </button>
      </div>
      <Row>
       {item.allvideo?.length>0?
       item.allvideo?.map((card)=>(<Col sm={12} draggable onDragStart={(e)=>dragStart(e,item.id , card.id)}>
        <VideoCard displayVideo={card} ispresent={true}/>
      </Col>))
        :null}
      </Row>
    </div>))
      : <p className="text-danger">No Cateory Added Yet</p>
      }
      <ToastContainer position="top-center" theme="colored" autoClose={2000}/>
    </>
  );
}

export default Category;
