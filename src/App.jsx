import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/LoginPage";
import UserListPage from "./pages/UserListPage";
import FinancePage from "./pages/FinancePage.jsx";
import { Suspense } from "react";
import ProfilePage from "./pages/ProfilePage.jsx";
import ReadQR from "./components/ReadQR.jsx";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/admin/profile/:id" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin/userList" element={<UserListPage />} />
            <Route path="/admin/finance" element={<FinancePage />} />
          </Routes>
        </Suspense>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
