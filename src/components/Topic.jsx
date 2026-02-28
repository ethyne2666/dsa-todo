import { useState } from "react";
import QuestionItem from "./QuestionItem";

const Topic = ({ topic }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded mb-3 bg-white shadow">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer p-3 font-semibold bg-gray-100"
      >
        {topic.title}
      </div>

      {open &&
        topic.questions.map((q) => (
          <QuestionItem key={q.id} question={q} />
        ))}
    </div>
  );
};

export default Topic;