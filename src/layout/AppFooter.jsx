import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup
} from "flowbite-react";
import NavLogo from "../assets/QfitLogo/favicon.svg";

function AppFooter() {
  const isLoginPage = location.pathname === "/login";
  return (
    <Footer container className="bg-nav-cream h-full dark:border-t-2 dark:border-cyan-200">
      <div className="w-full text-center">
        {!isLoginPage && (
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <FooterBrand href="#" src={NavLogo} alt="QFit Logo" name="QFit" />

            <FooterLinkGroup>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterLinkGroup>
          </div>
        )}

        <FooterCopyright href="#" by="QFit™" year={2024} />
      </div>
    </Footer>
  );
}

export default AppFooter;
