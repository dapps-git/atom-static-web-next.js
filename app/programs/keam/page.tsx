import React from 'react';
import CoursePageLayout from '@/app/components/Course/CoursePageLayout';
import { courses } from '@/app/data/courseData';

export default function KEAMPage() {
    const course = courses.keam;
    return <CoursePageLayout course={course} />;
}
