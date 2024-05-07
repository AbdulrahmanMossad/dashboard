import { Box } from "@mui/material";
import LineChart from "./LineChart";

const Line = ({isDashboard=false}) => {

  return <Box sx={{ height:isDashboard?"280px":"75vh" }}><LineChart isDashboard={isDashboard}/></Box>;
};

export default Line;
