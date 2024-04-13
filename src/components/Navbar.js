import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Menu } from '@mui/icons-material';

const Navbar = () => {
    const pages = [
        { title: 'Services' },
        { title: 'Work' },
        { title: 'About' },
        { title: 'Blog' },
        { title: 'Pages' },
    ];

    const isMobileView = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const renderMenuButton = () => {
        if (isMobileView) {
            return (
                <Button onClick={toggleDrawer} sx={{ color: 'white' }}><Menu /></Button>
            );
        }
        return null;
    };

    return (
        <Grid sx={{ width: '100%', bgcolor: 'black' }}>
            <AppBar position="static" sx={{ bgcolor: 'black' }}>
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h6" component="div" sx={{ color: '#DAC5A7' }}>Dhruvit</Typography>
                        </Grid>
                        <Grid item>
                            {renderMenuButton()}
                            {!isMobileView && (
                                <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                                    {pages.map((page, index) => (
                                        <Grid item key={index}>
                                            <Button sx={{ color: '#DAC5A7' }}>{page.title}</Button>
                                        </Grid>
                                    ))}
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer} sx={{ color: 'black' }}>
                <List>
                    {pages.map((page, index) => (
                        <ListItem key={index} onClick={toggleDrawer}>
                            <ListItemText primary={page.title} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Grid >
    );
};

export default Navbar;
