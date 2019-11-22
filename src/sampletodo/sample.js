 import React from 'react';

 class Sample extends React.Component{
     state={
         username:"",
         password:"",
         data:[]
     }
     sampleChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }
     sampleClick=(e)=>{
         e.preventDefault();
         this.state.data.push({Name:this.state.username,pwd:this.state.password})
         this.setState({
             username:this.state.username="",
             password:this.state.password=""
         })
     }
     sampleDelete=(e)=>{
         e.preventDefault();
         this.state.data.splice(e,1);
         this.setState({})
     }
     render(){
         return(
            <form>
                <input type="text" placeholder="Username" name="username" value={this.state.username} 
                onChange={this.sampleChange}></input><br/>
                <input type="password" placeholder="Password" name="password" value={this.state.password} 
                onChange={this.sampleChange}></input><br/>
                <button className="btn btn-primary btn-sm" onClick={this.sampleClick}>Submit</button>
                <table class="table" >
                    <thead>
                        <tr>
                            <td>Username</td>
                            <td>Password</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.data.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.Name}</td>
                                    <td>{val.pwd}</td>
                                    <button className="btn btn-primary btn-sm">Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={this.sampleDelete}>Delete</button>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </form>
         )
     }
 }
 export default Sample;