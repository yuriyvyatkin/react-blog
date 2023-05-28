import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'redux/store';
import ROUTES from "utils/routes";
import './App.css';
import CardsTile from './components/CardsTile';
// import NotFound from 'pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <Router basename={ROUTES.HOME}>
        {/* <Header /> */}
        {/* <Routes>
          <Route exact path={ROUTES.HOME} element={ <Home /> } />
          <Route exact path={ROUTES.ABOUT} element={ <About /> } />
          <Route exact path={ROUTES.USER} element={ <User /> } />
          <Route path={'*
          '} element={ <NotFound /> } />
        </Routes> */}
        <div className="app-container">
          <CardsTile />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
