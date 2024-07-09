import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiChartPie, HiInbox, HiUser, HiUserGroup, HiViewBoards } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearMembership } from "../redux/slices/MembershipSlice";

function AppSideMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileView, setMobileView] = useState("");
  const { isOpen } = useSelector((state) => state.layout.sidebar);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      // Perform actions based on mobile view
      if (isMobile) {
        // Code for mobile view
        setMobileView(
          "absolute z-50 h-full shadow-lg transform  transition ease-in-out duration-700"
        );
      } else {
        // Code for non-mobile view
        setMobileView("");
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFinance = () => {
    dispatch(clearMembership());
    navigate("/admin/finance");
  };

  return (
    <div
      className={`transition ease-in-out duration-700 h-screen    ${isOpen ? `${mobileView}` : "hidden "}`}>
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              className="cursor-pointer"
              onClick={() => {
                navigate("/admin/dashboard");
              }}
              icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Inbox
            </Sidebar.Item>

            <Sidebar.Collapse icon={HiUser} label="Members">
              <Sidebar.Item
                className="cursor-pointer"
                onClick={() => {
                  navigate("/admin/userList");
                }}>
                Member List
              </Sidebar.Item>
              <Sidebar.Item
                className="cursor-pointer"
                onClick={() => {
                  navigate("/admin/profile");
                }}>
                Profile
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse icon={HiUserGroup} label="Instructors">
              <Sidebar.Item href="#">Instructors List</Sidebar.Item>
              <Sidebar.Item href="#">Profile</Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item className="cursor-pointer" onClick={handleFinance} icon={HiChartPie}>
              Finance
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Settings
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default AppSideMenu;
