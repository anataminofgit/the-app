

import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import  {signOut} from '../store/action/authActions'
import { connect } from 'react-redux'

//import Navbar from 'react-bootstrap/Navbar'

//import 'bootstrap/dist/css/bootstrap.min.css';
//import {NavLink} from 'react-router-dom'

const SigninLinks =(props) => {
return(
<Nav >
    <Nav.Link href ="/features">Features</Nav.Link>
    <Nav.Link href ="/pricing">Pricing</Nav.Link>
   {/*  <Navbar.Text>
      Signed in as: <a href="/login">Mark Otto</a>
    </Navbar.Text> */}
    <Form inline>
      <Button variant="outline-info"  onClick={props.signOut} >Logout</Button>
    </Form>
</Nav>
)
}


const mapDispatchToProps = (dispatch)=> {
    return {
      signOut: () => dispatch(signOut())
    }
  }

export default connect(null, mapDispatchToProps)(SigninLinks);
