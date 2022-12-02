import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import SideBar from "../pizzabuilder/SideBar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PartialMenu from "./PartialMenu";
import { useState } from "react";

export default function FullMenu() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container columnSpacing={3}>
      <Grid item xs={12} md={8}>
        <Accordion
          disableGutters
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            sx={{ flexDirection: "row-reverse", backgroundColor: "rgba(255, 255, 255, .05)" }}
          >
            <Typography>Meat</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PartialMenu />
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item xs={12} md={4}>
        <SideBar />
      </Grid>
    </Grid>
  );
}
