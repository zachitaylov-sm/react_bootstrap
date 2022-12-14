import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const steps = [
  {
    label: 'Выберите настройки кампании',
    description: `Для каждой создаваемой вами рекламной кампании вы можете контролировать, сколько 
    вы готовы потратить на клики и конверсии, в каких сетях 
    и географических точках вы хотите показывать свою рекламу и многое другое.`,
  },
  {
    label: 'Создайте группу объявлений',
    description:
      'Группа объявлений содержит одно или несколько объявлений, таргетированных на общий набор ключевых слов.',
  },
  {
    label: 'Создать объявление',
    description: `Попробуйте разные тексты объявлений, чтобы увидеть, что привлекает больше всего клиентов,
    и узнайте, как улучшить свою рекламу с помощью таких функций, как рекламные расширения. 
    Если у вас возникнут какие-либо проблемы с вашими объявлениями, узнайте, как определить, запущены ли
    они и как устранить проблемы с одобрением.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    
    <Row>
        <Col md={6}>
            <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                <Step key={step.label}>
                    <StepLabel
                    optional={
                        index === 2 ? (
                        <Typography variant="caption">Заключительный шаг</Typography>
                        ) : null
                    }
                    >
                    {step.label}
                    </StepLabel>
                    <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                        <div>
                        <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            {index === steps.length - 1 ? 'Завершить' : 'Продолжить'}
                        </Button>
                        <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            Назад
                        </Button>
                        </div>
                    </Box>
                    </StepContent>
                </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>Все шаги завершены.</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Начать с начала
                </Button>
                </Paper>
            )}
            </Box>                                            
        </Col>
        <Col md={6}>
            <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                <Step key={step.label}>
                    <StepLabel
                    optional={
                        index === 2 ? (
                        <Typography variant="caption">Заключительный шаг</Typography>
                        ) : null
                    }
                    >
                    {step.label}
                    </StepLabel>
                    <StepContent>
                    <Typography>{step.description}</Typography>
                    {/* <Box sx={{ mb: 2 }}>
                        <div>
                        <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            {index === steps.length - 1 ? 'Завершить' : 'Продолжить'}
                        </Button>
                        <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            Назад
                        </Button>
                        </div>
                    </Box> */}
                    </StepContent>
                </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>Все шаги завершены.</Typography>
                {/* <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Начать с начала
                </Button> */}
                </Paper>
            )}
            </Box>                    
        </Col>
    </Row>
  );
}
