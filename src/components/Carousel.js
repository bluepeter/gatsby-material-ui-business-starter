import React from "react";
import { withPrefix, Link } from "gatsby";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SwipeableViews from "react-swipeable-views";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Carousel extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { activeStep } = this.state,
      { items } = this.props,
      maxSteps = items.length;
    return (
      <Paper elevation={0}>
        <div>
          <Typography>{items[activeStep].title}</Typography>
          <AutoPlaySwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={this.handleStepChange}
            enableMouseEvents
          >
            {items.map((item, index) => {
              const {
                node: {
                  excerpt,
                  frontmatter: { path, title, image },
                },
              } = item;
              return (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Card>
                      <CardMedia
                        style={{ height: "200px" }}
                        image={withPrefix(image)}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
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
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={this.handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={this.handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
            }
          />
        </div>
      </Paper>
    );
  }
}

export default Carousel;
