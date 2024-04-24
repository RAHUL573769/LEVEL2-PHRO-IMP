import React from "react";

const TodoCars = () => {
  return (
    <div className="bg-white rounded-md flex items-between justify-between p-3">
      <input type="checkbox" name="" id="" />

      <p>Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoCars;
