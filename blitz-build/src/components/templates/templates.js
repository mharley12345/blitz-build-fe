import React, { useState, useEffect } from "react";
import axios from "axios";

const Templates = () => {
  const [templates, setTemplates] = useState();

  useEffect(() => {
    axios
      .get("https://blitz-build.herokuapp.com/templates", templates)
      .then(res => {
        console.log(res);
        setTemplates(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

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
