import { Titulo } from '../titulo'
import { livros } from './dadosUltimosLancamentos'
import { livrosRecomendacao } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import CardRecomendacao from '../CardRecomendacao'

const UltimosLancamentosContainer = styled.section`
  text-align: center;
  width: 100%;
  height: 900px;
`
const Imagem = styled.img`
  margin-right: 20px;
`

function UltimosLancamentos() {
  return (
    <div>
      <UltimosLancamentosContainer>
        <Titulo cor='#09203f' tamanho='40px'>
          ÚLTIMOS LANÇAMENTOS
        </Titulo>
        {livros.map((livro) => (
          <Imagem src={livro.src} alt='livro' />
        ))}
        <CardRecomendacao
          titulo='Você pode acabar se interessando por'
          subtitulo={livrosRecomendacao.nome}
          descricao={livrosRecomendacao.descricao}
          img={livrosRecomendacao.src}
        />
      </UltimosLancamentosContainer>
    </div>
  )
}

export default UltimosLancamentos
