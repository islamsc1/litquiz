import React, { useState, useMemo } from 'react';
import SectionSelector from './components/SectionSelector.tsx';
import QuizCard from './components/QuizCard.tsx';
import Results from './components/Results.tsx';
import { QUIZ_DATA } from './data.ts';
import { QuizState } from './types.ts';
import { ArrowRight, ChevronLeft, GraduationCap } from 'lucide-react';

export default function App() {
  const [gameState, setGameState] = useState<QuizState>(QuizState.MENU);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isFeedbackShown, setIsFeedbackShown] = useState(false);
  const [score, setScore] = useState(0);

  const activeSection = useMemo(() => 
    QUIZ_DATA.find(s => s.id === activeSectionId), 
  [activeSectionId]);

  const handleSelectSection = (sectionId: string) => {
    setActiveSectionId(sectionId);
    setGameState(QuizState.PLAYING);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsFeedbackShown(false);
  };

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    setIsFeedbackShown(true);
    
    if (activeSection && index === activeSection.questions[currentQuestionIndex].correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (!activeSection) return;

    if (currentQuestionIndex < activeSection.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsFeedbackShown(false);
    } else {
      setGameState(QuizState.FINISHED);
    }
  };

  const handleRetry = () => {
    if (activeSectionId) {
      handleSelectSection(activeSectionId);
    }
  };

  const handleHome = () => {
    setGameState(QuizState.MENU);
    setActiveSectionId(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10 backdrop-blur-md bg-slate-900/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={gameState !== QuizState.MENU ? handleHome : undefined}
          >
            <div className="bg-indigo-600 p-1.5 rounded-lg shadow-lg shadow-indigo-500/20">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white hidden sm:block">LitQuiz</span>
          </div>
          
          {gameState === QuizState.PLAYING && activeSection && (
             <div className="flex items-center space-x-4">
                <div className="hidden sm:block text-sm font-medium text-slate-400">
                  {activeSection.title}
                </div>
                <div className="h-2 w-24 sm:w-32 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    style={{ width: `${((currentQuestionIndex + (isFeedbackShown ? 1 : 0)) / activeSection.questions.length) * 100}%` }}
                  />
                </div>
                <div className="text-sm font-bold text-indigo-400">
                  {currentQuestionIndex + 1}/{activeSection.questions.length}
                </div>
             </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {gameState === QuizState.MENU && (
          <SectionSelector sections={QUIZ_DATA} onSelect={handleSelectSection} />
        )}

        {gameState === QuizState.PLAYING && activeSection && (
          <div className="w-full max-w-2xl flex flex-col gap-6 items-center">
            <QuizCard
              question={activeSection.questions[currentQuestionIndex]}
              selectedOption={selectedOption}
              onSelectOption={handleOptionSelect}
              showFeedback={isFeedbackShown}
            />

            <div className="w-full flex justify-between items-center px-2">
               <button 
                  onClick={handleHome}
                  className="text-slate-400 hover:text-white flex items-center text-sm font-medium transition-colors"
               >
                 <ChevronLeft className="w-4 h-4 mr-1" /> Quit
               </button>

               <button
                  onClick={handleNext}
                  disabled={!isFeedbackShown}
                  className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all duration-300 transform ${
                    isFeedbackShown 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50 hover:bg-indigo-500 hover:-translate-y-1' 
                      : 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700'
                  }`}
                >
                  {currentQuestionIndex === activeSection.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
            </div>
          </div>
        )}

        {gameState === QuizState.FINISHED && (
          <Results 
            score={score} 
            total={activeSection?.questions.length || 0} 
            onRetry={handleRetry} 
            onHome={handleHome} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} LitQuiz Interactive. Based on provided academic materials.</p>
        </div>
      </footer>
    </div>
  );
}