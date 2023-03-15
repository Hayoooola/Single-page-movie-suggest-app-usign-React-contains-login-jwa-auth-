import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';

import { Movies } from './pages/movie-list/movies';
import { Movie } from './pages/movie_item/movie';
import { LoginPage } from './pages/login-page/login';
import { SignUP } from './pages/sign-up/singUp';
import { Page404 } from './pages/404/404';
import { Page403 } from './pages/403/403';
import { checkLoginStatus } from './store/features/auth-features/checkLoginStatus';
import Loading from './components/loading/loading';
import NavBar from './components/navbar/navbar';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const isUserLogin = useSelector(store => store.loginStatus.isUserLogin);

  // request check login status
  useEffect(() => {
    dispatch(checkLoginStatus());
    setLoading(false);
  }, [isUserLogin]);


  const routesToShow = () => {
    if (loading) {
      return <Loading />;
    } else {
      if (!isUserLogin) {
        return (
          <BrowserRouter>
            <Routes>
              <Route path='/' element={< Page403 />} />
              <Route path='/login' element={< LoginPage />} />
              <Route path='/sign-up' element={< SignUP />} />
              <Route path='/movie/:movieId' element={< Page403 />} />
              <Route path='*' element={< Page404 />} />
            </Routes>
          </BrowserRouter>
        );
      } else {
        return (
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={< Movies />} />
              <Route path='/movie/:movieId' element={< Movie />} />
              <Route path='/login' element={< LoginPage />} />
              <Route path='/sign-up' element={< SignUP />} />
              <Route path='*' element={< Page404 />} />
            </Routes>
          </BrowserRouter>
        );
      }
    }
  };
  return (
    <div>
      <ToastContainer />
      {routesToShow()}
    </div>
  );
}

export default App;
