import React from 'react';

class Simpleform extends React.Component{
    
    state={
        firstname:"",
        lastname:"",
        total:""
    }
    submitForm = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    total = (e) => {
        this.setState({
            total:this.state.firstname+this.state.lastname
        })
    }


    render(){
        return(
            <div>
                <div onChange={this.submitForm}>
                <label>Firstname</label>

                <input type="Text" name={"firstname"} 
                value={this.state.firstname}
                ></input>

                <label>Lastname</label>

                <input type="Text" name={"lastname"} 
                value={this.state.lastname}
                ></input>

                <button onClick={this.total} type="submit">Submit</button>

                <p>{this.state.total}</p>
               </div>
            </div>
        )
    }
}
export default Simpleform;
