import React from 'react';


class Password extends React.Component{
    state={
        password:"",
        showPassword:""
    }
    submitPassword=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    showPassword=(e)=>{
        this.setState({
            showPassword:this.state.password
        })
    }
    render(){
        return(
            <div onChange={this.submitPassword} className="nph">
                <label>Password:</label>
                <input type="password" name="password" value={this.state.password} /><br/>
                <button onClick={this.showPassword}>Submit</button>
                <p>{this.state.showPassword}</p>
            </div>
        )
    }
}
export default Password;