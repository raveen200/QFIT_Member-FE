import { Controller, useForm } from "react-hook-form";
import { Button, FileInput, Label, Modal, Radio } from "flowbite-react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import CustomInput from "../components/custom/CustomInput";
import CustomSelect from "../components/custom/CustomSelect";
import { toast } from "react-toastify";
import { updateMembershipAction } from "../redux/actions/MembershipActions";
import { clearMembership } from "../redux/slices/MembershipSlice";

function UpdateMembershipModal({
  openUpdateMembershipModal,
  setOpenUpdateMembershipModal,
  getByNicMember
}) {
  const dispatch = useDispatch();
  const { handleSubmit, control, trigger, reset, register } = useForm({
    mode: "onChange"
  });

  const getMembershipDays = (membershipType) => {
    let updateRemainingDays = 0;
    let endDate = new Date();
    if (membershipType === "1") {
      updateRemainingDays = 30;
      endDate = new Date(new Date().setDate(new Date().getDate() + 30));
    } else if (membershipType === "2") {
      updateRemainingDays = 90;
      endDate = new Date(new Date().setDate(new Date().getDate() + 90));
    } else if (membershipType === "3") {
      updateRemainingDays = 180;
      endDate = new Date(new Date().setDate(new Date().getDate() + 180));
    } else if (membershipType === "4") {
      updateRemainingDays = 365;
      endDate = new Date(new Date().setDate(new Date().getDate() + 365));
    } else if (membershipType === "5") {
      updateRemainingDays = 99999;
      endDate = new Date(new Date().setDate(new Date().getDate() + 99999));
    }

    return { updateRemainingDays, endDate };
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const onSubmit = async (data) => {
    const { membershipType, paymentMethod } = data;
    const { updateRemainingDays, endDate } = getMembershipDays(data.membershipType);
    const formattedEndDate = formatDate(endDate);

    const membershipData = {
      firstName: getByNicMember?.firstName,
      lastName: getByNicMember?.lastName,
      membershipId: getByNicMember?.membershipId,
      nic: getByNicMember?.nic,
      email: getByNicMember?.email,
      membershipType: Number(membershipType),
      remainingDays: getByNicMember?.remainingDays + updateRemainingDays,
      paymentMethod: paymentMethod,
      endDate: formattedEndDate
    };

    try {
      const response = await dispatch(updateMembershipAction(membershipData)).unwrap();
      if (response === 200) {
        toast.success("Membership updated successfully");
        dispatch(clearMembership());
        setOpenUpdateMembershipModal(false);
        reset();
      } else {
        toast.error("Error updating membership");
      }
    } catch {
      toast.error("Error updating membership");
    }
  };

  return (
    <Modal show={openUpdateMembershipModal} onClose={() => setOpenUpdateMembershipModal(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>Edit Personal Information</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
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
                name="getRemainingDays"
                placeholder="Days Left"
                disabled
              />
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Radio id="cash" {...register("paymentMethod")} value="1" />
                  <Label htmlFor="cash">Cash</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="card_payment" {...register("paymentMethod")} value="2" />
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
