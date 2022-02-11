import React from 'react'

export default function Header() {
  return (
    <div>
      <h3 style={{backgroundColor:"lightblue" , textAlign:"center", marginTop:"2px", padding:"5px"}}>Please Fill the Registration Form</h3>

      <h4 style={{paddingLeft:"30px", marginTop:"-15px", padding:"10px", paddingLeft:"32px", backgroundColor:"lightsalmon"}}>Here Are Some Basic Instruction  </h4>

      <ul style={{marginTop:"-15px"}}>
        <li>Enter Your Name</li>
        <li>Enter Your Active Email Id</li>
        <li>Enter Your Education Details</li>
        <li>Select Your Birthdate</li>
        <li>Write Something About Yourself</li>
        
      </ul>
    </div>
  )
}
