import Link from "next/link";
import { ReactBurgerMenu } from "react-burger-menu";
import { slide as Menu} from "react-burger-menu"
import styled from "styled-components";


export default function BurgerMenu({ open, onClick }) {
    return (
      <Nav open={open}>
        <StyledLink to="/home" onClick={onClick}>
        ToWHY
        </StyledLink>
        <StyledLink to="/toDOH" onClick={onClick}>
          ToDOH
        </StyledLink>
        <StyledLink to="/toMEH" onClick={onClick}>
          toMEH
        </StyledLink>
        <StyledLink to="/toLUV" onClick={onClick}>
         toLUV
        </StyledLink>
        <StyledLink to="/toMAKE" onClick={onClick}>
         toMAKE
        </StyledLink>
      </Nav>
    )
  }
const Nav = styled.section `
`;
const StyledLink = styled.section ``;