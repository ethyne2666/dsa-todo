import { useState } from "react";
import dsaData from "../data/dsaData";
import { useProgress } from "../hooks/useProgress";

const USERS = ["Charan Kumar", "Devanarayan"];
const USER_COLORS = ["text-indigo-400", "text-purple-400"];
const USER_CHECK_COLORS = ["accent-indigo-500", "accent-purple-500"];

export default function Todo() {
  const { progress, toggle } = useProgress();
  const [search, setSearch] = useState("");
  const [openTopics, setOpenTopics] = useState(() => {
    const init = {};
    dsaData.forEach((t) => (init[t.id] = true));
    return init;
  });
  const [openSubtopics, setOpenSubtopics] = useState({});

  const toggleTopic = (id) =>
    setOpenTopics((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleSubtopic = (id) =>
    setOpenSubtopics((prev) => ({ ...prev, [id]: !prev[id] }));

  const isChecked = (problemId, userIdx) => !!progress[`${problemId}-${userIdx}`];

  const topicProgress = (topic, userIdx) => {
    let done = 0,
      total = 0;
    topic.subtopics.forEach((sub) =>
      sub.problems.forEach((p) => {
        total++;
        if (isChecked(p.id, userIdx)) done++;
      })
    );
    return { done, total };
  };

  const subtopicProgress = (sub, userIdx) => {
    let done = 0;
    sub.problems.forEach((p) => {
      if (isChecked(p.id, userIdx)) done++;
    });
    return { done, total: sub.problems.length };
  };

  const filterMatches = (text) =>
    !search || text.toLowerCase().includes(search.toLowerCase());

  return (
    <div className="min-h-screen bg-gray-950 text-white px-2 sm:px-6 py-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-indigo-400 mb-1">Striver's A2Z DSA Sheet</h2>
          <p className="text-gray-500 text-sm">Track your progress for both members</p>
        </div>

        {/* Legend */}
        <div className="flex gap-6 mb-4 text-sm">
          {USERS.map((u, i) => (
            <div key={i} className={`flex items-center gap-2 ${USER_COLORS[i]}`}>
              <div className={`w-3 h-3 rounded-sm ${i === 0 ? "bg-indigo-500" : "bg-purple-500"}`} />
              {u}
            </div>
          ))}
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search problems..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500"
        />

        {/* Topics */}
        <div className="space-y-4">
          {dsaData.map((topic) => {
            const p0 = topicProgress(topic, 0);
            const p1 = topicProgress(topic, 1);
            const isOpen = openTopics[topic.id];

            return (
              <div key={topic.id} className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
                {/* Topic Header */}
                <button
                  onClick={() => toggleTopic(topic.id)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center gap-3 text-left">
                    <span className="text-lg font-bold text-white">
                      {topic.id}. {topic.topic}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs shrink-0">
                    <span className="text-indigo-400">{p0.done}/{p0.total}</span>
                    <span className="text-purple-400">{p1.done}/{p1.total}</span>
                    <span className="text-gray-500 ml-2">{isOpen ? "▲" : "▼"}</span>
                  </div>
                </button>

                {/* Progress bars */}
                {isOpen && (
                  <div className="px-5 pb-1 flex gap-2">
                    <div className="flex-1 bg-gray-700 rounded-full h-1">
                      <div
                        className="bg-indigo-500 h-1 rounded-full transition-all"
                        style={{ width: `${(p0.done / p0.total) * 100}%` }}
                      />
                    </div>
                    <div className="flex-1 bg-gray-700 rounded-full h-1">
                      <div
                        className="bg-purple-500 h-1 rounded-full transition-all"
                        style={{ width: `${(p1.done / p1.total) * 100}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Subtopics */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-2 space-y-3">
                    {topic.subtopics.map((sub) => {
                      const s0 = subtopicProgress(sub, 0);
                      const s1 = subtopicProgress(sub, 1);
                      const subOpen = openSubtopics[sub.id] !== false; // default open

                      const visibleProblems = search
                        ? sub.problems.filter((p) => filterMatches(p.name))
                        : sub.problems;

                      if (search && visibleProblems.length === 0) return null;

                      return (
                        <div key={sub.id} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                          {/* Subtopic header */}
                          <button
                            onClick={() => toggleSubtopic(sub.id)}
                            className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-750 transition-colors"
                          >
                            <span className="text-sm font-semibold text-gray-200 text-left">
                              {sub.id} · {sub.name}
                            </span>
                            <div className="flex items-center gap-3 text-xs shrink-0">
                              <span className="text-indigo-400">{s0.done}/{s0.total}</span>
                              <span className="text-purple-400">{s1.done}/{s1.total}</span>
                              <span className="text-gray-500">{subOpen ? "▲" : "▼"}</span>
                            </div>
                          </button>

                          {/* Problems */}
                          {subOpen && (
                            <div className="divide-y divide-gray-700">
                              {/* Column headers */}
                              <div className="flex items-center px-4 py-1.5 bg-gray-850">
                                <div className="flex gap-3 mr-3">
                                  {USERS.map((u, i) => (
                                    <span key={i} className={`text-xs font-medium w-20 text-center ${USER_COLORS[i]}`}>
                                      {u.split(" ")[0]}
                                    </span>
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500">Problem</span>
                              </div>

                              {visibleProblems.map((problem) => (
                                <div
                                  key={problem.id}
                                  className={`flex items-center px-4 py-2.5 hover:bg-gray-750 transition-colors ${
                                    isChecked(problem.id, 0) && isChecked(problem.id, 1)
                                      ? "opacity-60"
                                      : ""
                                  }`}
                                >
                                  {/* Checkboxes */}
                                  <div className="flex gap-3 mr-3 shrink-0">
                                    {USERS.map((_, userIdx) => (
                                      <div key={userIdx} className="w-20 flex justify-center">
                                        <input
                                          type="checkbox"
                                          checked={isChecked(problem.id, userIdx)}
                                          onChange={() => toggle(problem.id, userIdx)}
                                          className={`w-4 h-4 cursor-pointer rounded ${USER_CHECK_COLORS[userIdx]}`}
                                        />
                                      </div>
                                    ))}
                                  </div>

                                  {/* Problem name */}
                                  <span
                                    className={`text-sm ${
                                      isChecked(problem.id, 0) && isChecked(problem.id, 1)
                                        ? "line-through text-gray-500"
                                        : "text-gray-200"
                                    }`}
                                  >
                                    {problem.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}