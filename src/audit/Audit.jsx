import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { userActions } from "_store";
import CustomDataTable from "_components/CutomDataTable";
import "./auditStyles.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export { Audit };

function Audit() {
  const [timeFormat, setTimeFormat] = useState("12"); // Initial state, defaulting to 12-hour format

  const users = useSelector((x) => {
    console.log(x.users.list);
    return x.users.list;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  const getFormattedTime = (value) => {
    const createdAt = new Date(value);

    if (timeFormat === "12") {
      return createdAt.toLocaleTimeString("en-US");
    } else if (timeFormat === "24") {
      return createdAt.toLocaleTimeString("en-US", { hour12: false });
    }

    return value;
  };

  const handleTimeFormatChange = (event) => {
    setTimeFormat(event.target.value);
  };

  console.log("UsersList: ", users);
  return (
    <>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Date Format</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={timeFormat}
          label="Date Format"
          onChange={handleTimeFormatChange}
        >
          <MenuItem value="12">12 Hours</MenuItem>
          <MenuItem value="24">24 Hours</MenuItem>
        </Select>
      </FormControl>
      <div className="responsive-table">
        <CustomDataTable
          rows={users?.value}
          columns={[
            {
              name: "firstName",
              label: "First Name",
              options: {
                filter: true,
              },
            },

            {
              name: "lastName",
              label: "Last Name",
              options: {
                filter: true,
              },
            },
            {
              name: "username",
              label: "Username",
              options: {
                filter: true,
              },
            },
            {
              name: "createdDate",
              label: "Created Date",
              options: {
                filter: true,
              },
            },
            {
              name: "createdTime",
              label: "Created Time",
              options: {
                customBodyRender: (value) => {
                  const formattedTime = getFormattedTime(value);
                  return formattedTime;
                },
              },
            },
          ]}
          title="Auditor Page"
        />
      </div>

      {/* <h1>Auditor Page</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>First Name</th>
            <th style={{ width: "30%" }}>Last Name</th>
            <th style={{ width: "30%" }}>Username</th>
          </tr>
        </thead>
        <tbody>
          {users?.value?.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
            </tr>
          ))}
          {users?.loading && (
            <tr>
              <td colSpan="4" className="text-center">
                <span className="spinner-border spinner-border-lg align-center"></span>
              </td>
            </tr>
          )}
        </tbody>
      </table> */}
    </>
  );
}
