import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardComponent(props) {
    
    const [toggle, setToggle] = useState(true);

    const toggleFunctionality = () => {
        props.toggleFunctionality(!toggle);
        setToggle(!toggle);
    }

    useEffect(()=>{
        console.log("Mounting phase of Cards")
    }, [])

    useEffect(()=>{
      return() => {
        console.log("Unmounting phase from cards")
      }
    }, [])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography  gutterBottom>
          {props.heading}
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.subheading}
        </Typography>
        <Typography variant="body2">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        {props.toggleFunctionality ? 
          <Button size="small" onClick={() => toggleFunctionality()}>Mount / UnMount</Button>:
          <Button> ABOUT US </Button>}
      </CardActions>
    </Card>
  );
}
