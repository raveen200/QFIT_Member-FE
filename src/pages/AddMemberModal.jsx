import { useForm } from "react-hook-form";
import { Button, Modal } from "flowbite-react";
import propTypes from "prop-types";
import CustomInput from "../components/custom/CustomInput";
import { useDispatch } from "react-redux";
import { addMemberAction, getAllMembersAction } from "../redux/actions/MemberActions";
import { toast } from "react-toastify";
import { MemberSchema } from "../schema/MemberSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import QRCode from "qrcode";
import { useState } from "react";

function AddMemberModal({ openUseraddModal, setOpenUseraddModal }) {
  const dispatch = useDispatch();
  const [QrFile, setQrFile] = useState(null);

  const { handleSubmit, control, trigger, reset } = useForm({
    resolver: yupResolver(MemberSchema),
    mode: "onChange"
  });

  const onSubmitUser = async (data) => {
    try {
      const QRData = {
        nic: data.nic,
        name: data.firstName,
        mobileNumber: data.mobileNumber,
        email: data.email
      };
      console.log(JSON.stringify(QRData));

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
