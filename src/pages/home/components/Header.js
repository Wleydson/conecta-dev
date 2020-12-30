import React from 'react'

import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';

import { Bell } from 'react-feather'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appBar:{
        boxShadow: 'none'
    },
    img:{
        maxHeight: 45
    },
    grow:{
        flexGrow: 1
    },
    user:{
        display: 'flex',
        alignItems: 'center'
    },
    button:{
        marginRight: 10
    },
    bell:{
        marginRight: 10
    }
})

function Header(){
    const classes = useStyles();

    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img}/>
                <div className={classes.grow}></div>
                <div className={classes.user}>
                    <Button color='primary' variant='contained' className={classes.button}>
                        Novo Post
                    </Button>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header