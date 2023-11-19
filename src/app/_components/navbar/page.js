"use client"
import { Box, Button, List, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { useTheme } from '../../themeColor/ButtonTheme';
import './NavbarStyle.css';
import { useRouter } from "next/navigation";

const Navbar = () => {

    const { isHighContrast, toggleTheme } = useTheme();

    const router = useRouter();

    const getButtonClassName = () => {
        return isHighContrast ? 'demoButton highContrast' : 'demoButton';
    };

    const handleLoginClick = () => {
        localStorage.clear();
        router.push('/login')
    };

    return (
        <div>
            <Toolbar>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        flexDirection: 'row',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label className="toggle-switch">
                            <input
                                type="checkbox"
                                checked={isHighContrast} onChange={toggleTheme}
                            />
                            <span className="switch" />
                        </label>
                        <Box ml={2}>
                            <Typography component="span">
                                High Contrast
                            </Typography>
                        </Box>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <List
                            component="nav"
                            aria-labelledby="main navigation"
                            style={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <Button color="error" style={{ marginRight: '8px' }} onClick={handleLoginClick}>
                                <span style={{ color: 'black' }}>Login</span>
                            </Button>
                            <Button
                                color="success"
                                variant="contained"
                                className={getButtonClassName()}
                            >
                                Start free or get demo
                            </Button>
                        </List>
                    </div>
                </div>
            </Toolbar>
        </div>
    );
};


export default Navbar
