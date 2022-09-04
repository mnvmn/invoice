import styled from 'styled-components'

export const Container = styled.div`
  margin: 30px auto 10px;
  @media (min-width: ${(props) => props.theme.containerMaxWidth}) {
    width: ${(props) => props.theme.containerMaxWidth};
  }
`
