import React,{ useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { userAction } from '../Actions/userAction';


const LoginPage = ({history}) => {
    const stateValus = useSelector(state=> state.userLogin)
    const { loading, data, error,accessToken } = stateValus;
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [formValues,setFormValues] = useState({
        user:'',
        pwd:''
    })
    const {user,pwd}=formValues;
    const changeHandler = (e) => {
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(userAction(formValues))
    }
  
    useEffect(()=>{
      if(accessToken){
       navigate('./Home');
      }
    },[accessToken,navigate])
    return (
        <div className="my-5 mx-5" >
          <div className='d-flex flex-row mt-2 justify-content-center'>
          {loading ? (<div>
          <h1>Loading...</h1>
          <div> 
            <div className="spinner-border text-primary" role="status">
              </div>
              </div>
              </div>) : error ? <h1>Something went Wrong</h1> : <h1>Login Success...</h1>} 
                </div>
          <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/">Action</a>
    <a className="dropdown-item" href="/">Another action</a>
    <a className="dropdown-item" href="/">Something else here</a>
  </div>
</div>
      <div className="card">
        <div className='row'>
          <div className='col-8'>
            <img src={require("../images/logo512.png")} width={640} alt="display" />
          </div>
          <div className='col-4'>
            <div className='d-flex flex-column mx-5'>
              <div className='d-flex flex-row mt-2 justify-content-center'>
                <img src={require("../Components/icon.png")} width={120} alt="display"/>
              </div>
              <h1 className="fw-normal my-1 pb-2 text-center">Welcome Back</h1>
              <h5 className="fw-normal my-2 pb-3 text-center" style={{ letterSpacing: '1px' }}>SignIn to continue..,</h5>
              <input type="text" className="form-control mb-4" id="inputusername" value={user} name="user" onChange={changeHandler} placeholder="Enter Username"></input>
              <input type="password" id="inputpassword" className="form-control mb-4" value={pwd} name="pwd" onChange={changeHandler} aria-labelledby="passwordHelpBlock" placeholder="Enter Password"></input>
              <button type="submit" className="btn btn-primary" onClick={submitHandler}>Sign In</button>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p>
              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default LoginPage;























// import React,{useState} from 'react'
// import { userAction } from '../Actions/userAction';
// import {Form,Button,Row,Col} from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import { authAction } from '../Actions/authAction';
// import { FormContainer } from '../Components/FormContainer';
// import { Message } from '../Components/Message';
// import { Loader } from '../Components/Loader';
// import {Link} from 'react-router-dom';



// export default function LoginPage () {
//     const stateValus = useSelector(state=> state.userLogin)
//     const isLoggedIn = useSelector(state=> state.userauth)
//     const {loading,data,error} = stateValus;
//     // const [ccode,setCcode] = useState('');
//     // const [password,setPassword] = useState('');
//     const [formvalues,setFormValues] = ({
//         ccode:'',
//         password:''
//     })

//     const {ccode,password} = formvalues;

//     const changeHandler = (e) => {
//         setFormValues({...formvalues,[e.target.name] : e.target.value})
//     }
//   const navigate = useNavigate();
 

//     const dispatch = useDispatch()
//     const loginFun = (e) => {
//       e.preventDefault()
//         // dispatch(userAction(ccode,password)).then(() => {
//         //     if(stateValus?.data?.["Data"]?.[0]?.ccode===ccode)
//         //     {
//         //         dispatch(authAction('LOGIN'));
//         //         console.log('before')
//         //         console.log(isLoggedIn)
//         //         console.log('after')
//         //         navigate('/Home');
                
//         //     }
//         //     else{
//         //         alert('Unable to Login, Please Check Credentials!')
//         //     }
            
//         //   })
//         //   .catch((error) => {
//         //     alert(error)
//         //   });
//       };
    
//     return (
//     <>
  
//         <div className="my-5 mx-5" >
//       <div className="card">
//         <div className='row'>
//           <div className='col-8'>
//             <img src={require("../images/logo512.png")} width={640} alt="display" />
//           </div>
//           <div className='col-4'>
//             <div className='d-flex flex-column mx-5'>
//               <div className='d-flex flex-row mt-2 justify-content-center'>
//                 <img src={require("../Components/icon.png")} width={120} alt="display"/>
//               </div >
//               <h1 className="fw-normal my-1 pb-2 text-center">Welcome Back</h1>
//               <h5 className="fw-normal my-2 pb-3 text-center" style={{ letterSpacing: '1px' }}>SignIn to continue..,</h5>
//              <form onSubmit={loginFun}>
//                  <input type="text" className="form-control mb-4" id="inputusername" name={ccode} value={ccode} onChange={changeHandler} placeholder="Enter Username"></input>
//               <input type="password" id="inputpassword" className="form-control mb-4" name={password} value={password} onChange={changeHandler} aria-labelledby="passwordHelpBlock" placeholder="Enter Password"></input>
//               <button type="submit" className="btn btn-primary">Login</button>
//              </form>
//               <a className="small text-muted" href="#!">Forgot password?</a>
//               <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p>
//               <div className='d-flex flex-row justify-content-start'>
//                 <a href="#!" className="small text-muted me-1">Terms of use.</a>
//                 <a href="#!" className="small text-muted">Privacy policy</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
  
//         </>
//     )
// }
