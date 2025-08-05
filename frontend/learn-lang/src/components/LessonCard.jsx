import React from 'react';

const LessonCard = ({ title, level }) => {
  return (
    <div className="lesson-card">
      <h3>{title}</h3>
      <p>Level: {level}</p>
    </div>
  );
};

export default LessonCard;