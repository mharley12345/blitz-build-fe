import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import templateContext from "../../contexts/templates/TemplateContext";
import searchTermContext from "../../contexts/searching/searchTerm";
import AddTemplate from "../modal/AddTemplate";

const Templates = () => {
  const { templates } = useContext(templateContext);

  const { searchTerm } = useContext(searchTermContext);
  const templatesSearchInput = searchTerm.toLowerCase();
  const [templatesSearchResults, settemplateSearchResults] = useState([]);

  useEffect(() => {
    const results = templates.filter(template =>
      template.template_name.toLowerCase().includes(templatesSearchInput)
    );
    console.log("RESULTS:", results);
    settemplateSearchResults(results);
  }, [templatesSearchInput]);

  return (
    <div>
      {templates.map(template => {
        return (
          <div>
            <p>{template.template_name}</p>
          </div>
        );
      })}
      <button>
        <AddTemplate />
      </button>
    </div>
  );
};

export default Templates;
