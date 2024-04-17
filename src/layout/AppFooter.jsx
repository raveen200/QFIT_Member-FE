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
  return (
    <div>
      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <FooterBrand
              href="https://flowbite.com"
              src={NavLogo}
              alt="QFit Logo"
              name="QFit Management Systems"
            />
            <FooterLinkGroup>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterLinkGroup>
          </div>
          <FooterDivider />
          <FooterCopyright href="#" by="QFit™" year={2024} />
        </div>
      </Footer>
    </div>
  );
}

export default AppFooter;
