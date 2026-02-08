import React from 'react';
import CoursePageLayout from '@/app/components/Course/CoursePageLayout';
import { courses } from '@/app/data/courseData';

export default function NEETPage() {
    const course = courses.neet;
    return <CoursePageLayout course={course} />;
}
