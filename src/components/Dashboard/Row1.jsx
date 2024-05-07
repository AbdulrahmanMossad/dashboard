import { Stack } from "@mui/material";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { useTheme } from "@emotion/react";
import PieChart from "../../page/pie/PieChart";
import { data } from "../../page/pie/data";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={{ sm: "row" }}
      flexWrap={"wrap"}
      sx={{
        gap: 1,
        justifyContent: "space-between",
      }}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"12,346"}
        subTitle={"Email sent"}
        chart={<PieChart data={data} isDashboard={true} />}
        increase={"+14%"}
      />
      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"12,346"}
        subTitle={"sales sent"}
        chart={<PieChart data={data} isDashboard={true} />}
        increase={"+10%"}
      />

      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"121,346"}
        subTitle={"New Clients"}
        chart={<PieChart data={data} isDashboard={true} />}
        increase={"+45%"}
      />

      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"121,346"}
        subTitle={"New Clients"}
        chart={<PieChart data={data} isDashboard={true} />}
        increase={"+45%"}
      />
    </Stack>
  );
};

export default Row1;
