import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Semester } from "../Interfaces/Semester";

export function SemesterAdd({
    show,
    handleClose,
    addSemester
}: {
    show: boolean;
    handleClose: () => void;
    addSemester: (newSemester: Semester) => void;
}) {
    const [season, setSeason] = useState<string>("Summer");
    const [year, setYear] = useState<string>("2022");

    function updateSeason(event: React.ChangeEvent<HTMLSelectElement>) {
        setSeason(event.target.value);
    }

    function saveChanges() {
        if (year !== "") {
            addSemester({
                id: season + " " + year,
                season: season,
                year: year,
                Courses: []
            });
        }
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Title */}
                <Form.Group controlId="semesterId" as={Row}>
                    <Form.Label column sm={3}>
                        Semester Name
                    </Form.Label>
                    <Col>
                        <Form.Select value={season} onChange={updateSeason}>
                            <option value="Summer">Summer</option>
                            <option value="Fall">Fall</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </Form.Select>
                        <Form.Control
                            type="number"
                            value={year}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setYear(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
