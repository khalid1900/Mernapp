import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
function List() {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/fetchall").then((res)=>{setData(res.data)}).catch((err)=>{console.log(err)})

    },[data])
  
   

  return (
    <div>
     <h2 style={{textAlign:"center"}}> USER DATA LIST</h2>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>SR NO</th>
          <th>AMOUNT IN USD</th>
          <th>AMOUNT IN INR</th>
          <th>SENDER NAME</th>
          <th>RECIVER NAME</th>
          <th>PURPOSES</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value,index)=>{
            return(
                <tr key={index}>
          <td>{index+1}</td>
          <td>{value.usd}</td>
          <td>{value.inr}</td>
          <td>{value.sender_name} </td>
          <td>{value.receiver_name}</td>
          <td>{value.purpose}</td>
        </tr>
            )

        })}
       
      </tbody>
    </Table>


      
    </div>
  )
}

export default List
