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

import profile from "./assets/img/profile-pic.png";

import profilePageStyle from "./assets/jss/material-kit-react/views/profilePage.jsx";
import NavPills from "./components/NavPills";
import {AccountBox, Assessment, Telegram} from "@material-ui/icons";
import Button from "./components/CustomButtons/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Muted from "./components/Typography/Muted";

class ProfilePage extends React.Component {
    calculateYears = () => {
        let year = 1000 * 60 * 60 * 24 * 365;
        let startingDate = new Date(2015, 2, 1).getTime();
        let today = new Date().getTime();
        let yearsDeveloping = today - startingDate;
        return Math.round(yearsDeveloping / year);
    };

    state = {
        checked: false
    }

    // Event is passing target as null but the wrapped function still allows dynamic boolean flipping
    handleChange = name => event => {
        this.setState(state => ({...state, [name]: !state[name]}));
    };

    render() {
        const {classes, ...rest} = this.props;
        const imageClasses = classNames(
            classes.imgBrighten,
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
                                        <img src={profile} alt="..." style={{maxWidth: '170px'}} className={imageClasses}/>
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Tyler Reece</h3>
                                        <h6>SOFTWARE ENGINEER</h6>
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
                                        <>
                                            <GridContainer justify="center">
                                                <div style={{paddingBottom: '20px'}}>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                checked={this.state.checked}
                                                                onChange={this.handleChange('checked')}
                                                                value="checked"
                                                                color="primary"
                                                            />
                                                        }
                                                        label={this.state.checked ?
                                                            <Muted>Hello there fellow programmer!</Muted> :
                                                            <Muted>Know the code words?</Muted>}
                                                    />
                                                </div>
                                            </GridContainer>
                                            <GridContainer justify="center">
                                                {this.state.checked ? <GridItem md={8}>
                                                    <PowerLevel label={"Java"} variant="determinate" powerLevel={91} key={1}/>
                                                    <PowerLevel label={"NodeJS"} variant="determinate" powerLevel={93} key={2}/>
                                                    <PowerLevel label={"Spring"} variant="determinate" powerLevel={84} key={3}/>
                                                    <PowerLevel label={"JavaScript"} variant="determinate" powerLevel={90}/>
                                                    <PowerLevel label={"React"} variant="determinate" powerLevel={76}/>
                                                    <PowerLevel label={"Flutter"} variant="determinate" powerLevel={70}/>
                                                    <PowerLevel label={"Git"} variant="determinate" powerLevel={90}/>
                                                    <PowerLevel label={"Postgres"} variant="determinate" powerLevel={73}/>
                                                    <PowerLevel label={"Docker"} variant="determinate" powerLevel={69}/>
                                                    <PowerLevel label={"Kubernetes"} variant="determinate" powerLevel={55}/>
                                                    <PowerLevel label={"Python"} variant="determinate" powerLevel={60}/>
                                                </GridItem> : <GridItem md={8}>
                                                    <PowerLevel label={"Servers/Databases"} variant="determinate" powerLevel={91}/>
                                                    <PowerLevel label={"Websites"} variant="determinate" powerLevel={83}/>
                                                    <PowerLevel label={"Mobile Apps"} variant="determinate" powerLevel={70}/>
                                                </GridItem>}
                                            </GridContainer>
                                        </>
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
                                                        daughter. Oh yes and, as much as the previously mentioned passions allow,
                                                        I like to play as many video games as possible. 😆
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
                                        <div className={classes.description}>
                                            <h4 className={classes.description}>
                                                I'm your guy! Drop me a few lines about how you would like to
                                                collaborate. I will respond to you in a couple
                                                of hours and we can work something out.
                                            </h4>
                                            <div style={{paddingTop: '10%'}}>
                                                <Button color="primary"
                                                        onClick={() => window.location.href = "mailto:me@tylerreece.tech?subject=I have work for you!"}>
                                                   Email Me
                                                </Button>
                                            </div>
                                        </div>
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
