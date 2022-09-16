import {useFormikContext} from 'formik'
import React from 'react'
import styled from 'styled-components'
import {DataType} from './useData'

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
  const {values} = useFormikContext<DataType>()

  return (
    <Section>
      Spoločnosť je zapísaná v Živnostenskom registri Okresného úradu Bratislava, registrácia č.
      {values.registrationNr}
    </Section>
  )
}

export default Footer
