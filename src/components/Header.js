import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { lightGreen } from '@mui/material/colors';


const pages = ['Introduction', 'My Background', 'My Gallery'];

class Header extends React.PureComponent {
    constructor() {
        super();
        // console.log(props)
        this.state = {
            navLinks: [],
            menuStatus: false
        }
    }

    componentDidMount() {
        this.setState({
            navLinks: this.props.navLinks
        })
        console.log(this.state.navLinks)
    }
  
    handleCloseNavMenu = () => {
        this.state = {
            menuStatus: !this.state.menuStatus
        }
    };

    render() {
        return (
            <Box color={lightGreen} sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        {this.state.navLinks.map((page) => (
                            <MenuItem key={page} onClick={this.handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <a style={{color: 'white'}} key={page.title} href={page.path}>{page.title}</a> 
                                </Typography>
                            </MenuItem>
                        ))}
                    </Toolbar>
                </AppBar>
            </Box>
            
        )
    }
    
}

Header.propTypes = {
    navLinks: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string,
        title: PropTypes.string,
        component: PropTypes.func,
        isExact: PropTypes.bool,
    }))
}

export default Header;