import React from 'react';


class Hint extends React.Component{
    state={
        hint:"",
        showHint:""
    }
    submitHint=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    showHint=(e)=>{
        this.setState({
            showHint:this.state.hint
        })
    }
    render(){
        return(
            <div onChange={this.submitHint} className="nph">
                <label>Hint:</label>
                <input type="text" name="hint" value={this.state.hint} /><br/>
                <button type="submit" onClick={this.showHint} >Submit</button>
                <p>{this.state.showHint}</p>
            </div>
        )
    }
}
export default Hint;