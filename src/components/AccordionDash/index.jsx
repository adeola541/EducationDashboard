import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function AccordionDash() {
  return (
    <div>
        <Typography>Upcoming Tests</Typography>
      <Accordion>
        <AccordionSummary
          keyboardArrow={<KeyboardArrowRightIcon  style={{ color:'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Basic Computer</Typography>
         <Typography>Class Test 5</Typography>

        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          keyboardArrow={<KeyboardArrowRightIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          keyboardArrow={<KeyboardArrowRightIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
