import React, {useContext} from 'react'
import styled from 'styled-components'
import DataContext from './dataContext'

const Section = styled.section`
  display: flex;
  margin-bottom: 20px;
  b {
    margin-left: 5px;
  }
`
const Header = () => {
  const {variableSymbol} = useContext(DataContext)

  return (
    <Section>
      <div>Faktúra</div>
      <b>{variableSymbol}</b>
    </Section>
  )
}

export default Header
