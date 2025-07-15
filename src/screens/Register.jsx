import React, { useEffect, useState } from 'react'
import "./Register.css"
function Register() {


     const [email , setEmail] = useState();
     const [password , setPassword] = useState();
     const [age , setAge] = useState(13); 

     console.log(email)
     console.log(password)
     // console.log('age-> ' ,age)

               function increaseAge(event)
               {
                    event.preventDefault();
                    setAge(age + 1);
               }

     function handleRegister(e)
     {
          e.preventDefault();// do not reload screen when we call that function or clicked on function
          console.log('Alert Occured')
     }

     // let age= 111;    
     // let age= 101;
     // let emailId = "sahil@gmail.com";
// 

          useEffect (() => {
               console.log('age -> ' ,age);} , []) ;  // first time jab user page run kre tb usko age 13 dikhaye 
          return (
    
       <form>    
          {/* if age is greater than 18 they can see form */}
          {/* {age > 18 && emailId == "sahil@gmail.com" ?( */}
           <div>
               <h1>{age}</h1>
               <button onClick={increaseAge}>Increase Age</button>
               <input type="email" placeholder='Email' style={{margin: "10px"}} value={email} onChange ={(e) => setEmail(e.target.value)}></input>
          <br></br>
               <input type="password" placeholder='Enter Password' style={{margin: "10px"}} value={password} onChange ={(e) => setPassword(e.target.value)}></input>
          <br></br>
               <button onClick={handleRegister} style={{margin: "10px"}}>Submit</button>
               </div>     
          {/* ):( */}
               {/* <h2>grown up baby !!</h2> */}
          {/* )} */}
          </form>

    
  );
}
// function ke andr function bna pate hai 
export default Register


// usememo 