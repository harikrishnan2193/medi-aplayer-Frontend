import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistory } from '../services/allAPI'

export default function WatchHistory() {

  const[history , setHistory] = useState([])

  const watchAllHistory = async()=>{
    const {data} = await getAllHistory()
    // console.log(data);
    setHistory(data)
  }
  console.log(history);

  //function to remove a perticuler history

  // const removeAHistory = async(id)=>{
  //   await deleteAHistory(id)

  //   // to get the remaining history
  //   watchAllHistory()

  // }

  useEffect(()=>{
    watchAllHistory()
  },[])

  return (
    <>
     <div className="container mt-5 d-flex justify-content-between">
      <h3>Watch History</h3>
      
      <Link to={'/home'} className={'d-flex align-items-center'} style={{textDecoration:'none',color:'white',fontSize:'20px'}}>
      <i class="fa-solid fa-arrow-right"></i>Back to Home</Link>
     </div>
     <table className='table mt-5 mb-5 container'>
      <thead>
      <tr>
        <th>#</th>
        <th>caption</th>
        <th>url</th>
        <th>time stemp</th>
        {/* <th>action</th> */}
      </tr>
      </thead>
      <tBody>
      {history?.length>0?
        history?.map((item, index)=>(<tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={item.embedLink}target='_blank'>{item.embedLink}</a></td>
          <td>{item.timestamp}</td>
          {/* <button onClick={()=>removeAHistory(item?.id)}><i class="fa-solid fa-trash"></i></button> */}
          </tr>))
        :
        <p>Nothing to Display</p>
          }
      </tBody>
     </table>
    </>
  )
}
