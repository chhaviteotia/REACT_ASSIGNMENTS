import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  
    <div className="profile-container">
      <img className="profile-pic" src={employee.profileImg} width="100" height="100" alt="profile-picture"/>
  
      <h1>{employee.name}</h1>

      <p>Location</p>
      <strong>{employee.location}</strong>

      <p>Blood Group</p>
      <strong>{employee.bloodGroup}</strong>

      <p>Age</p>
      <strong>{employee.age}</strong>
    </div>
  
</div>
)
}



export default App;
