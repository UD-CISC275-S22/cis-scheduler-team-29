import React from "react";
import { render, screen, within } from "@testing-library/react";
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
describe("Courses", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("can add course", () => {
        const newPlanButton = screen.getByTestId("newPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        const input = screen.getByTestId("addPlanInputName");
        userEvent.type(input, "test plan");
        createNewPlanButton.click();
        const newCreatedPlan = screen.getByTestId("test plan");
        newCreatedPlan.click();
        const addsemesterbutton = screen.getByTestId("addsemesterbutton");
        addsemesterbutton.click();
        const save = screen.getByTestId("Savechangessemester");
        save.click();
        const clickaddcourse = screen.getByTestId("addcoursetest");
        clickaddcourse.click();
        const color = screen.getByTestId("columncolortest");
        expect(color).toHaveStyle({ backgroundColor: "d8d7d7" });
    });
    test("can search course", () => {
        const newPlanButton = screen.getByTestId("newPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        const input = screen.getByTestId("addPlanInputName");
        userEvent.type(input, "test plan");
        createNewPlanButton.click();
        const newCreatedPlan = screen.getByTestId("test plan");
        newCreatedPlan.click();
        const addsemesterbutton = screen.getByTestId("addsemesterbutton");
        addsemesterbutton.click();
        const save = screen.getByTestId("Savechangessemester");
        save.click();
        const addcourse = screen.getByTestId("addcoursetest");
        const clickautocomplete = screen.getByTestId("autocompletebutton");
        clickautocomplete.click();
        const input2 = screen.getByTestId("autocompletebutton");
        userEvent.type(input2, "MATH242");
        addcourse.click();
        expect(screen.getByText("MATH242")).toBeInTheDocument();
        //    note to FIX THIS (NOT WORKING, don't know whats up)
        //    check how i added and searched course MATH242.
    });
    test("can delete a SINGLE selected course", () => {
        const newPlanButton = screen.getByTestId("newPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        const input = screen.getByTestId("addPlanInputName");
        userEvent.type(input, "test plan");
        createNewPlanButton.click();
        const newCreatedPlan = screen.getByTestId("test plan");
        newCreatedPlan.click();
        const addsemesterbutton = screen.getByTestId("addsemesterbutton");
        addsemesterbutton.click();
        const save = screen.getByTestId("Savechangessemester");
        save.click();
        const addcourse = screen.getByTestId("addcoursetest");
        addcourse.click();
        const clickxbutton = screen.getByTestId("deletebuttonforsinglecourse");
        clickxbutton.click();
        expect(addcourse == null);
    });
    test("can edit a course", () => {
        const newPlanButton = screen.getByTestId("newPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        const input = screen.getByTestId("addPlanInputName");
        userEvent.type(input, "test plan");
        createNewPlanButton.click();
        const newCreatedPlan = screen.getByTestId("test plan");
        newCreatedPlan.click();
        const addsemesterbutton = screen.getByTestId("addsemesterbutton");
        addsemesterbutton.click();
        const save = screen.getByTestId("Savechangessemester");
        save.click();
        const addcourse = screen.getByTestId("addcoursetest");
        addcourse.click();
        const edit = screen.getByTestId("editbuttonforsinglecourse");
        edit.click();
        const input2 = screen.getByTestId("coursecodeedit");
        userEvent.type(input2, "testcode_n1");
        const savechangescourse = screen.getByTestId(
            "savechangesforeditsinglecourse"
        );
        savechangescourse.click();
        edit.click();
        expect(screen.getByTestId("coursecodeedit")).toHaveTextContent(
            "testcode_n1"
        );
    });
});
// editbuttonforsinglecourse
//    //  coursecodeedit
//    // coursenameedit
//    // savechangesforeditsinglecourse
// deletebuttonforsinglecourse;
// addsemesterbutton
// addcoursetest
// Savechangessemester
// autocompletebutton
