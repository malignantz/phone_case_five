import { Dropdown } from "react-bootstrap";
import phoneData from "./../lib/phoneData.js";
import { useState } from "react";

function ListPhoneComponent() {
  //const [models, setModels] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  let models = [];

  function selectCompany(co) {
    //setModels(phoneData[co]);
    setSelectedCompany(co);
    //models = phoneData[co];
    //console.log(models);
  }

  function populateModelsDropdown() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {selectedModel === "" ? "Select Phone Model" : selectedModel}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {selectedCompany === "" ? (
            <Dropdown.Item>Select Manufacturer</Dropdown.Item>
          ) : (
            phoneData[selectedCompany].map((m) => (
              <Dropdown.Item key={m} onClick={() => setSelectedModel(m)}>
                {m}
              </Dropdown.Item>
            ))
          )}
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return (
    <>
      <h2>List your Phone!</h2>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedCompany === "" ? "Select Manufacturer" : selectedCompany}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {Object.keys(phoneData).map((co) => (
            <Dropdown.Item key={co} onClick={() => selectCompany(co)}>
              {co}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {populateModelsDropdown()}
    </>
  );
}
export default ListPhoneComponent;
