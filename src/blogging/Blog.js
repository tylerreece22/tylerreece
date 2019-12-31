import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax";

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarMain: {
        // borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    mainFeaturedPost: {
        // backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        // backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];

function Blog(props) {
    const {classes} = props;

    return (
        <React.Fragment>
            <div className={classes.layout}>
                <Header
                    rightLinks={<HeaderLinks/>}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                />
                <Parallax small filter image={require("../assets/img/profile-bg.jpg")}/>
                {/*<Toolbar className={classes.toolbarMain}>*/}
                {/*<Button size="small">Subscribe</Button>*/}
                {/*<Typography*/}
                {/*component="h2"*/}
                {/*variant="h5"*/}
                {/*color="inherit"*/}
                {/*align="center"*/}
                {/*noWrap*/}
                {/*className={classes.toolbarTitle}*/}
                {/*>*/}
                {/*Blog*/}
                {/*</Typography>*/}
                {/*<IconButton>*/}
                {/*<SearchIcon />*/}
                {/*</IconButton>*/}
                {/*<Button variant="outlined" size="small">*/}
                {/*Sign up*/}
                {/*</Button>*/}
                {/*</Toolbar>*/}
                {/*<Toolbar variant="dense" className={classes.toolbarSecondary}>*/}
                {/*{sections.map(section => (*/}
                {/*<Typography color="inherit" noWrap key={section}>*/}
                {/*{section}*/}
                {/*</Typography>*/}
                {/*))}*/}
                {/*</Toolbar>*/}
                <main>
                    {/* Main featured post */}
                    <Paper className={classes.mainFeaturedPost}>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturedPostContent}>
                                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                        Title of a longer featured blog post
                                    </Typography>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        Multiple lines of text that form the lede, informing new readers quickly and
                                        efficiently about what&apos;s most interesting in this post&apos;s contents…
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* End main featured post */}
                    {/* Sub featured posts */}
                    <Grid container spacing={40} className={classes.cardGrid}>
                        {featuredPosts.map(post => (
                            <Grid item key={post.title} xs={12} md={6}>
                                <Card className={classes.card}>
                                    <div className={classes.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                {post.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {post.date}
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph>
                                                {post.description}
                                            </Typography>
                                            <Typography variant="subtitle1" color="primary">
                                                Continue reading...
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    <Hidden xsDown>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            // image="" // eslint-disable-line max-len
                                            title="Image title"
                                        />
                                    </Hidden>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </main>
            </div>
            <Footer className={classes.footer}/>
        </React.Fragment>
    );
}

Blog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
