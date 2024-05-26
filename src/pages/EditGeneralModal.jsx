import propTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Label, Modal, Textarea } from "flowbite-react";
import CustomInput from "../components/custom/CustomInput";
import CustomSelect from "../components/custom/CustomSelect";

function EditGeneralModal({ openEditGeneralModal, setOpenEditGeneralModal, detailedMember }) {
  const { handleSubmit, control } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(detailedMember);

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
                  { id: 0, text: "Male" },
                  { id: 1, text: "Female" }
                ]}
              />
              <CustomInput
                control={control}
                defaultValue={detailedMember?.height}
                label="Height *"
                name="height"
                placeholder="Height"
              />

              <CustomInput
                control={control}
                defaultValue={detailedMember?.weight}
                label="Weight *"
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

            <div className="">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="About Me" />
              </div>
              <Textarea name="aboutMe" placeholder="Describe your self..." required rows={4} />
            </div>
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
