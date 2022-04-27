import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Courses } from "../Interfaces/Courses";
import { CourseEditor } from "./EditCourse";

export function EditCourseModal({ course }: { course: Courses }): JSX.Element {
    const [showAddModal, setShowAddModal] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function changeEditing() {}

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function deleteCourse(id: string) {
        id;
    }

    function editCourse(id: string, newCourse: Courses) {
        course.Code = newCourse.Code;
        course.Credits = newCourse.Credits;
        course.Status = newCourse.Status;
    }
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div>
            <Button variant="success" onClick={handleShowAddModal}>
                Edit
            </Button>
            <CourseEditor
                show={showAddModal}
                handleClose={handleCloseAddModal}
                changeEditing={changeEditing}
                deleteCourse={deleteCourse}
                Course={course}
                editCourse={editCourse}
            ></CourseEditor>
        </div>
    );
}
