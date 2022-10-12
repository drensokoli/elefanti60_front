// import React, { useRef } from 'react'
// import { render } from 'react-dom'


// class SignUp extends React.Component {
//      name = useRef()
//      lastname = useRef()
//      username = useRef()
//      email = useRef()
//      password = useRef()
//      adress = useRef()
//      cardnumber = useRef()

//     state = {
//         name:"",
//         lastname:"",
//         username:"",
//         email:"",
//         password:"",
//         addres:"",
//         cardnumber:""
//     };
    
//     handleChange = event => {
//       this.setState({[event.target.name]: event.target.value})
//     }
    
//     handleSubmit = event => {
//       event.preventDefault();
//       console.log(this.state);
//     }
    
    
//     handleClick=()=>{
//     if(name.current.value&&lastname.current.value&&username.current.value&&email.current.value&&password.current.value&&adress.current.value&&cardnumber.current.value)
//     {
//       localStorage.setItem('name',name.current.value)
//       localStorage.setItem('lastname',lastname.current.value)
//       localStorage.setItem('username',username.current.value)
//       localStorage.setItem('email',email.current.value)
//       localStorage.setItem('password',password.current.value)    
//       localStorage.setItem('adress',adress.current.value)
//       localStorage.setItem('cardnumber',cardnumber.current.value)
  
//       localStorage.setItem('signUp',email.current.value)
//       alert('Account created sucessfully')
  
//    console.log(name,lastname,username,email,password,adress,cardnumber)
//     }

//   }  

//   render(){
//     return(
        
//             <form onSubmit={this.handleSubmit}>
//             <div className='text-center'>
//               <div className= 'mt-24 '>
//                 <div className='mb-2.5	'>
//                   <input className=' h-8 w-1/5 text-lg'placeholder='Name' type='text' ref={name} onChange={this.handleChange} />
//                 </div>
//                 <div className='mb-2.5	'>
//                   <input className=' h-8 w-1/5 text-lg ' placeholder='Last Name' type='text' ref={lastname} onChange={this.handleChange} />
//                 </div>
//                 <div className='mb-2.5'>
//                   <input className=' h-8 w-1/5 text-lg ' placeholder='Username' type='text' ref={username} onChange={this.handleChange}/>
//                 </div>
//                 <div className='mb-2.5 '>
//                   <input className=' h-8 w-1/5 text-lg ' placeholder='Email' type='email' ref={email} onChange={this.handleChange} />
//                 </div>
//                 <div className='mb-2.5'>
//                   <input className=' h-8 w-1/5 text-lg' placeholder='Password' type='password' ref={password} onChange={this.handleChange}/>
//                 </div>
//                 <div className='mb-2.5'>
//                   <input className=' h-8 w-1/5 text-lg ' placeholder='Adress' type='text' ref={adress} onChange={this.handleChange}/>
//                 </div>
//                 <div className='mb-2.5'>
//                   <input className=' h-8 w-1/5 text-lg ' placeholder='Card Number' type="text" pattern="[0-9]*" ref={cardnumber} />
//                 </div>
//                 <button className='h-1/3 w-1/5  bg-violet-600 text-white	rounded-md text-md py-1 px-3'>Sign Up</button>
//               </div>
//             </div>
//            </form>
          
//     )
//   }
// };
