import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { HomePage } from 'Pages/HomePage/HomePage';
import { ContactsPage } from 'Pages/ContactsPage/ContactsPage';
import { RegisterPage } from 'Pages/RegisterPage/RegisterPage';
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />

       
      </Route>
      <Route path="/signup" element={<PublicRoute><RegisterPage /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
    </Routes>
  );
};

export default App;
