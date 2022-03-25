// @ts-check
import { Container, Grid, Paper, styled, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import ResponsiveAppBar from './AppBar';
import Tickets from './components/Tickets';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  // display: 'flex',

}));

export default function App() {
  return <Container maxWidth="xl">
    <ResponsiveAppBar />
    <Typography 
      variant="h4"
      sx={(theme) => {
        return {
          margin: theme.spacing(2),
          // boxShadow: theme.shadows[24]
        }
      }}
    >
      Admin panel
    </Typography>
    <Tickets />
  </Container>;
}