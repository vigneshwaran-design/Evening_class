import {React,useState} from 'react'
import '../css/details.css'
import Formdatum from '../components/Formdata'
const Details = () => {
    
    const [allValues,setAllValues]=useState({
        empid: '',
        empname: '',
        date:'',
        phone: '',
        salary: '',
    })


   function handleChange(e){
    e.preventDefault();
    setAllValues({...allValues,[e.target.name]:e.target.value})
  
   }

    function handleSubmit(){
        console.log(allValues);
        
    }
  return (
    <div>
        <div className="details">
            <div className="container">
               
            <h1 className="title1">EMPLOYEE DETAILS</h1>
            <form onSubmit={handleSubmit}>
            <div className="content">
                <div className="line">
                    <label>Employee ID</label>
                    <input type="number" className="empname" id="empname" onChange={handleChange} name="empid" placeholder="Employee ID"/>
                </div>
                <div className="line">
                    <label>Employee Name</label>
                    <input type="text" className="empname" id="empname" onChange={handleChange} name="empname" placeholder="Employee Name"/>
                </div>
                <div className="line">
                    <label>Date of Birth</label>
                    <input type="date" className="empname" id="empname" onChange={handleChange} name="date" placeholder="Employee Name"/>
                </div>
                <div className="radiobtn">
                    <div>
                       <label>Gender</label>
                    </div>
                    
                     <div className="radio">
                        <input type="radio" id="male" name="gender" value="" /><label> Male</label>
                        <input type="radio" id="female" name="gender" value="" /><label> Female</label>
                        <input type="radio" id="others" name="gender" value=""/><label> Others</label>
                     </div>
                </div>
                
                <div className="line">
                    <label >Employee Designation</label>
                    <select id="designation" name="designation">
                               <option value="none" defaultValue disabled >Select an Option</option>
                                <option value="manager" >Manager</option>
                                <option value="designer">Designer</option>
                                <option value="data">Data Architect</option>
                                <option value="security">Security</option>
                    </select>
                </div>
                <div className="line">
                    <label>Phone Number</label>
                    <input type="number" className="number" id="phone" onChange={handleChange} name="phone" placeholder="Mobile Number"/>
                </div>
                <div className="line">
                    <label>Salary</label>
                    <input type="number" className="salary" id="salary" onChange={handleChange} name="salary" placeholder="Salary"/>
                </div>
                <button type="submit" className="btn1" onClick={handleSubmit}>Submit</button>
            </div>
            </form>
             </div>      
        </div>
        {/* <Formdatum name={allValues} /> */}
    </div>
  )
}

export default Details