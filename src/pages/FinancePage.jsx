import { TiHome } from "react-icons/ti";
import GreaterThanIcon from "../components/custom/Icon/GreaterThanIcon";
import { Card } from "flowbite-react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import { toast } from "react-toastify";
import ReadQR from "../components/ReadQR";
import { useEffect, useState } from "react";
import { getMembershipByNICAction } from "../redux/actions/MembershipActions";
import { useDispatch, useSelector } from "react-redux";
import { MdClear, MdDelete } from "react-icons/md";
import { clearMembership } from "../redux/slices/MembershipSlice";
import UpdateMembershipModal from "./UpdateMembershipModal";

function FinancePage() {
  const dispatch = useDispatch();
  const getByNicMember = useSelector((state) => state.membershipInfo.membership);
  console.log(`getByNicMember`, getByNicMember);
  const [openQRModal, setOpenQRModal] = useState(false);
  const [openUpdateMembershipModal, setOpenUpdateMembershipModal] = useState(false);
  const { handleSubmit, control, trigger, reset, register } = useForm({
    mode: "onChange"
  });

  const QrModalHandle = () => {
    setOpenQRModal(!openQRModal);
  };

  const QRFoundData = async (data) => {
    console.log(`QRFoundData`, data);
    const { nic } = data;
    try {
      const response = await dispatch(getMembershipByNICAction(nic)).unwrap();
      if (response.nic) {
        toast.success("Member founded successfully");
      } else {
        toast.error("Not Found Member");
      }
    } catch (error) {
      toast.error("Error loading member");
    }
  };

  const onSubmit = async (data) => {
    const { nic } = data;
    try {
      const response = await dispatch(getMembershipByNICAction(nic)).unwrap();
      if (response.nic) {
        toast.success("Member founded successfully");
      } else {
        toast.error("Not Found Member");
      }
    } catch (error) {
      toast.error("Error loading member");
    }
  };

  const handleDelete = () => {
    dispatch(clearMembership());
    reset();
  };

  const updateMembershipHandler = () => {
    setOpenUpdateMembershipModal(!openUpdateMembershipModal);
  };

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
            <BsQrCode
              className="cursor-pointer ml-2  dark:text-gray-400 dark:hover:text-white"
              onClick={QrModalHandle}
              size={24}
            />
          </div>
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              NIC Number
            </label>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center ">
                <input
                  type="text"
                  name="nic"
                  id="nic"
                  className="bg-gray-50 border mr-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Member find by NIC number"
                  {...register("nic", { required: true })}
                />

                <button
                  type="submit"
                  className="cursor-pointer  dark:text-gray-400 dark:hover:text-white">
                  <FaSearch size={24} />
                </button>
                <button
                  onClick={handleDelete}
                  className="ml-3  dark:text-gray-400 dark:hover:text-white">
                  <MdDelete size={24} />
                </button>
              </div>
            </form>
          </div>

          <div className="sm:flex xl:block xl:space-y-4">
            <div className="sm:flex-1">
              <address className="text-sm font-normal not-italic text-gray-500 dark:text-gray-400">
                <div className="mt-4">Name</div>
                <a className="text-sm font-medium text-gray-900 dark:text-white">
                  {getByNicMember?.firstName +" "+ getByNicMember?.lastName || "No Data found"}
                </a>
                <div className="mt-4">Membership Plan</div>
                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  {getByNicMember?.membershipType === 1
                    ? "Monthly"
                    : getByNicMember?.membershipType === 2
                      ? "Quarterly"
                      : getByNicMember?.membershipType === 3
                        ? "Semi_Annually"
                        : getByNicMember?.membershipType === 4
                          ? "Annually"
                          : getByNicMember?.membershipType === 5
                            ? "Corporate"
                            : "No Data found"}
                </div>
                <div className="mt-4">Days Left</div>
                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  {getByNicMember?.remainingDays || "No Data found"}
                </div>
              </address>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              disabled={getByNicMember.nic ? false : true}
              onClick={updateMembershipHandler}
              className=" w-2/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Update
            </button>
          </div>
        </Card>
      </div>
      {openQRModal && (
        <ReadQR openQRModal={openQRModal} setOpenQRModal={setOpenQRModal} onData={QRFoundData} />
      )}
      {openUpdateMembershipModal && (
        <UpdateMembershipModal
          openUpdateMembershipModal={openUpdateMembershipModal}
          setOpenUpdateMembershipModal={setOpenUpdateMembershipModal}
          getByNicMember={getByNicMember}
        />
      )}
    </div>
  );
}

export default FinancePage;
