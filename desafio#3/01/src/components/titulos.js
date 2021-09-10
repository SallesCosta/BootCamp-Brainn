import styled from "styled-components"

function H1({ text }) {
    return <h1>{ text }</h1>
}

function H2({ text }) {
    return <h2>{ text }</h2>
}

function H3({ text }) {
    return <h3>{ text }</h3>
}

function H4({ text }) {
    return <h4>{ text }</h4>
}

function H5({ text }) {
    return <h5>{ text }</h5>
}

function H6({ text }) {
    return <h6>{ text }</h6>
}

function P({ text }) {
    return <p>{ text }</p>
}

function Input({type, name, placeholder}) {
    return <InputInt type={type} name={name} placeholder={placeholder}/>
}
    
    const InputInt = styled.input`
    
    padding:0;
    line-height:inherit;
    color:inherit;
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;
    color:rgba(63, 63, 70, 1);
    border-color:rgba(161, 161, 170, 0.2);
    border-radius:0.25rem;
    border-style: solid;
    padding:0.75rem 1rem;
    line-height:1.25;
    outline:2px solid transparent;
    width: 80%;
    margin-left:10%
    display: block;
    box-sizing: border-box;
    
    
    &:hover {
        border-color:rgba(161, 161, 170, 0.6);
  }
  
  &:focus {
    outline:2px solid transparent;
    outline-offset:2px;
    background-color:rgba(255, 255, 255, 1);
    border-color:#3B82F6;
  }
  
  &::placeholder {
    color:#a1a1aa;
  }
`



export {  H1, H2, H3, H4, H5, H6, P, Input }