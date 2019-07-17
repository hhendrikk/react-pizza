import React, { useState, useEffect, useCallback } from 'react'
import { Button, Grid } from '@material-ui/core'
import firebase from 'firebase/app'
import 'firebase/auth'

import styled from 'styled-components'
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'

const firebaseConfig = {
  apiKey: 'AIzaSyDieuMv-Bc207FQtTFuSyEtjWSeq0bbOfk',
  authDomain: 'reactzzaria-8fc2f.firebaseapp.com',
  databaseURL: 'https://reactzzaria-8fc2f.firebaseio.com',
  projectId: 'reactzzaria-8fc2f',
  storageBucket: '',
  messagingSenderId: '647218097771',
  appId: '1:647218097771:web:453eeda7eac58336'
}

firebase.initializeApp(firebaseConfig)

function Login () {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
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
