import 'bootstrap/dist/css/bootstrap.css';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { store } from 'redux/store';
import ROUTES from 'utils/routes';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router basename={ROUTES.HOME}>
        {/* <Header /> */}
        <div className="app-container">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            {/* <Route path={ROUTES.ABOUT} element={ <About /> } /> */}
            {/* <Route path={ROUTES.USER} element={ <User /> } /> */}
            <Route path={ROUTES.ANY} element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
