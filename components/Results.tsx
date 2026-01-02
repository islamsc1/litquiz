import React from 'react';
import { RotateCcw, Home, Trophy, AlertTriangle } from 'lucide-react';

interface ResultsProps {
  score: number;
  total: number;
  onRetry: () => void;
  onHome: () => void;
}

const Results: React.FC<ResultsProps> = ({ score, total, onRetry, onHome }) => {
  const percentage = Math.round((score / total) * 100);
  
  let message = "";
  let subMessage = "";
  let icon = null;
  let colorClass = "";

  if (percentage >= 90) {
    message = "Outstanding!";
    subMessage = "You have an excellent grasp of the material.";
    icon = <Trophy className="w-16 h-16 text-yellow-400" />;
    colorClass = "bg-yellow-900/20 text-yellow-200 border-yellow-700/50";
  } else if (percentage >= 70) {
    message = "Great Job!";
    subMessage = "You passed with flying colors. Keep studying to reach perfection.";
    icon = <Trophy className="w-16 h-16 text-indigo-400" />;
    colorClass = "bg-indigo-900/20 text-indigo-200 border-indigo-700/50";
  } else {
    message = "Needs Improvement";
    subMessage = "Review the documents and try again to improve your score.";
    icon = <AlertTriangle className="w-16 h-16 text-orange-400" />;
    colorClass = "bg-orange-900/20 text-orange-200 border-orange-700/50";
  }

  return (
    <div className="max-w-lg mx-auto bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-8 text-center animate-in zoom-in-95 duration-500">
      <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 border-4 bg-slate-900 ${percentage >= 70 ? 'border-yellow-900/30' : 'border-orange-900/30'}`}>
        {icon}
      </div>

      <h2 className="text-3xl font-bold text-white mb-2">{message}</h2>
      <p className="text-slate-400 mb-8">{subMessage}</p>

      <div className={`p-6 rounded-2xl mb-8 border ${colorClass}`}>
        <div className="text-sm font-semibold uppercase tracking-widest opacity-70 mb-1">Your Score</div>
        <div className="text-5xl font-black">
          {score} <span className="text-2xl opacity-60 font-medium">/ {total}</span>
        </div>
        <div className="text-lg font-bold mt-2">{percentage}%</div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRetry}
          className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/40"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Retry Section
        </button>
        <button
          onClick={onHome}
          className="flex items-center justify-center px-6 py-3 bg-slate-800 text-slate-200 border-2 border-slate-700 rounded-xl font-semibold hover:bg-slate-700 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default Results;