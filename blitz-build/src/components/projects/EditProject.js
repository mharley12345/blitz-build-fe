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
  //import the function that edits projects from context
  const { editProject } = useContext(ProjectContext);

  //returns a modal that lets you edit the project through the same form you made it with
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
