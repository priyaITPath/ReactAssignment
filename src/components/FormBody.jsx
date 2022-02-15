import React, { useState } from 'react'
import './Formbody.css';
import Thankyou from './Thankyou'


const FormBody = () => {
const [records, setRecords] = useState(false);
  const [userRegistration, setUserRegistration] = useState({
    firstname:"",
    lastname:"",
    email:"",
    education:"",
    dob:"",
    bio:""
  });

  const handleInput =(e) =>{
    const name= e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserRegistration({...userRegistration, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(
      userRegistration.firstname &&
      userRegistration.lastname &&
      userRegistration.email &&
      userRegistration.education &&
      userRegistration.dob &&
      userRegistration.bio 
    ){
      alert(`     Name: ${userRegistration.firstname}  ${userRegistration.lastname} 
      Email: ${userRegistration.email} 
      Education: ${userRegistration.education} 
      DOB: ${userRegistration.dob} 
      Bio: ${userRegistration.bio}`);
      console.log(userRegistration);
      setRecords(true);
    }else{
      alert("Please Fill All The Details Given Below");
      setRecords(false);
    }
  };

  return (
    <>
    <h3 style={{backgroundColor:"lightgray",padding:"5px", paddingLeft:"25px"}}>Registration Form</h3>
      <div className='form'>
        {records ?(
          <Thankyou />
        ) : (
      <form  action='' onSubmit={handleSubmit}>
        <table>
        <tr>
        <td><label htmlFor='firstname'>FirstName: </label></td>
         <td> <input type="text" 
          value={userRegistration.firstname}
          onChange={handleInput}
          name='firstname' id='firstname' />
          </td>
          </tr>

          <tr>
          <td><label htmlFor='lastname'>LastName:  </label></td>
          <td><input type="text" 
          value={userRegistration.lastname}
          onChange={handleInput}
          name='lastname' id='lastname'  /></td>
          </tr>

        <tr>
        <td><label htmlFor='email'> Email:  </label> </td>
       <td> <input type="text"  value={userRegistration.email}
        onChange={handleInput}
        name='email' id='email'/></td>
        </tr>

        <tr>
        <td><label htmlFor="education">Education: </label></td>
       <td> <input type="text"  value={userRegistration.education}
        onChange={handleInput}
        name="education" id='education'/></td>
        </tr>

        <tr>
        <td><label htmlFor='dob'> DOB: </label></td>
        <td><input type="date" value={userRegistration.dob}
        onChange={handleInput}
        name='dob' id='dob'/></td>
        </tr>

        <tr>
        <td><label htmlFor="bio">Bio: </label> </td>
        <td><input type="text" value={userRegistration.bio}
        onChange={handleInput}
        name="bio" id='bio'/> </td>
        </tr>

        <button onClick={handleSubmit} id="submit" type='submit' >Submit</button>
        </table>
        </form>
        
        )}
        </div>
        </>
  )
}
export default FormBody