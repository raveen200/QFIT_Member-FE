import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/LoginPage";
import UserListPage from "./pages/UserListPage";
import FinancePage from "./pages/FinancePage.jsx";
import { Suspense } from "react";
import ProfilePage from "./pages/ProfilePage.jsx";
import ReadQR from "./components/ReadQR.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import GateController from "./pages/GateController.jsx";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/admin/profile/:id" element={<ProfilePage />} />
            <Route path="/admin/dashboard" element={<DashboardPage />} />
            <Route path="/admin/userList" element={<UserListPage />} />
            <Route path="/admin/finance" element={<FinancePage />} />
            <Route path="/admin/gate" element={<GateController />} />

          </Routes>
        </Suspense>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
