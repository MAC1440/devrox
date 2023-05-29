import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import NavbarList from "./navbar/navbarList";
import { NAV_LINKS } from "@/data/navbarData";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../assets/img/logo_bg.png";
import Image from "next/image";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function AppDrawer({ children }: any) {
  const router = useRouter();
  const theme: any = useTheme();
  const { pathname } = router;

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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
    <Box>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Image
            src={logo}
            width={80}
            height={60}
            alt="logo"
            style={{ borderRadius: "10px" }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            py: 1,
            height: "auto",
            overflowY: "auto",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
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
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
