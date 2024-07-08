import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
  DarkThemeToggle,
  Flowbite
} from "flowbite-react";
import NavLogo from "../assets/QfitLogo/favicon.svg";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/slices/LayoutSlice";
import { useNavigate } from "react-router-dom";

function AppHeader() {
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/";
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Navbar fluid rounded className="bg-nav-cream dark:border-b-2 dark:border-cyan-200">
      {!isLoginPage && <NavbarToggle onClick={handleToggleSidebar} />}
      <NavbarBrand
        className="cursor-pointer"
        onClick={() => {
          navigate("/admin/dashboard");
        }}>
        <img src={NavLogo} className="mr-3 h-6 sm:h-9 " alt="Qfit-Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          QFit
        </span>
      </NavbarBrand>

      <div className="flex md:order-2">
        <div className="mr-4">
          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>
        </div>

        {!isLoginPage && (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }>
            <DropdownHeader>
              <span className="block text-sm">Name</span>
              <span className="block truncate text-sm font-medium">Email</span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
        )}
      </div>
    </Navbar>
  );
}

export default AppHeader;
