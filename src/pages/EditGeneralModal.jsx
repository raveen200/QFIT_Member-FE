import propTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Label, Modal, Textarea } from "flowbite-react";
import CustomInput from "../components/custom/CustomInput";
import CustomSelect from "../components/custom/CustomSelect";
import { getMemberByIdAction, updateMemberAction } from "../redux/actions/MemberActions";
import CustomInputTextArea from "../components/custom/CustomInputTextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { MemberGeneralInfoEdit } from "../schema/MemberSchema";

function EditGeneralModal({ openEditGeneralModal, setOpenEditGeneralModal, detailedMember }) {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(MemberGeneralInfoEdit),
    mode: "onChange"
  });

  const onSubmit = async (data) => {
    delete data.instructor;
    data.gender = Number(data.gender);
    data.nic = detailedMember.nic;
    console.log(data);
    try {
      const response = await dispatch(updateMemberAction({ ...detailedMember, ...data })).unwrap();
      if (response === 200) {
        toast.success("Member updated successfully");
        dispatch(getMemberByIdAction(detailedMember.id));
        setOpenEditGeneralModal(false);
      } else {
        toast.error("Error updating member");
      }
    } catch {
      toast.error("Error updating member");
    }
  };

  return (
    <Modal show={openEditGeneralModal} onClose={() => setOpenEditGeneralModal(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>Edit General Information</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <CustomInput
                control={control}
                defaultValue={detailedMember?.nic}
                disabled
                label="NIC "
                name="nic"
                placeholder="NIC"
              />
              <CustomInput
                control={control}
                defaultValue={detailedMember?.age}
                label="Age"
                name="age"
                placeholder="Age"
              />
              <CustomSelect
                control={control}
                defaultValue={detailedMember?.gender}
                label="Gender"
                name="gender"
                options={[
                  { id: 1, text: "Male" },
                  { id: 2, text: "Female" }
                ]}
              />
              <CustomInput
                control={control}
                defaultValue={detailedMember?.height}
                label="Height"
                name="height"
                placeholder="Height"
              />
              <CustomInput
                control={control}
                defaultValue={detailedMember?.weight}
                label="Weight"
                name="weight"
                placeholder="Weight"
              />
              <CustomSelect
                control={control}
                defaultValue={detailedMember?.gender}
                label="Instructor"
                name="instructor"
                options={[
                  { id: 0, text: "Supun" },
                  { id: 1, text: "Chamal" }
                ]}
              />
            </div>
            <CustomInputTextArea
              control={control}
              defaultValue={detailedMember?.aboutMe}
              label="About Me"
              name="aboutMe"
              placeholder="Describe your self..."
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="pb-4">
          <Button type="submit">Submit</Button>
          <Button color="gray" onClick={() => setOpenEditGeneralModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

EditGeneralModal.propTypes = {
  openEditGeneralModal: propTypes.bool.isRequired,
  setOpenEditGeneralModal: propTypes.func.isRequired,
  detailedMember: propTypes.object.isRequired
};

export default EditGeneralModal;
