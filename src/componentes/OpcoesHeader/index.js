import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const Opcoes = styled.ul`
  display: flex;
  padding: 0;
`

const Opcao = styled.li`
  color: white;
  min-width: 120px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
  will-change: contents;
  &:hover {
    transform: scale(1.15);
    font-weight: bold;
  }
`

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao>
          <p>{texto}</p>
        </Opcao>
      ))}
    </Opcoes>
  )
}

export default OpcoesHeader
