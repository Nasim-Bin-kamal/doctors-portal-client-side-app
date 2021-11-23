import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment/Appointment';
import LoginPage from './pages/LoginPage/LoginPage';
import Register from './pages/LoginPage/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/LoginPage/PrivateRoute/PrivateRoute';
import DashBoard from './pages/DashBoard/Dashboard/DashBoard';
import 'react-toastify/dist/ReactToastify.css';
import DashboardHome from './pages/DashBoard/DashboardHome/DashboardHome';
import Payment from './pages/DashBoard/Payment/Payment';
import AddAdmin from './pages/DashBoard/AddAdmin/AddAdmin';
import AdminRoute from './pages/LoginPage/AdminRoute/AdminRoute';
import AddDoctor from './pages/DashBoard/AddDoctor/AddDoctor';





function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/appointment" element={<PrivateRoute>
              <Appointment />
            </PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute>
              <DashBoard />
            </PrivateRoute>}>
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="dashboard/payment/:appointmentId" element={<Payment />} />
              <Route path="dashboard/addAdmin" element={<AdminRoute><AddAdmin /></AdminRoute>} />
              <Route path="dashboard/addDoctor" element={<AdminRoute><AddDoctor /></AdminRoute>} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </AuthProvider>

    </div >
  );
}

export default App;
