import Logo from '../logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-image: linear-gradient(90deg, #09203f 15%, #537895 140%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  )
}

export default Header
