import { Courses } from "./Courses";

export interface Semester {
    id: string;
    season: string;
    year: string;
    course: Courses[];
}
