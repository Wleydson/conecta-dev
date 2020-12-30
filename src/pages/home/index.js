import React from 'react';

import Header from './components/Header'
import NavBar from './components/NavBar'
import Feed from './components/Feed'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        display: 'flex',
        flexDirection: 'column'
    },
    main:{
        height: '100vh',
        width: '1200px',
        display: 'flex',
        margin: '0 auto'
    }
})

function Home(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Header />
            <div className='toolbar'></div>
            <main className={classes.main}>
                <NavBar />
                <Feed />
            </main>
        </div>
    )
}

export default Home