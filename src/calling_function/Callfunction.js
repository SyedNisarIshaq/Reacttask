import React from 'react';
import uuid from 'uuid';


class Callfunction extends React.Component{
    state={
        id:null,
        Name:"",
        mail:"",
        parts:[],
        edit:false,
        editIndex:-1
    }
   
    
    submitValues=(e)=>{
        e.preventDefault()
        var Name=e.target.elements.Name.value
        var mail=e.target.elements.mail.value
        var parts=this.state.parts;
        var id=uuid();
        
        
        this.setState({
            Name,
            mail,
            id
        })
        e.target.elements.Name.value="";
        e.target.elements.mail.value="";
        if(this.state.edit==false)
        {
            //direct insert
            parts.push({id,Name,mail})
        }else{
            //editable update
            if(this.state.editIndex!=-1){//updated index of edit obj
                //assigning new value to existing edit obj
                parts[this.state.editIndex].Name=Name;
                parts[this.state.editIndex].mail=mail;
                parts[this.state.editIndex].id=id;

            }
        }
        //finally updating the parts state
        
        this.setState({parts})
    }

    editData = () => {
        this.setState({
            edit:true
        })
        console.log(this.state.parts)
    }
    deleteFunction=(id)=>{
        this.state.parts.splice(id,1)
        this.setState({})
    }
    
    render(){
        return(
            <form onSubmit={this.submitValues}>
                
                <label>Name:</label>
                <input type="text" name="Name"></input><br/>

                <label>Mail:</label>
                <input type="text" name="mail"></input><br/>

                <button type="submit">submit</button><br/>

                

                {/* <input type="text" name="tot" value={this.state.tot}></input>
                    <button type="reset">Edit</button>
                    <button>Delete</button> */}
                {/* {this.state.parts.map(val=><p>{val.name+" "+val.mail}</p>)} */}
            <table class="table">
                <thead>
                    <tr>
                        <td scope="col">Name</td>
                        <td scope="col">Mail</td>
                        <td scope="col">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.parts.map((val,index)=>{
                            return(
                                <tr>
                                    <td>{val.Name}</td>
                                    <td>{val.mail}</td>
                                    <button type="button" className="btn btn-primary btn-sm">Edit</button>
                                    <button onClick={()=>this.deleteFunction(index)} 
                                    className="btn btn-danger btn-sm">Delete</button>
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
export default Callfunction;
