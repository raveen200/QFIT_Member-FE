import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";

function AppLayout(props) {
  const isLoginPage = location.pathname === '/login';
  return (
    <>
      <AppHeader />
      <div className="flex flex-row justify-center bg-slate-50">{props.children}</div>
      
     { !isLoginPage && <AppFooter />}

    </>
  );
}

export default AppLayout;
