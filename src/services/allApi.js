
// api for uploading video

import { commonApi } from "./commonApi";
import { serverURL } from "./serverURL";

export const uploadVideoApi = async(reqBody)=>{
 return  await commonApi ('POST',`${serverURL}/videos`,reqBody)
}

// api to ge uploaded video

export const getUploadedVideoApi = async()=>{
  return await commonApi('GET',`${serverURL}/videos`,"")
}

// aou to delete a particular video

export const deleteVideo = async(id)=>{
 return await commonApi('DELETE',`${serverURL}/videos/${id}`,{})
}

// api to add video into history

export const Addhistory = async(reqBody)=>{
  commonApi ('POST' ,`${serverURL}/history`,reqBody)
}
// Api to get the video from history

export const getAllVideoHistory = async ()=>{
 return commonApi ('GET',`${serverURL}/history`,"")
}          

// api to delete watch history

export const deleteWatchHistory = async (id)=>{
   return await commonApi('DELETE',`${serverURL}/history/${id}`,{})
}

// api to add a category

export const addCategoryApi = async (reqBody)=>{
 return  await commonApi('POST',`${serverURL}/category`,reqBody)
}

// api to get a category

export const getCategory = async ()=>{
  return await commonApi ("GET",`${serverURL}/category`,"")
}

// api to delete Category

export const deleteCategory = async(id)=>{
  return await commonApi("DELETE",`${serverURL}/category/${id}`,{})
}

// api to get a single video from videos

export const getAVideoApi = async(id)=>{
  return await commonApi('GET',`${serverURL}/videos/${id}`,"")
}
// api to update category 

export const updateCategory = async (id,reqbody)=>{
  return await commonApi('PUT',`${serverURL}/category/${id}`,reqbody)
}