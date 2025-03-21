"use client";

import React, { useState } from "react";

const Tables = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableChange = (e) => {
    setSelectedTable(e.target.value);
  };

  return (
    <section id="tables" className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Choose Your Table</h2>
      <div className="grid grid-cols-3 gap-6">
        {/* Table 1 */}
        <div className="table-option">
          <input
            type="radio"
            id="table1"
            name="table"
            value="table1"
            checked={selectedTable === "table1"}
            onChange={handleTableChange}
            className="hidden"
          />
          <label htmlFor="table1" className="block text-center cursor-pointer">
            <img
              src="/restaurant.jpg"
              alt="Table 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="block mt-2">Table 1</span>
          </label>
        </div>

        {/* Table 2 */}
        <div className="table-option">
          <input
            type="radio"
            id="table2"
            name="table"
            value="table2"
            checked={selectedTable === "table2"}
            onChange={handleTableChange}
            className="hidden"
          />
          <label htmlFor="table2" className="block text-center cursor-pointer">
            <img
              src="/restaurant.jpg"
              alt="Table 2"
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="block mt-2">Table 2</span>
          </label>
        </div>

        {/* Table 3 */}
        <div className="table-option">
          <input
            type="radio"
            id="table3"
            name="table"
            value="table3"
            checked={selectedTable === "table3"}
            onChange={handleTableChange}
            className="hidden"
          />
          <label htmlFor="table3" className="block text-center cursor-pointer">
            <img
              src="/restaurant.jpg"
              alt="Table 3"
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="block mt-2">Table 3</span>
          </label>
        </div>

        {/* Table 4 */}
        <div className="table-option">
          <input
            type="radio"
            id="table4"
            name="table"
            value="table4"
            checked={selectedTable === "table4"}
            onChange={handleTableChange}
            className="hidden"
          />
          <label htmlFor="table4" className="block text-center cursor-pointer">
            <img
              src="/restaurant.jpg"
              alt="Table 4"
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="block mt-2">Table 4</span>
          </label>
        </div>

        {/* Table 5 */}
        <div className="table-option">
          <input
            type="radio"
            id="table5"
            name="table"
            value="table5"
            checked={selectedTable === "table5"}
            onChange={handleTableChange}
            className="hidden"
          />
          <label htmlFor="table5" className="block text-center cursor-pointer">
            <img
              src="/restaurant.jpg"
              alt="Table 5"
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="block mt-2">Table 5</span>
          </label>
        </div>

        {/* Table 6 */}
        <div className="table-option">
          <input
            type="radio"
            id="table6"
            name="table"
            value="table6"
            checked={selectedTable === "table6"}
            onChange={handleTableChange}
            className="hidden"
          />
          <label htmlFor="table6" className="block text-center cursor-pointer">
            <img
              src="/restaurant.jpg"
              alt="Table 6"
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="block mt-2">Table 6</span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Tables;
