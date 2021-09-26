import {Test} from './test.model'

export interface Subject {
    sid?: string,
    name: string,
    credit: number,
    temporary_mark: number,
    actual_mark: number,
    tests: Test;
}