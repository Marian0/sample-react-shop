import React, { useState } from 'react';
import FormInput from 'components/form-input/form-input.component'
import CustomButton from 'components/custom-button/custom-button.component'
import './sign-in.styles.scss';
import { signInWithGoogle, auth } from 'firebase/firebase.utils';
import { SpinnerContainer } from 'components/with-spinner/with-spinner.styles';


const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    })
  }

  return (
    <div className='sign-in'>
      {isLoading ? (
        <div className="spinner-container">
          <SpinnerContainer />
        </div>
      ) : (
          <div>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password.</span>

            <form onSubmit={handleSubmit}>
              <FormInput
                type='email'
                label='E-mail'
                name='email'
                value={email}
                handleChange={handleChange}
                required
              />

              <FormInput
                type='password'
                label='Password'
                name='password'
                value={password}
                handleChange={handleChange}
                required
              />
              <div className="buttons">
                <CustomButton type='submit'>Sign in</CustomButton>
                <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
              </div>
            </form>
          </div>
        )}
    </div>
  );
}

export default SignIn;