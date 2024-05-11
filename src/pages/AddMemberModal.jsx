import { useForm } from "react-hook-form";
import { Button, Modal } from "flowbite-react";
import propTypes from "prop-types";
import CustomInput from "../components/custom/CustomInput";
import { useDispatch } from "react-redux";
import { addMemberAction } from "../redux/actions/MemberActions";
import { toast } from "react-toastify";
import {MemberSchema} from "../schema/MemberSchema";
import { yupResolver } from "@hookform/resolvers/yup";

function AddMemberModal({ openUseraddModal, setOpenUseraddModal }) {
  const dispatch = useDispatch();

  const { handleSubmit, control, trigger, reset } = useForm({
    resolver: yupResolver(MemberSchema),
    mode: "onChange"
  });

  const onSubmitUser = async (data) => {
    try {
      const response = await dispatch(addMemberAction(data)).unwrap();

      if (response.isSuccess) {
        toast.success("Member added successfully");

        setOpenUseraddModal(false);
        reset();
      } else {
        toast.error("Error adding member");
        console.log("Error");
      }
    } catch {
      toast.error("Error adding member");
      console.error("Error");
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
