import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/joy';
import { Button, OutlinedInput, Stack, Typography } from '@mui/material';
import { signUpThunk } from 'redux/auth/thunks';
import { useDispatch } from 'react-redux';

export const FormRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value);
    if (name === 'password') setPassword(value);
    if (name === 'email') setEmail(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(signUpThunk({ name, email, password })).unwrap().then(() => {
      navigate('/');
    });
  };
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        style={{ marginTop: 60, marginBottom: 20 }}
      >
        Sign Up
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
              <label htmlFor="name">Name</label>
            </div>
            <OutlinedInput
              type="text"
              name="name"
              size="small"
              id="name"
              onChange={handleChange}
            />
          </div>

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
              name="password"
              size="small"
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>

          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              type="submit"
              disabled={!email || !password || !name}
            >
              Submit
            </Button>
            <Link component={RouterLink} to="/login">
              LogIn
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
