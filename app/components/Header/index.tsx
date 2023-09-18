"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  StyledHeader,
  StyledLink,
  StyledLinks,
  StyledSectionHeader,
  StyledSectionBody,
} from "./Header.styles";
import { getPaths } from "@/app/utils/getPaths";

const Header = () => {
  const [activeHeader, setActiveHeader] = useState("");

  useEffect(() => {});

  return (
    <StyledHeader>
      <h1>Femo Library</h1>
      <hr />
      <StyledLinks>
        <StyledSectionHeader
          onClick={() =>
            setActiveHeader(activeHeader === "animations" ? "" : "animations")
          }
          isactive={activeHeader === "animations"}
        >
          <StyledLink>Animations</StyledLink>
          <StyledSectionBody>
            <StyledLink>
              <Link href={"/animations/horizontal-side"}>
                Horizontal Side Scrolling
              </Link>
            </StyledLink>
            <StyledLink>
              <Link href={"/animations/stacking-cards"}>Stacking Cards</Link>
            </StyledLink>
          </StyledSectionBody>
        </StyledSectionHeader>
        <StyledSectionHeader
          onClick={() =>
            setActiveHeader(activeHeader === "components" ? "" : "components")
          }
          isactive={activeHeader === "components"}
        >
          <StyledLink>Components</StyledLink>
          <StyledSectionBody></StyledSectionBody>
        </StyledSectionHeader>
      </StyledLinks>
    </StyledHeader>
  );
};

export default Header;
