import { Button, Typography } from '@mui/material';
import { delToken } from 'api/auth';
import { UserMenu } from 'components/userMenu/userMenu';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/thunks';
import Stack from '@mui/material/Stack';

export const Header = () => {
  const { token: isAuth, profile } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutThunk());
    delToken();
  };
  const handleLogIn = () => {
    navigate('/login');
  };
  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={4}
      style={{ marginTop: 15 }}
    >
      <Button onClick={() => navigate('/')}>Home</Button>
      {profile && (
        <Button onClick={() => navigate('/contacts')}>Contacts</Button>
      )}
      {profile && (
        <Typography
          variant="h4"
          style={{ color: '#002884' }}
        >
          {isAuth && profile.name}
        </Typography>
      )}

      {isAuth ? (
        <UserMenu email={profile?.email} logout={handleLogOut} />
      ) : (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Button variant="contained" onClick={handleLogIn}>
            Log In
          </Button>
          <Button onClick={handleSignUp}>Sign Up</Button>
        </Stack>
      )}
    </Stack>
  );
};
