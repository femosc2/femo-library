import { render, screen, fireEvent } from "@testing-library/react";
import Page from "./page"; // Adjust the import to your file structure

describe("Stacking Cards Page", () => {

    it("should render the correct number of cards", () => {
        render(<Page />);
        const cards = screen.getAllByRole("listitem");
        expect(cards).toHaveLength(4);
    });

    it("should display the correct heading for each card", () => {
        render(<Page />);
        expect(screen.getByText("H&M")).toBeInTheDocument();
        expect(screen.getByText("Husqvarna")).toBeInTheDocument();
        expect(screen.getByText("National Car Parks")).toBeInTheDocument();
        expect(screen.getByText("NK")).toBeInTheDocument();
    });

    it("should display the correct subheading for each card", () => {
        render(<Page />);
        expect(screen.getByText("Lead Frontend Developer")).toBeInTheDocument();
        expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
        expect(screen.getByText(".NET Developer")).toBeInTheDocument();
        expect(screen.getByText("More Ecommerce")).toBeInTheDocument();
    });

    it("should display the correct body for each card", () => {
        render(<Page />);
        expect(screen.getByText("Cool stuff")).toBeInTheDocument();
        expect(screen.getByText("some other stuff!")).toBeInTheDocument();
        expect(screen.getByText("boring stuff")).toBeInTheDocument();
        expect(screen.getByText("More Ecommerce")).toBeInTheDocument();
    });

    // Add more tests for the scrolling behavior and centerIndex calculation if needed
});