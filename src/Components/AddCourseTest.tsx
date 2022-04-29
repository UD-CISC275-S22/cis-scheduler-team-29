import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { Courses } from "../Interfaces/Courses";
import COURSES2 from "../Data/CISC_Courses.json";
import { ListCourses } from "./ListCourses";

const COURSE_LIST: Courses[] = COURSES2.map((crse) => crse);

export function AddCourse(): JSX.Element {
    const [courses, setCourses] = useState<Courses[]>([]);

    // const [courses, setCourses] = useState<string[]>([]);
    const [inputValue, setInputValue] = React.useState("");
    const [value, setValue] = React.useState<string | null>(
        COURSE_LIST[0].Code
    );

    function editCourse(course: Courses, newCourse: Courses): void {
        setCourses(
            courses.map((c) => {
                if (c.Code !== course.Code) return c;
                return newCourse;
            })
        );
    }
    function addCourse(code: string) {
        if (!courses.find((c) => c.Code === code) && code !== "") {
            //const temp = COURSE_LIST.filter((obj) => obj.Code === name);
            setCourses([
                ...courses,
                //temp[0]
                ...COURSE_LIST.filter((obj) => obj.Code === code)
            ]);
        } else {
            const newCourses = [...courses];
            setCourses(newCourses);
        }
    }
    //function filterByName(obj: Courses) {
    // if (courses.includes(obj.Code)) {
    //     return true;
    // }
    //    if (obj.Code === name)
    //}
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
                    options={COURSE_LIST.map(
                        (test: Courses): string => test.Code
                    )}
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
            <ListCourses course={courses} editCourse={editCourse}></ListCourses>
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
