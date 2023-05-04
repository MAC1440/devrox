import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PsychologyIcon from "@mui/icons-material/Psychology";
export const NAV_LINKS: any = [
  {
    text: "Home",
    img: <HomeOutlinedIcon />,
    link: "/home",
  },
  {
    text: "Games",
    img: <SportsEsportsIcon />,
    link: "/games",
  },
  {
    text: "Services",
    img: <PsychologyIcon />,
    link: "/services",
  },
  {
    text: "Careers",
    img: <WorkIcon />,
    link: "/careers",
  },
  {
    text: "Contact Us",
    img: <ContactMailIcon />,
    link: "contact-us",
  },
];
