import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from 'redux/auth/actions';
import { PublicRoute } from './PublicRoute';
import { PrivatRoute } from './PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getIsRefreshing } from 'redux/auth/selectors';
import { Container } from './App.styled';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
// const ContactDetails = lazy(() =>
//   import('Pages/ContactDetails/ContactDetails')
// );
const ContactsPage = lazy(() => import('Pages/ContactsPage/ContactsPage'));
const SingUpPage = lazy(() => import('Pages/SingUpPage/SingUpPage'));
const SingInPage = lazy(() => import('Pages/SingInPage/SingInPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(getIsRefreshing);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<SingInPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts" component={<SingUpPage />} />
            }
          />
          {/* <Route
            path="/contacts"
            element={
              <PrivatRoute redirectTo="/login" component={<ContactsPage />} />
            }
          >
            <Route
              path=":id"
              element={
                <PrivatRoute
                  redirectTo="/login"
                  component={<ContactDetails />}
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} /> */}
        </Route>
      </Routes>
      <ToastContainer />
    </Container>
  );
};
