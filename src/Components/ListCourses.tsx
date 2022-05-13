import { Courses } from "../Interfaces/Courses";
import React from "react";
import { Stack, Table } from "react-bootstrap";
import { EditCourseModal } from "./EditCourseModal";

export function ListCourses({
    course,
    editCourse,
    deleteCourse
}: {
    course: Courses[];
    editCourse: (course: Courses, newCourse: Courses) => void;
    deleteCourse: (name: string) => void;
}): JSX.Element {
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
                            key={courses.ID}
                        >
                            <td className="Code_Col">{courses.Code}</td>
                            <td className="Credit_Col">{courses.Credits}</td>
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
        </Stack>
    );
}
