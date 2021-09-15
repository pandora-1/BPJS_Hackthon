import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './name.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#00A551'
    },
  }));
  
  export default function Name() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <div className="paddingName">
            <Grid container spacing={2}>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={6}>
                    <Paper className={classes.paper}>Nama : XXX</Paper>
                    <Paper className={classes.paper}>NIK : XXX</Paper>
                    <Paper className={classes.paper}>No HP : XXX</Paper>
            </Grid>
            <Grid item xs={3}>

            </Grid>
            
            </Grid>
        </div>
      </div>
    );
  }
