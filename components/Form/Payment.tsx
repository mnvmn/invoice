import constant from '@shared/const'
import utils from '@shared/utils'
import {Field, useFormikContext} from 'formik'
import styled from 'styled-components'
import {DataType, getTotalPrice} from './useData'

const Title = styled.section`
  display: flex;
  border-top: 1px solid
    ${(props) => {
      return props.theme.textSecondary
    }};
  padding-top: 15px;
  margin-bottom: 20px;
  & > div {
    padding-left: ${(props) => {
      return props.theme.gutter + 'px'
    }};
    margin-right: ${(props) => {
      return props.theme.gutter * 2 + 'px'
    }};
  }
`
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border: 1px solid
    ${(props) => {
      return props.theme.textPrimary
    }};
  background: ${(props) => {
    return props.theme.bgDark1
  }};
  padding: ${(props) => {
    return props.theme.gutter + 'px'
  }};
  .value {
    font-weight: bold;
  }
`
const SubTitle = styled.section`
  display: flex;
  margin-bottom: 20px;
  & > div {
    padding-left: ${(props) => {
      return props.theme.gutter + 'px'
    }};
    margin-right: ${(props) => {
      return props.theme.gutter * 2 + 'px'
    }};
  }
`

const Description = styled.section`
  margin-bottom: 10px;
`

const Payment = () => {
  const {values} = useFormikContext<DataType>()
  const dueDate = utils.addDays(values.dateBilled, values.daysDue)
  const title = `Fakturujem Vám poskytnuté služby za mesiac
        ${constant.months[new Date(values.dateDelivered).getMonth()]} ${new Date(
    values.dateDelivered
  ).getFullYear()}`

  return (
    <>
      <Title>
        <div>
          <div>Dátum vystavenia</div>
          <div className="text-bold">
            <Field
              className="screen-only"
              name="dateBilled"
              type="date"
            />
            <span className="text-bold print-only">{utils.formatDate(values.dateBilled)}</span>
          </div>
        </div>
        <div>
          <div>Dátum dodania</div>
          <Field
            className="screen-only"
            name="dateDelivered"
            type="date"
          />
          <span className="text-bold print-only">{utils.formatDate(values.dateDelivered)}</span>
        </div>
        <div>
          <div>Dátum splatnosti</div>
          <div className="text-bold">{utils.formatDate(dueDate)}</div>
        </div>
      </Title>
      <Section>
        <div>
          <div>IBAN</div>
          <div className="text-bold">{values.iban}</div>
        </div>
        <div>
          <div>SWIFT</div>
          <div className="text-bold">TATRSKBX</div>
        </div>
        <div>
          <div>VS</div>
          <div className="text-bold">
            {utils.getVariableSymbol(values.dateDelivered, values.count)}
          </div>
        </div>
        <div>
          <div>Suma na úhradu</div>
          <div className="text-bold">{utils.formatPrice(getTotalPrice(values.order))} EUR</div>
        </div>
      </Section>
      <SubTitle>
        <div>
          <div>Spôsob úhrady</div>
          <div>Bankový prevod</div>
        </div>
        <div>
          <div>Číslo objednávky</div>
          <div>
            <Field
              className="screen-only"
              name={`count`}
              type="number"
            />
            <span className="print-only">{values.count}</span>
          </div>
        </div>
      </SubTitle>
      <Description>{title}</Description>
    </>
  )
}

export default Payment
