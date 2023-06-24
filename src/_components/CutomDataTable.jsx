import MUIDataTable from "mui-datatables";
import React from "react";

const options = {
  filter: true,
  selectableRows: "multiple",
  selectableRowsOnClick: false,
  selectableRowsHideCheckboxes: true,
  filterType: "dropdown",
  responsive: "vertical",
  enableNestedDataAccess: ".", // allows nested data separated by "." (see column names and the data structure above)
  fixedHeader: true,
  // fixedSelectColumn: true,
  tableBodyHeight: "auto",
  setRowProps: (row, dataIndex, rowIndex) => {
    return (
      rowIndex % 2 === 0 && {
        style: { backgroundColor: "#E8EAFC" },
      }
    );
  },
};

const CustomDataTable = ({ rows, columns, title }) => {
  return (
    <MUIDataTable
      title={<b>{title}</b>}
      data={rows}
      columns={columns}
      options={options}
    />
  );
};

export default CustomDataTable;
