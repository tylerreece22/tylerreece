import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GridContainer from "./components/Grid/GridContainer.jsx";
import GridItem from "./components/Grid/GridItem.jsx";
import HeaderLinks from "./components/Header/HeaderLinks.jsx";
import Parallax from "./components/Parallax/Parallax.jsx";

import profile from "./assets/img/profile-pic.jpg";

import profilePageStyle from "./assets/jss/material-kit-react/views/profilePage.jsx";
import NavPills from "./components/NavPills/NavPills";
import {AccountBox} from "@material-ui/icons";

class ProfilePage extends React.Component {
    calculateYears = () => {
        let year=1000*60*60*24*365;
        let startingDate = new Date(2015, 2, 1).getTime();
        let today = new Date().getTime();
        let yearsDeveloping = today - startingDate;
        return Math.round(yearsDeveloping/year);
    };

  render() {
    const { classes, ...rest } = this.props;
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
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
            {...rest}
        />
        <Parallax small filter image={require("./assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Tyler Reece</h3>
                      <h6>SOFTWARE ENGINEER</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                        <NavPills
                            alignCenter
                            color="primary"
                            tabs={[
                                {
                                    tabButton: "About",
                                    tabIcon: AccountBox,
                                    tabContent: (
                                        <GridContainer justify="center">
                                            <GridItem >
                                                <div className={classes.description}>
                                                    <p>
                                                        I have been developing for about {this.calculateYears()} years.

                                                        <br/>

                                                        My goal is to learn and be challenged on a daily basis doing something
                                                        I truly enjoy while enabling me to support my family. Simple, development
                                                        in all of its glory. I have ventured off the beaten path many times in this
                                                        industry only to find something more I enjoy about it. There are no limits.
                                                    </p>
                                                </div>
                                            </GridItem>
                                        </GridContainer>
                                    )
                                },
                                {
                                    tabButton: "Work",
                                    tabIcon: AccountBox,
                                    tabContent: (
                                        <GridContainer justify="center">
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src={""}
                                                />
                                                <img
                                                    alt="..."
                                                    src={""}
                                                />
                                                <img
                                                    alt="..."
                                                    src={""}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src={""}
                                                />
                                                <img
                                                    alt="..."
                                                    src={""}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                    )
                                },
                                {
                                    tabButton: "Favorite",
                                    tabIcon: AccountBox,
                                    tabContent: (
                                        <GridContainer justify="center">
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src={""}
                                                />
                                                <img
                                                    alt="..."
                                                    src={""}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={4}>
                                                <img
                                                    alt="..."
                                                    src={""}
                                                />
                                                <img
                                                    alt="..."
                                                    src={""}
                                                />
                                                <img
                                                    alt="..."
                                                    src={""}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                    )
                                }
                            ]}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
