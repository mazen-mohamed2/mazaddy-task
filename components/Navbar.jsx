import * as React from 'react';
// import PropTypes from 'prop-types';
import {AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DropDown from './DropDown';

const drawerWidth = 240;
const navItems = ['حسابى','مشترياتى', 'التصنيفات', 'الرئيسية'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box display="flex" sx={{ my: 2 }}>
      
        <DropDown />
        <Box>
        <FavoriteIcon />
        </Box>
        <Box mx={2}>
        <NotificationsIcon />
        </Box>
        <Box>
        <PriceChangeIcon/>
        </Box>
        
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}} >
  
      <AppBar component="nav" className='nav-color' sx={{ position:"relative", height:"65px", marginTop:"10px"}} >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon /> 
          </IconButton>
          <Box   component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Box display="flex" alignItems="center">

        <DropDown />
        <Box>
        <FavoriteIcon />
        </Box>
        <Box mx={2}>
        <NotificationsIcon />
        </Box>
        <Box>
        <PriceChangeIcon/>
        </Box>
        </Box>
      </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      
      </Box>
    </Box>
  
  );
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Navbar;
