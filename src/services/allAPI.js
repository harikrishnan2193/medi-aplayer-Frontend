


import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"



//upload vedios

export const uploadAllVideo = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}


//get all vedios from json server

export const getAllVideos =async()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

//api to delete a video

export const deleteAVideo =async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//api to add data to watch history

export const addToHistory =async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

// api to get all history from json server

export const getAllHistory =async(videoDetails)=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

//api to add categories

export const getAllCategory =async()=>{
    return await commonAPI('GET',`${serverURL}/categories`,"")
}

//api to delete history
// export const deleteAHistory =async(id)=>{
//     return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
// }

//api to add history

export const addToCategory =async(body)=>{
    return await commonAPI('POST',`${serverURL}/categories`,body)
}

//api to delete the catogary
export const deleteACatogary =async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}

//api to get all data the the perticuler vedio
export const getAVideo =async(id)=>{
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//api to update catogary
export const updateCatogary =async(id,body)=>{
    return await commonAPI('PUT',`${serverURL}/categories/${id}`,body)
}

