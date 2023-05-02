import { Avatar, Box, Card, Icon, Rating, Typography } from "@mui/material";
import { PROFILE_DATA } from "./ProfilePreviewData";
import { useTheme } from "@emotion/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const ProfilePreview = () => {
  const theme: any = useTheme();
  return (
    <Card
      sx={{
        mt: 6,
        p: "50px 0",
        boxShadow: theme.customShadows.success,
        color: theme.palette.primary.main,
        minHeight: "90vh",
      }}
    >
      {PROFILE_DATA.map((item: any) => (
        <Box key={item.id} sx={{ display: "grid", placeItems: "center" }}>
          <Avatar
            alt="profile-pic"
            src={item.profile}
            variant="circular"
            sx={{
              width: "100px",
              height: "100px",
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{ mt: 3, mb: 2, color: theme.palette.grey[700] }}
          >
            {item.title}
          </Typography>
          <Rating
            name="read-only"
            defaultValue={item.value}
            readOnly
            sx={{ mb: 3 }}
          />
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5, gap: 1 }}>
            <Avatar
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <LocationOnIcon
                sx={{ fontSize: "14px", color: theme.palette.grey[0] }}
              />
            </Avatar>
            <Typography variant="body2" sx={{ color: theme.palette.grey[700] }}>
              {item.phone}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: theme.palette.grey[700],
              }}
            >
              <EmailIcon
                sx={{ fontSize: "11px", color: theme.palette.grey[0] }}
              />
            </Avatar>
            <Typography variant="body2" sx={{ color: theme.palette.grey[700] }}>
              {item.email}
            </Typography>
          </Box>
        </Box>
      ))}
    </Card>
  );
};

export default ProfilePreview;
