 
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
        open:false,
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
      const toggle1 = ()=>
      {
        this.setState(
          {
            open:false
          }
        )
      }
      const toggle2 = ()=>
      {
        this.setState(
          {
            open:true
          }
        )
      }
      // const [effect, setEffect] = useState(false);
      return (
        
      <div class="z-10">
        <div className = "relative bg-lgbackground2 overflow-hidden w-screen  bg-center bg-cover bg-no-repeat h-screen " >
        <div class="relative pb-[66%]">
          <div class="absolute h-full w-full object-cover">
         <div class="z-20 pt-[150px] ">
         
         <div class=" border-sky border-4 filter blur-sm bg-lgbackground3 h-[400px] mx-[600px]  mt-[60px] -mb-[300px]"></div>
          <div class="mx-[20px] relative space-y-20"> 
          <div class="relative  ">
         <svg class="-mt-[440px]  mx-[800px] border-2  border-sky bg-lgbackground3 text-sky w-20 h-20 bg-transparent blur-none "  fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
        </div>
             <form    className="myForm" action="./homepage"  onSubmit={this.handleSubmit} method="POST">
        
           <br/>
         
        <div className="relative z-1   mx-[660px] items-center grid gap-4 grid-cols-2 pt-[5px] bg-cyan-500 -mt-[10"> 
            
          <div class="relative">
            <input 
              type="email"  
              name="email" 
              class=" px-20 text-center placeholder placeholder-black ring-2 rounded-sm  w-[350px] h-[60px] mb-[20px]  bg-white text-black"
              placeholder="EMAIL" 
              id="email" 
              />  
              <svg class="absolute w-8 h-8 text-grey -mt-[66px] mx-[310px] " stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 
              </div>     
              <div className="red">{this.state.errors.email}</div>
          
          
             <div class="relative">
            <input 
              type={(this.state.open === false)? 'password':'text'}
              name="password" 
              
          
              className="  px-20 text-center placeholder placeholder-black ring-2 rounded-sm  w-[350px] h-[60px] mb-[20px]  bg-white text-black"
              placeholder="ENTER THE PASSWORD" 
              id="password" />
              <div className='Eye'>
              {
                (this.state.open === false)? <svg onClick={toggle2} class="absolute w-7 h-7 text-grey -mt-[60px] mx-[310px] " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path></svg>: <svg onClick={toggle1} class="absolute w-7 h-7 -mt-[60px] mx-[310px] text-grey" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
             
              }
                 </div> 
              <div className="red">{this.state.errors.password1}</div>
              </div>  </div>
        <button className= 
         "   relative Button  w-[300px] h-[60px] mt-[45px] mx-[690px] ring-2 text-center bg-lgbackground3   text-sky hover:bg-tealgrad hover:text-darkblue "
         >
           SUBMIT</button>
          </form>
          </div>
            </div>
          </div>
          </div>
     </div>
            
          
    
 </div>
 
 
        
         
        
      );
    }
  }

export default MyForm;
