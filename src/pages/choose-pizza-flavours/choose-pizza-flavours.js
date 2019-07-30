import React from 'react'
import { Redirect } from 'react-router-dom'
import t from 'prop-types'
import { HOME } from 'routes'
import { H4, HeaderContent } from 'ui'
import { singularOrPlural } from 'utils'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours } = location.state

  return (
    <>
      <HeaderContent>
        <H4>
          Escolha até {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')}:
        </H4>
      </HeaderContent>
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
