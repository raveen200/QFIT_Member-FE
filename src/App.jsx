import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/LoginPage";
import UserListPage from "./pages/UserListPage";

import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<UserListPage />} />
          </Routes>
        </Suspense>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
