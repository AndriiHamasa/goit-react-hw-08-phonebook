import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/auth/thunks';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';

export const FormLogin = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'password') setPassword(value);
    if (name === 'email') setEmail(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        console.log('Welcome');
        // toast.success('Welcome');
      })
      .catch(() => toast.error('Error login'));

    console.log('REGISTER email, password', email, password);
  };

  return (
    <>
      <Typography variant="h4" align="center" style={{marginTop: 60, marginBottom: 20}}>
        Log In
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
          spacing={4}
        >
          <div>
            <div>
              <label htmlFor="exampleInputEmail1">Email</label>
            </div>
            <OutlinedInput
              type="email"
              name="email"
              size="small"
              id="exampleInputEmail1"
              onChange={handleChange}
            />
          </div>
          <div>
            <div>
              <label htmlFor="exampleInputPassword1">Password</label>
            </div>
            <OutlinedInput
              type="password"
              size="small"
              name="password"
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>

          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              type="submit"
              disabled={!email || !password}
            >
              Submit
            </Button>
            <Link component={RouterLink} to="/signup">
              SignUp
            </Link>

            <Link component={RouterLink} to="/">
              Home
            </Link>
          </Stack>
        </Stack>
      </form>
    </>
  );
};
