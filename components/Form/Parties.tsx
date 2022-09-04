import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  margin-bottom: 20px;
  .title {
    color: ${(props) => {
      return props.theme.textSecondary
    }};
  }
`
const DualColumn = styled.div`
  display: flex;
  & > div {
    width: 50%;
  }
`

const Dodavatel = styled.div`
  padding-right: ${(props) => {
    return props.theme.gutter + 'px'
  }};
  flex-grow: 4;
  .title {
    margin-bottom: 10px;
  }
  .details {
    margin-top: 10px;
  }
`
const Odberatel = styled.div`
  position: relative;
  flex-grow: 4;
  margin-top: 0.5em;
  & > div {
    padding-left: ${(props) => {
      return props.theme.gutter * 1.5 + 'px'
    }};
    padding-right: ${(props) => {
      return props.theme.gutter * 1.5 + 'px'
    }};
  }
  .border {
    border-radius: 8px;
    border: 1px solid
      ${(props) => {
        return props.theme.textSecondary
      }};
    padding-top: ${(props) => {
      return props.theme.gutter * 2 + 'px'
    }};
    padding-bottom: ${(props) => {
      return props.theme.gutter * 2 + 'px'
    }};
    .title {
      padding-left: 5px;
      padding-right: 5px;
      position: absolute;
      top: -0.5em;
      left: 1em;
      background-color: white;
    }
  }
  .details {
    margin-top: 20px;
  }
`

const Parties = () => (
  <Section>
    <DualColumn>
      <Dodavatel>
        <div>
          <div className="title">DODÁVATEĽ</div>
          <div className="text-bold">mnvmn s.r.o.</div>
          <div>Školská 2866/14</div>
          <div>811 07 Bratislava-Staré Mesto</div>
          <div>Slovensko</div>
        </div>
        <div className="details">
          <div>IČO: 54719593</div>
          <div>DIČ: 2121781453</div>
          <div>Nie je platiteľ DPH</div>
        </div>
      </Dodavatel>
      <Odberatel>
        <div className="border">
          <div className="title">ODBERATEĽ</div>
          <div className="text-bold">Foundation, s.r.o.</div>
          <div>Jozef Antony</div>
          <div>Obchodná 2 811 06 Bratislava - mestská časť Staré Mesto</div>
          <div>Slovensko</div>
        </div>
        <div className="details">
          <div>IČO: 35903261</div>
          <div>DIČ: 2021889727</div>
          <div>IČ DPH: SK2021889727</div>
        </div>
      </Odberatel>
    </DualColumn>
  </Section>
)

export default Parties
