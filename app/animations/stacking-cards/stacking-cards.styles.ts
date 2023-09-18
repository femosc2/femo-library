import styled, { keyframes, css } from 'styled-components';

// Define the keyframes
const scale = keyframes`
  to {
    transform:
      scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
  }
`;

// Define Card styled component
export const StyledCard = styled.li<{index: number, scroll: number, numberofcards: number, centerIndex: number}>`
  height: 400px;
  background-color: ${props => props.index === props.centerIndex ? "green" : "red"};
  margin: 0 auto;
  margin-left: 100px;
  width: 70%;
  position: sticky;
  z-index: ${props => props.index};
  border-radius: 25px;
  box-shadow: -1px -1px 17px 0px rgba(0,0,0,0.43);
  top: ${props => props.index * 25}px;
  transform: scale(${props => 0.85 + 0.15 * Math.exp(-Math.pow((props.index - props.centerIndex), 2) / (2 * 1))});
  transition: 1s;
`;

// Define CardsContainer styled component
export const StyledCardsContainer = styled.ul<{numberofcards: number}>`
  border: 5px solid pink;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 600px;
  position: absolute;
  overflow: auto;
  margin-top: 100px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

// Define CardContent styled component
export const StyledCardContent = styled.section`
  animation: ${scale} linear forwards;
  height: 500px;
`;

export const StyledSection = styled.section`
width: 100%;
heigth: 100vw;
margin-left: 20%;
`