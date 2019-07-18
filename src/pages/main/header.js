import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar as MaterialToolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  withStyles
} from '@material-ui/core'
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'
import { AccountCircle } from '@material-ui/icons'

import { AuthContext } from 'contexts/auth'

function Header () {
  const { userInfo, logout } = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleAccountOpen = (e) => {
    if (anchorEl) {
      setAnchorEl(null)
    } else {
      setAnchorEl(e.currentTarget)
    }
  }

  const handleAccountMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Typography color='inherit'>
            Olá { userInfo.user.firstName } :)
          </Typography>
          <IconButton
            color='inherit'
            onClick={handleAccountOpen}>
            <AccountCircle />
          </IconButton>
          <Menu
            getContentAnchorEl={null}
            anchorEl={anchorEl}
            open={!!anchorEl}
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            transformOrigin={{ horizontal: 'center', vertical: 'top' }}
            onClose={handleAccountMenuClose}>
            <MenuItem onClick={logout}>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Spacer />
    </>
  )
}

const LogoContainer = styled.div`
  flex-grow: 1;
`

const Logo = styled(MainLogo)`
  width: 200px;
  height: 50px;

  & path {
    fill: #fff
  }

  & line {
    stroke: #fff
  }
`

const Toolbar = styled(MaterialToolbar)`
  width: 100%;
  max-width: 960px;
  margin:0 auto;
`

const style = (theme) => ({
  main: theme.mixins.toolbar
})

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))

export default Header
