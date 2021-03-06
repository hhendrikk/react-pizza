import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  Typography,
  Grid,
  Card,
  CardActionArea as MaterialCardActionArea,
  Divider as MaterialDivider
} from '@material-ui/core'

import styled from 'styled-components'
import { AuthContext } from 'contexts/auth'
import { singularOrPlural } from 'utils'
import pizzaSizes from 'fake-data/pizza-sizes'
import { H3, H4, HeaderContent } from 'ui'
import { CHOOSE_PIZZA_FLAVOURS } from 'routes'

const ChoosePizzaSize = () => {
  const { userInfo } = useContext(AuthContext)

  return (
    <>
      <HeaderContent>
        <H3>
          O que vai ser hoje, { userInfo.user.firstName }? =)
        </H3>
        <H4>
          Escolha o tamanho da pizza:
        </H4>
      </HeaderContent>
      <PizzasGrid>
        {pizzaSizes.map(pizza => (
          <Grid item key={pizza.id} xs>
            <Card>
              <CardActionArea to={{
                pathname: CHOOSE_PIZZA_FLAVOURS,
                state: pizza
              }}>
                <Pizza>
                  <PizzaText>{pizza.size}cm</PizzaText>
                </Pizza>
                <Divider />
                <Typography variant='h5'>{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {' '}
                  {pizza.flavours} {' '}
                  {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  )
}

const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  padding: 20px
`

const CardActionArea = styled(MaterialCardActionArea).attrs({
  component: Link
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 0;
  min-width: 250px;
`

const Pizza = styled.div`
  border: 1px solid #ccc;
  border-radius: 50%;
  background: #fff;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  position: relative;
  align-items:center;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border: 1px solid #ccc;
    transform: rotate(45deg)
  }

  &::before {
    height: 170px;
  }

  &::after {
    width: 170px;
  }
`

const PizzaText = styled(Typography).attrs({
  variant: 'h6'
})`
  height: 80px;
  width: 80px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`

export default ChoosePizzaSize
