import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { Courses } from "../Interfaces/Courses";
import COURSES2 from "../Data/CISC_Courses.json";

export function AddCourse(): JSX.Element {
    const temp = COURSES2.map((name: Courses): string => name.CourseName);

    const [courses, setCourses] = useState<string[]>([]);
    const [inputValue, setInputValue] = React.useState("");
    const [value, setValue] = React.useState<string | null>(temp[0]);

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
                    onChange={(event, newValue: string | null) => {
                        setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={temp}
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
