import React from 'react';
import FormInput from 'components/form-input/form-input.component'
import CustomButton from 'components/custom-button/custom-button.component'
import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';


class SignUp extends React.Component {

  initValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(props) {
    super(props);
    this.state = this.initValues;
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {

      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState(this.initValues);

    } catch (error) {

      console.log(error);

    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your E-mail and password.</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            label='Display Name'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type='email'
            label='E-mail'
            name='email'
            value={email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type='password'
            label='Password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            label='Confirm Password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type='submit'>Sign up</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;