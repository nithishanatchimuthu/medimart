// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Container, TextField, Grid, Paper, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import image from './med.jpeg';
import image1 from './medimarts.avif';

import {Link as Defpath} from 'react-router-dom';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterJobs(query);
  };
  const jobListings = [
    { id: 1, title: 'Job 1', description: 'Description for Job 1' },
    { id: 2, title: 'Job 2', description: 'Description for Job 2' },
  ];

  const filterJobs = (query) => {
    const filteredJobs = jobListings.filter((job) => {
      const titleMatch = job.title.toLowerCase().includes(query.toLowerCase());
      const descriptionMatch = job.description.toLowerCase().includes(query.toLowerCase());
      return titleMatch || descriptionMatch;
    });
    setFilteredJobs(filteredJobs);
  };
  const pages = ['order' ,'wishlist', 'my bag'];
  const settings = ['Profile', { label: 'Signup', path: '/login' }, { label: 'Login', path: '/signin' }];
  
  
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   
    };
    
      
      const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      
      const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
    <><><><AppBar position="static">
          <Container maxWidth="xl">
              <Toolbar disableGutters>
              <VaccinesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                  <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                          mr: 2,
                          display: { xs: 'none', md: 'flex' },
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.3rem',
                          color: 'inherit',
                          textDecoration: 'none',
                      }}
                  >
                      MEDIMART
                  </Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                      <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleOpenNavMenu}
                          color="inherit"
                      >
                          <MenuIcon />
                      </IconButton>
                      <Menu
                          id="menu-appbar"
                          anchorEl={anchorElNav}
                          anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                          }}
                          keepMounted
                          transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                          }}
                          open={Boolean(anchorElNav)}
                          onClose={handleCloseNavMenu}
                          sx={{
                              display: { xs: 'block', md: 'none' },
                          }}
                      >
                          {pages.map((page) => (
                              <Button
                                  key={page.label}
                                  component={Defpath}
                                  to={page.path}
                                  onClick={handleCloseNavMenu}
                                  sx={{ my: 2, color: 'white', display: 'block' }}
                              >
                                  {page.label}
                              </Button>
                          ))}

                      </Menu>
                  </Box>
                  <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                  <Typography
                      variant="h5"
                      noWrap
                      component="a"
                      href=""
                      sx={{
                          mr: 2,
                          display: { xs: 'flex', md: 'none' },
                          flexGrow: 1,
                          fontFamily: 'poppins ',
                          fontWeight: 700,
                          letterSpacing: '.3rem',
                          color: 'inherit',
                          textDecoration: 'none',
                      }}
                  >
                  </Typography>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                      {pages.map((page) => (
                          <Button
                              key={page}
                              onClick={handleCloseNavMenu}
                              sx={{ my: 2, color: 'white', display: 'block' }}
                          >
                              {page}
                          </Button>
                      ))}
                  </Box>

                  <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                          </IconButton>
                      </Tooltip>
                      <Menu
                          sx={{ mt: '45px' }}
                          id="menu-appbar"
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}
                          open={Boolean(anchorElUser)}
                          onClose={handleCloseUserMenu}
                      >
                          {settings.map((setting) => (
                              <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                                  {setting.path ? (
                                      <Defpath to={setting.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                          <Typography textAlign="center">{setting.label}</Typography>
                                      </Defpath>
                                  ) : (
                                      <Typography textAlign="center">{setting.label}</Typography>
                                  )}
                              </MenuItem>
                          ))}

                      </Menu>
                  </Box>
              </Toolbar>
          </Container>
      </AppBar><br /><br /><Container maxWidth="md">
              <TextField
                  label="Search medicine"
                  fullWidth
                  variant="outlined"
                  value={searchQuery}
                  onChange={handleSearch} />
              <Grid container spacing={2}>
                  {filteredJobs.map((job) => (
                      <Grid item xs={12} sm={6} md={4} key={job.id}>
                          <Paper elevation={3} sx={{ padding: '1rem' }}>
                              <Typography variant="h6">{job.title}</Typography>
                              <Typography variant="body1">{job.description}</Typography>
                          </Paper>
                      </Grid>
                  ))}
              </Grid>
              <br/><br/>
              <Card sx={{ height: '400px', display: 'flex', flexDirection: 'column',justifyContent: 'flex-start', alignItems: 'flex-start',marginLeft: 'auto',marginRight: 'auto', px: 3, py: 4, boxShadow: 8, width: '1000px' }}>
                                  <CardMedia
                                      component="img"
                                      sx={{
                                          // 16:9
                                          pt: '3.25%',
                                      }}
                                      image={image1}
                                      alt="random" />
                                  <CardContent sx={{ flexGrow: 1 }}>
                                      <Typography gutterBottom variant="h5" component="h2">
                                          Name
                                      </Typography>

                                  </CardContent>
                                  <CardActions>
                                      <Button size="small">buy now</Button>
                                      <Button size="small">wishlist</Button>
                                  </CardActions>
                              </Card>
          </Container></><main>
              <Box
                  sx={{
                      bgcolor: 'cae9f2',
                      pt: 8,
                      pb: 6,
                  }}
              >
                  <Container maxWidth="sm">
                      <Typography
                          component="h1"
                          variant="h2"
                          align="center"
                          color="text.primary"
                          gutterBottom
                      >
                          Find your medicine!
                      </Typography>

                      <Stack
                          sx={{ pt: 4 }}
                          direction="row"
                          spacing={2}
                          justifyContent="center"
                      >
                          <Button variant="contained">Get</Button>

                      </Stack>
                  </Container>
              </Box>
              <Container sx={{ py: 8 }} maxWidth="md">
                  {/* End hero unit */}
                  <Grid container spacing={4}>
                      {cards.map((card) => (
                          <Grid item key={card} xs={12} sm={6} md={4}>
                              <Card
                                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                              >
                                  <CardMedia
                                      component="img"
                                      sx={{
                                          // 16:9
                                          pt: '3.25%',
                                      }}
                                      image={image}
                                      alt="random" />
                                  <CardContent sx={{ flexGrow: 1 }}>
                                      <Typography gutterBottom variant="h5" component="h2">
                                          medicine
                                      </Typography>

                                  </CardContent>
                                  <CardActions>
                                      <Button size="small">buy now</Button>
                                      <Button size="small">wishlist</Button>
                                  </CardActions>
                              </Card>
                          </Grid>
                      ))}
                  </Grid>
              </Container>
          </main></><Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
              <Typography variant="h6" align="center" gutterBottom>
              MEDIMART
              </Typography>


          </Box>
          </>
   
    </ThemeProvider>
  
);
}

export default SearchPage;
