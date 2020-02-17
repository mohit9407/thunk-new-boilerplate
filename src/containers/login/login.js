import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Form, FormGroup, Input, Label} from 'reactstrap';

import {LoginMethod} from '../../actionMethods/authActionMethods';
import AlertModal from '../../components/alertModal/alertmodal';

class Login extends React.Component {
    changeHandler = (e) => {
        const {formFields} = this.state;
        formFields[e.target.id] = e.target.value;
        this.setState({formFields});
    };
    loginHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.LoginMethod(this.state.formFields);
    };

    constructor() {
        super();
        this.state = {
            formFields: {}
        }
    }

    render() {
        return (
            <React.Fragment>
                <AlertModal alertModal={this.props.alertModal}/>
                <div className='container'>
                    <h1>Login:</h1>
                    <Form onSubmit={this.loginHandler}>
                        <FormGroup>
                            <Label>Email:</Label>
                            <Input type='email'
                                   id='email'
                                   autoComplete='email'
                                   onChange={this.changeHandler}
                                   required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password:</Label>
                            <Input type='password'
                                   id='password'
                                   autoComplete='email'
                                   onChange={this.changeHandler}
                                   required
                            />
                        </FormGroup>
                        <button className='btn btn-success'>login</button>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        alertModal: state.alertModal
    }
};
const mapDispatchToProps = (dispatch) => bindActionCreators({LoginMethod}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Login);