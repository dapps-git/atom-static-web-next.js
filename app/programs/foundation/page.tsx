import React from 'react';
import CoursePageLayout from '@/app/components/Course/CoursePageLayout';
import { courses } from '@/app/data/courseData';

export default function FoundationPage() {
    const course = courses.foundation;
    return <CoursePageLayout course={course} />;
}
