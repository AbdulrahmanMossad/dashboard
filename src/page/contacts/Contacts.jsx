import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./contactsData";
import Header from "../../components/utility/Header";

const Contacts = () => {
  return (
    <Box sx={{ height: "600", width: "auto", mx: "auto" }}>
      <Header
        title={"CONTACTS"}
        subTitle={"List of Contacts for future Reference"}
        isDashboard={false}
      />
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
};

export default Contacts;
