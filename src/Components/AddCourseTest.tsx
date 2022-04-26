import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { Courses } from "../Interfaces/Courses";
import COURSES2 from "../Data/CISC_Courses.json";
import { ListCourses } from "./ListCourses";

export function AddCourse(): JSX.Element {
    const temp = COURSES2.map((name: Courses): string => name.Code);
    const temp2 = COURSES2.map((name: Courses): Courses => name);

    const [courses, setCourses] = useState<string[]>([]);
    const [inputValue, setInputValue] = React.useState("");
    const [value, setValue] = React.useState<string | null>(temp[0]);
    function addCourse(name: string) {
        if (!courses.includes(name) && name !== "") {
            const newCourses = [...courses, inputValue];
            setCourses(newCourses);
        } else {
            const newCourses = [...courses];
            setCourses(newCourses);
        }
    }
    function filterByName(obj: Courses) {
        if (courses.includes(obj.Code)) {
            return true;
        }
    }
    return (
        <div>
            <div>
                <Autocomplete
                    value={value}
                    onChange={(
                        event: React.SyntheticEvent<Element, Event>,
                        newValue: string | null
                    ) => {
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
            <ListCourses course={temp2.filter(filterByName)}></ListCourses>
        </div>
    );
}
/*
<ul>
                {courses.map((person: string) => (
                    <li key={person}>{person}</li>
                ))}
            </ul>
*/
