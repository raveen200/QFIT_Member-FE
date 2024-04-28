import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
  Flowbite
} from "flowbite-react";
import NavLogo from "../assets/QfitLogo/favicon.svg";

function AppHeader() {
  const isLoginPage = location.pathname === "/login";
  return (
    <Navbar fluid rounded className="bg-nav-cream">
      <NavbarBrand href="">
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
        <NavbarToggle />
      </div>
    </Navbar>
  );
}

export default AppHeader;
