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
        createNewPlanButton.click();
        const totalButtons = screen.queryAllByRole("button");
        expect(totalButtons.length).toBe(1);
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
    test("can edit a course (all fields, course: code/name/credit/desc..", () => {
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
        const inputcode = screen.getByTestId("coursecodeedit");
        userEvent.type(inputcode, "testcode_n1");
        const inputname = screen.getByTestId("coursenameedit");
        userEvent.type(inputname, "coursename_test_n2");
        const inputcredit = screen.getByTestId("coursecreditedit");
        userEvent.type(inputcredit, "three_n3");
        const inputdesc = screen.getByTestId("coursedescedit");
        userEvent.type(
            inputdesc,
            "coursedesc_n4: what a lovely class this must be"
        );
        const savechangescourse = screen.getByTestId(
            "savechangesforeditsinglecourse"
        );
        savechangescourse.click();
        edit.click();
        const checkchangecode = screen.getByText(/testcode_n1/i);
        expect(checkchangecode).toBeInTheDocument;
        expect(screen.queryByText("lllllllll")).toBeInTheDocument;
        expect(screen.queryByText("1-3three_n3")).toBeInTheDocument;
        expect(
            screen.queryByText(
                "coursedesc_n4: what a lovely class this must be"
            )
        ).toBeInTheDocument;
    });
});
describe("View", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("view plan button shows up", () => {
        const newPlanButton = screen.getByTestId("newPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        const input = screen.getByTestId("addPlanInputName");
        userEvent.type(input, "test plan");
        createNewPlanButton.click();
        const newCreatedPlan = screen.getByTestId("test plan");
        newCreatedPlan.click();
        const text = screen.getByRole("button", { name: /View/i });
        expect(text).toBeInTheDocument();
    });
    test("can view an empty plan", () => {
        const newPlanButton = screen.getByTestId("newPlanButton");
        newPlanButton.click();
        const createNewPlanButton = screen.getByTestId("savePlanButton");
        const input = screen.getByTestId("addPlanInputName");
        userEvent.type(input, "test plan");
        createNewPlanButton.click();
        const newCreatedPlan = screen.getByTestId("test plan");
        newCreatedPlan.click();
        const viewPlanButton = screen.getByTestId("viewPlanButton");
        viewPlanButton.click();
        const viewPlanModalTitle = screen.getByTestId("viewModalTitle");
        expect(viewPlanModalTitle !== null);
    });
    test("can view a plan with an empty semester", () => {
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
        const viewPlanButton = screen.getByTestId("viewPlanButton");
        viewPlanButton.click();
        const viewPlanSemester = screen.getAllByText("Summer 2022");
        expect(viewPlanSemester.length).toBe(2);
    });
    test("can view a plan with a non-empty semester", () => {
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
        const viewPlanButton = screen.getByTestId("viewPlanButton");
        viewPlanButton.click();
        const viewPlanSemester = screen.getAllByText("ACCT 166");
        expect(viewPlanSemester.length).toBe(2);
    });
});
describe("Semesters", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("can add a semester", () => {
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
        const checksemester = screen.getByText(/Summer 2022/i);
        expect(checksemester).toBeInTheDocument;
    });
    test("can delete a semester", () => {
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
        expect(addcourse !== null);
        const deleteSemester = screen.getByTestId("deleteSemester");
        deleteSemester.click();
        expect(addcourse === null);
    });
    test("can delete all semesters", () => {
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
        expect(addcourse !== null);
        const deleteAllSemesters = screen.getByTestId(
            "deleteAllSemestersButton"
        );
        deleteAllSemesters.click();
        expect(addcourse === null);
    });
});
