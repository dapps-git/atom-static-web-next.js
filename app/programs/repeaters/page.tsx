import React from 'react';
import CoursePageLayout from '@/app/components/Course/CoursePageLayout';
import { courses } from '@/app/data/courseData';

export default function RepeatersPage() {
    const course = courses.repeaters;
    return <CoursePageLayout course={course} />;
}
