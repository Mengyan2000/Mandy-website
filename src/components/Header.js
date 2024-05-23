import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { lightGreen } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props} strokeWidth={1.5}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

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
                            <HomeIcon fontSize="large" color="success"/>
                        </IconButton>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                            margin="10px"
                        >
                            Mandy Liu
                        </Typography>
                        {/* <Box sx={{ flexGrow: 1 }} /> */}
                        {this.state.navLinks.map((page) => (
                            <MenuItem key={page} onClick={this.handleCloseNavMenu}>
                                <Typography 
                                    textAlign="center" 
                                    variant="button" 
                                    margin="10px"
                                >
                                    <a ink style={{textDecoration: "none", color: 'white'}} key={page.title} href={page.path}>{page.title}</a > 
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