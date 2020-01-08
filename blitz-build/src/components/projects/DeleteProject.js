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
<<<<<<< HEAD
  //import the function that deletes a project from context
=======
>>>>>>> d7b64ebe440e023da043a7c8a33f9330ba1142ee
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
