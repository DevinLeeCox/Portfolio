import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ToppingSelector from "./ToppingSelector";
import { useState } from "react";
import { ToppingCategory } from "../../app/models/toppingCategory";
import SideBar from "./SideBar";

export default function PizzaBuilder() {
  const [toppings, setToppings] = useState<ToppingCategory[] | null>(null);
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
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
              <ToppingSelector />
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} md={4}>
          <SideBar />
        </Grid>
      </Grid>
    </>
  );
}
