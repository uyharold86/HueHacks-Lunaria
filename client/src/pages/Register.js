import React,{useState} from 'react';
import {Button, Form} from 'semantic-ui-react'
import {useMutation} from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { useForm }  from '../util/hooks'

function Register(props){
  cons[errors, setErrors] = useState({});
  
  const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const { onChange, onSubmit, values } = useForm(addUser, {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })


  const [addUser, {loading}] = useMutation(REGISTER_USER, {
    update(_,result){
      props.history.push('/')
    },
    onError(err){
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });

  function registerUser(){
    addUser();
  }

  return (
      <div className="form-container">
        <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ''}>
          <h1>Register</h1>
          <Form.Input
            lable="Username"
            placeholder="Username.."
            name="username"
            type="text"
            value={values.username}
            error={errors.username ? true : flase}
            onChange={onChange}
            />
          <Form.Input
            lable="Email"
            placeholder="Email.."
            name="email"
            type="email"
            value={values.emal}
            error={errors.email ? true : flase}
            onChange={onChange}
            />
          <Form.Input
            lable="Password"
            placeholder="Password.."
            name="password"
            type="password"
            value={values.password}
            error={errors.password ? true : flase}
            onChange={onChange}
            />
          <Form.Input
            lable="Confirm Password"
            placeholder="Confirm Password.."
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            error={errors.confirmPasswrod ? true : flase}
            onChange={onChange}
            />
            <Button type="submit" primary>
              Register
            </Button>

        </Form>
        {Object.keys(errors).length > 0 && (
          <div className="ui error message">
          <ul className="list">
            {Object.vaalues(errors).map(value => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
        )}
      </div>
  );
}

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ){
      id email username createdAt token
    }
  }
`

export default Register;