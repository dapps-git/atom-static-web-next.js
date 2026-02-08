import React from 'react';
import CoursePageLayout from '@/app/components/Course/CoursePageLayout';
import { courses } from '@/app/data/courseData';

export default function CUSATPage() {
    const course = courses.cusat;
    return <CoursePageLayout course={course} />;
}
