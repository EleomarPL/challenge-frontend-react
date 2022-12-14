import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { NAME_WEB } from '../../config/NAME_WEB'

const pages = ['Characters', 'Episodes', 'Locations']
const links = ['/', '/episodes', '/locations']

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static">
      <CustomContainer maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar alt="Logo" src="/apple-icon-180x180.png"
            sx={ { display: { xs: 'none', md: 'flex' }, mr: 1 } }
          />
          <Typography
            variant="h6"
            noWrap
            component={ Link }
            to="/"
            sx={ {
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            } }
          >
            { NAME_WEB }
          </Typography>

          <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={ handleOpenNavMenu }
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={ anchorElNav }
              anchorOrigin={ {
                vertical: 'bottom',
                horizontal: 'left'
              } }
              keepMounted
              transformOrigin={ {
                vertical: 'top',
                horizontal: 'left'
              } }
              open={ Boolean(anchorElNav) }
              onClose={ handleCloseNavMenu }
              sx={ {
                display: { xs: 'block', md: 'none' }
              } }
            >
              { pages.map((page, index) => (
                <MenuItem key={ page } onClick={ handleCloseNavMenu }>
                  <Typography textAlign="center">
                    <CustomNavLink to={ links[index] }>
                      { page }
                    </CustomNavLink>
                  </Typography>
                </MenuItem>
              )) }
            </Menu>
          </Box>
          <Avatar alt="Logo" src="/apple-icon-180x180.png"
            sx={ { display: { xs: 'flex', md: 'none' }, mr: 1 } }
          />
          <Typography
            variant="h5"
            noWrap
            component={ Link }
            to="/"
            sx={ {
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            } }
          >
            { NAME_WEB }
          </Typography>
          <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
            { pages.map((page, index) => (
              <Typography
                key={ page }
                variant="button"
                component={ CustomNavLink }
                to={ links[index] }
                sx={ {
                  display: 'block',
                  my: 2
                } }
              >
                { page }
              </Typography>
            )) }
          </Box>
        </Toolbar>
      </CustomContainer>
    </AppBar>
  )
}

const CustomContainer = styled(Container)`
  background-color: var(--bg-primary);
  color: var(--text-primary);
`
const CustomNavLink = styled(NavLink)`
  color: var(--text-primary);
  text-decoration: none;
  padding: 5px 10px 0 10px;
  &.active {
    border-bottom: 2px solid var(--border-primary);
  }
`

export default ResponsiveAppBar
