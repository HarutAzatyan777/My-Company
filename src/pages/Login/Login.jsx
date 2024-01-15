import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';
import styles from './Login.module.scss';
import Header from "../../components/Header/Header";

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      // Show a user-friendly notification instead of alert
      console.error('Invalid authentication');
      // You can use a notification library or a custom UI component here
      return;
    }

    if ('token' in data.payload) {
      // Consider more secure storage mechanisms than localStorage
      window.localStorage.setItem('token', data.payload.token);
    } else {
      // Show a user-friendly notification instead of alert
      console.error('Invalid authentication');
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.login}>
      <Header />
      <Paper classes={{ root: styles.root }}>
        <Typography classes={{ root: styles.title }} variant="h5">
          Login to client account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={styles.field}
            label="E-Mail"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            type="email"
            {...register('email', { required: 'Please enter your email' })}
            fullWidth
          />
          <TextField
            className={styles.field}
            label="Password"
            type="password"
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            {...register('password', { required: 'Please enter your password' })}
            fullWidth
          />
          <Button
            className={styles['button-login']} // Ensure this corresponds to your SCSS class
            disabled={!isValid}
            type="submit"
            size="large"
            variant="contained"
            fullWidth
          >
            Login
          </Button>
        </form>

        <Typography variant="body2" className={styles.registerText}>
          Don't have an account? <Link to="/register">Register here</Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default Login;
