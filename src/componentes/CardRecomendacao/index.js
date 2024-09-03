import styled from 'styled-components'
import { Titulo } from '../titulo'

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 60%;
  margin: 100px auto 0 auto;
  padding: 30px;
  border-radius: 10px;
`
const CardSection1 = styled.div`
  display: inline-block;
  text-align: left;
  width: 70%;
`
const CardSection2 = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
`

const TextoSuperior = styled.h3`
  color: #09203f;
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 10px 0;
`

const TextoDescricaoCard = styled.h3`
  color: #09203f;
  font-size: 17px;
  width: 70%;
  margin: 0;
  text-align: justify;
  font-weight: 400;
`

const ImagemCard = styled.img`
  border-radius: 10px;
  width: 70%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`

const ButtonCard = styled.button`
  // outline: none;
  margin-top: 5px;
  width: 70%;
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
  border: 0;
  background-color: #09203f;
  color: #fff;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`

function CardRecomendacao({ titulo, subtitulo, descricao, img }) {
  return (
    <CardSection>
      <CardSection1>
        <TextoSuperior>{titulo}</TextoSuperior>
        <Titulo
          tamanho='40px'
          boxshadow='none'
          alinhamento='left'
          margin='0 0 10px 0'
          padding='0'
          cor='#09203f'
        >
          {subtitulo}
        </Titulo>
        <TextoDescricaoCard>{descricao}</TextoDescricaoCard>
      </CardSection1>
      <CardSection2>
        <ImagemCard src={img} alt='imagem livro' />
        <ButtonCard>Saiba mais</ButtonCard>
      </CardSection2>
    </CardSection>
  )
}

export default CardRecomendacao
