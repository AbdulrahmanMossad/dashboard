import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import Row1 from "../../components/Dashboard/Row1";
import Row2 from "../../components/Dashboard/Row2";
import Row3 from "../../components/Dashboard/Row3";
import Header from "../../components/utility/Header";

const Dashboard = () => {
  return (
    <Box>
      <Header
        title={"DASHBOARD"}
        subTitle={"Welcome to dashboard"}
        isDashboard={true}
      />

      <Box sx={{ textAlign: "right", mb: 1.3 }}>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", p: "6px 8px", color: "primary" }}
        >
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>

      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
