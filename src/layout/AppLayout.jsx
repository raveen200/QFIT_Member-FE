import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import AppSideMenu from "./AppSideMenu";

function AppLayout(props) {
  const isLoginPage = location.pathname === "/login";
  return (
    <>
      <AppHeader />
      <div className="flex flex-row  ">
        <div className="mt-2 mb-4">{!isLoginPage && <AppSideMenu />}</div>
        <div className="flex flex-row justify-center w-full  bg-slate-50">{props.children}</div>
      </div>

      <AppFooter />
    </>
  );
}

export default AppLayout;
