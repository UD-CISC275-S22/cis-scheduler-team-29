import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
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

    function sortBySeason(semester: Semester[]) {
        const seasonName: string[] = ["Summer", "Fall", "Winter", "Spring"];
        semester.sort(function (a, b) {
            return seasonName.indexOf(a.season) - seasonName.indexOf(b.season);
        });
        return semester;
    }

    return (
        <div>
            <div hidden={hidden}>
                <Grid
                    className="SemesterList"
                    direction="row"
                    gap={2}
                    container
                    spacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    {sortBySeason(semesters)
                        .sort(function (a, b) {
                            return a.year.localeCompare(b.year);
                        })
                        .map((semester: Semester) => (
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
                </Grid>
            </div>
        </div>
    );
}
