import CustomCard from "@/components/CustomCard";
import React from "react";
import { JOBPROFILE_DATA } from "./JobProfileData";
import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const JobProfile = () => {
  const theme: any = useTheme();
  return (
    <CustomCard
      title="Job Profile"
      divider
      titleTypographyProps={{ variant: "subtitle1" }}
    >
      {JOBPROFILE_DATA.map((item: any) => (
        <Box key={item.id} sx={{ p: "10px 0 0 0" }}>
          <Typography
            variant="subtitle2"
            sx={{ color: theme.palette.grey[600] }}
          >
            {item.label}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: theme.palette.grey[600],
              fontWeight: 400,
              textTransform: "unset",
            }}
          >
            {item.title}
          </Typography>
          <Divider sx={{ mt: 1 }} />
        </Box>
      ))}
    </CustomCard>
  );
};

export default JobProfile;
