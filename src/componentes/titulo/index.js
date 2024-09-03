import styled from 'styled-components'

export const Titulo = styled.h2`
  font-size: ${(props) => props.tamanho || '40px'};
  color: ${(props) => props.cor || '#000'};
  text-align: ${(props) => props.alinhamento || 'center'};
  box-shadow: ${(props) => props.boxshadow || '0 0 20px rgba(0, 0, 0, 0.3)'};
  background-color: white;
  padding: ${(props) => props.padding || '30px 0'};
  margin: ${(props) => props.margin || ' 0 0 50px 0'};
`
