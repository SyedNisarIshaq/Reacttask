import React from 'react';
import uuid from 'uuid';
class Todo extends React.Component{
    state = {
        id:null,
        Name:"",
        Gmail:"",
        parts:[],
        editchange:true,
        currentstate:""
    }
    submitData = (e) => {
        {
            this.setState({
              [e.target.name]:e.target.value});
        }
    }
    clickData=(e)=>{
        e.preventDefault();
        var id = uuid();
        this.state.parts.push({id:id,Name:this.state.Name,Gmail:this.state.Gmail})
        this.setState({
            Name:"",
            Gmail:""
        })
    }
    deleteFunction= (e)=>{
        this.state.parts.splice(e,1)
        this.setState({})
    }
    
    editFunction=(id)=>{
        console.log(this.state.Name)
        this.setState(
            {
                Name:this.state.parts[id].Name,
                Gmail:this.state.parts[id].Gmail,
                editchange:!this.state.editchange,
                currentstate:id
            }
        )
     }
     updatefunction=(e)=>{
         e.preventDefault()
        this.state.parts[this.state.currentstate].Name=this.state.Name
        this.state.parts[this.state.currentstate].Gmail=this.state.Gmail
        this.setState({editchange:!this.state.editchange,Name:"",Gmail:""})
     }
    render(){
        console.log(this.state.parts)
        return(
            <>
                <form >
                    <input type="text" name="Name" value={this.state.Name} onChange={this.submitData}/><br/>
                    <input type="text" name="Gmail" value={this.state.Gmail} onChange={this.submitData}/><br/>
                    {this.state.editchange?
                    <button type="submit" className="btn btn-primary btn-sm" onClick={this.clickData}>Submit</button>
                        :
                    <button type = "reset" className="btn btn-primary btn-sm" onClick={this.updatefunction}>Update</button>
                    }
                </form>
               <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Gmail</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.parts.map((val,Index)=>{
                                return(
                                    <tr>
                                        <td>{val.Name}</td>
                                        <td>{val.Gmail}</td>
                                        <button type = "reset"className="btn btn-primary btn-sm" onClick={()=>this.editFunction(Index)}>Edit</button>
                                        <button className="btn btn-danger btn-sm"onClick={()=>this.deleteFunction(Index)}>Delete</button>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}
export default Todo;