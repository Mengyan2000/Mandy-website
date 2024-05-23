import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import './Introduction.css';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';

class Weather extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            loading: false,
            success: false
        };
    }
    

    buttonSx = () => {
        return {
            ...(this.state.success && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[700],
            },
        }),
        }
    }

    handleButtonClick = () => {
        // if (!this.state.loading) {
        //     this.setState({
        //     loading: true,
        //     success: false
        // })
        //     timer.current = setTimeout(() => {
        //         setSuccess(true);
        //         setLoading(false);
        //     }, 2000);
        // }
    };

    render() {
        return (
            <div className="weatherForm">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="Type in your current city" variant="outlined" />
                </Box>
                <div>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ m: 1, position: 'relative' }}>
                            <Fab
                            aria-label="save"
                            color="primary"
                            sx={this.buttonSx}
                            onClick={this.handleButtonClick}
                            >
                            {this.state.success ? <CheckIcon /> : <SaveIcon />}
                            </Fab>
                            {this.state.loading && (
                            <CircularProgress
                                size={68}
                                sx={{
                                color: green[500],
                                position: 'absolute',
                                top: -6,
                                left: -6,
                                zIndex: 1,
                                }}
                            />
                            )}
                        </Box>
                    </Box>
                </div>
            </div>
        )
    } 
}

export default Weather;