import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileThunk } from 'redux/auth/thunks';
import { setToken } from 'api/auth';

export const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, profile } = useSelector(state => state.auth);
  useEffect(() => {
    if (token && !profile) {
      setToken(token);
      dispatch(getProfileThunk());
    }
  }, [dispatch, navigate, profile, token]);
  return (
    <>
      
      <Header />
      <Toaster />
      <Outlet />
    </>
  );
};

export default Layout;
