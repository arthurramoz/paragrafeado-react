import styled from 'styled-components'

const Input = styled.input`
  order: 1px solid #fff;
  background: linear-gradient(90deg, #fdfbfb 15%, #ebedee 140%);
  color: #002742;
  border: none;
  outline: 0;
  padding: 15px;
  border-radius: 50px;
  font-weight: 100;
  width: 250px;
  transition: transform 0.7s ease-in-out;
  will-change: contents;
  text-align: center;
  font-size: 18px;

  &::placeholder {
    color: #0027428c;
    font-size: 16px;
  }

  &:focus {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.15);
  }
`

export default Input
