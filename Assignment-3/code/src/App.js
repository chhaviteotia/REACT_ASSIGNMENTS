import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow="<";
var rightArrow=">";
function App() {
  const employee = {
    name:"Alan Ford",
    employeeID:"00005152"
  }
  const customerInfo={
    AppointmentOn: new Date ().toLocaleDateString(),
    email: "alanford@gmail.com",
    phone: "9876543210"
  }
  const orderInfo= {
    status:"In Progress",
    door:"Mark",
    time: new Date().toLocaleTimeString()
    
  }
  const productList ={
    productImage: "https://www.w3schools.com/howto/img_avatar.png",
    productName: "Boltaart Bosbesen",
    productDetails: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  }
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className="header">
    <div className="arrow">{arrow}</div>
      <div className="employee">
      <p><strong>{employee.name}</strong></p>
      <p>{employee.employeeID}</p>
    </div>
    
    <div className="print">
      <button>Print</button>
      </div>
    </div>
    <div className="customer-info">
    <p><strong>Appointment on: </strong>{customerInfo.AppointmentOn}</p>
      <p><strong>Email: </strong>{customerInfo.email}</p>
      <p><strong>Phone: </strong>{customerInfo.phone}</p>
    </div>
    <div className="order-info">
      <div className="status">
      <label><strong>Status</strong></label>
        <ul>
        <li>{orderInfo.status}</li>
        </ul>
      </div>
        <div className="door">
        <label><strong>Door</strong></label>
        <p>{orderInfo.door}</p>
        </div>
        <div className="time">
        <label><strong>Time</strong></label>
        <p>{orderInfo.time}</p>
        </div>
    </div>
    <div className="product-list">
      <input type="checkbox"></input>
      <img src={productList.productImage}  alt="product image" width="100px" height="100px"/>
      <div className="description">
      <p ><strong>{productList.productName}</strong></p>
      <p>{productList.productDetails}</p>   
        
    </div>
    <div className="arrow">{rightArrow}</div></div> 
    

    </div>
  );
}

export default App;
