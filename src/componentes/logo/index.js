import logo from '../../img/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
  font-size: 24px;
  color: white;
`
const LogoImage = styled.img``

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt='logo' />
      <p>
        <strong>Paragra</strong>feado
      </p>
    </LogoContainer>
  )
}

export default Logo
