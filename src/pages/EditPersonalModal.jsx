import propTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Button, Modal } from "flowbite-react";
import { useDispatch } from "react-redux";
import CustomInput from "../components/custom/CustomInput";
import { updateMemberAction, getMemberByIdAction } from "../redux/actions/MemberActions";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { MemberPersonalInfoEdit } from "../schema/MemberSchema";

function EditPersonalModal({ setOpenEditPersonalModal, openEditPersonalModal, detailedMember }) {
  const dispatch = useDispatch();

  const { handleSubmit, control, trigger, reset } = useForm({
    resolver: yupResolver(MemberPersonalInfoEdit),
    mode: "onChange"
  });

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(updateMemberAction({ ...detailedMember, ...data })).unwrap();
      console.log(response);

      if (response === 200) {
        toast.success("Member updated successfully");
        dispatch(getMemberByIdAction(detailedMember.id));
        setOpenEditPersonalModal(false);
        reset();
      } else {
        toast.error("Error updating member");
      }
    } catch {
      toast.error("Error updating member");
    }
  };

  return (
    <Modal show={openEditPersonalModal} onClose={() => setOpenEditPersonalModal(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>Edit Personal Information</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <CustomInput
                control={control}
                defaultValue={detailedMember?.firstName}
                label="First Name*"
                name="firstName"
                placeholder="First Name"
              />

              <CustomInput
                control={control}
                defaultValue={detailedMember?.lastName}
                label="Last Name*"
                name="lastName"
                placeholder="Last Name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <CustomInput
                control={control}
                defaultValue={detailedMember?.email}
                label="Email*"
                name="email"
                placeholder="Email"
              />

              <CustomInput
                control={control}
                defaultValue={detailedMember?.mobileNumber}
                label="Phone Number*"
                name="mobileNumber"
                placeholder="Phone Number"
              />
              <CustomInput
                control={control}
                defaultValue={detailedMember?.address}
                label="Address*"
                name="address"
                placeholder="Address"
              />
              <CustomInput
                control={control}
                defaultValue={detailedMember?.job}
                label="Job"
                name="job"
                placeholder="No Data"
              />
              <CustomInput
                control={control}
                defaultValue={detailedMember?.city}
                label="City"
                name="city"
                placeholder="No Data"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="pb-4">
          <Button type="submit">Submit</Button>
          <Button color="gray" onClick={() => setOpenEditPersonalModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

EditPersonalModal.propTypes = {
  setOpenEditPersonalModal: propTypes.func.isRequired,
  openEditPersonalModal: propTypes.bool.isRequired,
  detailedMember: propTypes.object.isRequired
};

export default EditPersonalModal;
