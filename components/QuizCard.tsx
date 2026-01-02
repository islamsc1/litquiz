import React from 'react';
import { Question } from '../types.ts';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
  showFeedback: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  question, 
  selectedOption, 
  onSelectOption, 
  showFeedback 
}) => {
  return (
    <div className="w-full max-w-2xl bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
           <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Question {question.id}</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-8 leading-snug">
          {question.text}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            let cardClass = "w-full p-4 text-left border-2 rounded-xl transition-all duration-200 flex items-center justify-between group ";
            let icon = null;

            if (showFeedback) {
              if (index === question.correctAnswerIndex) {
                cardClass += "border-green-500/50 bg-green-900/20 text-green-200 font-medium";
                icon = <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />;
              } else if (index === selectedOption && index !== question.correctAnswerIndex) {
                cardClass += "border-red-500/50 bg-red-900/20 text-red-200";
                icon = <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />;
              } else {
                cardClass += "border-slate-800 text-slate-500 opacity-60";
              }
            } else {
              if (index === selectedOption) {
                cardClass += "border-indigo-500 bg-indigo-900/30 text-indigo-200 shadow-md shadow-indigo-500/10";
              } else {
                cardClass += "border-slate-700 hover:border-indigo-400 hover:bg-slate-800 text-slate-300";
              }
            }

            return (
              <button
                key={index}
                onClick={() => !showFeedback && onSelectOption(index)}
                disabled={showFeedback}
                className={cardClass}
              >
                <div className="flex items-center">
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold mr-4 transition-colors ${
                     showFeedback && index === question.correctAnswerIndex ? 'bg-green-900/50 text-green-400' :
                     showFeedback && index === selectedOption ? 'bg-red-900/50 text-red-400' :
                     selectedOption === index ? 'bg-indigo-900/50 text-indigo-300' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </div>
                {icon}
              </button>
            );
          })}
        </div>
      </div>
      
      {showFeedback && (
        <div className="bg-slate-800/50 px-8 py-4 border-t border-slate-800 flex justify-between items-center">
             <div className="text-sm text-slate-300">
                {selectedOption === question.correctAnswerIndex ? 'Correct! Well done.' : 'Incorrect answer.'}
             </div>
        </div>
      )}
    </div>
  );
};

export default QuizCard;