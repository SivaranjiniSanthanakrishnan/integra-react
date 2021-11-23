import React,{useState, useEffect} from 'react';
import './App.css';
import CounterComponent from './CounterComponent';
import CardComponent from './Card';

function App (props) {
    
    const [toggleCounterComponent, setToggleCounterComponent] = useState(true);
    const [toggleCard, setToggleCard] = useState(true);

    useEffect(()=>{
      console.log("Mounting Phase and in updating phase of all state variables");
    })

    useEffect(()=> {
      console.log("Only at the mounting phase")
    }, [])

    useEffect(()=> {
      console.log("Mounting and Updating phase of toggleCounterComponent")
    }, [toggleCounterComponent])

    useEffect(()=>{
      console.log("Mounting and Updating Phase of toggleCard")
    }, [toggleCard])

    useEffect(()=> {
      console.log("Mounting and Updating phase of toggleCounterComponent and toggleCard")
    }, [toggleCounterComponent, toggleCard])


    const sum = (a,b) => {
      return a+b
    }

    const toggleComponent = (valueFromChild) => {
      setToggleCounterComponent(!valueFromChild);
    }

    return (
      <div className="App" style={{padding: '30px'}}>

        <button onClick={() => setToggleCard(!toggleCard)} >Toggle Card </button> <br/>

        {toggleCard ?  <CardComponent heading="App Component" subheading="Home component" 
        description="This is the home component after index.js page" 
        toggleFunctionality={(toggle)=> toggleComponent(toggle)}/> : <></>}

        <br/>

        The sum value is {sum(3,4)} <br/> <br/>

        {/* Conditional Rendering */}
        {toggleCounterComponent ? <CounterComponent componentName="Counter"/> : <></>}  
      </div>
    );
  
}

export default App;
