import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer.jsx";
import GridContainer from "./components/Grid/GridContainer.jsx";
import GridItem from "./components/Grid/GridItem.jsx";
import HeaderLinks from "./components/Header/HeaderLinks.jsx";
import Parallax from "./components/Parallax.jsx";
import PowerLevel from "./components/PowerLevel.jsx";

import profile from "./assets/img/profile-pic.jpg";

import profilePageStyle from "./assets/jss/material-kit-react/views/profilePage.jsx";
import NavPills from "./components/NavPills";
import {AccountBox, Assessment, Telegram} from "@material-ui/icons";
import CustomLinearProgress from "./components/CustomLinearProgress";
import ProductSection from "./Sections/ProductSection";
import TeamSection from "./Sections/TeamSection";
import WorkSection from "./Sections/WorkSection";
import Button from "./components/CustomButtons/Button";

class ProfilePage extends React.Component {
    calculateYears = () => {
        let year = 1000 * 60 * 60 * 24 * 365;
        let startingDate = new Date(2015, 2, 1).getTime();
        let today = new Date().getTime();
        let yearsDeveloping = today - startingDate;
        return Math.round(yearsDeveloping / year);
    };

    render() {
        const {classes, ...rest} = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        return (
            <div>
                <Header
                    color="transparent"
                    href={"/"}
                    rightLinks={<HeaderLinks/>}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax small filter image={require("./assets/img/profile-bg.jpg")}/>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={profile} alt="..." className={imageClasses}/>
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Tyler Reece</h3>
                                        <h6>FULL STACK SOFTWARE ENGINEER</h6>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <NavPills
                            alignCenter
                            color="primary"
                            tabs={[
                                {
                                    tabButton: "Core Power Levels",
                                    tabIcon: Assessment,
                                    tabContent: (
                                        <GridContainer justify="center">
                                            <GridItem md={8}>
                                                <PowerLevel label={"Java"} color="primary" variant="determinate"
                                                            powerLevel={91}/>
                                                <PowerLevel label={"NodeJS"} color="primary" variant="determinate"
                                                            powerLevel={93}/>
                                                <PowerLevel label={"Spring"} color="primary" variant="determinate"
                                                            powerLevel={84}/>
                                                <PowerLevel label={"JavaScript"} color="primary" variant="determinate"
                                                            powerLevel={90}/>
                                                <PowerLevel label={"React"} color="primary" variant="determinate"
                                                            powerLevel={76}/>
                                                <PowerLevel label={"Flutter"} color="primary" variant="determinate"
                                                            powerLevel={70}/>
                                                <PowerLevel label={"Git"} color="primary" variant="determinate"
                                                            powerLevel={90}/>
                                                <PowerLevel label={"Postgres"} color="primary" variant="determinate"
                                                            powerLevel={73}/>
                                                <PowerLevel label={"Docker"} color="primary" variant="determinate"
                                                            powerLevel={69}/>
                                                <PowerLevel label={"Kubernetes"} color="primary" variant="determinate"
                                                            powerLevel={55}/>
                                                <PowerLevel label={"Python"} color="primary" variant="determinate"
                                                            powerLevel={60}/>
                                            </GridItem>
                                        </GridContainer>
                                    )
                                },
                                {
                                    tabButton: "About Me",
                                    tabIcon: AccountBox,
                                    tabContent: (
                                        <GridContainer justify="center">
                                            <GridItem>
                                                <div className={classes.description}>
                                                    <h4>
                                                        I have been developing for about {this.calculateYears()} years.
                                                        My goal is to learn and be challenged on a daily basis doing
                                                        something
                                                        I truly enjoy while enabling me to support my family. Simple,
                                                        development. I have ventured off the beaten path many
                                                        times in this
                                                        industry only to find something more I enjoy about it. There are
                                                        no limits and my passion for this industry only continues to
                                                        grow.
                                                    </h4>
                                                    <h4>
                                                        Aside from development my life revolves around my wife, son, and
                                                        daughter and I like to play as many video games as possible
                                                        according to
                                                        the time my schedule and my previously mentioned passions allow.
                                                    </h4>
                                                </div>
                                            </GridItem>
                                        </GridContainer>
                                    )
                                },
                                {
                                    tabButton: "NEED SOME WORK DONE?",
                                    tabIcon: Telegram,
                                    tabContent: (
                                        // <GridContainer justify="center">
                                        //     <GridItem>
                                        <div className={classes.description}>
                                            <h4 className={classes.description}>
                                                I'm your guy! Drop me a few lines about how you would like to
                                                collaborate. I will respond get back to you in a couple
                                                of hours and we can work something out.
                                            </h4>
                                            <div style={{paddingTop: '10%'}}>
                                                <Button color="primary"
                                                        onClick={() => window.location.href = "mailto:me@tylerreece.tech?subject=I have work for you!"}>
                                                    Drop Lines
                                                </Button>
                                            </div>
                                        </div>
                                        // </GridItem>
                                        // </GridContainer>
                                    )
                                },
                            ]}
                        />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withStyles(profilePageStyle)(ProfilePage);
