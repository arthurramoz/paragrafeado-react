import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const ButtonSearch = styled.button`
  margin-left: 25px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 15px;
  border-radius: 30px;
  border: none;
  background: linear-gradient(90deg, #fdfbfb 15%, #ebedee 140%);
  color: #002742;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 25%;
`

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #09203f 15%, #537895 140%);
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`
const Titulo = styled.h2`
  font-size: 35px;
  margin-bottom: 0;
  color: #e8ebf2;
`
const Subtitulo = styled.h3`
  font-size: 20px;
  margin-bottom: 40px;
  margin-top: 10px;
  color: #e8ebf2;
`
const Span = styled.span`
  color: white;
  font-weight: bold;
  font-size: 50px;
`
const P = styled.p`
  color: #09203f;
  font-weight: bold;
  font-size: 20px;
`
const ModalPesquisa = styled.div`
  background-color: #fff;
  width: 80%;
  // min-height: 100%;
  // position: absolute;
  // top: 520px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  display: ${({ isDisplayOn }) => (isDisplayOn ? 'block' : 'none')};

  //MUDANÇAS CHAT GPT:
  height: 90vh;
  position: fixed;
  top: 70px;
  left: 12%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 999;
  border-radius: 10px;
  transition:
    opacity 0.5s ease,
    top 0.5s ease;
`
const DivModalLivro = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 30px;
  margin: 0 auto;
  padding: 30px 20px 60px 20px;
  gap: 20px;
`

const Titulo2 = styled.h2`
  width: 100%;
  margin: 0;
  font-size: 35px;
  text-align: center;
  padding: 50px 0 20px 0;
  background-color: #09205f;
  color: white;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
`
const ModalLivro = styled.div`
  width: 250px;
  transition: transform 0.5s ease;
  will-change: contents;
  cursor: pointer;
  &:hover {
    transform: scale(1.15);
  }
`

const BotaoFecharModal = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  position: absolute;
  top: 55px;
  right: 40px;
  border-radius: 5px;
  background: white;
  padding: 10px;
  border: none;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
  color: #09203f;
`
const Imagem = styled.img`
  width: 180px;
  padding: 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`
const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function Pesquisa() {
  const [titulo2Value, setTitulo2Value] = useState('')
  const [livrosPesquisados, setLivrosPesquisados] = useState([])
  const [isModalVisivel, setModalVisivel] = useState(false)
  const [textoDigitado, setTextoDigitado] = useState('')

  const BotãoFecharModal = () => {
    setModalVisivel(false)
  }
  const PesquisaClick = () => {
    const resultadoPesquisa = livros.filter((livro) =>
      livro.nome.includes(textoDigitado),
    )
    setLivrosPesquisados(resultadoPesquisa)
    if (textoDigitado !== '') {
      setTitulo2Value('LIVROS ENCONTRADOS')
      setModalVisivel(true)
    } else {
      setTitulo2Value('LIVROS DISPONÍVEIS')
      setModalVisivel(true)
    }
  }

  return (
    <PesquisaContainer>
      <Titulo>
        SEJA BEM VINDO AO <Span>PARAGRAFEADO</Span>
      </Titulo>
      <Subtitulo>Maior estande de livros online do Brasil</Subtitulo>
      <DivButton>
        <Input
          placeholder='Quero encontrar meu livro'
          value={textoDigitado}
          onChange={(e) => setTextoDigitado(e.target.value)}
        />
        <ButtonSearch onClick={PesquisaClick}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color='#09203f'
            fontSize='22px'
          />
        </ButtonSearch>
      </DivButton>
      <ModalPesquisa isDisplayOn={isModalVisivel} isVisible={isModalVisivel}>
        <BotaoFecharModal onClick={BotãoFecharModal}>X</BotaoFecharModal>
        <Titulo2>{titulo2Value}</Titulo2>
        <DivModalLivro>
          {livrosPesquisados.map((livro) => (
            <ModalLivro key={livro.nome}>
              <P>{livro.nome}</P>
              <Imagem src={livro.src} alt='livro' />
            </ModalLivro>
          ))}
        </DivModalLivro>
      </ModalPesquisa>
    </PesquisaContainer>
  )
}

export default Pesquisa
