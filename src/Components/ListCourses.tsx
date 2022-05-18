import { Courses } from "../Interfaces/Courses";
import React from "react";
import { Button, Stack, Table } from "react-bootstrap";
import { EditCourseModal } from "./EditCourseModal";

export function ListCourses({
    course,
    editCourse,
    deleteCourse,
    clearCourses
}: {
    course: Courses[];
    editCourse: (course: Courses, newCourse: Courses) => void;
    deleteCourse: (name: string) => void;
    clearCourses: () => void;
}): JSX.Element {
    let credits = 0;
    course.forEach(function (course) {
        credits = credits + parseInt(course.credits);
    });
    return (
        <Stack gap={3}>
            <Table>
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Credits</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {course.map((courses: Courses) => (
                        <tr
                            data-testid="columncolortest"
                            className="Row_ListCourses"
                            key={courses.code}
                        >
                            <td className="Code_Col">{courses.code}</td>
                            <td className="Credit_Col">{courses.credits}</td>
                            <td>
                                <EditCourseModal
                                    course={courses}
                                    editCourse={editCourse}
                                    deleteCourse={deleteCourse}
                                ></EditCourseModal>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="semestercredits">Semester Credits: {credits}</div>
            <div className="alignleft">
                {course.length != 0 && (
                    <Button size="sm" onClick={clearCourses}>
                        Clear Courses
                    </Button>
                )}
            </div>
        </Stack>
    );
}
