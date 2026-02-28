import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [glitch, setGlitch] = useState(false);

  // Auto-redirect countdown
  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  // Glitch effect on 404
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const codeLines = [
    { num: "01", code: "function findPage(url) {", color: "text-indigo-400" },
    { num: "02", code: '  const route = router.match(url);', color: "text-gray-300" },
    { num: "03", code: "  if (!route) {", color: "text-gray-300" },
    { num: "04", code: '    throw new Error("404 Not Found");', color: "text-red-400" },
    { num: "05", code: "  }", color: "text-gray-300" },
    { num: "06", code: "  return route.component;", color: "text-green-400" },
    { num: "07", code: "}", color: "text-indigo-400" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 rounded-full opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full text-center">

        {/* 404 Big Number */}
        <div className="relative mb-2 select-none">
          <span
            className={`text-[10rem] sm:text-[14rem] font-black leading-none tracking-tighter transition-all duration-75 ${
              glitch ? "text-red-500 translate-x-1" : "text-gray-800"
            }`}
            style={{ fontFamily: "monospace" }}
          >
            404
          </span>
          {/* Glitch overlay */}
          {glitch && (
            <>
              <span
                className="absolute inset-0 text-[10rem] sm:text-[14rem] font-black leading-none tracking-tighter text-cyan-400 opacity-70"
                style={{ fontFamily: "monospace", transform: "translate(-3px, 2px)" }}
              >
                404
              </span>
              <span
                className="absolute inset-0 text-[10rem] sm:text-[14rem] font-black leading-none tracking-tighter text-red-400 opacity-70"
                style={{ fontFamily: "monospace", transform: "translate(3px, -2px)" }}
              >
                404
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Page Not Found
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Looks like this route doesn't exist in the DSA sheet... yet.
        </p>

        {/* Code block */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl text-left mb-8 overflow-hidden shadow-2xl">
          {/* Editor top bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-gray-500 font-mono">router.js</span>
          </div>
          {/* Code lines */}
          <div className="px-4 py-4 font-mono text-sm space-y-1">
            {codeLines.map((line) => (
              <div key={line.num} className="flex gap-4">
                <span className="text-gray-700 select-none w-4 text-right shrink-0">
                  {line.num}
                </span>
                <span className={line.color}>{line.code}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Link
            to="/"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
          >
            🏠 Go Home
          </Link>
          <Link
            to="/todo"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            📋 DSA Sheet
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto bg-transparent border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-gray-200 font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            ← Go Back
          </button>
        </div>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <div className="relative w-6 h-6">
            <svg className="w-6 h-6 -rotate-90" viewBox="0 0 24 24">
              <circle
                cx="12" cy="12" r="10"
                fill="none"
                stroke="#374151"
                strokeWidth="2"
              />
              <circle
                cx="12" cy="12" r="10"
                fill="none"
                stroke="#6366f1"
                strokeWidth="2"
                strokeDasharray={`${2 * Math.PI * 10}`}
                strokeDashoffset={`${2 * Math.PI * 10 * (1 - countdown / 10)}`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-indigo-400">
              {countdown}
            </span>
          </div>
          <span>Redirecting to home in <span className="text-indigo-400 font-semibold">{countdown}s</span></span>
        </div>
      </div>
    </div>
  );
}