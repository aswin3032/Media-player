import axios from "axios";

export const commonApi = async (httpmetod,url,reqBody)=>{
    let reqConfig = {
        method:httpmetod,
        url,
        data:reqBody,
        Headers:{
            "Content-Type":"application/json"
        }
    }

   return await axios (reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}