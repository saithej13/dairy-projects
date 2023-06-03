import React,{useState} from 'react'
import { userAction } from '../Actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { authAction } from '../Actions/authAction';


export default function LoginPage () {
    const stateValus = useSelector(state=> state.userLogin)
    const isLoggedIn = useSelector(state=> state.userauth)
    const {loading,data,error} = stateValus;
     const [formvalues,setFormvalues] = useState({
    ccode:'',
    password:''
  })
  const navigate = useNavigate();
  const {ccode,password} = formvalues;

    const dispatch = useDispatch()
    let loginFun = () => {
        dispatch(userAction(formvalues)).then(() => {
            if(stateValus?.data?.["Data"]?.[0]?.ccode===formvalues.ccode)
            {
                dispatch(authAction('LOGIN'));
                console.log('before')
                console.log(isLoggedIn)
                console.log('after')
                navigate('/Home');
                
            }
            else{
                alert('Unable to Login, Please Check Credentials!')
            }
            
          })
          .catch((error) => {
            alert(error)
          });
      };
    
    return (

           // <div>
    //   <button type="submit" className="btn btn-primary" onClick={loginFun}>Login</button>
    //   <div>
    //     {/* <h1> the data is {stateValus?stateValus.data["Data"][0]["cname"]:""}</h1> */}
    //     <h1> the cname is {stateValus?.data?.["Data"]?.[0]?.cname}</h1>

    //   </div>
    // </div>
        <div className="my-5 mx-5" >
      <div className="card">
        {/* <div class="card-header text-center">
          <h2>Sign in to Continue..,</h2>
        </div> */}
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
              <input type="text" className="form-control mb-4" id="inputusername" value={ccode} onChange={(text)=>setFormvalues({...formvalues,ccode:text.target.value})} placeholder="Enter Username"></input>
              <input type="password" id="inputpassword" className="form-control mb-4" value={password} onChange={(text)=>setFormvalues({...formvalues,password:text.target.value})} aria-labelledby="passwordHelpBlock" placeholder="Enter Password"></input>
              <button type="submit" className="btn btn-primary" onClick={loginFun}>Login</button>
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
