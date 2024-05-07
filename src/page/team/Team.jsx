import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/utility/Header";

const Team = () => {
  const theme = useTheme();
  const columns = [
    {
      field: "ID",
      headerName: "ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "acess",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              textAlign: "center",
              alignItems: "center",
              borderRadius: "3px",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manger"
                  ? theme.palette.secondary.main
                  : "#3da58a",
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsOutlined
                fontSize="small"
                sx={{ color: "#fff" }}
              />
            ) : access === "Manger" ? (
              <SecurityOutlined fontSize="small" sx={{ color: "#fff" }} />
            ) : (
              <LockOpenOutlined fontSize="small" sx={{ color: "#fff" }} />
            )}

            <Typography
              variant="body1"
              sx={{ fontSize: "13px", color: "#fff" }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: "600", width: "auto", mx: "auto" }}>
      <Header
        title={"TEAM"}
        subTitle={"Manging the Team Members"}
        isDashboard={false}
      />
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default Team;
