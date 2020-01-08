import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import EditTemplateForm from "./EditTemplateForm";

//context
import TemplateContext from "../../contexts/templates/TemplateContext";

export default function EditTask({ template , editStatus, handleEditClose }) {
  //import editTemplate function from template context
  const { editTemplate } = useContext(TemplateContext);

  return (
    <>
      <Modal
        visible={ editStatus }
        dismiss={ handleEditClose }
        client={'50%'}
        component={
          <EditTemplateForm
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