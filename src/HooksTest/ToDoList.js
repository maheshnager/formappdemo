import React, { useState } from "react";

const ToDoList = () => {
  const bioData = [
    {
      id: 0,
      name: "Mahesh",
      age: 24,
      roll: 1234,
    },
    {
      id: 1,
      name: "Deepak",
      age: 28,
      roll: 1234,
    },
  ];
  const [myBiodata, setMyBiodata] = useState(bioData);
  const clearData = () => {
    setMyBiodata([]);
  };
  const removeElem = (id) => {
    const newBioData = myBiodata.filter((current) => {
      return current.id !== id;
    });
    setMyBiodata(newBioData);
  };
  return (
    <div>
      <h1 className="text-center py-5 bg-dark text-white">
        Array With Use State Remove One Array Data
      </h1>
      <>
        {myBiodata.map((current) => {
          return (
            <>
              <div
                key={current.id}
                className="text-center  w-50 m-auto text-white "
              >
                <h4 className="bg-success m-2 p-3">
                  Name: {current.name}, Age: {current.age}, Roll: {current.roll}
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => removeElem(current.id)}
                  >
                    Remove
                  </button>
                </h4>
              </div>
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

export default ToDoList;
