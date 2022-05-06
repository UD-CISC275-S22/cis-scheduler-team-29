import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders the course name somewhere", () => {
    render(<App />);
    const linkElement = screen.getByText(/welcome/i);
    expect(linkElement).toBeInTheDocument();
});

describe("Testing plan", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("Add new plan button shows up", () => {
        const newPlanButton = screen.getByTestId("newPlanButton");
        expect(newPlanButton !== null);
    });
    test("clicking new plan shows modal", () => {
        const newPlanButton = screen.getByTestId("newPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        expect(createNewPlanButton !== null);
    });
    test("can add a plan", () => {
        const newPlanButton = screen.getByTestId("newPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        const input = screen.getByTestId("addPlanInputName");
        userEvent.type(input, "test plan");
        createNewPlanButton.click();
        const newCreatedPlan = screen.getByTestId("test plan");
        expect(newCreatedPlan !== null);
    });
    test("can not add an empty plan", () => {
        const newPlanButton = screen.getByTestId("newPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        const input = screen.getByTestId("addPlanInputName");
        userEvent.type(input, "");
        createNewPlanButton.click();
        const totalButtons = screen.queryAllByRole("button");
        expect(totalButtons.length === 1);
    });
    test("can delete a plan", () => {
        const newPlanButton = screen.getByTestId("newPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        const input = screen.getByTestId("addPlanInputName");
        userEvent.type(input, "test plan");
        createNewPlanButton.click();
        const newCreatedPlan = screen.getByTestId("test plan");
        newCreatedPlan.click();
        const deletePlan = screen.getByTestId("deletePlanButton");
        deletePlan.click();
        expect(newCreatedPlan === null);
    });
});
