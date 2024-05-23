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
import { Link } from 'react-router-dom';

const Navbar = () => {
    const pages = [
        { title: 'Services', path: '/service' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Work', path: '/work' },
        { title: 'WorkSingle', path: '/worksingle' },
        { title: 'Blog', path: '/blog' },
        { title: 'Blog Single', path: '/blogsingle' },
        { title: 'Pricing', path: '/pricing' },

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
        <Grid sx={{ width: '100%', bgcolor: 'black' }} md={6}>
            <AppBar position='fixed' sx={{ bgcolor: 'black' }}>
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Link to='/' style={{ textDecoration: 'none' }} ><Typography variant="h6" component="div" sx={{ color: '#DAC5A7', }}>Dhruvit</Typography></Link>
                        </Grid>
                        <Grid item>
                            {renderMenuButton()}
                            {!isMobileView && (
                                <Grid container spacing={2} sx={{ textAlign: 'center' }}>
                                    {pages.map((page, index) => (
                                        <Grid item key={index}>
                                            <Link to={page.path}><Button sx={{ color: '#DAC5A7' }}>{page.title}</Button></Link>
                                        </Grid>
                                    ))}
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer} sx={{ bgcolor: 'black' }}>
                <List>
                    {pages.map((page, index) => (
                        <ListItem key={index} onClick={toggleDrawer} component={Link} to={page.path}>
                            <ListItemText primary={page.title} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Grid>
    );
};

export default Navbar;
