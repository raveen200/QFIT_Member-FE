import { useForm } from "react-hook-form";
import { Button, Modal } from "flowbite-react";
import propTypes from "prop-types";
import CustomInput from "../components/custom/CustomInput";
import CustomSelect from "../components/custom/CustomSelect";

function AddMemberModal({ openUseraddModal, setOpenUseraddModal }) {
  const { handleSubmit, control, trigger, reset } = useForm({
    mode: "onChange"
  });

  const onSubmitUser = (data) => {
    console.log(data);
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
                defaultValue=""
                label="First Name*"
                name="firstName"
                placeholder="First Name"
              />

              <CustomInput
                control={control}
                defaultValue=""
                label="Last Name*"
                name="lastName"
                placeholder="Last Name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <CustomInput
                control={control}
                defaultValue=""
                label="Email*"
                name="email"
                placeholder="Email"
              />

              <CustomInput
                control={control}
                defaultValue=""
                label="Mobile Number*"
                name="mobileNumber"
                placeholder="eg. +94777808008"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <CustomInput
                control={control}
                defaultValue=""
                label="NIC Number*"
                name="nic"
                placeholder="NIC Number"
              />

              <CustomInput
                control={control}
                defaultValue=""
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
