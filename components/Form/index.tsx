import React from 'react'
import styled from 'styled-components'
import DataContext from './dataContext'
import Footer from './Footer'
import Header from './Header'
import Order from './Order'
import Parties from './Parties'
import Payment from './Payment'
import Signature from './Signature'
import useData from './useData'

const Page = styled.div``

const Form = () => {
  return (
    <DataContext.Provider value={useData()}>
      <Page id="page-container">
        <Header />
        <Parties />
        <Payment />
        <Order />
        <Signature />
      </Page>
      <Footer />
    </DataContext.Provider>
  )
}

export default Form
