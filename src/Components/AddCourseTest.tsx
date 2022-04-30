import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Courses } from "../Interfaces/Courses";
import COURSES2 from "../Data/CISC_Courses.json";
import { ListCourses } from "./ListCourses";
import { Semester } from "../Interfaces/Semester";
import { Plan } from "../Interfaces/Plan";

const COURSE_LIST: Courses[] = COURSES2.map((crse) => crse);

export function AddCourse({
    courses,
    semester,
    plans,
    setPlan
}: {
    courses: Courses[];
    setPlan: (plans: Plan[]) => void;
    semester: Semester;
    plans: Plan[];
}): JSX.Element {
    const [inputValue, setInputValue] = React.useState("");
    const [value, setValue] = React.useState<string | null>(
        COURSE_LIST[0].Code
    );

    function editCourse(course: Courses, newCourse: Courses): void {
        semester.course = courses.map((c) => {
            if (c.Code !== course.Code) return c;
            return newCourse;
        });
        setPlan([...plans]);
    }
    function addCourse(code: string) {
        if (!courses.find((c) => c.Code === code) && code !== "") {
            semester.course = [
                ...courses,
                ...COURSE_LIST.filter((obj) => obj.Code === code)
            ];
            setPlan([...plans]);
        } else {
            semester.course = [...courses];
            setPlan([...plans]);
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
