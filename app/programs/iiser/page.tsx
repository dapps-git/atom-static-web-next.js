import React from 'react';
import CoursePageLayout from '@/app/components/Course/CoursePageLayout';
import { courses } from '@/app/data/courseData';

export default function IISERPage() {
    const course = courses.iiser;
    return <CoursePageLayout course={course} />;
}
