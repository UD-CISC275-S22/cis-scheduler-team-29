import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Courses } from "../Interfaces/Courses";
import { ListCourses } from "./ListCourses";
import { Semester } from "../Interfaces/Semester";
import { Plan } from "../Interfaces/Plan";
import { Grid } from "@mui/material";
import catalog from "../Data/catalog.json";

const COURSES: Courses[] = Object.values(catalog)
    .flat()
    .map((category) => Object.values(category).flat())
    .flat()
    .map((crs) => ({ ...crs }));
export function AddCourse({
    courses,
    semester,
    plan,
    plans,
    setPlan
}: {
    courses: Courses[];
    setPlan: (plans: Plan[]) => void;
    semester: Semester;
    plan: Plan;
    plans: Plan[];
}): JSX.Element {
    const [inputValue, setInputValue] = React.useState("");
    const [value, setValue] = React.useState<string | null>(COURSES[0].code);

    function editCourse(course: Courses, newCourse: Courses): void {
        semester.course = courses.map((c) => {
            if (c.code !== course.code) return c;
            return newCourse;
        });
        setPlan([...plans]);
    }
    function addCourse(code: string) {
        if (
            !courses.find((c) => c.code === code) &&
            code !== "" &&
            !plan.semesters.some(
                (sem) =>
                    sem.course.filter((crse) => crse.code === code).length > 0
            )
        ) {
            semester.course = [
                ...courses,
                ...COURSES.filter((obj) => obj.code === code)
            ];
            setPlan([...plans]);
        } else {
            semester.course = [...courses];
            setPlan([...plans]);
        }
    }

    function deleteCourse(code: string) {
        semester.course = [...courses.filter((obj) => obj.code !== code)];
        setPlan([...plans]);
    }

    return (
        <div>
            <div>
                <Grid>
                    <Autocomplete
                        data-testid="autocompletebutton"
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
                        options={COURSES.map(
                            (test: Courses): string => test.code
                        )}
                        sx={{ width: 200, textAlign: "center" }}
                        renderInput={(params) => (
                            <TextField
                                data-testid="autocompleteInput"
                                {...params}
                                label="Courses"
                            />
                        )}
                    />
                    <button
                        style={{ textAlign: "center" }}
                        onClick={() => addCourse(inputValue)}
                        data-testid="addcoursetest"
                    >
                        Add Course
                    </button>
                </Grid>
            </div>
            <ListCourses
                course={courses}
                editCourse={editCourse}
                deleteCourse={deleteCourse}
            ></ListCourses>
        </div>
    );
}
