import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './button.css';

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
  
  export default function Button() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
          <div className="paddingButton">
            <Grid container spacing={3}>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={5}>
                        <Paper className={classes.paper}>Ubah Nomor HP</Paper>
                </Grid>
                <Grid item xs={5}>
                        <Paper className={classes.paper}>Ubah Nama Lengkap</Paper>
                </Grid>
                <Grid item xs={1}>
                    
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={5}>
                        <Paper className={classes.paper}>Ubah Kelas BPJS Pengguna</Paper>
                </Grid>
                <Grid item xs={5}>
                        <Paper className={classes.paper}>Ubah NIK</Paper>
                </Grid>
                <Grid item xs={1}>    
                </Grid>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={5}>
                        <Paper className={classes.paper}>Info Apotik Penerima BPJS Terdekat</Paper>
                </Grid>
                <Grid item xs={5}>
                        <Paper className={classes.paper}>Info Toko Kacamata Penerima BPJS Terdekat</Paper>
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={5}>
                        <Paper className={classes.paper}>Daftar Penyakit yang Ditanggung BPJS</Paper>
                </Grid>
                <Grid item xs={5}>
                        <Paper className={classes.paper}>Mengobrol Langsung dengan Call Center kami</Paper>
                </Grid>
                <Grid item xs={1}>
                    
                </Grid>
            
            </Grid>
          </div>
      </div>
    );
  }
