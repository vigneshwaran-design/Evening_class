import {React,useState} from 'react'
import '../css/Login.css'
import {Link} from 'react-router-dom'
const Login = () => {

  const [allValues,setAllValues] =useState({
    email1: '',
    password1: '',
  })
  const changeHandler =(e)=>{
    setAllValues({...allValues,[e.target.name]:e.target.value})
  }


  // const [email1, setEmail1] = useState("");
  // const [password1, setPassword1] = useState("");
  const handle1 = () => {
    localStorage.setItem("Email", allValues.email1);
    localStorage.setItem("Password", allValues.password1);
    let c = localStorage.getItem("Email");
    let d = localStorage.getItem("Password");
    let e = localStorage.getItem("a");
    let f = localStorage.getItem("b");
    // console.log(c, e, d, f);
    c === e && d === f
      ? window.open("/details")
      : alert("login failed enter correct password and email");
  };
  return (
    <div>
        <div className="card">
           <div className="header">
             <h1 className="title">LOG IN</h1>
           </div>
            
              <form >
                  <div className="elements">
                 <input type="email" name="email1" id="username" placeholder="Enter the Email"  onChange={changeHandler} />
                <input type="password" name="password1" id="password" placeholder="Enter the Password"  onChange={changeHandler} />
                </div>
                <p >Doesn't Have an account<a href=""> <Link to="/" className="inp" type="button" id="btn">Click here</Link></a></p>
               
                <button className="btn3" onClick={handle1}>Login</button>
              </form>
                
            
           
        </div>
    </div>
  )
}

export default Login;