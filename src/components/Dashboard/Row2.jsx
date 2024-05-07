import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import Line from "../../page/line/Line";
import { useTheme } from "@emotion/react";
import { DownloadOutlined } from "@mui/icons-material";
import { transactions } from "./transactions";
const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} gap={1.5} mt={3} flexWrap={"wrap"}>
      <Paper
        sx={{
          maxWidth: 900,
          flexGrow: 1,
        }}
      >
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography ml={4} variant="body2">
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>
      <Box
        sx={{
          height: 340,
          maxHeight: 350,
          overflow: "auto",
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            RecentTransaction
          </Typography>
        </Paper>

        {transactions.map((item, index) => {
          return (
            <Paper
              key={index}
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1" fontWeight="600">
                  test1
                </Typography>
                <Typography variant="body2">test2</Typography>
              </Box>
              <Typography variant="body1">test3</Typography>
              <Typography
                color={theme.palette.getContrastText(
                  theme.palette.secondary.main
                )}
                p={1}
                variant="body2"
                borderRadius={1.4}
                bgcolor={theme.palette.error.main}
              >
                $
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
