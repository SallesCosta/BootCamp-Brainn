import styled from 'styled-components'

function BtnPrimary({ children, onClick }) {
    return <Btn1 onClick={onClick} >{children}</Btn1>
}

function BtnSecondary({ children, onClick }) {
    return <Btn2 onClick={onClick}>{children}</Btn2>
} 

const Btn2 = styled.button`
    width: 160px;
    background-color: #f56565;
    color: #fff;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    transition: 0.2s;
  }
  
  &:hover {
    transform: scale(0.97);
    transition: 0.2s;
    cursor: pointer;
  }`
 
 const Btn1 = styled.button`
    background-color: #2d3748;
    width: 160px;
    color: #e2e8f0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    transition: 0.2s;
    
    :hover {
        transform: scale(0.97);
        transition: 0.2s;
        cursor: pointer;
      }
    `

export { BtnPrimary, BtnSecondary }