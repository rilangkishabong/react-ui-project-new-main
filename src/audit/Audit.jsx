import { useEffect } from "react";
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
  const users = useSelector((x) => x.users.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);
  console.log("UsersList: ", users);
  return (
    <>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Date Format</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={12}
          label="Date Format"
          //   onChange={handleChange}
        >
          <MenuItem value={12}>12 Hours</MenuItem>
          <MenuItem value={24}>24 Hours</MenuItem>
        </Select>
      </FormControl>
      <div className="responsive-table">
        <CustomDataTable
          rows={users?.value && users.value}
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
