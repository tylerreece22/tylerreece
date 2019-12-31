import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import customLinearProgressStyle from "../assets/jss/material-kit-react/components/customLinearProgressStyle.jsx";
import CustomLinearProgress from "./CustomLinearProgress";
import Primary from "./Typography/Primary";
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";

class PowerLevel extends React.Component {
    state = {
        completed: 0,
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const {completed} = this.state;
        const diff = Math.random() * 150;
        this.setState({completed: Math.min(completed + diff, this.props.powerLevel)});
    };

    render() {
        const {label, color} = this.props;
        return (
            <>
                <GridContainer justify="center">
                    <GridItem md={12}>
                        <Primary>{label}</Primary>
                    </GridItem>
                    <GridItem md={12}>
                        <CustomLinearProgress color={color || "primary"} variant="determinate" value={this.state.completed}/>
                    </GridItem>
                </GridContainer>
            </>
        );
    }
}

PowerLevel.defaultProps = {
    color: "primary",
    powerLevel: 100,
};

PowerLevel.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    powerLevel: PropTypes.number.isRequired
};

export default withStyles(customLinearProgressStyle)(PowerLevel);
