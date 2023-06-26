import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import DashboardHome from "./pages/dashboard-home/Dashboard-home";
import DashboardProfile from "./pages/dashboard-profile/Dashboard-profile";
import DashboardSettings from "./pages/dashboard-settings/Dashboard-settings";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<DashboardHome />} />
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
