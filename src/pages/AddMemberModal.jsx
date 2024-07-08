import { useForm } from "react-hook-form";
import { Button, Modal } from "flowbite-react";
import propTypes from "prop-types";
import CustomInput from "../components/custom/CustomInput";
import CustomSelect from "../components/custom/CustomSelect";
import { useDispatch } from "react-redux";
import { addMemberAction, getAllMembersAction } from "../redux/actions/MemberActions";
import { addMembershipAction } from "../redux/actions/MembershipActions";
import { toast } from "react-toastify";
import { MemberSchema } from "../schema/MemberSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

function AddMemberModal({ openUseraddModal, setOpenUseraddModal }) {
  const dispatch = useDispatch();
  const [QrFile, setQrFile] = useState(null);

  const { handleSubmit, control, trigger, reset } = useForm({
    resolver: yupResolver(MemberSchema),
    mode: "onChange"
  });

  const getMembershipDays = (membershipType) => {
    let remainingDays = 0;
    let endDate = new Date();
    if (membershipType === "1") {
      remainingDays = 30;
      endDate = new Date(new Date().setDate(new Date().getDate() + 30));
    } else if (membershipType === "2") {
      remainingDays = 90;
      endDate = new Date(new Date().setDate(new Date().getDate() + 90));
    } else if (membershipType === "3") {
      remainingDays = 180;
      endDate = new Date(new Date().setDate(new Date().getDate() + 180));
    } else if (membershipType === "4") {
      remainingDays = 365;
      endDate = new Date(new Date().setDate(new Date().getDate() + 365));
    } else if (membershipType === "5") {
      remainingDays = 99999;
      endDate = new Date(new Date().setDate(new Date().getDate() + 99999));
    }

    return { remainingDays, endDate };
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const onSubmitUser = async (data) => {
    const { nic, firstName, lastName, email, mobileNumber, address, membershipType } = data;
    const { remainingDays, endDate } = getMembershipDays(data.membershipType);
    const formattedEndDate = formatDate(endDate);

    const membershipData = {
      nic: nic,
      membershipType: Number(membershipType),
      remainingDays,
      endDate: formattedEndDate
    };

    console.log(membershipData);

    const setMemberShip = await dispatch(addMembershipAction(membershipData));

    try {
      const QRData = {
        nic: data.nic,
        name: data.firstName,
        mobileNumber: data.mobileNumber,
        email: data.email
      };
      // console.log(JSON.stringify(QRData));

      const response = await dispatch(addMemberAction(data)).unwrap();

      if (response.isSuccess) {
        toast.success("Member added successfully");
        const qrCode = await QRCode.toDataURL(JSON.stringify(QRData));
        let link = document.createElement("a");
        link.href = qrCode;

        link.download = `${data.firstName}_${data.nic}_QRCode.png`;

        link.click();

        setOpenUseraddModal(false);
        reset();
        dispatch(getAllMembersAction());
      } else {
        toast.error("Error adding member");
      }
    } catch {
      toast.error("Error adding member");
    }
  };

  return (
    <Modal show={openUseraddModal} onClose={() => setOpenUseraddModal(false)}>
      <form onSubmit={handleSubmit(onSubmitUser)}>
        <Modal.Header>Add New Member</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <CustomInput
                control={control}
                defaultValue={null}
                label="First Name*"
                name="firstName"
                placeholder="First Name"
              />

              <CustomInput
                control={control}
                defaultValue={null}
                label="Last Name*"
                name="lastName"
                placeholder="Last Name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <CustomInput
                control={control}
                defaultValue={null}
                label="Email*"
                name="email"
                placeholder="Email"
              />

              <CustomInput
                control={control}
                defaultValue={null}
                label="Mobile Number*"
                name="mobileNumber"
                placeholder="eg. +94777808008"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <CustomInput
                control={control}
                defaultValue={null}
                label="NIC Number*"
                name="nic"
                placeholder="NIC Number"
              />

              <CustomInput
                control={control}
                defaultValue={null}
                label="Address*"
                name="address"
                placeholder="Address"
              />
              <CustomSelect
                control={control}
                defaultValue=""
                label="Membership Type*"
                name="membershipType"
                options={[
                  { id: 1, text: "Monthly" },
                  { id: 2, text: "Quarterly" },
                  { id: 3, text: "Semi_Annually" },
                  { id: 4, text: "Annually" },
                  { id: 5, text: "Corporate" }
                ]}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="pb-4">
          <Button type="submit">Submit</Button>
          <Button color="gray" onClick={() => setOpenUseraddModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

AddMemberModal.propTypes = {
  openUseraddModal: propTypes.bool.isRequired,
  setOpenUseraddModal: propTypes.func.isRequired
};

export default AddMemberModal;
