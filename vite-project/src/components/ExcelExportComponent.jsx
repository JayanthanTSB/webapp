import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { saveAs } from "file-saver";
import React from "react";
import { Bounce, toast } from "react-toastify";
import * as XLSX from "xlsx";

function ExcelExportComponent() {
  const exportToExcel = async () => {
    try {
      const res = await axios.get("https://sample-deploy-pgaw.onrender.com/");
      const worksheet = XLSX.utils.json_to_sheet(res.data.users); // Use the fetched data directly
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

      // Buffer to store the generated Excel file
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      const blob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
      });

      const fileName =
        "exportedUserData_" +
        new Date().toISOString().slice(0, 10) +
        "_" +
        new Date().toLocaleTimeString() +
        ".xlsx";

      saveAs(blob, fileName);
      setTimeout(() => {
        toast.success("User List Exported", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }, 500);
    } catch (error) {
      console.error("Error exporting data to Excel", error);
    }
  };

  return (
    <div className="App">
      <button onClick={exportToExcel} className="btn btn-dark mx-5 px-5">
        Export as Excel
      </button>
    </div>
  );
}

export default ExcelExportComponent;
