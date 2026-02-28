import { Link } from "react-router-dom";
import { useProgress } from "../hooks/useProgress";
import dsaData from "../data/dsaData";

const USERS = ["Charan Kumar", "Devanarayan"];

export default function Home() {
  const { progress } = useProgress();

  const totalProblems = dsaData.reduce(
    (acc, topic) =>
      acc + topic.subtopics.reduce((a, sub) => a + sub.problems.length, 0),
    0
  );

  const getUserStats = (userIndex) => {
    let done = 0;
    dsaData.forEach((topic) => {
      topic.subtopics.forEach((sub) => {
        sub.problems.forEach((p) => {
          const key = `${p.id}-${userIndex}`;
          if (progress[key]) done++;
        });
      });
    });
    return done;
  };

  const getTopicStats = (topic, userIndex) => {
    let done = 0;
    let total = 0;
    topic.subtopics.forEach((sub) => {
      sub.problems.forEach((p) => {
        total++;
        const key = `${p.id}-${userIndex}`;
        if (progress[key]) done++;
      });
    });
    return { done, total };
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-indigo-400 mb-2">Welcome to DSA Tracker</h2>
          <p className="text-gray-400 text-sm">
            Tracking Striver's A2Z DSA Sheet — {totalProblems} problems
          </p>
        </div>

        {/* User Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {USERS.map((user, idx) => {
            const done = getUserStats(idx);
            const pct = Math.round((done / totalProblems) * 100);
            return (
              <div key={idx} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold">
                    {user[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{user}</h3>
                    <p className="text-sm text-gray-400">{done} / {totalProblems} solved</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <div
                    className="bg-indigo-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="text-right text-sm text-indigo-400 font-semibold">{pct}%</p>
              </div>
            );
          })}
        </div>

        {/* Topic Breakdown */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-200 mb-4">Topic-wise Progress</h3>
          <div className="space-y-3">
            {dsaData.map((topic) => {
              const s0 = getTopicStats(topic, 0);
              const s1 = getTopicStats(topic, 1);
              return (
                <div key={topic.id} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-sm font-medium text-gray-200">{topic.topic}</span>
                    <div className="flex gap-4 text-xs text-gray-400">
                      <span className="text-indigo-400">
                        {USERS[0].split(" ")[0]}: {s0.done}/{s0.total}
                      </span>
                      <span className="text-purple-400">
                        {USERS[1].split(" ")[0]}: {s1.done}/{s1.total}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <div className="flex-1 bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-indigo-500 h-1.5 rounded-full"
                        style={{ width: `${(s0.done / s0.total) * 100}%` }}
                      />
                    </div>
                    <div className="flex-1 bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-purple-500 h-1.5 rounded-full"
                        style={{ width: `${(s1.done / s1.total) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/todo"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg"
          >
            Start Solving →
          </Link>
        </div>
      </div>
    </div>
  );
}