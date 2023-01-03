import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {  useState } from 'react';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

function FormData() {

    const [state,setState]=useState({usd:"",inr:"",sender_name:"",receiver_name:"",purpose:""})
    const [conversion,setConversion]=useState([])
    const [purposData,setPurposData]=useState([])


//  from data sumit post Api call
const onSubmit=(e)=>{
  e.preventDefault();
  
    axios.post("http://localhost:8000/createmoney",state).then((res)=>{
    console.log(res.data);
  }).catch((err)=>{
    console.log(err)
  }) 

// setState({usd:"",inr:"",sender_name:"",receiver_name:"",purpose:""})
}


//conversion api call
useEffect(()=>{
  setTimeout(()=>{
    axios.get("http://localhost:8000/conversion").then((res)=>{
      setConversion(res.data);
    }).catch((err)=>{
      console.log(err.message)
    })
    
  },2000)

  

},[])
const conversionRate=conversion.map((value,i)=>{
  return(value.conversion)
})

    // capturing dollar value multiplying it by 80 and storing that value in a variable named rupeeValueConverted

    const dollarValue = state.usd
    let rupeeValueConverted = dollarValue * conversionRate
    state.inr = rupeeValueConverted
   

// purposes api call

useEffect(()=>{
 
  axios.get("http://localhost:8000/purpose").then((res)=>{
    setPurposData(res.data[0].purposes);
    
  }).catch((err)=>{
    console.log(err)
  }) 

},[])





  return (
    <div style={{width:"70%",textAlign:"center",margin:'40px',paddingLeft:'300px'}}>
     
         <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Amount in USD    </Form.Label>
        <Form.Control type="number" placeholder="Enter USD Amount "   value={state.usd}  onChange={(e)=>setState({...state,usd:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Amount Reacived INR</Form.Label>
        <Form.Control type="number" placeholder="INR amount" value={state.inr} onChange={(e)=>setState({...state,inr:e.target.value})}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Sender Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" value={state.sender_name}  onChange={(e)=>setState({...state,sender_name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Recevier Name</Form.Label>
        <Form.Control type="name" placeholder="Enter recvr name" value={state.receiver_name}  onChange={(e)=>setState({...state,receiver_name:e.target.value})} />
      </Form.Group>



  {/* purposes Dropdown */}
  

<select  onChange={(e) => setState({...state,purpose:e.target.value})}  >
                    Select Purposes
                    {purposData.map((value, index) => {
                        return <option value={value} key={index}>{value}</option>
                    })}

                </select>
    
     <br /> <br /> <br />
   
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <br/>
    <Link to='/showlist'>< Button>Show List</Button></Link>
    </div>
  )
}

export default FormData

