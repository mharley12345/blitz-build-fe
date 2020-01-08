import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import ProjectForm from "./ProjectForm";

//context
import ProjectContext from "../../contexts/projects/ProjectContext";

export default function EditProject({
  editStatus,
  handleEditClose,
  project
}) {
<<<<<<< HEAD
  //import the function that edits projects from context
=======
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
  const { editProject } = useContext(ProjectContext);
  return (
    <>
      <Modal
        visible={editStatus}
        dismiss={handleEditClose}
        client={"40%"}
        component={
          <ProjectForm
            closeModal={handleEditClose}
            handleFunction={editProject}
            text={"Edit Project"}
            editFields={project}
          />
        }
      />
    </>
  );
}
