import React from 'react'

function UserLIstPage() {
  return (
    <div class="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div class="mb-1 w-full">
            <div class="mb-4">
                <nav aria-label="Breadcrumb" class="mb-4">
                    <ol class="flex items-center">
                        <li class="group flex items-center">
                            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2" data-testid="flowbite-breadcrumb-separator" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            <a class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" data-testid="flowbite-breadcrumb-item" href="#">
                                <div class="flex items-center gap-x-3">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                    </svg>
                                    <span class="dark:text-white">Home</span>
                                </div>
                            </a>
                        </li>
                        <li class="group flex items-center">
                            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2" data-testid="flowbite-breadcrumb-separator" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            <a class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" data-testid="flowbite-breadcrumb-item" href="/users/list">Users</a>
                        </li>
                        <li class="group flex items-center">
                            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2" data-testid="flowbite-breadcrumb-separator" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            <span class="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400" data-testid="flowbite-breadcrumb-item">List</span>
                        </li>
                    </ol>
                </nav>
                <h1 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">All users</h1>
            </div>
            <div class="sm:flex">
                <div class="mb-3 hidden items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
                    <form class="lg:pr-3">
                        <label class="text-sm font-medium text-gray-900 dark:text-gray-300 sr-only" for="users-search">Search</label>
                        <div class="relative mt-1 lg:w-64 xl:w-96">
                            <div class="flex">
                                <div class="relative w-full">
                                    <input class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm" id="users-search" name="users-search" placeholder="Search for users" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="mt-3 flex space-x-1 pl-0 sm:mt-0 sm:pl-2">
                        <a href="#" class="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Configure</span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#" class="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Delete</span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#" class="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Purge</span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#" class="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Settings</span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="ml-auto flex items-center space-x-2 sm:space-x-3">
                    <button class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 focus:ring-2 p-0 font-medium rounded-lg" type="button">
                        <span class="flex items-center rounded-md text-sm px-3 py-2">
                            <div class="flex items-center gap-x-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Add user</span>
                            </div>
                        </span>
                    </button>
                    <button class="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:disabled:hover:bg-gray-800 focus:ring-2 dark:disabled:hover:bg-gray-800 focus:ring-2 p-0 font-medium rounded-lg" type="button">
                        <span class="flex items-center rounded-md text-sm px-3 py-2">
                            <div class="flex items-center gap-x-3">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Export</span>
                            </div>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserLIstPage