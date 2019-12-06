import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import TaskForm from "../tasks/TaskForm";

//context
import TemplateContext from "../../contexts/templates/TemplateContext";

export default function EditTask({ template , editStatus, handleEditClose }) {
  const { editTemplate } = useContext(TemplateContext);

  return (
    <>
      <Modal
        visible={ editStatus }
        dismiss={ handleEditClose }
        client={'50%'}
        component={
          <TaskForm
            closeModal={ handleEditClose }
            handleFunction={ editTemplate }
            editFields={ template }
            text={ `Edit ${template.template_name} template` }
          />
        }
      />
    </>
  );
}