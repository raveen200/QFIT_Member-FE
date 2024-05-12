import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import PropTypes from "prop-types";
import { deleteMemberAction, getAllMembersAction } from "../../redux/actions/MemberActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function CustomDeleteModal({
  isConfirmationDeleteOpen,
  setIsConfirmationDeleteOpen,
  DeleteMemberId,
  instructorId
}) {
  const dispatch = useDispatch();
  const HandleDelete = async () => {
    if (DeleteMemberId) {
      try {
        const response = await dispatch(deleteMemberAction(DeleteMemberId)).unwrap();
        if (response === 200) {
          toast.success("Member Deleted successfully");
          dispatch(getAllMembersAction());
          setIsConfirmationDeleteOpen(false);
        }
      } catch (e) {
        console.log(e);
      }
    } else if (instructorId) {
      try {
        const response = await dispatch(deleteInstructorAction(instructorId)).unwrap();
        if (response === 200) {
          toast.success("Instructor Deleted successfully");
          dispatch(getAllInstructorsAction());
          setIsConfirmationDeleteOpen(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <Modal
        show={isConfirmationDeleteOpen}
        size="md"
        onClose={() => setIsConfirmationDeleteOpen(false)}
        popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={HandleDelete}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setIsConfirmationDeleteOpen(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

CustomDeleteModal.propTypes = {
  isConfirmationDeleteOpen: PropTypes.bool,
  setIsConfirmationDeleteOpen: PropTypes.func,
  DeleteMemberId: PropTypes.number
};

export default CustomDeleteModal;
