import { useCallback, useState } from "react";
import type { ChangeEvent } from "react";
import Page from "@/components/Page";
import {
  Box,
  Container,
  Divider,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import PrimaryCarer from "@/sections/carer-info/personal-info/initial-home-visit/primary-carer/PrimaryCarer";
import InterestForm from "@/sections/carer-info/personal-info/initial-home-visit/interest/InterestForm";
import BackgroundForm from "@/sections/carer-info/personal-info/initial-home-visit/background/InterestForm";
import Assesment from "@/sections/carer-info/personal-info/initial-home-visit/asssement/Assesment";
import Document from "@/sections/carer-info/personal-info/initial-home-visit/document/Document";
import PrimaryForm from "@/sections/carer-info/personal-info/initial-home-visit/primary/PrimaryForm";
const tabs = [
  { label: "Primary Carer", value: "primary" },
  { label: "interest", value: "interest" },
  { label: "Background", value: "background" },
  { label: "Assesment", value: "assesment" },
  { label: "Documents", value: "documents" },
];
const Index = () => {
  const [currentTab, setCurrentTab] = useState<string>("primary");
  const handleTabsChange = useCallback(
    (event: ChangeEvent<{}>, value: string): void => {
      setCurrentTab(value);
    },
    []
  );
  return (
    <>
      <Page title="Initial Home Visit">
        <Stack spacing={3} sx={{ mb: 3 }}>
          <div>
            <Tabs
              indicatorColor="primary"
              onChange={handleTabsChange}
              scrollButtons="auto"
              textColor="primary"
              value={currentTab}
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
            <Divider />
          </div>
        </Stack>
        {currentTab === "primary" && <PrimaryForm />}
        {currentTab === "interest" && <InterestForm />}
        {currentTab === "background" && <BackgroundForm />}
        {currentTab === "assesment" && <Assesment />}
        {currentTab === "documents" && <Document />}
      </Page>
    </>
  );
};

export default Index;
