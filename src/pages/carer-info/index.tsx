import VericalTabs from "@/components/VericalTabs";
import Layout from "@/layouts";
import React, { Fragment } from "react";
import {
  Box,
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Typography,
  useTheme,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NextLink from "next/link";
import Page from "@/components/Page";
import { TABSDATAARRY } from "@/sections/carer-info/CarerInfoData";
import { TitleWithBreadcrumbs } from "@/components/PageBreadcrumbs";

// ----------------------------------------------------------------------

CarerInfo.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CarerInfo() {
  const theme: any = useTheme();

  return (
    <Page title="Carer Info">
      <TitleWithBreadcrumbs title="Carer Info" />
      <VericalTabs tabsDataArray={TABSDATAARRY}>
        {TABSDATAARRY?.map((item) => (
          <Fragment key={item?.index}>
            {item?.innerDataArray?.map((innerItem) => (
              <Box
                key={innerItem?.id}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <List sx={{ width: "100%" }}>
                  <NextLink
                    href={innerItem?.link}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <ListItem
                      sx={{
                        ":hover": {
                          background:
                            theme.palette.mode === "light"
                              ? theme.palette.grey[300]
                              : theme.palette.grey[800],
                          borderRadius: 3,
                        },
                      }}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          sx={{
                            "&:hover": { background: "transparent !important" },
                            color: theme.palette.grey[600],
                            fontWeight: 500,
                            fontSize: "14px",
                          }}
                        >
                          P
                          <DoneIcon
                            sx={{ color: "#0E918C", fontSize: "14px" }}
                          />
                          A
                          <FiberManualRecordIcon
                            sx={{ color: "#F6830F", fontSize: "14px" }}
                          />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar
                        sx={{
                          background: `${item?.background}`,
                          width: "12px",
                          height: "12px",
                          borderRadius: 1,
                        }}
                      />
                      <Typography
                        variant="subtitle1"
                        component="p"
                        color={theme.palette.grey[600]}
                      >
                        {innerItem?.title}
                      </Typography>
                    </ListItem>
                  </NextLink>
                </List>
              </Box>
            ))}
          </Fragment>
        ))}
      </VericalTabs>
    </Page>
  );
}
