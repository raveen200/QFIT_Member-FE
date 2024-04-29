import React from "react";
import { TiHome } from "react-icons/ti";
import GreaterThanIcon from "../components/custom/Icon/GreaterThanIcon";

function UserLIstPage() {
  return (
    <div className=" w-full border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
      <div className="mb-1 w-full">
        <div className="mb-4">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center">
              <li className="group flex items-center">
                <a
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  data-testid="flowbite-breadcrumb-item"
                  href="#">
                  <div className="flex items-center gap-x-3">
                    <TiHome size={24} />
                    <span className="dark:text-white">Home</span>
                  </div>
                </a>
              </li>
              <li className="group flex items-center">
                <GreaterThanIcon />
                <a
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  data-testid="flowbite-breadcrumb-item"
                  href="/users/list">
                  Users
                </a>
              </li>
              <li className="group flex items-center">
                <GreaterThanIcon />
                <span
                  className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400"
                  data-testid="flowbite-breadcrumb-item">
                  List
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            All Jobs
          </h1>
        </div>

        <div className="sm:flex flex-row items-center justify-between w-full">
          <div className="mb-3 hidden items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
            <form className="lg:pr-3">
              <label
                className="text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
                htmlFor="users-search">
                Search
              </label>
              <div className="relative mt-1 lg:w-64 xl:w-96">
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                      id="users-search"
                      name="users-search"
                      placeholder="Search Jobs"
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
                href="#"
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

              <a className="inline-flex  justify-center rounded p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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

          <div className="ml-auto mr-4 flex-col items-center space-x-2 sm:space-x-3">
            <button className=" text-white lg:w-28 md:w-24 sm:w-20  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add
            </button>
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden shadow">
                <div
                  data-testid="table-element"
                  class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400 min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                    <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th class="px-6 py-3">
                          <label
                            class="text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
                            for="select-all">
                            Select all
                          </label>
                        </th>
                        <th class="px-6 py-3">Name</th>
                        <th class="px-6 py-3">Position</th>
                        <th class="px-6 py-3">Country</th>
                        <th class="px-6 py-3">Status</th>
                        <th class="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                      <tr
                        data-testid="table-row-element"
                        class="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="px-6 py-4 w-4 p-4">
                          <div class="flex items-center">
                            <label for="checkbox-1" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td class="px-6 py-4 mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="https://flowbite-pro-react-admin-dashboard.vercel.app/images/users/roberta-casas.png"
                            alt="Neil Sims avatar"
                          />
                          <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                            <div class="text-base font-semibold text-gray-900 dark:text-white">
                              Neil Sims
                            </div>
                            <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                              neil.sims@flowbite.com
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                          Front-end developer
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                          United States
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                          <div class="flex items-center">
                            <div class="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>
                            Active
                          </div>
                        </td>
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-x-3 whitespace-nowrap">
                            <button
                              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 focus:!ring-2 p-0 font-medium rounded-lg"
                              type="button">
                              <span class="flex items-center rounded-md text-sm px-3 py-2">
                                <div class="flex items-center gap-x-2">
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    class="text-lg"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                  </svg>
                                  Edit user
                                </div>
                              </span>
                            </button>
                            <button
                              class="text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600 focus:!ring-2 p-0 font-medium rounded-lg"
                              type="button">
                              <span class="flex items-center rounded-md text-sm px-3 py-2">
                                <div class="flex items-center gap-x-2">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 20 20"
                                    class="text-lg"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      fill-rule="evenodd"
                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                      clip-rule="evenodd"></path>
                                  </svg>
                                  Delete user
                                </div>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-testid="table-row-element"
                        class="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="px-6 py-4 w-4 p-4">
                          <div class="flex items-center">
                            <label for="checkbox-2" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td class="px-6 py-4 mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="https://flowbite-pro-react-admin-dashboard.vercel.app/images/users/roberta-casas.png"
                            alt="Neil Sims avatar"
                          />
                          <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                            <div class="text-base font-semibold text-gray-900 dark:text-white">
                              Neil Sims
                            </div>
                            <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                              neil.sims@flowbite.com
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                          Designer
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                          Spain
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
                          <div class="flex items-center">
                            <div class="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>
                            Active
                          </div>
                        </td>
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-x-3 whitespace-nowrap">
                            <button
                              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 focus:!ring-2 p-0 font-medium rounded-lg"
                              type="button">
                              <span class="flex items-center rounded-md text-sm px-3 py-2">
                                <div class="flex items-center gap-x-2">
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    class="text-lg"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                  </svg>
                                  Edit user
                                </div>
                              </span>
                            </button>
                            <button
                              class="text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600 focus:!ring-2 p-0 font-medium rounded-lg"
                              type="button">
                              <span class="flex items-center rounded-md text-sm px-3 py-2">
                                <div class="flex items-center gap-x-2">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 20 20"
                                    class="text-lg"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      fill-rule="evenodd"
                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                      clip-rule="evenodd"></path>
                                  </svg>
                                  Delete user
                                </div>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserLIstPage;
