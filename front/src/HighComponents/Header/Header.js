import React, { useState } from 'react'
import logo from '../../images/logo.png'
import arm from '../../images/arm.jpg'
import uk from '../../images/uk1.jpg'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogContent, DialogTitle, IconButton, StylesProvider, Typography } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import api from '../../api'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    barColor:{
        background:'red'
    },
    auth:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    authInput:{
        margin:10,
        padding:10
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  
  }));
  


export default function Header() {
    const [open, setOpen] = useState(false);
    const [loginInp, setLogin] = useState('');
    const [passwordInp, setPassword] = useState('');
    const classes = useStyles();
  
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  
      const changeFn = (name, value) => {
        if(name==='login'){
            setLogin(value)
        }else{
            setPassword(value)
        }
      }

      const login = () => {
        api.post('auth/login',{login:loginInp, password:passwordInp}).then(r=>{
            console.log(r);
        }).catch(err=>{
            console.log(err.response.data.message,'yghijo');
        })
           
      }

    return (
        <div>
            <div className={style.topHeader}>
                <div className={style.logo}>
                    <img alt='logo' src={logo} />
                </div>
                <div className={style.icons}>
                    <div className={style.lang}>
                        <IconButton>
                            <img alt='arm' src={arm} className={style.arm} />
                        </IconButton>
                        <IconButton>
                            <img alt='arm' src={uk} className={style.uk}/>
                        </IconButton>
                        <IconButton onClick={handleClickOpen}>
                            <ExitToAppIcon color={!sessionStorage.token?'primary':'error'} />
                        </IconButton>
                        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                            <DialogTitle id="simple-dialog-title">Admin Log in</DialogTitle>
                            <DialogContent>
                                <div className={classes.auth}>
                                    <Typography color='error' >error</Typography>
                                    
                                <input value={loginInp} onChange={e=>changeFn('login', e.target.value)} className={classes.authInput} placeholder='login'/>
                                <input value={passwordInp} onChange={e=>changeFn('password', e.target.value)} className={classes.authInput} placeholder='password' />
                                <Button onClick={login}>Log in</Button>
                                </div>
                                
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div>
                    <input placeholder='Search...' color='primary'/>
                    </div>
                    
                </div>                
            </div>
            <div className={classes.root}>
      <AppBar position="static" color='transparent' className={classes.barColor}>
        <Toolbar className={style.appToolBar}>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color='default'
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Link to='/' className={classes.menuButton}>Home</Link>
          <Link to='/products' className={classes.menuButton}>Products</Link>
          <Link to='/aboutUs' className={classes.menuButton}>About us</Link>
          <Link to='/news' className={classes.menuButton}>New</Link>
          <Link to='/services' className={classes.menuButton}>Support &amp; Services</Link>
          <Link to='/contact' className={classes.menuButton}>Contact us</Link>
        </Toolbar>
      </AppBar>
    </div>
        </div>
    )
}
