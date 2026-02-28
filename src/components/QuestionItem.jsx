import { useState, useEffect } from "react";

const QuestionItem = ({ question }) => {
  const [charan, setCharan] = useState(false);
  const [dev, setDev] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(question.id));
    if (saved) {
      setCharan(saved.charan);
      setDev(saved.dev);
    }
  }, [question.id]);

  useEffect(() => {
    localStorage.setItem(
      question.id,
      JSON.stringify({ charan, dev })
    );
  }, [charan, dev, question.id]);

  return (
    <div className="flex items-center justify-between px-6 py-2 border-b">
      <div className="flex items-center gap-6">
        <input
          type="checkbox"
          checked={charan}
          onChange={() => setCharan(!charan)}
        />
        <input
          type="checkbox"
          checked={dev}
          onChange={() => setDev(!dev)}
        />
      </div>

      <div className="flex-1 ml-6 text-left">
        {question.title}
      </div>
    </div>
  );
};

export default QuestionItem;