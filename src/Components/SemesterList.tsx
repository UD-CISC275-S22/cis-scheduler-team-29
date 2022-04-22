import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import { Semester } from "../Interfaces/Semester";
import { SemesterView } from "./SemesterView";

export function SemesterList({
    semesters,
    deleteSemester
}: {
    semesters: Semester[];
    deleteSemester: (id: string) => void;
}): JSX.Element {
    const [hidden, setHidden] = useState(false);
    return (
        <div>
            <button onClick={() => setHidden(!hidden)}>HIDE SEMESTERS</button>
            <div hidden={hidden}>
                <Stack className="SemesterList" direction="horizontal" gap={3}>
                    {semesters.map((semester: Semester) => (
                        <div
                            key={semester.id}
                            // className="bg-light border m-2 p-2"
                            className="hey"
                        >
                            <SemesterView
                                semester={semester}
                                deleteSemester={deleteSemester}
                            ></SemesterView>
                        </div>
                    ))}
                </Stack>
            </div>
        </div>
    );
}
