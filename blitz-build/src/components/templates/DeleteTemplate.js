import React, { useContext } from "react";

// components
import Modal from "../global/Modal";
import Confirm from "../global/Confirm";

//context
import TemplateContext from "../../contexts/templates/TemplateContext";

export default function DeleteTemplate({ template, closeDrop, deleteStatus, handleDeleteClose}) {

  //import deleteTemplate function from template context
  const { deleteTemplate } = useContext(TemplateContext);
  return (
    <>
      <Modal
        visible={deleteStatus}
        dismiss={handleDeleteClose}
        client={"40%"}
        component={ 
          <Confirm
            closeModal={handleDeleteClose}
            deleteFunction={deleteTemplate}
            deleteItem={template}
            text={`${template.template_name} template`}
          />
        }
      />
    </>
  );
}
