import React, {useContext} from 'react'
import styled from 'styled-components'
import DataContext from './dataContext'

const Section = styled.section`
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  color: ${(props) => {
    return props.theme.textSecondary
  }};
`

const Footer = () => {
  const {registrationNr} = useContext(DataContext)

  return (
    <Section>
      Spoločnosť je zapísaná v Živnostenskom registri Okresného úradu Bratislava, registrácia č.
      {registrationNr}
    </Section>
  )
}

export default Footer
