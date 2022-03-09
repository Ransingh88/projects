import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export function SimpleAccordion({children, head}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: 12.5 }} className={classes.heading}>
            {head}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export function Expand() {
    return (
      <SimpleAccordion head="What should I know before I start fundraising on ImpactGuru?">
        <div
          style={{ textAlign: "left", fontSize: 12, padding: 10 }}
          className="AccordionBody"
        >
          <div>
            ImpactGuru is an online crowdfunding website which specializes in
            medical fundraisers for cancer, transplant and other medical
            emergency treatments. Over the years, we have helped campaigners
            raise over Rs. 1500+ crore on our platform.
          </div>
          <br />
          <hr />
          <p style={{ fontSize: 17 }}>
            Why should I crowdfund for medical emergencies?
          </p>
          <ul>
            <li>
              Not everyone can shoulder hefty hospital bills. In 2019, only 472
              million people in India had medical insurance — less than 35% of
              our total population. Thus, when medical emergencies arise, we
              struggle to pay for treatment. ImpactGuru helps you get money when
              you need it most and ensures that you can recover quickly.
            </li>
            <br />
            <li>
              Medical emergencies demand quick action. There is no time to lose
              when your loved one’s life is at stake. Done right, crowdfunding
              can be a speedy answer to your troubles with hospital bills.
            </li>
            <br />
            <li>
              Insurance and loans aren’t always the best way to raise money for
              such bills. These can often be time consuming and stressful. The
              0% fee fundraisers on ImpactGuru come with no payback liability.
              The money is yours to recover with.
            </li>
            <br />
            <li>
              Crowdfunding on ImpactGuru can help you reach out to more people
              with ease. ImpactGuru is trusted by 10+ lakh donors across the
              globe. Together, we can help you raise great amounts with ease.
              You can start fundraising for a medical cause now!
            </li>
          </ul>
          <br />
          <hr />
          <p style={{ fontSize: 17 }}>
            What are the different kinds of fundraisers you can begin on
            ImpactGuru?
          </p>
          <p>
            While ImpactGuru has remained instrumental in helping NGOs, disaster
            relief projects and personal causes raise money, we specialize in
            medical. Here's a brief overview of the different types of
            fundraisers you can start on our platform.
          </p>
          <br />
          <hr />
          <p style={{ fontSize: 17 }}>Medical Fundraisers</p>
          <p>
            Hospital bills for emergencies such as cancer, transplant,COVID-19
            and accidents can demand a sum inaccessible by most. Starting a
            crowdfunding project on ImpactGuru can help you clear these bills
            without having to shoulder the financial burden alone.
          </p>
        </div>
      </SimpleAccordion>
    );
}