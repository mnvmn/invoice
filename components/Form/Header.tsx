import utils from '@shared/utils'
import {useFormikContext} from 'formik'
import React from 'react'
import styled from 'styled-components'
import {DataType} from './useData'

const Section = styled.section`
  display: flex;
  margin-bottom: 20px;
  b {
    margin-left: 5px;
  }
`
const Header = () => {
  const {values} = useFormikContext<DataType>()

  return (
    <Section>
      <div>Faktúra</div>
      <b>{utils.getVariableSymbol(values.dateDelivered, values.count)}</b>
    </Section>
  )
}

export default Header
