import { Dropdown } from "react-bootstrap";
import phoneData from "./../lib/phoneData.js";
import { useState } from "react";

function ListPhoneComponent() {
  const [models, setModels] = useState([]);

  function selectCompany(co) {
    setModels(phoneData[co]);
  }

  function populateModelsDropdown() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Select Phone Model
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {models.length === 0 ? (
            <Dropdown.Item>Select Manufacturer</Dropdown.Item>
          ) : (
            models.map((m) => <Dropdown.Item key={m}>{m}</Dropdown.Item>)
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
          Select Manufacturer
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
