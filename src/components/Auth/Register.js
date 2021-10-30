/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Grid, Form, Segment, Button, Header, Message, Icon,
} from 'semantic-ui-react';

const Register = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    passfwordconfirmation: '',
    email: '',

  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" icon color="orange" textAlign="center">
          <Icon name="puzzle piece" color="orange" />
          Register for Developer Chat
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Username" onChange={handleChange} type="text" />
            <Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address" onChange={handleChange} type="email" />
            <Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="Password" onChange={handleChange} type="password" />
            <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" placeholder="Password Confirmation " onChange={handleChange} type="password" />
            <Button color="orange" fluid size="large">Submit</Button>
          </Segment>
        </Form>
        <Message>
          Already a user?
          {' '}
          <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
