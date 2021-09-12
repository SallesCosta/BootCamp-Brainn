import styled from 'styled-components'

function BtnPrimary({ children, onClick }) {
  return <Btn1 onClick={onClick} >{children}</Btn1>
}

function BtnSecondary({ children, onClick }) {
  return <Btn2 onClick={onClick}>{children}</Btn2>
}

const Btn1 = styled.button`
background-color: #2d3748;
width: 160px;
color: #e2e8f0;
margin: 1rem 1rem;
padding-top: 0.5rem;
padding-bottom: 0.5rem;
padding-left: 1rem;
padding-right: 1rem;
border-radius: 0.25rem;
margin-right: 0.5rem;
transition: 0.2s;

:hover {
  transform: scale(1.05);
  transition: 0.2s;
  cursor: pointer;
  color: #2d3748;
  background-color: #ffffff;
}
`

const Btn2 = styled(Btn1)`
     background-color: #f56565;
     margin: 0.5rem 1rem;
     :hover {
       color: #f56565;
       background-color: #ffffff;`

export { BtnPrimary, BtnSecondary }