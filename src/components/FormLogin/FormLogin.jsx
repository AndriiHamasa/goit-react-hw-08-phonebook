import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/auth/thunks';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import { Button, Stack } from '@mui/material';
import { Textarea } from '@mui/joy';
import { useState } from 'react';

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
        toast.success('Welcome');
      })
      .catch(() => toast.error('Error login'));

    console.log('REGISTER email, password', email, password);
  };

  return (
    <>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <Stack
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
          spacing={4}
        >
          <div>
            <label htmlFor="exampleInputEmail1">
              Email address
              <Textarea
                name="email"
                type="email"
                id="exampleInputEmail1"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label htmlFor="exampleInputPassword1">
              Password
              <Textarea
                name="password"
                type="password"
                id="exampleInputPassword1"
                onChange={handleChange}
              />
            </label>
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
