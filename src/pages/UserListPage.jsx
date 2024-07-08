import React, { useEffect, useState } from "react";
import { TiHome } from "react-icons/ti";
import GreaterThanIcon from "../components/custom/Icon/GreaterThanIcon";
import AddMemberModal from "./AddMemberModal";
import { getAllMembersAction } from "../redux/actions/MemberActions";
import { useDispatch, useSelector } from "react-redux";
import { getAllMembershipsAction } from "../redux/actions/MembershipActions";
import { useNavigate } from "react-router-dom";
import CustomDeleteModal from "../components/custom/CustomDeleteModal";


function UserLIstPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openUseraddModal, setOpenUseraddModal] = useState(false);
  const members = useSelector((state) => state.memberInfo.members.result);
  const memberships = useSelector((state) => state.membershipInfo.memberships);
  const [findMember, setFindMember] = useState(members);
  const [isConfirmationDeleteOpen, setIsConfirmationDeleteOpen] = useState(false);
  const [DeleteMemberId, setDeleteMemberId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenUseraddModal = () => {
    setOpenUseraddModal(true);
  };

  useEffect(() => {
    const fetchMembers = async () => {
      dispatch(getAllMembersAction());
      dispatch(getAllMembershipsAction());
    };
    fetchMembers();
  }, [dispatch]);

  const HandleEdit = (id) => {
    navigate(`/admin/profile/${id}`);
  };

  const HandleDelete = (id) => {
    setIsConfirmationDeleteOpen(true);
    setDeleteMemberId(id);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const HandleSearchDelete = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFindMember(members);
    } else {
      const results = members.filter((member) =>
        member.nic.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFindMember(results);
    }
  }, [searchTerm, members]);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = findMember?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(findMember?.length / itemsPerPage);

  const goToNextPage = () => setCurrentPage((prevPage) => prevPage + 1);

  const goToPreviousPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <div className="w-full border-b  px-4 pt-6 border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex ">
      <div className="mb-1 w-full">
        <div className="col-span-full mb-4 xl:mb-2">
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
                  Member List
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Member List
          </h1>
        </div>

        <div className="sm:flex flex-row items-center justify-between w-full">
          <div className="mb-3  items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
            <form className="lg:pr-3">
              <div className="relative mt-1 sm:w-40  md:w-60 lg:w-64 xl:w-96 ">
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      className="block  w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                      id="users-search"
                      name="users-search"
                      placeholder="Search Member"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="mt-3 flex space-x-1 pl-0 sm:mt-0 sm:pl-2 items-center">
              <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
              </button>

              <a
                onClick={HandleSearchDelete}
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Delete</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  className="text-2xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"></path>
                </svg>
              </a>

              <a className="inline-flex justify-center rounded p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Settings</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  className="text-2xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="mr-4 flex-col items-center space-x-2 ">
            <button
              onClick={handleOpenUseraddModal}
              className=" text-white lg:w-28 md:w-24 sm:w-20  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:text-gray-400 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3">
                          <label
                            className="text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
                            htmlFor="select-all">
                            Select all
                          </label>
                        </th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Gym ID</th>
                        <th className="px-6 py-3">Mobile</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                      {currentItems?.map((member) => {
                        const membership = memberships.find(
                          (membership) => membership.membershipId === member.id
                        );

                        return (
                          <tr key={member.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td className="px-6 py-4 w-4 p-4">
                              <div className="flex items-center">
                                <label htmlFor="checkbox-2" className="sr-only">
                                  checkbox
                                </label>
                              </div>
                            </td>

                            <td className="px-6 py-4 mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={
                                  member.dp ||
                                  "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                                }
                                alt="Neil Sims avatar"
                              />
                              <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                <div className="text-base font-semibold text-gray-900 dark:text-white">
                                  {member?.firstName} {member?.lastName}
                                </div>
                                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                  {member?.email}
                                </div>
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                              G- {member?.id}
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                              {member?.mobileNumber}
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                              <div className="flex items-center">
                                <div
                                  className={`mr-2 h-2.5 w-2.5 rounded-full ${membership?.remainingDays === 0 ? "bg-red-400" : "bg-green-400"}`}></div>
                                {membership?.remainingDays === 0 ? "Inactive" : "Active"}
                              </div>
                            </td>

                            <td className="px-6 py-4">
                              <div className="flex items-center gap-x-3 whitespace-nowrap">
                                <button
                                  onClick={() => HandleEdit(member.id)}
                                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 focus:!ring-2 p-0 font-medium rounded-lg"
                                  type="button">
                                  <span className="flex items-center rounded-md text-sm px-3 py-2">
                                    <div className="flex items-center gap-x-2  text-black dark:text-white">
                                      <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-lg"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                      </svg>
                                      Edit user
                                    </div>
                                  </span>
                                </button>
                                <button
                                  onClick={() => HandleDelete(member.id)}
                                  className="text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600 focus:!ring-2 p-0 font-medium rounded-lg"
                                  type="button">
                                  <span className="flex items-center rounded-md text-sm px-3 py-2">
                                    <div className="flex items-center gap-x-2">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 20 20"
                                        className="text-lg"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          fillRule="evenodd"
                                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                          clipRule="evenodd"></path>
                                      </svg>
                                      Delete user
                                    </div>
                                  </span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {totalPages > 1 && (
                    <div className="flex font-semibold items-center dark:text-white gap-4 justify-end ml-4 mr-8 mt-4">
                      <button
                        className="bg-blue-100 p-2 rounded-lg  dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-4 dark:focus:ring-gray-500 dark:focus:ring-opacity-50 dark:disabled:cursor-not-allowed dark:disabled:opacity-50"
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}>
                        Previous
                      </button>
                      <span>
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        className="bg-blue-100 p-2 rounded-lg  dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-4 dark:focus:ring-gray-500 dark:focus:ring-opacity-50 dark:disabled:cursor-not-allowed dark:disabled:opacity-50"
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}>
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openUseraddModal && (
        <AddMemberModal
          openUseraddModal={openUseraddModal}
          setOpenUseraddModal={setOpenUseraddModal}
        />
      )}
      {isConfirmationDeleteOpen && (
        <CustomDeleteModal
          isConfirmationDeleteOpen={isConfirmationDeleteOpen}
          setIsConfirmationDeleteOpen={setIsConfirmationDeleteOpen}
          DeleteMemberId={DeleteMemberId}
        />
      )}
    </div>
  );
}
export default UserLIstPage;
