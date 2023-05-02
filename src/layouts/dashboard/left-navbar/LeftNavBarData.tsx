import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

export const NAV_LINKS = [
  {
    text: "Dashboard",
    img: <GridViewOutlinedIcon />,
    link: "/dashboard",
  },
  {
    text: "Products",
    img: <AccountBoxOutlinedIcon />,
    link: "/products",
  },
  {
    text: "Services",
    img: <EscalatorWarningOutlinedIcon />,
    link: "/services",
  },
  {
    text: "Careers",
    img: <PersonSearchOutlinedIcon />,
    link: "/careers",
  },
  {
    text: "Contact Us",
    img: <SettingsOutlinedIcon />,
    link: "contact-us",
    // sublist: [
    //   {
    //     list: "Get to know us",
    //     sublistlink: "",
    //   },
    //   {
    //     list: "Get Quote",
    //     sublistlink: "",
    //   },
    // ],
  },
];
