import React from "react";
import { Modal, Paper, Button } from "@mantine/core";

const DeleteEmployeePopup = ({
  employeeId,
  isOpen,
  onClose,
  onConfirmDelete,
  showConfirmation,
  handleDelete,
  handleConfirmDelete,
  handleCancelDelete,
}) => {
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      styles={(theme) => ({
        header: {
          backgroundColor: "#c4bcbc",
          color: "black",
        },
        body: {
          backgroundColor: "#c4bcbc",
          color: "black",
        },
      })}
    >
      <div padding="lg">
        <p>Are you sure you want to delete this employee?</p>
        <div>
          {!showConfirmation && (
            <Button
              onClick={handleDelete}
              variant="filled"
              className=" bg-red-700 hover:bg-red-500"
            >
              Delete
            </Button>
          )}

          {showConfirmation && (
            <>
              <Button
                onClick={handleConfirmDelete}
                variant="filled"
                className=" bg-red-700 hover:bg-red-500 mr-2"
              >
                Confirm
              </Button>
              <Button
                variant="filled"
                onClick={handleCancelDelete}
                className="bg-green-700 hover:bg-green-500"
              >
                Cancel
              </Button>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default DeleteEmployeePopup;
