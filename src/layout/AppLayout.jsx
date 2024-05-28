import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import AppSideMenu from "./AppSideMenu";
import CustomToastContainer from "../components/custom/CustomToastContainer";

function AppLayout(props) {
  const isLoginPage = location.pathname === "/login";
  return (
    <>
      <CustomToastContainer />
      <AppHeader />
      <div className="flex flex-row  dark:bg-gray-800">
        <div className="h-full mr-1">{!isLoginPage && <AppSideMenu />}</div>
        <div className="flex flex-row justify-center w-full bg-slate-50 dark:bg-gray-800">
          {props.children}
        </div>
      </div>

      <AppFooter />
    </>
  );
}

export default AppLayout;
