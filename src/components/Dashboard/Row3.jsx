import { Box, Paper, Stack } from "@mui/material";
import Line from "../../page/line/Line";
import Pie from "../../page/pie/Pie";
import Bar from "../../page/bar/Bar";
import Geography from "../../page/geography/Geography";
const Row3 = () => {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={0.5} mt={3}>
      <Paper
        sx={{ minWidth: "200", width: "33%", flexGrow: 1 }}
        alignItems={"center"}
      >
        <Pie isDashboard={true} />
      </Paper>
      <Paper
        sx={{ minWidth: "200px", width: "33%", flexGrow: 1 }}
        alignItems={"center"}
      >
        <Bar isDashboard={true} />
      </Paper>
      <Paper
        sx={{ minWidth: "200px", width: "33%", flexGrow: 1 }}
        alignItems={"center"}
      >
        <Geography isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
