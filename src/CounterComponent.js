import React, {Component} from 'react';
import CardComponent from './Card'

class CounterComponent extends Component{
    constructor(props){
        console.log('constructor')
        super(props);
        this.state={
            initialValue : 5
        }
    }
    // Page refresh, First time rennder from parent component
    componentDidMount(){
        console.log('Mounting Phase, componentDidMount');
    }
    // Update state variable
    componentDidUpdate(){
        console.log("Updating Phase, componentDidUpdate");
    }
    shouldComponentUpdate(props, toBeUpdatedValue){
        console.log(toBeUpdatedValue)
        if(toBeUpdatedValue.initialValue < 0) {
            return false;
        }
        else
            return true;
    }
    // Unrendering form parent component
    componentWillUnmount(){
        console.log("Unmounting Phase, componentWillUnMount")
    }
    handleIncrement = () => {
        this.setState({initialValue : this.state.initialValue + 1 })
    }
    render(){
        console.log('render')
        return(
            <>  
                <h3>{this.props.componentName} Component</h3>
                <CardComponent heading="Counter Component" subheading="Class Component" 
                    description="This component contains increment, descrement functionalities"/>
                <h4>Initial Value : {this.state.initialValue} </h4>
                <button onClick={this.handleIncrement}>Increment</button> &nbsp;
                <button onClick={() => this.setState({initialValue : this.state.initialValue -1})} >Decrement</button>
            </>
        )
    }
}

export default CounterComponent;

