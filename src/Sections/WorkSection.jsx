import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import CustomInput from "../components/CustomInput.jsx";
import Button from "../components/CustomButtons/Button.jsx";

import workStyle from "../assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section}>
                {/*<GridContainer justify="center">*/}
                {/*  <GridItem cs={12} sm={12} md={8}>*/}
                <h4 className={classes.description}>
                    I'm your guy! Drop a few lines about how you would like to collaborate. I will respond get back to
                    you in a couple
                    of
                    hours.
                </h4>
                <form>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                                labelText="Your Name"
                                id="name"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                                labelText="Your Email"
                                id="email"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <CustomInput
                            labelText="Your Message"
                            id="message"
                            formControlProps={{
                                fullWidth: true,
                                className: classes.textArea
                            }}
                            inputProps={{
                                multiline: true,
                                rows: 5
                            }}
                        />
                        <GridContainer justify="center">
                            <GridItem
                                xs={12}
                                sm={12}
                                md={4}
                                className={classes.textCenter}
                            >
                                <Button color="primary" onClick={() => window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here"}>Send Message</Button>
                            </GridItem>
                        </GridContainer>
                    </GridContainer>
                </form>
                {/*</GridItem>*/}
                {/*</GridContainer>*/}
            </div>
        );
    }
}

export default withStyles(workStyle)(WorkSection);
