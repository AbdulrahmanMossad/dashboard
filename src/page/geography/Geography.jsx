import { Box } from "@mui/material";
import GeographyChart from "./GeographyChart";
import { useTheme } from "@emotion/react";

const Geography = ({ isDashboard = false }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: isDashboard ? "280px" : "75vh",
        border: isDashboard ? null : `1px solid ${theme.palette.text.primary}`,
      }}
    >
      <GeographyChart isDashboard={isDashboard} />
    </Box>
  );
};

export default Geography;
