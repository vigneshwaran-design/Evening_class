import React from 'react'

const Formdatum = (props) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>EmpId</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Phone Number</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{props.name.empid}</td>
                  <td>{props.name.empname}</td>
                  <td>{props.name.date}</td>
                  <td>{props.name.phone}</td>
                  <td>{props.name.salary}</td>
                  
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Formdatum