import styled from 'styled-components';

const Button = styled.button`
width: auto;
padding: 12px 16px;
background-color: var(--blue);
border: none;
border-radius: 4px;
color: var(--white);
cursor: pointer;
font-size: 15px;
text-transform: uppercase;
&:hover {
    opacity: 0.9;
}
`;

export default Button;