import {Formik} from 'formik'
import styled from 'styled-components'
import DataContext from './dataContext'
import Footer from './Footer'
import Header from './Header'
import Order from './Order'
import Parties from './Parties'
import Payment from './Payment'
import Signature from './Signature'
import useForm from './useData'

const Page = styled.div``

const Form = () => {
  return (
    <DataContext.Provider value={useForm()}>
      <DataContext.Consumer>
        {({data}) => {
          return (
            <Formik
              enableReinitialize
              initialValues={data}
              onSubmit={(values) => {
                console.log('values', values)
              }}>
              {() => (
                <>
                  <Page id="page-container">
                    <Header />
                    <Parties />
                    <Payment />
                    <Order />
                    <Signature />
                  </Page>
                  <Footer />
                </>
              )}
            </Formik>
          )
        }}
      </DataContext.Consumer>
    </DataContext.Provider>
  )
}

export default Form
