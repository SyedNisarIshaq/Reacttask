import React from 'react';
import Username from './Username';
import Password from './Password';
import Hint from './Hint';
import './forms.css';

class Forms extends React.Component{
    render(){
        return(
            <div className="formsalter">
                <Username/>
                <Password/>
                <Hint/>
            </div>
            )
    }
}
export default Forms;