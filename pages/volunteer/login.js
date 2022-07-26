 
// import './Login.css'
import axios from 'axios'
import React, { useState } from "react";

class MyForm extends React.Component {
  
   
    constructor(props) {
      super(props);
      this.state = 
      { 
        email:"",
        password:"",
        
        errors: {}
      }
    
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    
   handleSubmit(event)
    {
    event.preventDefault();
    
    let x=document.forms["myForm"]["email"].value
    let y=document.forms["myForm"]["password"].value

    if(this.validate())
    {
      axios.get(`http://localhost:4000/users/find?email=${x}&password=${y}`)
      .then(()=> 
       {  
       alert("Successful login!")
       this.letin();
          }
      )
      .catch(err =>{
          alert('invalid credentials')
          console.log(err)
      })
    }
  }
  
  validate()
  {
    let x=document.forms["myForm"]["email"].value
    let y=document.forms["myForm"]["password"].value
    let errors = {};
    let isValid = true;
   

    if(!x)
    {
      isValid = false;
      errors["email"] = "Please enter your email address."
    }
    
  
    
    if(!y)
    {
      isValid = false;
      errors["password"] = "Please enter the password."
    }

  
  
  this.setState(
    {
      errors:errors
    }
  );
  return isValid;
  }

  
  forgot()
  {
    return true;
  }
    render() { 
      // const [effect, setEffect] = useState(false);
      return (
        
      <div class="z-10">
        <div className = "bg-lgbackground2 w-screen  bg-center bg-cover bg-blur bg-no-repeat h-screen " >
        <div class="relative w-full filter">
         <div class="z-20 pt-[150px] ">
         
         <div class="  filter blur-sm bg-lgbackground3 h-[400px] mx-[600px]  mt-[60px] -mb-[300px]"></div>
          <div class="mx-[20px] relative space-y-20"> 
          <div class="relative  ">
         <svg class="-mt-[440px]  mx-[800px] border-2  border-sky bg-lgbackground3 text-sky w-20 h-20 bg-transparent blur-none "  fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
        </div>
             <form    className="myForm" action="./homepage"  onSubmit={this.handleSubmit} method="POST">
        
           <br/>
         
        <div className="relative z-1   mx-[660px] items-center grid gap-4 grid-cols-2 pt-[5px] bg-cyan-500 -mt-[10"> 
            
          
            <input 
              type="email"  
              name="email" 
              class=" px-20 text-center placeholder placeholder-sky ring-2 rounded-sm  w-[350px] h-[60px] mb-[20px]  bg-lgbackground3 text-sky"
              placeholder="EMAIL" 
              id="email" 
              />        
              <div className="red">{this.state.errors.email}</div>
          
          
             
            <input 
              type="password" 
              name="password" 
              
          
              className="  ring-2 text-center placeholder-sky   rounded-sm px-20 w-[350px] h-[60px] bg-lgbackground3   text-sky"
              placeholder="ENTER THE PASSWORD" 
              id="password" /> 
              <div className="red">{this.state.errors.password1}</div>
              </div>  
        <button className= 
         "   relative Button  w-[300px] h-[60px] mt-[65px] mx-[690px] ring-2 text-center bg-lgbackground3   text-sky hover:bg-tealgrad hover:text-darkblue "
         >
           SUBMIT</button>
          </form>
          </div>
            </div>
          </div>
          
     </div>
            
          
    
 </div>
 
 
        
         
        
      );
    }
  }

export default MyForm;
