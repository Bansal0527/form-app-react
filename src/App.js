import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const[firstName, setFirstName] = useState("");
  // const[lastName, setLastName] = useState("");

  // function changeFirstNameHandler(event) {
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }
  
  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name]: type ==="checkbox" ? checked : value
      }
    });
  }
  function submitHandler(event) {
    event.preventDefault();

    //print
    console.log("Printing form data...")
    console.log(formData)
  }
  
  const[formData, setFormData] = useState( {firstName: "", lastName: "", email: "", comments: "", isVisible:true, mode:"", favCar:""});
  // console.log(formData);

  return (
    <div className='App'>
    <form onSubmit={submitHandler}>
      <input 
      type="text" 
      placeholder='first name'
      onChange={changeHandler}
      name="firstName"
      value={formData.firstName}
      />

      <br />
      <br />

      <input 
      type="text" 
      placeholder='last name'
      onChange={changeHandler}
      name="lastName"
      value={formData.lastName}
      />  

      <br />
      <br />
      <input 
      type="email" 
      placeholder='Enter your email here'
      onChange={changeHandler}
      name="email" 
      value={formData.email}
       />
       <br /><br />

       <textarea 
       placeholder='enter your comments here'
       onChange={changeHandler}
       name="comments"
       value={formData.comments} >
      
       </textarea>

          <br /><br />

        <input type="checkbox"
        onChange={changeHandler} 
        name="isVisible"
        checked={formData.isVisible}/>
        <label htmlFor="isVisible">Am I visible? </label>

        <br /><br />

        <input type="radio" 
        onChange={changeHandler}
        name="mode"
        value="Online-Mode"
        id="Online-Mode"
        checked={formData.mode==="Online-Mode"}/>
        <label htmlFor="Online-Mode">Online Mode</label>

        <input type="radio" 
        onChange={changeHandler}
        name="mode"
        value="Offline-Mode"
        id="Offline-Mode"
        checked={formData.mode==="Offline-Mode"}/>
        <label htmlFor="Offline-Mode">Offline Mode</label>

          <br /><br />

          <label htmlFor="favCar">Tell me your favCar </label>


        <select 
        onChange={changeHandler}
        name="favCar" 
        id="favCar"
        value={formData.favCar}
        >
        <option value="scarpio">Scarpio</option>
        <option value="thar">Thar</option>
        <option value="rangerover">RangeRover</option>
        <option value="scarpio">Scarpio</option>
        <option value="scarpio">Scarpio</option>
        </select>

          <br /><br />
        <button>Submit</button>
    </form>
    </div>
  );
}

export default App;
