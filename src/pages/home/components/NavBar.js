import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Button, ListSubheader, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
       padding: theme.spacing(2),
       width: 275,
       marginRight: theme.spacing(2),
    },
    button:{
        width: '100%'
    }
}))

const tags = [
    {id:1, name:'Java'},
    {id:2, name:'Spring Boot'},
    {id:3, name:'JavaScript'},
    {id:4, name:'ReactJs'},
    {id:5, name:'React Native'},
]

function NavBar(){
    const classes = useStyles();

    return (
       <Paper className={classes.root}>
           <Button variant="outlined"color="secondary" className={classes.button}>Registra-se</Button>
           <ListSubheader>
               {'Tags em alta'}
           </ListSubheader>
           {
               tags.map((item)=>(
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}/>
                    </ListItem>
               ))
           }
           <ListItem button>
               Exibir mais
           </ListItem>
        </Paper>
    )
}

export default NavBar;