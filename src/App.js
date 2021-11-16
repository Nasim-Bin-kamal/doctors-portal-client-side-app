import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment/Appointment';
import LoginPage from './pages/LoginPage/LoginPage';
import Register from './pages/LoginPage/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/LoginPage/PrivateRoute/PrivateRoute';
import DashBoard from './pages/DashBoard/Dashboard/DashBoard';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard />
            </PrivateRoute>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
