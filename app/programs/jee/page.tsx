import React from 'react';
import CoursePageLayout from '@/app/components/Course/CoursePageLayout';
import { courses } from '@/app/data/courseData';

export default function JEEPage() {
    const course = courses.jee;
    return <CoursePageLayout course={course} />;
}
