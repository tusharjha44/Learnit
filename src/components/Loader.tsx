import { CircularProgress, Stack } from "@mui/material";

export const Loader = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} height={"85vh"}>
      <CircularProgress size={"10rem"} />
    </Stack>
  );
};

