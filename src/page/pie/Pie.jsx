import { Box } from "@mui/material";
import PieChart from "./PieChart";
import { data } from "./data";
const Pie = ({isDashboard=false}) => {
  return (
    <Box sx={{ height:isDashboard?"280px":"75vh" }}>
      <PieChart data={data} isDashboard={isDashboard}/>
    </Box>
  );
};

export default Pie;
