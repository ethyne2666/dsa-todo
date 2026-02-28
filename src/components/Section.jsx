import { useState } from "react";
import Topic from "./Topic";

const Section = ({ section }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6">
      <div
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white p-4 rounded cursor-pointer text-lg font-bold"
      >
        {section.title}
      </div>

      {open && (
        <div className="mt-3 space-y-3">
          {section.topics.map((topic) => (
            <Topic key={topic.id} topic={topic} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;