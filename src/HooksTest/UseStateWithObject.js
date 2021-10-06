import { Update } from "@mui/icons-material";
import React, { useState } from "react";

const UseStateWithObject = () => {
  const [Propfile, setPropfile] = useState({
    name: "Mahesh",
    age: 24,
    roll: 1234,
  });
  console.log(Propfile);
  const UpdateArray = () => {
    setPropfile({ ...Propfile, name: "deepak" });
  };

  return (
    <div className="pt-5">
      <h1 className="py-3 bg-dark text-white text-center">State With Object</h1>

      <h1 className="text-center">
        Name :{Propfile.name}, Age:{Propfile.age}, Roll:{Propfile.roll}
      </h1>

      <div className="text-center">
        <button className="btn btn-primary" onClick={UpdateArray}>
          Update
        </button>
      </div>
    </div>
  );
};

export default UseStateWithObject;
