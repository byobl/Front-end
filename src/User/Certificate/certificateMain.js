import React, { Component } from 'react';
import { Route,  Switch } from 'react-router-dom';
import {CareerRegistration} from './index'

class CertificateMain extends Component {
    render() {
        return (
            <div>
                <p>certificateMain</p>
                <p>certificateMain</p>
                <p>certificateMain</p>
                <p>certificateMain</p>
                <Switch>
                    <Route path='/' component={CareerRegistration} exact/>
                </Switch>

                <Route path='/careerRegistration' component={CareerRegistration} exact/>
            </div>
        )
    }
}
export default CertificateMain;