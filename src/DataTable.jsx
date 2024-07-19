import React, { useState } from "react";
import "./DataTable.css";

const DataTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const toggleprev = () => {
    setCurrentPage(currentPage - 1);
  };
  const togglenext = () => {
    setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const currentPageData = data.slice(startIndex, endIndex);

  return (
    <div style={{ width: "100vw" }}>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((elem) => (
            <tr key={elem.id}>
              <td>{elem.id}</td>
              <td>{elem.name}</td>
              <td>{elem.email}</td>
              <td>{elem.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{display:"flex",flexDirection:"row",gap:"1rem",justifyContent:"center",marginTop:"1rem"}}>
        <button disabled={currentPage === 1} onClick={toggleprev}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          disabled={currentPage >= Math.ceil(data.length / pageSize)}
          onClick={togglenext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
