import {
  Box,
  Collapse,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import List from "@mui/material/List";
import { NAV_LINKS } from "../../../data/navbarData";
import { useRouter } from "next/router";
import Link from "next/link";

const NavbarList = () => {
  const router = useRouter();
  const theme: any = useTheme();
  const { pathname } = router;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <List
      sx={{
        py: 1,
        height: "auto",
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
      }}
    >
      {NAV_LINKS.map((text: any, index: any) => {
        return (
          <div key={index} style={{ display: "flex" }}>
            <ListItem
              sx={{
                padding: "2px",
                px: 1,
              }}
            >
              <Link
                scroll={false}
                style={{
                  textDecoration: "none",
                  width: "100%",
                }}
                onClick={handleScroll}
                href={text.link}
              >
                <ListItemButton
                  sx={{
                    justifyContent: "center",
                    px: 2.1,
                    py: 1,
                    borderRadius: "10px",
                    backgroundColor:
                      pathname === text.link ? theme.palette.grey[900] : "",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 2,
                      justifyContent: "center",
                      color: theme.palette.grey[400],
                    }}
                  >
                    {text.img}
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={text.text}
                    sx={{
                      opacity: 1,
                      color: theme.palette.grey[400],
                      fontSize: "14px",
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          </div>
        );
      })}
    </List>
  );
};

export default NavbarList;
