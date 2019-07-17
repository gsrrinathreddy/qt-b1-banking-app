import React,{Component} from 'react';
import {Form,Button} from 'react-bootstrap';
import './Register.css';
class Register extends Component{
    render(){
        return(
            <div className="register">
                            <Form>

             <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
                
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Enter Mobile" />
                
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div>
        )
    }
}

export default Register;