import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import axios from "axios";

const Templates = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    axios
      .get("https://staging-blitz-build.herokuapp.com/templates")
      .then(res => {
        setTemplates(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {templates.map(template => {
        return (
          <div>
            <p>{template.template_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Templates;
