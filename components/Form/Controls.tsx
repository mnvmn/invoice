import {useFormikContext} from 'formik'
import styled from 'styled-components'
import {DataType} from './useData'

const Section = styled.section`
  display: flex;
  margin-bottom: 20px;
  b {
    margin-left: 5px;
  }
`
const Controls = () => {
  const {submitForm} = useFormikContext<DataType>()

  return (
    <Section className="screen-only">
      <button onClick={submitForm}>Save to local storage</button>
    </Section>
  )
}

export default Controls
