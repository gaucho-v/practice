import React, { JSX } from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import { ROUTES } from "../routes";


export const Layout = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate();

    return (
        <>
            <Container sx={{ width: '100%', padding: '0 !important' }}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar component="nav" position={"relative"}>
                        <Toolbar>
                            <Box sx={{ display: { xs: 'flex', sm: 'block' }, flexDirection: { xs: 'column', sm: 'row' }}}>
                                {ROUTES.HEADER_NAVIGATE_ITEMS.map(({title, route}) => (
                                    <Button key={title} sx={{ color: '#fff' }} onClick={() => navigate(route)}>
                                        {title}
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Container>
            <Container maxWidth="lg">
                <Box component="main" sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {children}
                </Box>
            </Container>
        </>
    )
}