import React, { useState, useContext, useEffect, useCallback } from 'react'
import { Button, Grid } from '@material-ui/core'
import firebase from 'services/firebase'

import { AuthContext } from 'contexts/auth'
import styled from 'styled-components'
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'

function Login () {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  const { login } = useContext(AuthContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }, [])

  const { isUserLoggedIn, user } = userInfo

  return (
    <Container>
      <Grid container justify='center' spacing={5} >
        <Grid item>
          <Logo />
        </Grid>

        <Grid container item xs={12} justify='center'>
          {isUserLoggedIn && (
          <>
            <pre>{user.displayName}</pre>
            <Button variant='contained' onClick={logout}>Sair</Button>
          </>
          )}
          {!isUserLoggedIn && (
            <GitHubButton onClick={login}>
                Entrar com GitHub
            </GitHubButton>)}
        </Grid>
      </Grid>
    </Container>
  )
}

const Logo = styled(MainLogo)`
  width: 100%
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    text-transform: none;
    max-width: 480px;
    padding: 15px;
    font-size: 25px;
  }
`

const Container = styled.div`
  padding: 20px
`

export default Login
