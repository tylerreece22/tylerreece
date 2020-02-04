/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import {CloudDownload} from "@material-ui/icons";
// core components
import Button from "../../components/CustomButtons/Button.jsx";
import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({...props}) {
    const {classes} = props;
    return (
        <List className={classes.list}>
            {/*<ListItem className={classes.listItem}>*/}
            {/*    <CustomDropdown*/}
            {/*        noLiPadding*/}
            {/*        buttonText="Components"*/}
            {/*        buttonProps={{*/}
            {/*            className: classes.navLink,*/}
            {/*            color: "transparent"*/}
            {/*        }}*/}
            {/*        buttonIcon={Apps}*/}
            {/*        dropdownList={[*/}
            {/*            <Link to="/" className={classes.dropdownLink}>*/}
            {/*                All components*/}
            {/*            </Link>,*/}
            {/*            <a*/}
            {/*                href="https://creativetimofficial.github.io/material-kit-react/#/documentation"*/}
            {/*                target="_blank"*/}
            {/*                className={classes.dropdownLink}*/}
            {/*            >*/}
            {/*                Documentation*/}
            {/*            </a>*/}
            {/*        ]}*/}
            {/*    />*/}
            {/*</ListItem>*/}
            {/*<ListItem className={classes.listItem}>*/}
            {/*    <Button*/}
            {/*        href="/blog"*/}
            {/*        color="transparent"*/}
            {/*        className={classes.navLink}*/}
            {/*    >*/}
            {/*        Blog*/}
            {/*    </Button>*/}
            {/*</ListItem>*/}
            {/*<ListItem className={classes.listItem}>*/}
            {/*    <Button*/}
            {/*        href="/projects"*/}
            {/*        color="transparent"*/}
            {/*        className={classes.navLink}*/}
            {/*    >*/}
            {/*        Projects*/}
            {/*    </Button>*/}
            {/*</ListItem>*/}
            <ListItem className={classes.listItem}>
                <Button download
                        href="https://docs.google.com/document/d/1-lm0KUQwlRD_PUriSXdLmtKQhpPDsOjdwcvJoZEiSLc/edit?usp=sharing"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                >
                    <CloudDownload className={classes.icons}/> Download My Resume
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="linkedin-header"
                    title="Connect with me on LinkedIn"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        href="https://www.linkedin.com/in/tyler-reece-66693857"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-linkedin"}/>{window.innerWidth > 959 ? null : "LinkedIn"}
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="github-header"
                    title="Watch me tinker"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        color="transparent"
                        href="https://github.com/tylerreece22"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-github"}/>{window.innerWidth > 959 ? null : "GitHub"}
                    </Button>
                </Tooltip>
            </ListItem>
            {/*<ListItem className={classes.listItem}>*/}
            {/*    <Tooltip*/}
            {/*        id="instagram-tooltip"*/}
            {/*        title="Follow us on instagram"*/}
            {/*        placement={window.innerWidth > 959 ? "top" : "left"}*/}
            {/*        classes={{tooltip: classes.tooltip}}*/}
            {/*    >*/}
            {/*        <Button*/}
            {/*            color="transparent"*/}
            {/*            href="https://www.instagram.com/tylerreece22"*/}
            {/*            target="_blank"*/}
            {/*            className={classes.navLink}*/}
            {/*        >*/}
            {/*            <i className={classes.socialIcons + " fab fa-instagram"}/>*/}
            {/*        </Button>*/}
            {/*    </Tooltip>*/}
            {/*</ListItem>*/}
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
