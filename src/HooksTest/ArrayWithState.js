import React, { useState } from "react";

const ArrayWithState = () => {
  const bioData = [
    {
      id: 0,
      name: "Mahesh",
      age: 24,
      roll: 1234,
    },
  ];
  const [myBiodata, setMyBiodata] = useState(bioData);
  const clearData = () => {
    setMyBiodata([]);
  };
  return (
    <div>
      <h1 className="text-center py-5 bg-dark text-white">
        Array With Use State
      </h1>
      <>
        {myBiodata.map((current) => {
          return (
            <>
              <h1 key={current.id} className="text-center">
                Name: {current.name}, Age: {current.age}, Roll: {current.roll}
              </h1>
            </>
          );
        })}
        <div className="text-center">
          <button className="btn btn-primary" onClick={clearData}>
            clear
          </button>
        </div>
      </>
    </div>
  );
};

export default ArrayWithState;
