import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/utility/Header";
const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];
const Form = () => {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    watch,
    formState: { errors },
  } = useForm();
  // for snackbar
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => handleClick();

  return (
    <Box
      // مش هينادي علي الفنكشن (onSubmit) الا لما يتاكد ان مفيش مشاكل في حقول الادخال
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Header
        title={"CREATE USER"}
        subTitle={"create a new user profile"}
        isDashboard={false}
      />
      <Stack sx={{ gap: 5 }} direction={"row"}>
        <TextField
          // from react form hook for validation
          {...register("firstName", {
            required: true,
            maxLength: 20,
            minLength: 3,
          })}
          // /////////////////////////////////////
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName
              ? "this input is required & min 3 charachter"
              : null
          }
          id="filled-basic"
          label="First Name"
          variant="filled"
          sx={{ flex: 1 }}
        />
        <TextField
          // from react form hook for validation
          {...register("lastName", {
            required: true,
            maxLength: 20,
            minLength: 3,
          })}
          // /////////////////////////////////////
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName ? "this input is required & min 3 charachter" : null
          }
          id="filled-basic"
          label="Last Name"
          variant="filled"
          sx={{ flex: 1 }}
        />
      </Stack>
      <TextField
        id="filled-basic"
        label="Email"
        variant="filled" // from react form hook for validation
        {...register("email", {
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
        //const regPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        // /////////////////////////////////////
        error={Boolean(errors.email)}
        helperText={
          // eslint-disable-next-line no-extra-boolean-cast
          Boolean(errors.email) ? "Email is required & must be valid" : null
        }
      />
      <TextField
        {...register("phone", {
          required: true,
          // pattern for egypt number
          pattern: /^01[0125][0-9]{8}$/,
        })}
        error={Boolean(errors.phone)}
        helperText={
          // eslint-disable-next-line no-extra-boolean-cast
          Boolean(errors.phone)
            ? "phone number  is required & must be valid"
            : null
        }
        id="filled-basic"
        label="Contact Number"
        variant="filled"
      />
      <TextField id="filled-basic" label="Address 1" variant="filled" />
      <TextField id="filled-basic" label="Address 2" variant="filled" />
      <TextField
        id="filled-select-currency"
        select
        label="Role"
        defaultValue="User"
        helperText="Please select your currency"
        variant="filled"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "end" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Account created succefully !
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};
export default Form;
