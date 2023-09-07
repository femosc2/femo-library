import COLOURS from "@/app/variables/colours";
import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin: 0;
    text-align: center;
    background-color: ${COLOURS.backgroundGray200};
    box-shadow: 7px 0px 40px 3px rgba(0,0,0,0.31);
    font-size: 35px;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    color: white;
`

export const StyledLinks = styled.ul`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    list-style: none;
    text-align: center;
    margin-top: 25px;
`

export const StyledLink = styled.li`
    font-size: 20px;
    margin-top: 5px;
    transition: 0.2s;
    &:hover {
        color: ${COLOURS.linkGreen};;
    }
`

export const StyledSectionHeader = styled.button<{ isactive: boolean }>`
    background-color: ${COLOURS.mainButton};
    height: ${props => props.isactive ? '50vh' : '30px'};
    transition: 0.5s;
    overflow: hidden;
    border: none;
`
export const StyledSectionBody = styled.section`
    height: inherit;
    width: 100%;
    overflow: hidden;
    background-color: ${COLOURS.backgroundGray200};
`