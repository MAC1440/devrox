// next
import NextLink from "next/link";
// @mui
import {
  Box,
  Typography,
  Breadcrumbs as MUIBreadcrumbs,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { useTheme } from "@emotion/react";

// ----------------------------------------------------------------------

export const TitleWithBreadcrumbs = ({
  title = "Page Title",
  ...other
}: any) => {
  const theme: any = useTheme();
  const contrast = theme.palette.getContrastText(
    theme.palette.background.default
  );

  return (
    <Stack direction="row" alignItems="center">
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
      <Box sx={styles.separator({ theme, contrast })} />
      <PageBreadcrumbs {...other} />
    </Stack>
  );
};

// ----------------------------------------------------------------------

export default function PageBreadcrumbs({ activeLast = false, ...other }: any) {
  const router = useRouter();
  const paths = router.pathname.split("/").slice(1);
  const pathsWithLinks: any = [];

  let runningPath = "";
  paths.forEach((path, index) => {
    runningPath += `/${path}`;
    pathsWithLinks[index] = { href: runningPath, name: path };
  });

  pathsWithLinks[0].icon = <HomeIcon />;

  const currentLink = pathsWithLinks[pathsWithLinks.length - 1].name;

  const listDefault = pathsWithLinks.map((link: any) => (
    <LinkItem key={link.name} link={link} />
  ));

  const listActiveLast = pathsWithLinks.map((link: any) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Typography variant="body2" sx={styles.inActiveLink}>
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <MUIBreadcrumbs {...other}>
      {activeLast ? listDefault : listActiveLast}
    </MUIBreadcrumbs>
  );
}

// ----------------------------------------------------------------------

function LinkItem({ link }: any) {
  const { href = "", name, icon } = link;
  return (
    <NextLink style={{ textDecoration: "none" }} href={href} passHref>
      <Typography
        key={name}
        variant="body2"
        sx={styles.activeLink}
        component={"div"}
      >
        {icon && <Box sx={styles.breadcrumbIcon}>{icon}</Box>}
        {name}
      </Typography>
    </NextLink>
  );
}

// ----------------------------------------------------------------------
// Styles
const styles = {
  separator: ({ theme, contrast }: any) => ({
    mx: theme.spacing(1),
    width: "1px",
    height: "1.32rem",
    background: contrast,
  }),
  inActiveLink: {
    maxWidth: 260,
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: "text.disabled",
    textOverflow: "ellipsis",
    textTransform: "capitalize",
  },
  activeLink: {
    lineHeight: 2,
    display: "flex",
    alignItems: "center",
    color: "text.primary",
    textTransform: "capitalize",
    "&:hover": {
      textDecoration: "underline",
    },
    "& > div": { display: "inherit" },
  },
  breadcrumbIcon: { mr: 1, "& svg": { width: 20, height: 20 } },
};
