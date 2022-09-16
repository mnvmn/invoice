import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: end;
  margin-top: 80px;
  margin-right: 50px;
`
const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 250px;
  position: relative;
  border-top: 1px solid
    ${(props) => {
      return props.theme.textPrimary
    }};
  padding-top: 5px;
  img {
    width: 100%;
    position: absolute;
    z-index: -1;
    top: -60px;
  }
`

const Signature = () => (
  <Section>
    <Container>
      <div>Pečiatka a podpis</div>
      <img
        src="MN_podpis.png"
        alt="podpis"
      />
    </Container>
  </Section>
)

export default Signature
