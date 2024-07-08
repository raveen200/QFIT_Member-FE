import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import AppSideMenu from "./AppSideMenu";
import CustomToastContainer from "../components/custom/CustomToastContainer";
import { useLocation } from "react-router-dom";

function AppLayout(props) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  return (
    <>
      <CustomToastContainer />
      <AppHeader />
      <div className="flex flex-row  dark:bg-gray-800">
        <div className="mb-4 h-full">{!isLoginPage && <AppSideMenu />}</div>
        <div className="flex flex-row justify-center w-full bg-slate-50  dark:bg-gray-800">
          {props.children}
        </div>
      </div>

      <AppFooter />
    </>
  );
}

export default AppLayout;
