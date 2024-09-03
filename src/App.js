import styled from 'styled-components'
import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos'
import Footer from './componentes/Footer'
import { useState } from 'react'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #cdcdcd 15%, #d5d5d5 140%);
  margin-bottom: ${({ isModalVisible }) => (isModalVisible ? '100vh' : '0')};
`

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <AppContainer isModalVisible={isModalVisible}>
      <Header />
      <Pesquisa
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
      <UltimosLancamentos />
      <Footer />
    </AppContainer>
  )
}

export default App
