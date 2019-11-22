import React from 'react';
import './login.css';

class Login extends React.Component{
    state={
        username:"",
        password:"",
        hint:"",
        submitClick1:"",
        submitClick2:"",
        submitClick3:""

    }
    submitButton=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitClick1=(e)=>{
        this.setState({
            submitClick1:this.state.username
        })
    }
    submitClick2=(e)=>{
        this.setState({
            submitClick2:this.state.password
        })
    }    
    submitClick3=(e)=>{
        this.setState({
            submitClick3:this.state.hint
        })
    }
    

    render(){
        return(
            <div onChange={this.submitButton} className="alterlogin">
                <div className="alignin">
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} ></input><br/>
                    <button type="submit" onClick={this.submitClick1}>submit</button>
                    <p>{this.state.submitClick1}</p>
                </div>
                <div className="alignin">
                    <label>Password:</label>
                    <input type="password" name="password" value={this.state.password} ></input><br/>
                    <button type="submit" onClick={this.submitClick2}>submit</button>
                    <p>{this.state.submitClick2}</p>
                </div>
                <div className="alignin">
                    <label>Hint:</label>
                    <input type="text" name="hint" value={this.state.hint} ></input><br/>
                    <button type="submit" onClick={this.submitClick3}>submit</button>
                    <p>{this.state.submitClick3}</p>
                </div>
            </div>
        )
    }
}
export default Login;