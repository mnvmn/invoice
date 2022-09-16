import {useFormikContext} from 'formik'
import styled from 'styled-components'
import {DataType} from './useData'

const Section = styled.section`
  margin-bottom: 20px;
`
const SectionContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`

const Controls = () => {
  const {submitForm} = useFormikContext<DataType>()

  return (
    <Section className="screen-only">
      <SectionContainer>
        <button onClick={submitForm}>Save to local storage</button>
      </SectionContainer>
    </Section>
  )
}

export default Controls
