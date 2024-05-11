import React from "react";
import { HiMiniIdentification } from "react-icons/hi2";
import { FaSuitcase } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import GreaterThanIcon from "../Icon/GreaterThanIcon";

function Profile() {
  const myobj = {
    fullName: null,
    gId: null,
    img: null,
    job: null,
    town: null,
    Email: null,
    address: null,
    phone: null,
    MembershipPlan: null,
    DaysLeft: null,
    age: null,
    joinDate: null,
    NIC: null,
    height: null,
    weight: null,
    Instructor: null
  };

  return (
    <>
      <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 w-full bg-white">
        <div className="col-span-full mb-4 xl:mb-2">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center">
              <li className="group flex items-center">
                <a
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
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
                  href="#">
                  Users
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
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Profile
          </h1>
        </div>
        <div className="col-span-full xl:col-auto">
          <div className="mb-4 rounded-lg bg-stone-50 p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <div className="sm:flex sm:space-x-4 xl:block xl:space-x-0">
              <img
                alt=""
                src={
                  myobj.img ||
                  "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                }
                className="mb-2 h-20 w-20 rounded-lg"
              />
              <div>
                <h2 className="text-xl font-bold dark:text-white">
                  {myobj.fullName || "No User Name Found"}
                </h2>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <HiMiniIdentification className="mr-2" />
                    <span>{myobj.gId || "No Gym Id found"}</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <FaSuitcase className="mr-2" />
                    <span>{myobj.job || "No Job Position found"}</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <RiMapPin2Fill className="mr-2" />
                    <span>{myobj.town || "No Address Found"}</span>
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
                      {myobj.Email || "No email found"}
                    </a>
                    <div className="mt-4">Home address</div>
                    <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      {myobj.address || "No address found"}
                    </div>
                    <div className="mt-4">Phone number</div>
                    <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      {myobj.phone || "No phone number found"}
                    </div>
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 rounded-lg bg-stone-50 p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <div className="flow-root">
              <h2 className="text-xl font-bold dark:text-white">Membership</h2>
              <div className="sm:flex xl:block xl:space-y-4">
                <div className="sm:flex-1">
                  <address className="text-sm font-normal not-italic text-gray-500 dark:text-gray-400">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="mt-4">Membership Plan</div>
                        <a
                          className="text-sm font-medium text-gray-900 dark:text-white"
                          href="mailto:webmaster@flowbite.com">
                          {myobj.MembershipPlan || "No Data found"}
                        </a>
                      </div>

                      <div>
                        <div className="mt-4">Days left</div>
                        <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          {myobj.DaysLeft || "No Data found"}
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
          <div className="mb-4 rounded-lg bg-stone-50 p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <h3 className="mb-4 text-xl font-bold dark:text-white">General information</h3>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="text-lg font-medium text-gray-900 dark:text-white">About me</dt>
                <dd className="mt-1 max-w-prose space-y-3 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut
                    sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean
                    posuere aliquam.
                  </p>
                  <p>
                    Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris
                    amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum,
                    cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget
                    quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus
                    suspendisse.
                  </p>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Age</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {myobj.age || "No Data found"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Gender</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {myobj.gender || "No Data found"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Join Date</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {myobj.joinDate || "No Data found"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">NIC</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {myobj.NIC || "No Data found"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Height</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {myobj.height || "No Data found"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Weight</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {myobj.weight || "No Data found"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Instructor</dt>
                <dd className="text-sm font-semibold text-gray-900 dark:text-white">
                  {myobj.Instructor || "No Data found"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;