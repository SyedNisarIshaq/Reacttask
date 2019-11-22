import React from 'react';
import Hint from './Hint';

class Username extends React.Component{
    state={
        username:"",
        showName:""
    }
    submitName=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    showName=(e)=>{
        this.setState({
            showName:this.state.username
        })
    }
    render(){
        return(
            <div onChange={this.submitName} className="nph">
                <label>Username:</label>
                <input type="text" name="username" value={this.state.username}/><br/>
                <button onClick={this.showName} type="submit" >Submit</button>
                <p>{this.state.showName}</p>
            </div>
        )
    }
}
export default Username;