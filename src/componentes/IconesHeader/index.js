import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
  width: 45px;
  text-align: center;
`

const Icones = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`

const icones = [perfil, sacola]

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt='icone'></img>
        </Icone>
      ))}
    </Icones>
  )
}

export default IconesHeader
