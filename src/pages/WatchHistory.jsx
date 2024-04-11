import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getAllVideoHistory } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function WatchHistory() {
  const [historyVideos,setHistoryVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus] =useState(false)

  // function get all videos in History
  const getHistory = async()=>{
    const response = await getAllVideoHistory()
    // console.log(response);
    setHistoryVideos(response.data)
  }
  //  console.log(historyVideos);

   // function to delete video from history
   const handleDelete = async(id)=>      {
   const response =    await deleteWatchHistory(id)

  //  console.log(response);
  if(response.status>=200 && response.status<300){
    setDeleteVideoStatus(true)
  }else{
    toast.error("Something Went Wrong")
  }
   }
  useEffect(()=>{
    getHistory()
    setDeleteVideoStatus(false)
  },[deleteVideoStatus])
  return (
    <  >
    <div className='mt-5 d-flex justify-content-between align-items-center m-5 p-5'>
      <h3 className='text-dark '>Watch History</h3>
    <h6>  <Link style={{textDecoration:'none',color:'black'}} to={'/home'}><FontAwesomeIcon className='me-3' icon={faArrowLeft} />Back to Home</Link></h6>

    </div>
   <div className='mt-5 d-flex justify-content-center align-items-center mx-5 p-5' >
     { historyVideos?.length>0?
      <table className='table '>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th>Action</th>
  
          </tr>
        </thead>
        <tbody>
         { historyVideos?.map((item,index)=>(
           <tr>
           <td>{index+1}</td>
           <td>{item.Caption}</td>
           <td><a href={item.url} target='_blank'>{item.url}</a></td>
           <td>{item.timeStamp}</td>
           <td>
             <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
           </td>
         </tr>
         ))}
         
        </tbody>
      </table>:
      <p className='text-danger fs-4'>No Watch History</p>
      }
   </div>
   <ToastContainer position="top-center" theme="colored" autoClose={2000}/>
    </>
  )
}

export default WatchHistory