import { TiHome } from "react-icons/ti";
import GreaterThanIcon from "../components/custom/Icon/GreaterThanIcon";
import { Card } from "flowbite-react";
import CustomInput from "../components/custom/CustomInput";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import ReadQR from "../components/ReadQR";
import { useState } from "react";

function FinancePage() {
  const [openQRModal, setOpenQRModal] = useState(false);
  const { handleSubmit, control, trigger, reset } = useForm({
    mode: "onChange"
  });

  const QrModalHandle = () => {
    setOpenQRModal(!openQRModal);
  };

  function QRFoundData(data) {
    console.log(data);
    // handle the data here
  }

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
                  Finance
                </a>
              </li>
              <li className="group flex items-center">
                <GreaterThanIcon />
                <span className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                  ...
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Finance
          </h1>
        </div>
        <Card className="max-w-sm">
          <div className="flex justify-between">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Update Membership
            </h5>
            <BsQrCode className="cursor-pointer ml-2" onClick={QrModalHandle} size={24} />
          </div>
          <div>
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              NIC Number
            </label>
            <div className="flex items-center ">
              <input
                type="text"
                name="nic"
                id="nic"
                className="bg-gray-50 border mr-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Member find by NIC number"
              />
              <FaSearch className="cursor-pointer" size={24} />
            </div>
          </div>

          <div className="sm:flex xl:block xl:space-y-4">
            <div className="sm:flex-1">
              <address className="text-sm font-normal not-italic text-gray-500 dark:text-gray-400">
                <div className="mt-4">Name</div>
                <a className="text-sm font-medium text-gray-900 dark:text-white">
                  {"No email found"}
                </a>
                <div className="mt-4">Membership Plan</div>
                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  {"No address found"}
                </div>
                <div className="mt-4">Days Left</div>
                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  {"No phone number found"}
                </div>
              </address>
            </div>
          </div>
          <div className="flex justify-center">
            <button className=" w-2/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Update
            </button>
          </div>
        </Card>
      </div>
      {openQRModal && <ReadQR openQRModal={openQRModal} setOpenQRModal={setOpenQRModal} onData ={QRFoundData} />}
    </div>
  );
}

export default FinancePage;
