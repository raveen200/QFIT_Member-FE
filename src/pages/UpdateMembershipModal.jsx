import { Controller, useForm } from "react-hook-form";
import { Button, FileInput, Label, Modal, Radio } from "flowbite-react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import CustomInput from "../components/custom/CustomInput";
import CustomSelect from "../components/custom/CustomSelect";

function UpdateMembershipModal({
  openUpdateMembershipModal,
  setOpenUpdateMembershipModal,
  getByNicMember
}) {
  const dispatch = useDispatch();
  const { handleSubmit, control, trigger, reset } = useForm({
    mode: "onChange"
  });

  const onSubmit = async (data) => {
    console.log(`data`, data);
  };

  return (
    <Modal show={openUpdateMembershipModal} onClose={() => setOpenUpdateMembershipModal(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>Edit Personal Information</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <CustomInput
                control={control}
                defaultValue={getByNicMember?.firstName}
                label="First Name*"
                name="firstName"
                placeholder="First Name"
              />
              <CustomInput
                control={control}
                defaultValue={getByNicMember?.lastName}
                label="Last Name*"
                name="lastName"
                placeholder="Last Name"
              />
              <CustomSelect
                control={control}
                defaultValue={getByNicMember?.membershipType}
                label="Membership Plan*"
                name="membershipType"
                options={[
                  { id: 1, text: "Monthly" },
                  { id: 2, text: "Quarterly" },
                  { id: 3, text: "Semi_Annually" },
                  { id: 4, text: "Annually" },
                  { id: 5, text: "Corporate" }
                ]}
              />
              <CustomInput
                control={control}
                defaultValue={getByNicMember?.remainingDays}
                label="Days Left*"
                name="remainingDays"
                placeholder="Days Left"
              />
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Radio id="cash" name="paymentMethod" value="cash" />
                  <Label htmlFor="cash">Cash</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="card_payment" name="paymentMethod" value="card_payment" />
                  <Label htmlFor="card_payment">Card Payment</Label>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="pb-4">
          <Button type="submit">Submit</Button>
          <Button color="gray" onClick={() => setOpenUpdateMembershipModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

UpdateMembershipModal.propTypes = {
  openUpdateMembershipModal: propTypes.bool,
  setOpenUpdateMembershipModal: propTypes.func,
  getByNicMember: propTypes.object
};

export default UpdateMembershipModal;
