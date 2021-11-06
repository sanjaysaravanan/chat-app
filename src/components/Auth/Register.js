/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from 'semantic-ui-react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase';

const Register = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
    email: '',
    errors: [],
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const displayErrors = (errors) => errors.map(
    (error) => <p key={error.message}>{error.message}</p>,
  );

  const isFormEmpty = ({
    username, email, password, passwordConfirmation,
  }) => !username.length || !email.length || !password.length || !passwordConfirmation.length;

  const isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    }
    if (password !== passwordConfirmation) {
      return false;
    }
    return true;
  };

  const isFromValid = () => {
    const errors = [];
    let error;

    if (isFormEmpty(state)) {
      error = { message: 'Fill all the fields' };
      setState({ ...state, errors: errors.concat(error) });
      return false;
    } if (!isPasswordValid(state)) {
      error = { message: 'Password is invalid' };
      setState({ ...state, errors: errors.concat(error) });
      return false;
    }
    setState({ ...state, errors: [] });
    return true;
  };

  const resetForm = () => {
    setState({
      username: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      errors: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFromValid()) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, state.email, state.password)
        .then((createdUser) => {
          // eslint-disable-next-line
          console.log(createdUser);
          resetForm();
        })
        .catch((err) => {
        // eslint-disable-next-line
        console.log(err)
        });
    }
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
            <Form.Input
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Username"
              onChange={handleChange}
              value={state.username}
              type="text"
            />
            <Form.Input
              fluid
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email Address"
              onChange={handleChange}
              value={state.email}
              type="email"
            />
            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              onChange={handleChange}
              value={state.password}
              type="password"
            />
            <Form.Input
              fluid
              name="passwordConfirmation"
              icon="repeat"
              iconPosition="left"
              placeholder="Password Confirmation "
              onChange={handleChange}
              value={state.passwordConfirmation}
              type="password"
            />
            <Button color="orange" fluid size="large">
              Submit
            </Button>
          </Segment>
        </Form>
        {state.errors.length > 0 && (
          <Message error>
            <h3>Error</h3>
            {displayErrors(state.errors)}
          </Message>
        )}
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
