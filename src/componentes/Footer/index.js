import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons'

const FooterSection = styled.section`
  height: 250px;
  background-color: #323232;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DivFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  width: 70%;
  height: 70%;
`
const DivLeftFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: left;
  width: 100%;
  height: 100%;
  padding: 10px;
`
const DivMiddleFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: left;
  width: 100%;
  height: 100%;
  padding: 10px;
`
const DivRightFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: left;
  width: 100%;
  height: 100%;
  padding: 10px;
`

const DivBrands = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 0;
`

const H2 = styled.h2`
  font-size: 19px;
  margin-top: 10px;
`

const P = styled.p`
  margin-top: 10px;
  margin-left: 20px;
`

function Footer() {
  return (
    <FooterSection>
      <DivFooter>
        <DivLeftFooter class='foot-all footer-left'>
          <H2>Contato</H2>
          <P>
            <FontAwesomeIcon icon={faCaretRight} color='#fff' fontSize='15px' />{' '}
            +55 11 94100-6962
          </P>
          <P>
            <FontAwesomeIcon icon={faCaretRight} color='#fff' fontSize='15px' />{' '}
            arthurmoreiraramos550sp@gmail.com
          </P>
        </DivLeftFooter>
        <DivMiddleFooter>
          <H2>Sobre</H2>
          <P>
            <FontAwesomeIcon icon={faCaretRight} color='#fff' fontSize='15px' />{' '}
            Portfólio
          </P>
          <P>
            <FontAwesomeIcon icon={faCaretRight} color='#fff' fontSize='15px' />{' '}
            Portfólio
          </P>
          <P>
            <FontAwesomeIcon icon={faCaretRight} color='#fff' fontSize='15px' />{' '}
            Portfólio
          </P>
        </DivMiddleFooter>
        <DivRightFooter>
          <H2>Redes Sociais</H2>
          <DivBrands class='brands'>
            <P>
              <a
                href='https://github.com/arthurramoz?tab=repositories'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faGithub} color='#fff' fontSize='25px' />
              </a>
            </P>
            <P>
              <a
                href='https://linkedin.com/in/arthur-moreira-ramos/'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color='#fff'
                  fontSize='25px'
                />
              </a>
            </P>
            <P>
              <a
                href='https://mail.google.com/mail/?view=cm&fs=1&to=arthurmoreiraramos550sp@gmail.com&su=Seu%20Assunto'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={faGoogle} color='#fff' fontSize='25px' />
              </a>
            </P>
          </DivBrands>
        </DivRightFooter>
      </DivFooter>
    </FooterSection>
  )
}

export default Footer
