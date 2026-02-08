import React from 'react';
import CoursePageLayout from '@/app/components/Course/CoursePageLayout';
import { courses } from '@/app/data/courseData';

export default function CUETPage() {
    const course = courses.cuet;
    return <CoursePageLayout course={course} />;
}
