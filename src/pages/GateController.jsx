import React, { useEffect, useState } from "react";
import GreaterThanIcon from "../components/custom/Icon/GreaterThanIcon";
import { TiHome } from "react-icons/ti";
import { Scanner } from "@yudiel/react-qr-scanner";
import { getMembershipByNICAction } from "../redux/actions/MembershipActions";
import { useDispatch, useSelector } from "react-redux";

function GateController() {
  const [scanResult, setScanResult] = useState(null);
  const dispatch = useDispatch();
  const gateMember = useSelector((state) => state.membershipInfo.membership);

  const handleScan = (data) => {
    if (data) {
      const scanResultQR = JSON.parse(data[0].rawValue);
      setScanResult(scanResultQR);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const { nic } = scanResult || {};

  useEffect(() => {
    if (nic) {
      dispatch(getMembershipByNICAction(nic));
    }
  }, [nic]);

  return (
    <div className="container border-b  px-4 pt-6 border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex-row mb-4">
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
                  Gate Controller
                </a>
              </li>
            </ol>
          </nav>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Gate Controller
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 w-full ">
        <div className="col-span-full xl:col-auto">
          <div className="mb-4 rounded-lg bg-stone-50 p-4 shadow dark:bg-gray-800 dark:border-2 dark:border-cyan-200 sm:p-6 xl:p-8">
            <div className="flex justify-between">
              <Scanner scanDelay={300} onError={handleError} onScan={handleScan} />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-4 rounded-lg bg-stone-50 p-4 shadow dark:bg-gray-800 dark:border-2 dark:border-cyan-200 sm:p-6 xl:p-8">
            <div className="">
              <h3 className="mb-4 text-xl font-bold dark:text-white">Member information</h3>
              <div className="sm:flex xl:block xl:space-y-4">
                <div className="flex items-center ">
                  <div className="sm:flex-1">
                    <address className="text-sm font-normal not-italic text-gray-500 dark:text-gray-400">
                      <h2 className="text-lg font-bold text-black dark:text-white">
                        {gateMember?.firstName} {gateMember?.lastName}
                      </h2>
                      <div className="mt-4">NIC</div>
                      <a
                        className="text-sm font-medium text-gray-900 dark:text-white"
                        href="mailto:webmaster@flowbite.com">
                        {gateMember?.nic || "N/A"}
                      </a>
                      <div className="mt-4">Days Left</div>
                      <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        {gateMember?.remainingDays || "N/A"}
                      </div>
                      <div className="mt-4">End Date</div>
                      <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        {gateMember?.endDate || "N/A"}
                      </div>
                    </address>
                  </div>
                  {gateMember?.nic && (
                    <div className="flex gap-4">
                      {gateMember?.remainingDays > 0 ? (
                        <button className=" bg-green-800 text-white p-8 rounded-xl">
                          Access Grant
                        </button>
                      ) : (
                        <button className=" bg-red-800 text-white p-8 rounded-xl">
                          Access Denied
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GateController;
