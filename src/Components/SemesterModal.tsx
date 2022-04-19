import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../Interfaces/Semester";
import { SemesterAdd } from "./SemesterAdd";
import { SemesterList } from "./SemesterList";

const SEMESTERS: Semester[] = [];

export function SemesterModal(): JSX.Element {
    const [semesters, setSemesters] = useState<Semester[]>(SEMESTERS);
    const [showAddModal, setShowAddModal] = useState(false);

    function addSemester(newSemester: Semester) {
        if (
            !semesters.some((semester) => semester.id === newSemester.id) &&
            newSemester.id !== ""
        ) {
            setSemesters([...semesters, newSemester]);
        }
    }
    function deleteSemester(id: string) {
        setSemesters(
            semesters.filter(
                (semester: Semester): boolean => semester.id !== id
            )
        );
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div>
            <Button
                variant="success"
                className="m-4"
                onClick={handleShowAddModal}
            >
                Add New Semester
            </Button>
            <SemesterAdd
                show={showAddModal}
                handleClose={handleCloseAddModal}
                addSemester={addSemester}
            ></SemesterAdd>
            <SemesterList
                semesters={semesters}
                deleteSemester={deleteSemester}
            ></SemesterList>
        </div>
    );
}
