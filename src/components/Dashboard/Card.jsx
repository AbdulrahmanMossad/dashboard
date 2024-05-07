import { Box, Paper, Stack, Typography } from "@mui/material";
const Card = ({ icon, title, subTitle, chart, increase }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        flexGrow: 1,
        p: { xs: 0.5, sm: 1.5 },
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <Stack direction={"column"} gap={3}>
        {icon}
        <Typography>{title}</Typography>
        <Typography>{subTitle}</Typography>
      </Stack>
      <Stack direction={"column"} sx={{ alignItems: "center" }}>
        <Box sx={{ height: "100px", width: "100px" }}>{chart}</Box>
        <Typography sx={{ textAlign: "center" }}>{increase}</Typography>
      </Stack>
    </Paper>
  );
};

export default Card;
