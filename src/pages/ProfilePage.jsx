import React, { useEffect, useState } from "react";
import { FaSuitcase } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import GreaterThanIcon from "../components/custom/Icon/GreaterThanIcon.jsx";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMemberByIdAction } from "../redux/actions/MemberActions";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import EditPersonalModal from "./EditPersonalModal.jsx";
import EditGeneralModal from "./EditGeneralModal.jsx";
import { PiIdentificationCardBold } from "react-icons/pi";
import { getMembershipByIdAction } from "../redux/actions/MembershipActions";

function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailedMember = useSelector((state) => state.memberInfo.member.result);
  const selectedMembership = useSelector((state) => state.membershipInfo.membership);

  const [openEditPersonalModal, setOpenEditPersonalModal] = useState(false);
  const [openEditGeneralModal, setOpenEditGeneralModal] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      dispatch(getMemberByIdAction(id));
      dispatch(getMembershipByIdAction(id));
    };
    fetchMembers();
  }, [dispatch, id]);

  const handleEditPersonalModal = () => {
    setOpenEditPersonalModal(true);
  };
  const handleEditGeneralModal = () => {
    setOpenEditGeneralModal(true);
  };

  return (
    <div className="w-full bg-white  dark:bg-gray-800">
      <div className="col-span-full px-4 pt-6">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center">
            <li className="group flex items-center">
              <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <div className="flex items-center gap-x-3">
                  <TiHome size={24} />
                  <span className="dark:text-white">Home</span>
                </div>
              </a>
            </li>
            <li className="group flex items-center">
              <GreaterThanIcon />
              <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Member
              </a>
            </li>
            <li className="group flex items-center">
              <GreaterThanIcon />
              <span className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                Profile
              </span>
            </li>
          </ol>
        </nav>
        <h1 className="text-xl font-semibold text-gray-900  dark:text-white sm:text-2xl">
          Profile
        </h1>
      </div>
      <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 w-full ">
        <div className="col-span-full xl:col-auto">
          <div className="mb-4 rounded-lg bg-stone-50 p-4 shadow dark:bg-gray-800 dark:border-2 dark:border-cyan-200 sm:p-6 xl:p-8">
            <div className="flex justify-between">
              <div>
                <div className="sm:flex sm:space-x-4 xl:block xl:space-x-0">
                  <img
                    alt=""
                    src={
                      detailedMember?.dp ||
                      "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                    }
                    className="mb-2 h-20 w-20 rounded-lg"
                  />
                  <div>
                    <h2 className="text-xl font-bold dark:text-white">
                      {detailedMember?.firstName} {detailedMember?.lastName}
                    </h2>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center text-gray-600 dark:text-gray-400">
                        <PiIdentificationCardBold className="mr-2" />
                        <span> G-{detailedMember?.id || "No Gym Id found"}</span>
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-400">
                        <FaSuitcase className="mr-2" />
                        <span>{detailedMember?.job || "No Job Position found"}</span>
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-400">
                        <RiMapPin2Fill className="mr-2" />
                        <span>{detailedMember?.city || "No City Found"}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="sm:flex xl:block xl:space-y-4">
                    <div className="sm:flex-1">
                      <address className="text-sm font-normal not-italic text-gray-500 dark:text-gray-400">
                        <div className="mt-4">Email address</div>
                        <a
                          className="text-sm font-medium text-gray-900 dark:text-white"
                          href="mailto:webmaster@flowbite.com">
                          {detailedMember?.email || "No email found"}
                        </a>
                        <div className="mt-4">Home address</div>
                        <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          {detailedMember?.address || "No address found"}
                        </div>
                        <div className="mt-4">Phone number</div>
                        <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          {detailedMember?.mobileNumber || "No phone number found"}
                        </div>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <BiSolidMessageSquareEdit
                  size={35}
                  onClick={handleEditPersonalModal}
                  className=" hover:bg-gray-100 hover:text-cyan-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                />
              </div>
            </div>
          </div>

          <div className="mb-4 rounded-lg bg-stone-50 p-4 shadow dark:bg-gray-800 dark:border-2 dark:border-cyan-200 sm:p-6 xl:p-8">
            <div className="flow-root">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold dark:text-white">Membership</h2>

                <div>
                  <BiSolidMessageSquareEdit
                    size={35}
                    className=" hover:bg-gray-100 hover:text-cyan-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  />
                </div>
              </div>

              <div className="sm:flex xl:block xl:space-y-4">
                <div className="sm:flex-1">
                  <address className="text-sm font-normal not-italic text-gray-500 dark:text-gray-400">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="mt-4">Membership Plan</div>
                        <a className="text-sm font-medium text-gray-900 dark:text-white">
                          {selectedMembership?.membershipType === 1
                            ? "Monthly"
                            : selectedMembership?.membershipType === 2
                              ? "Quarterly"
                              : selectedMembership?.membershipType === 3
                                ? "Semi_Annually"
                                : selectedMembership?.membershipType === 4
                                  ? "Annually"
                                  : selectedMembership?.membershipType === 5
                                    ? "Corporate"
                                    : "No Data found"}
                        </a>
                      </div>

                      <div>
                        <div className="mt-4">Days left</div>
                        <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          {selectedMembership?.remainingDays || "No Data found"}
                        </div>
                      </div>
                    </div>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-4 rounded-lg bg-stone-50 p-4 shadow dark:bg-gray-800 dark:border-2 dark:border-cyan-200 sm:p-6 xl:p-8">
            <div className="flex justify-between">
              <h3 className="mb-4 text-xl font-bold dark:text-white">General information</h3>
              <div>
                <BiSolidMessageSquareEdit
                  onClick={handleEditGeneralModal}
                  size={35}
                  className=" hover:bg-gray-100 hover:text-cyan-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                />
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="text-lg font-medium text-gray-900 dark:text-white">About me</dt>
                <dd className="mt-1 max-w-prose space-y-3 text-sm text-gray-500 dark:text-gray-400">
                  <p>{detailedMember?.aboutMe || "No Data found"}</p>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Age</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {detailedMember?.age || "No Data found"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Gender</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {detailedMember?.gender === 1
                    ? "Male"
                    : detailedMember?.gender === 2
                      ? "Female"
                      : "No Data found"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Join Date</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {detailedMember?.joinDate || "No Data found"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">NIC</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {detailedMember?.nic || "No Data found"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Height</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {detailedMember?.height || "No Data found"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Weight</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {detailedMember?.weight || "No Data found"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Instructor</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {detailedMember?.insName || "No Data found"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div>
        {openEditPersonalModal && (
          <EditPersonalModal
            openEditPersonalModal={openEditPersonalModal}
            setOpenEditPersonalModal={setOpenEditPersonalModal}
            detailedMember={detailedMember}
          />
        )}
      </div>
      <div>
        {openEditGeneralModal && (
          <EditGeneralModal
            openEditGeneralModal={openEditGeneralModal}
            setOpenEditGeneralModal={setOpenEditGeneralModal}
            detailedMember={detailedMember}
          />
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
