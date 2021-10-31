import {Test} from './test.model'

export interface Subject {
    sid?: string,
    name: string,
    type: string,
    day: string,
    hourStart: string,
    hourEnd: string,
    startDay: string,
    credit: number,
    mark?: number,
    room?: string,
    teacher?: string,
    exams_taken?: number,
    subject_taken?:number,
    tests?: Test;
}