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
            imgText={"Change Project Image"}
            editFields={project}
          />
        }
      />
    </>
  );
}
