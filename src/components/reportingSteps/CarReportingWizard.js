import React from "react"

import Hidden from "@material-ui/core/Hidden"
import MobileStepper from "@material-ui/core/MobileStepper"
import Step from "@material-ui/core/Step"
import Stepper from "@material-ui/core/Stepper"
import StepLabel from "@material-ui/core/StepLabel"

import StepContent from "@material-ui/core/StepContent"
import BackButton from "../BackButton"
import NextButton from "../NextButton"

const CarReportingWizard = ({
  activeStep,
  backButtonDisabled,
  children,
  maxSteps,
  nextButtonDisabled,
  nextButtonLabel,
  onBack,
  onNext,
  showBackButton,
  showMobileStepper,
  showNextButton,
  steps,
}) => {
  const backButton = (
    <BackButton disabled={backButtonDisabled} onClick={onBack} />
  )
  const nextButton = (
    <NextButton disabled={nextButtonDisabled} onClick={onNext}>
      {nextButtonLabel}
    </NextButton>
  )
  return (
    <>
      <Hidden implementation="css" xsDown={true}>
        {showBackButton && backButton}
        <Stepper activeStep={activeStep} orientation={"vertical"}>
          {steps.map((label, index) => {
            return (
              <Step key={`car-reporting-wizard-step-${index}`}>
                <StepLabel>{label}</StepLabel>
                {activeStep === index && (
                  <StepContent>
                    {children}
                    {showNextButton && nextButton}
                  </StepContent>
                )}
              </Step>
            )
          })}
        </Stepper>
      </Hidden>

      <Hidden implementation="js" smUp={true}>
        {children}
      </Hidden>

      <Hidden implementation="css" smUp={true}>
        {showMobileStepper && (
          <MobileStepper
            activeStep={activeStep}
            backButton={backButton}
            nextButton={nextButton}
            steps={maxSteps}
          />
        )}
      </Hidden>
    </>
  )
}

export default CarReportingWizard
