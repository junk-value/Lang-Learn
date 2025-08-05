import React from 'react';
import lessons from '../data/lessons';
import LessonCard from './LessonCard';

const LessonList = () => {
  return (
    <div>
      <h2>Available Lessons</h2>
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          title={lesson.title}
          level={lesson.level}
        />
      ))}
    </div>
  );
};

export default LessonList;