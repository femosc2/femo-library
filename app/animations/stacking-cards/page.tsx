"use client";
import Layout from "@/app/layout";
import {
  StyledCardsContainer,
  StyledCard,
  StyledCardContent,
  StyledSection,
} from "./stacking-cards.styles";
import { useRef, useState } from "react";

export default function Page() {
  const [scroll, setScrollY] = useState<number>(0);
  const [centerIndex, setCenterIndex] = useState(0);
  const [cards, setCards] = useState([
    {
      heading: "H&M",
      subHeading: "Lead Frontend Developer",
      body: "Cool stuff",
    },
    {
      heading: "Husqvarna",
      subHeading: "Frontend Developer",
      body: "some other stuff!",
    },
    {
      heading: "National Car Parks",
      subHeading: ".NET Developer",
      body: "boring stuff",
    },
    { heading: "NK", subHeading: "Frontend Developer", body: "More Ecommerce" },
  ]);

  const scrollHandler = (e: React.UIEvent<HTMLElement>) => {
    const scrollPosition = containerRef.current?.scrollTop
      ? containerRef.current?.scrollTop
      : 0;

    const cardHeightWithSpacing = 500 + 10;
    const visibleAreaCenter = scrollPosition + 1000 / 2;
    let accurateCenterIndex = Math.floor(
      visibleAreaCenter / cardHeightWithSpacing
    );
    if (scrollPosition < cardHeightWithSpacing / 2) {
      accurateCenterIndex = 0;
    }
    const safeCenterIndex = Math.min(
      Math.max(0, accurateCenterIndex),
      cards.length - 1
    );

    setScrollY(scrollPosition);
    setCenterIndex(safeCenterIndex);
  };

  const containerRef = useRef<HTMLUListElement | null>(null);

  return (
    <Layout>
      <StyledSection>
        <StyledCardsContainer
          ref={containerRef}
          onScroll={(e) => scrollHandler(e)}
          numberofcards={cards.length}
        >
          {cards.map((c, i) => {
            return (
              <StyledCard
                key={i}
                index={i}
                scroll={scroll}
                numberofcards={cards.length}
                centerIndex={centerIndex}
              >
                <StyledCardContent>
                  <h1>{c.heading}</h1>
                  <p>
                    {0.85 +
                      0.15 * Math.exp(-Math.pow(i - centerIndex, 2) / (2 * 1))}
                  </p>
                </StyledCardContent>
              </StyledCard>
            );
          })}
        </StyledCardsContainer>
      </StyledSection>
    </Layout>
  );
}
