import React from "react";
import "./textareavalidation.css";
class Textareabox extends React.Component{
state={
    firstname:"",
    message:"",
    bordercolor:""
}
 allCharacters=(e)=> {
    // var regex =/a-zA-Z0-9!@#\$%\^\&*\)\(+=._-/g;
    if (e.target.value.length<200) {
        this.setState({
            Details:e.target.value,
            message:"",
            bordercolor:""
        })
    } else {
        this.setState({
            Details:e.target.value,
            message:"min 200 char only",
            bordercolor:"bordercolor"
        })
    }
  }
    render(){
    return(
        <form style={{marginTop:"30px"}}>
         <label >Details*</label>
      <textarea type="text"
      className={`form-control ${this.state.bordercolor}`}
      placeholder="Details"
      value={this.state.Details}
      required
      name="Details"
      rows="3"
      style={{width:"30%"}}
      onChange={this.allCharacters}
      >
      </textarea>
      <div style={{color:"red"}}>
      {this.state.message}
      </div>
      <button class="btn btn-primary" style={{marginTop:"30px"}} type="submit">Submit form</button>
        </form>
    )
    }
}
export default Textareabox;






















