import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;



const Layout = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <Header></Header>
            <div className="">
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{
                            width: { sm: `calc(100% - ${drawerWidth}px)` },
                            ml: { sm: `${drawerWidth}px` },

                        }}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box className="flex justify-between w-full">
                                <Typography variant="h6" noWrap component="div">
                                    Logo
                                </Typography>
                                <Typography variant="h6" noWrap component="div">
                                    User
                                </Typography>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                    >

                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            <Toolbar />
                            <List>
                                <Link to="/">
                                    <ListItem disablePadding>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>

                                            <ListItemText primary={"Add Student"} />

                                        </ListItemButton>

                                    </ListItem>
                                </Link>
                                <Link to="/managestudent">
                                    <ListItem disablePadding>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>

                                            <ListItemText primary={"Mannage Student"} />

                                        </ListItemButton>

                                    </ListItem>
                                </Link>
                                <Link to="/login">
                                    <ListItem disablePadding>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>

                                            <ListItemText primary={"Log Out"} />

                                        </ListItemButton>

                                    </ListItem>
                                </Link>
                            </List>
                        </Drawer>
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            open
                        >
                            <Divider />
                            <Toolbar />
                            <List>
                                <Link to="/">
                                    <ListItem disablePadding>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>

                                            <ListItemText primary={"Add Student"} />

                                        </ListItemButton>

                                    </ListItem>
                                </Link>
                                <Link to="/managestudent">
                                    <ListItem disablePadding>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>

                                            <ListItemText primary={"Mannage Student"} />

                                        </ListItemButton>

                                    </ListItem>
                                </Link>

                                <Link to="/login">
                                    <ListItem disablePadding>

                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>

                                            <ListItemText primary={"Log Out"} />

                                        </ListItemButton>

                                    </ListItem>
                                </Link>
                            </List>
                            <Divider />
                        </Drawer>
                    </Box>
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    >
                        <Toolbar />

                        <Outlet></Outlet>
                    </Box>
                </Box>
            </div>


            <Footer></Footer>
        </div >
    );
};

export default Layout;






