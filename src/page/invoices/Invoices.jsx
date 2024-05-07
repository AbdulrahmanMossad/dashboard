import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./invoicesData";
import Header from "../../components/utility/Header";

const Invoices = () => {
  return (
    <Box sx={{ height: "600", width: "auto", mx: "auto" }}>
      <Header
        title={"INVOICES"}
        subTitle={"List of invoices for future Reference"}
        isDashboard={false}
      />
      <DataGrid checkboxSelection rows={rows} columns={columns} />
    </Box>
  );
};

export default Invoices;
