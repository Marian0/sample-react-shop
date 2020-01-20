import React, { useState } from 'react';
import FormInput from 'components/form-input/form-input.component'
import CustomButton from 'components/custom-button/custom-button.component'
import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

const initValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [formValues, setFormValues] = useState(initValues);
  const { displayName, email, password, confirmPassword } = formValues;

  const handleSubmit = async event => {
    event.preventDefault();

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

      setFormValues(this.initValues);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your E-mail and password.</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          label='Display Name'
          name='displayName'
          value={displayName}
          handleChange={handleChange}
          required
        />

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
        <FormInput
          type='password'
          label='Confirm Password'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type='submit'>Sign up</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignUp;