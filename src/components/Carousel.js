import React from "react";
import { Link, withPrefix } from "gatsby";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SwipeableViews from "react-swipeable-views";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { autoPlay } from "react-swipeable-views-utils";
import withStyles from "@material-ui/styles/withStyles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  cardMedia: {
    height: "200px",
  },
};

class Carousel extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { activeStep } = this.state;
    const { classes, items } = this.props;
    const maxSteps = items.length;
    return (
      <Paper elevation={0}>
        <div>
          <Typography>{items[activeStep].title}</Typography>
          <AutoPlaySwipeableViews
            axis={"x"}
            enableMouseEvents
            index={activeStep}
            onChangeIndex={this.handleStepChange}
          >
            {items.map((item, index) => {
              const {
                node: {
                  excerpt,
                  frontmatter: {
                    path,
                    title,
                    image: { publicURL },
                  },
                },
              } = item;
              return (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Card>
                      <CardMedia
                        className={classes.cardMedia}
                        image={withPrefix(publicURL)}
                      />
                      <CardContent>
                        <Typography component="h2" gutterBottom variant="h5">
                          <Link to={path}>{title}</Link>
                        </Typography>
                        <Typography component="p">{excerpt}</Typography>
                      </CardContent>
                    </Card>
                  ) : null}
                </div>
              );
            })}
          </AutoPlaySwipeableViews>
          <MobileStepper
            activeStep={activeStep}
            backButton={
              <Button
                disabled={activeStep === 0}
                onClick={this.handleBack}
                size="small"
              >
                Back
              </Button>
            }
            nextButton={
              <Button
                disabled={activeStep === maxSteps - 1}
                onClick={this.handleNext}
                size="small"
              >
                Next
              </Button>
            }
            position="static"
            steps={maxSteps}
          />
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Carousel);
