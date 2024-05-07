import { Box } from "@mui/material";
import BarChart from "./BarChart";
import Header from "../../components/utility/Header";
const Bar = ({ isDashboard = false }) => {
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      {/* <Header title={"DASHBOARD"} subTitle={"Welcome to dashboard"} /> */}
      <BarChart isDashboard={isDashboard} />
    </Box>
  );
};
export default Bar;
