import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
//import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
//import { CardBody } from 'reactstrap';
import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
//   const SmallAvatar = styled(Avatar)(({ theme }) => ({
//     width: 22,
//     height: 22,
//     border: `2px solid ${theme.palette.background.paper}`,
//   }));

export default function BasicRating(props) {
  //const [value, setValue] = React.useState<number | null>(2);
  const [value, setValue] = React.useState(5);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Card>
        <Card.Body>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
            >
                <Avatar alt="foto" src={props.src} />                
            </StyledBadge>
            <Stack spacing={0}>
                <Typography component="legend">{props.legend}</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}      
                />            
            </Stack>
        </Card.Body>
      </Card>           
    </Box>
  );
}