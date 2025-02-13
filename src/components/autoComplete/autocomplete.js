import React, { useState, useEffect } from "react";
import ContractItem from "../contractItem/ContractItem";

import { SERVER_URL } from "../../config";

function Autocomplete({ input, setInput }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `${SERVER_URL}/contracts/${input ? `?name=` + input : ""}`
        );
        const data = await res.json();

        setOptions(data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [input]);

  return (
    <ul>
      {options.map(item => {
        return (
          <ContractItem
            provider_name={item.provider_name}
            contract_id={item.contract_id}
          />
        );
      })}
    </ul>
  );
}

export default Autocomplete;
