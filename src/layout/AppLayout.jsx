import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";

function AppLayout(props) {
  return (
    <>
      <AppHeader />
      <div className="flex flex-row justify-center bg-slate-50">{props.children}</div>
      <AppFooter />
    </>
  );
}

export default AppLayout;
