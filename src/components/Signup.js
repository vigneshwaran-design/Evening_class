import {React,useState}from 'react'
import '../css/signup.css' 
import {Link} from 'react-router-dom'
const Signup = () => {
 
  const [allValues,setAllValues] =useState({
    email: '',
    password: '',
  })

  const changeHandler =(e)=>{
    setAllValues({...allValues,[e.target.name]:e.target.value})
  }


  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const handle = () => {
    localStorage.setItem("a", allValues.email);
    localStorage.setItem("b", allValues.password); 
  };        
  return ( 
           
    <div>
        <div className="card1">
           <div className="header1">
             <h1>SIGN UP</h1>
           </div>
           <form>
                <div className="elements1">
                    <input type="text" 
                       name="Username" id="username" placeholder="Enter the Username"  />
                    <input type="email" name="email" id="email" placeholder="Enter the Email" onChange={changeHandler}/>
                    <input type="password" name="password" id="pwd" placeholder="Enter the Confirm Password"  onChange={changeHandler} />
                    <input type="password" name="Password" id="pwd2" placeholder="Re-Enter the Password"/>
                </div>
                <p>Already Have an Account?<a href="" > <Link to="/login" className="inp" type="button" id="btn">Login</Link></a></p>
                
                <button className="btn" onClick={handle}><Link to="/login" className="inp" type="button" id="btn">Signup</Link></button>
              
            </form>
        </div>
    </div>
  )
}

export default Signup;