import { useForm } from "react-hook-form";
import { Label, Textarea } from "flowbite-react";

function EditGeneralModal({ setOpenEditGeneralModal, openEdiGeneralModal, detailedMember }) {
  const { handleSubmit, control } = useForm({
    mode: "onChange"
  });
  return (
    <Modal show={openEdiGeneralModal} onClose={() => setOpenEditGeneralModal(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>Edit General Information</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
              </div>
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
          <Button color="gray" onClick={() => setOpenEditGeneralModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default EditGeneralModal;
