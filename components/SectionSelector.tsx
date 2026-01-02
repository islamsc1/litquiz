import React from 'react';
import { Section } from '../types';
import { BookOpen, ScrollText, BrainCircuit, ChevronRight } from 'lucide-react';

interface SectionSelectorProps {
  sections: Section[];
  onSelect: (sectionId: string) => void;
}

const SectionSelector: React.FC<SectionSelectorProps> = ({ sections, onSelect }) => {
  const getIcon = (id: string) => {
    switch(id) {
      case 'simone': return <BookOpen className="w-8 h-8 text-pink-400" />;
      case 'suns': return <ScrollText className="w-8 h-8 text-amber-400" />;
      case 'freud': return <BrainCircuit className="w-8 h-8 text-indigo-400" />;
      default: return <BookOpen className="w-8 h-8 text-slate-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Literature & Analysis
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Test your knowledge on Simone de Beauvoir, A Thousand Splendid Suns, and Psychoanalytic criticism.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            className="flex flex-col text-left bg-slate-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 border border-slate-800 group"
          >
            <div className="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-700 transition-colors border border-slate-700">
              {getIcon(section.id)}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
              {section.title}
            </h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
              {section.description}
            </p>
            <div className="flex items-center text-sm font-semibold text-indigo-400">
              Start Quiz <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionSelector;