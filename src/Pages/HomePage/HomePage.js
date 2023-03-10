import { useSelector } from 'react-redux';
import { SingInPage } from 'Pages/SingInPage/SingInPage';
import { getIsLoggedIn, getIsRefreshing } from 'redux/auth/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  return (
    <div>
      {isLoggedIn && !isRefreshing && <SingInPage />}
      {!isLoggedIn && !isRefreshing && <SingInPage />}
    </div>
  );
};

export default HomePage;
