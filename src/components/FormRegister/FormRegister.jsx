import { signUp } from 'api/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Textarea } from '@mui/joy';
import { Button, Stack } from '@mui/material';

export const FormRegister = () => {
  const navigate = useNavigate();
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

    signUp({ name, email, password }).then(() => {
      navigate('/login');
    });
  };
  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <Stack
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
          spacing={4}
        >
          <div>
            <label htmlFor="name">
              Name
              <Textarea
                name="name"
                type="text"
                id="name"
                onChange={handleChange}
              />
            </label>
          </div>
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
