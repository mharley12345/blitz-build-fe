import React, { useEffect, useState, useContext } from "react";
// using zip_code to find latitude and longitude
import zipcodes from "zipcodes";

// components
import ErrorMessage from "../../components/global/ErrorMessage";

// contexts
import TemplateContext from "../../contexts/templates/TemplateContext";

// styles
//import styled from "styled-components";
import {
  StyledForm,
  StyledFormHeader,
  StyledLabel,
  StyledInput,
  StyledBtn,
  XButton,
  StyledSelect
} from "../../styles/Form/FormStyles";
import Checkbox from "@material-ui/core/Checkbox";

//importing functions and objects from context
export default function ProjectForm({
  closeModal,
  handleFunction,
  editFields,
  text,
  imgText
}) {
  //importing state of templates from context and then setting initial local state for projects
  const { templates } = useContext(TemplateContext);
  const [form, setForm] = useState({
    project_name: "",
    beds: null,
    baths: null,
    city: "",
    square_ft: null,
    state: "",
    street_address: "",
    zip_code: null
  });

  //making another form specifically for templates because we are hitting multiple endpoints for templates (prebuilt and custom)
  const [templateForm, setTemplateForm] = useState({
    preBuiltTemplate: false,
    template_id: null
  });

  const [error, setError] = useState({
    error: false,
    error_text: null
  });

  useEffect(() => {
    if (editFields) {
      console.log("editFields", editFields);
      setForm(editFields);
      //console.log(form);
    } else {
      setForm(form);
      console.log(form);
    }
  }, []);

  // handle checkBox changing
  const [checked, setChecked] = React.useState(false);

  //setting state of the checked box
  const checkBoxChangeHandler = event => {
    setChecked(event.target.checked);
  };

  //This toggle's the state of the checkmark between true and false
  const preBuildTemplatehandler = () => {
    setTemplateForm({
      ...templateForm,
      preBuiltTemplate: !templateForm.preBuiltTemplate
    });
  };

  //change handler for project form
  const formChangeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  //changes the state of the templateID
  const templateIdChangeHandler = e => {
    setTemplateForm({
      ...templateForm,
      [e.target.name]: e.target.value
    });
  };

  //handles submit for project form
  const handleSubmit = e => {
    e.preventDefault();
    // check if user enters a valid zip_code
    if (
      form.zip_code == null ||
      form.project_name === "" ||
      form.street_address === "" ||
      form.city === "" ||
      form.state === ""
    ) {
      setError({
        error: true,
        error_text:
          "Please enter a project_name, and/or a project address, and/or a valid zip_code!"
      });
    } else {
      // get latitude and longitude from zipcodes

      const gps = zipcodes.lookup(form.zip_code);

      // check if the zip_code is valid.

      if (gps === undefined) {
        setError({
          error: true,
          error_text: "The zip_code is invalid!"
        });
      } else {

        // add latitude and longitude to form

        form.latitude = gps.latitude;
        form.longitude = gps.longitude;

        // submit to addProject or editProject funciton

        if (editFields) {
          handleFunction(form, form.id, templateForm);
        } else {
          handleFunction(form, templateForm);
        }
        //reset forms and error to initial state

        setForm({
          project_name: "",
          beds: null,
          baths: null,
          city: "",
          square_ft: null,
          state: "",
          street_address: "",
          zip_code: null
        });
        setTemplateForm({
          preBuiltTemplate: false,
          template_id: null
        });
        setError({ error: false, error_text: null });
        
        closeModal();
      }
    }
  };
  // const addCustomTemplate = e => {
  //   e.preventDefault();
  //   const templateID = parseInt(form.template_id);
  //   const project_id = editFields.id;
  //   console.log("project_id", project_id);
  //   console.log("templateID", templateID);
  //   axiosWithAuth()
  //     .post(`/templates/addTasks/${project_id}`, { template_id: templateID })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  // async function submitForm() {
  //   const originalhandleSubmit = await handleSubmit();
  //   console.log("async", originalhandleSubmit);
  //   const customTemplate = await addCustomTemplate();
  //   console.log("async", customTemplate);
  // }

  // const addCustomTemplate = e => {
  //   if (templateForm.template_id !== null) {
  //     e.preventDefault();
  //     const templateID = parseInt(templateForm.template_id);
  //     const project_id = editFields.id;
  //     console.log("project_id", project_id);
  //     console.log("templateID", templateID);
  //     axiosWithAuth()
  //       .post(`/templates/addTasks/${project_id}`, { template_id: templateID })
  //       .then(res => {
  //         console.log(res);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  // };
  // const add90Day = () => {
  //   if (templateForm.preBuiltTemplate === true) {
  //     const project_id = editFields.id;
  //     console.log(project_id);
  //     axiosWithAuth()
  //       .post("/90_day", { project_id })
  //       .then(res => {
  //         console.log("90_day post", res);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  // };

  // async function submitForm(e) {
  //   e.preventDefault();
  //   const originalhandleSubmit = await handleSubmit(e);
  //   console.log("async", originalhandleSubmit);

  //   const customTemplate = await addCustomTemplate(e);
  //   console.log("async", customTemplate);

  //   const preBuilt = await add90Day();
  //   console.log("async", preBuilt);

  //   const projectTasks = await getProjectTasks();
  //   console.log("async", projectTasks);
  // }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormHeader>
        <h1 style={{ fontSize: "2rem", margin: 0 }}>{text}</h1>
        <XButton onClick={closeModal}>close X</XButton>
      </StyledFormHeader>
      <div style={{ marginBottom: "16px" }}>
        {" "}
        <span
          style={{
            marginTop: "24px",
            color: "orange",
            cursor: "pointer"
          }}
        >
          {imgText}
        </span>
        <span> (optional)</span>
      </div>

      <StyledLabel>Project Name</StyledLabel>
      <StyledInput
        type="text"
        name="project_name"
        maxLength="25"
        value={form.project_name}
        onChange={formChangeHandler}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "4px"
        }}
      >
        <div style={{ width: "45%" }}>
          <StyledLabel>Assign Custom Template</StyledLabel>
          <StyledSelect
            style={{
              background: "#E9E9E9",
              border: "none",
              paddingLeft: "10px"
            }}
            type="number"
            name="template_id"
            value={templateForm.template_id}
            onChange={templateIdChangeHandler}
          >
            <option>Choose Template</option>

            {templates.map(template => {
              return (
                <option key={template.id} value={template.template_id}>
                  {template.id}
                </option>
              );
            })}
          </StyledSelect>
        </div>
        <div style={{ width: "45%" }}>
          {" "}
          <StyledLabel>90 Day Template</StyledLabel>
          <div
            style={{
              width: "100%",
              height: "32px",
              padding: "6px 8px",
              backgroundColor: "#e9e9e9",
              display: "flex",
              alignItems: "center",
              borderRadius: "3px",
              marginTop: "5px"
            }}
          >
            <Checkbox
              checked={checked}
              color="default"
              value="false"
              onChange={checkBoxChangeHandler}
              inputProps={{
                "aria-label": "checkbox with default color"
              }}
              name="preBuiltTemplate"
              onClick={preBuildTemplatehandler}
            />

            <span style={{ color: "#817974" }}>Apply</span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "4px"
        }}
      >
        <div style={{ width: "30%" }}>
          <StyledLabel>Beds</StyledLabel>
          <StyledInput
            type="number"
            name="beds"
            value={form.beds}
            onChange={formChangeHandler}
          />
        </div>
        <div style={{ width: "30%" }}>
          <StyledLabel>Baths</StyledLabel>
          <StyledInput
            type="number"
            name="baths"
            value={form.baths}
            onChange={formChangeHandler}
          />
        </div>
        <div style={{ width: "30%" }}>
          <StyledLabel>Sq. Ft.</StyledLabel>
          <StyledInput
            type="number"
            name="square_ft"
            value={form.square_ft}
            onChange={formChangeHandler}
          />
        </div>
      </div>
      <StyledLabel>Address</StyledLabel>
      <StyledInput
        type="text"
        name="street_address"
        value={form.street_address}
        onChange={formChangeHandler}
      />
      <StyledLabel>City</StyledLabel>
      <StyledInput
        type="text"
        name="city"
        value={form.city}
        onChange={formChangeHandler}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "4px"
        }}
      >
        <div style={{ width: "45%" }}>
          <StyledLabel>State</StyledLabel>
          <StyledInput
            type="text"
            name="state"
            value={form.state}
            onChange={formChangeHandler}
          />
        </div>
        <div style={{ width: "45%" }}>
          <StyledLabel>ZIP Code</StyledLabel>
          <StyledInput
            type="number"
            name="zip_code"
            value={form.zip_code}
            onChange={formChangeHandler}
          />
        </div>
      </div>
      {error.error && error.error_text ? (
        <ErrorMessage errorMessage={error.error_text} />
      ) : null}
      <StyledBtn>{text}</StyledBtn>
    </StyledForm>
  );
}
