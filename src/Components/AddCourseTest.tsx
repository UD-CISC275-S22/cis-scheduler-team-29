import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { Courses } from "../Interfaces/Courses";
import testCourses from "../Data/CISC_Courses.json";
/*
This file is just a test to add courses from an autocomplete component
*/
const options = ["Option 1", "Option 2"];
const COURSES = testCourses.map(
    (courses): Courses => ({
        ...courses
    })
);
/*realCourseList.;

const REALCOURSES = realCourseList.map(
    (courses): Courses => ({
        ...courses
    })
);
/*

const TEST = testCourses.map(
    (courses): Courses => ({
        ...courses
    })
);*/
//onChange={(event: any, newValue: string | null) => {setValue(newValue);}}

export function ControllableStates() {
    const [courses, setCourses] = useState<string[]>([]);
    const [value, setValue] = React.useState<string | null>(options[0]);
    const [inputValue, setInputValue] = React.useState("");

    function addCourse(name: string) {
        if (!courses.includes(name)) {
            const newCourses = [...courses, inputValue];
            setCourses(newCourses);
        } else {
            const newCourses = [...courses];
            setCourses(newCourses);
        }
    }

    return (
        <div>
            <div>
                <Autocomplete
                    value={value}
                    onChange={(event: any, newValue: string | null) => {
                        setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={options}
                    sx={{ width: 200, textAlign: "center" }}
                    renderInput={(params) => (
                        <TextField {...params} label="Courses" />
                    )}
                />
                <button
                    style={{ textAlign: "left" }}
                    onClick={() => addCourse(inputValue)}
                >
                    Add Course
                </button>
            </div>
            <ul>
                {courses.map((person: string) => (
                    <li key={person}>{person}</li>
                ))}
            </ul>
        </div>
    );
}
