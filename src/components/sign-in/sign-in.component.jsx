import React from 'react';
import FormInput from 'components/form-input/form-input.component'
import CustomButton from 'components/custom-button/custom-button.component'
import './sign-in.styles.scss';
import { signInWithGoogle, auth } from 'firebase/firebase.utils';


class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });

    } catch (error) {
      console.log(error);
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
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
          <div className="buttons">
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;