import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/LoginPage";
import UserListPage from "./pages/UserListPage";

import { Suspense } from "react";
import Profile from "./components/custom/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin/userList" element={<UserListPage />} />
          </Routes>
        </Suspense>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
