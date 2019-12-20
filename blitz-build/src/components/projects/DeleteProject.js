import React, { useContext } from "react";

// components
import Modal from "../global/Modal";
import Confirm from "../global/Confirm";

//context
import ProjectsContext from "../../contexts/projects/ProjectContext";

export default function DeleteProject({
  project,
  deleteStatus,
    handleDeleteClose
 
}) {
  const { deleteProject } = useContext(ProjectsContext);
  return (
    <>
      <Modal
        visible={deleteStatus}
        dismiss={handleDeleteClose}
        client={"50%"}
        component={
          <Confirm
            closeModal={handleDeleteClose}
            deleteFunction={deleteProject}
            deleteItem={project}
            text={project.project_name}
          />
        }
      />
    </>
  );
}
