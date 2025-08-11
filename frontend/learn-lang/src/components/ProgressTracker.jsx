import { useState } from "react";

export default function ProgressTracker() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="progress-tracker">
      <h3>Learning Progress</h3>
      <progress value={progress} max="100"></progress>
      <p>{progress}% completed</p>
      <button onClick={() => setProgress(Math.min(progress + 10, 100))}>
        Learn More
      </button>
    </div>
  );
}
