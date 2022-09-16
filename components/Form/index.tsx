import {Formik} from 'formik'
import styled from 'styled-components'
import Controls from './Controls'
import DataContext from './dataContext'
import Footer from './Footer'
import Header from './Header'
import Order from './Order'
import Parties from './Parties'
import Payment from './Payment'
import Signature from './Signature'
import useForm, {DataType} from './useData'

const Page = styled.div``

const Form = () => {
  return (
    <DataContext.Provider value={useForm()}>
      <DataContext.Consumer>
        {({data, persistData}) => {
          return (
            <Formik<DataType>
              enableReinitialize
              initialValues={data}
              onSubmit={(values) => {
                persistData(values)
              }}>
              {() => (
                <>
                  <Page id="page-container">
                    <Controls />
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
