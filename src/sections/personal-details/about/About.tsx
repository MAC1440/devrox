import CustomCard from "@/components/CustomCard";
import React from "react";
import { ABOUT_DATA } from "./AboutData";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const About = () => {
  const theme: any = useTheme();
  const [arrayItems, setArrayItems] = React.useState<number>(4);
  const [toggleList, setToggleList] = React.useState(false);
  const handleDropDown = () => {
    if (arrayItems === 4) {
      setArrayItems(ABOUT_DATA.length);
      setToggleList(true);
    } else {
      setArrayItems(4);
      setToggleList(false);
    }
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: { xs: "none", lg: "absolute" }, zIndex: 999 }}>
        <CustomCard
          title="About"
          titleTypographyProps={{ variant: "subtitle1" }}
          divider
        >
          {ABOUT_DATA.slice(0, arrayItems).map((item: any) => (
            <Box
              key={item.id}
              sx={{
                p: "10px 0 0 0",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600] }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="body2"
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
          <Box
            sx={{
              display: "flex",
              float: "right",
              mt: { xs: 1, sm: 1 },
            }}
            onClick={() => {
              handleDropDown();
            }}
          >
            <Typography
              component={"span"}
              variant="caption"
              sx={{
                marginRight: "5px",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              {toggleList ? "less" : "more"}
            </Typography>
            <Avatar
              className="more-dropdown"
              alt="drop-down"
              src=""
              sx={{
                width: "17px",
                height: "17px",
                cursor: "pointer",
                background: theme.palette.grey[700],
                opacity: 0.4,
              }}
            >
              {toggleList ? (
                <KeyboardArrowUpIcon
                  sx={{
                    fontSize: "18px",
                    color: theme.palette.grey[0],
                  }}
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{ fontSize: "18px", color: theme.palette.grey[0] }}
                />
              )}
            </Avatar>
          </Box>
        </CustomCard>
      </Box>
    </Box>
  );
};

export default About;
