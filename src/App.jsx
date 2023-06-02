import Header from 'components/Header';
import About from 'pages/About';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import User from 'pages/User';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { store } from 'redux/store';
import ROUTES from 'utils/routes';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <div className="app-container">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={ <About /> } />
            <Route path={ROUTES.USER} element={ <User /> } />
            <Route path={ROUTES.ANY} element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
