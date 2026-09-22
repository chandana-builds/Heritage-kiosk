'use client';

import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { QUIZ_QUESTIONS, EXHIBITS, Exhibit, UI_TRANSLATIONS } from '../data/heritageData';

interface HeritageQuizProps {
  language: 'en' | 'hi' | 'es' | 'fr';
  onExamineExhibit?: (exhibit: Exhibit) => void;
}

export const HeritageQuiz: React.FC<HeritageQuizProps> = ({ 
  language,
  onExamineExhibit 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const t = UI_TRANSLATIONS[language];
  const question = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  const relatedExhibit = question.relatedExhibitId 
    ? EXHIBITS.find(e => e.id === question.relatedExhibitId)
    : null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-6">
      
      {/* Top Banner */}
      <div className="bg-stone-900/80 p-6 rounded-3xl border border-amber-500/20 backdrop-blur-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-serif text-stone-100">
              {t.quizTitle}
            </h2>
            <p className="text-xs text-stone-400">
              Test your knowledge of world wonders, civilizational engineering, and royal arts.
            </p>
          </div>
        </div>

        {!isQuizCompleted && (
          <div className="text-right">
            <span className="text-xs font-mono text-stone-400">Question</span>
            <div className="text-lg font-bold font-mono text-amber-400">
              {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length}
            </div>
          </div>
        )}
      </div>

      {/* Quiz Body */}
      {!isQuizCompleted ? (
        <div className="bg-stone-900/90 rounded-3xl border border-amber-500/30 p-6 sm:p-8 backdrop-blur-md space-y-6">
          
          {/* Progress Bar */}
          <div className="w-full bg-stone-950 rounded-full h-2 overflow-hidden border border-stone-800">
            <div 
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              Question {question.id}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-100 leading-snug">
              {question.question}
            </h3>
          </div>

          {/* Options Grid */}
          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === question.correctAnswer;
              
              let cardStyles = 'bg-stone-950/80 border-stone-800 text-stone-200 hover:border-amber-500/40';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  cardStyles = 'bg-emerald-950/60 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500/30';
                } else if (isSelected && !isCorrect) {
                  cardStyles = 'bg-red-950/60 border-red-500 text-red-100';
                } else {
                  cardStyles = 'bg-stone-950/40 border-stone-800/60 text-stone-500';
                }
              } else if (isSelected) {
                cardStyles = 'bg-amber-500/20 border-amber-500 text-amber-100 ring-2 ring-amber-500/30';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between gap-4 transition-all cursor-pointer ${cardStyles}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-stone-900 border border-stone-700 flex items-center justify-center text-xs font-mono font-bold text-amber-400 shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm sm:text-base font-medium">
                      {option}
                    </span>
                  </div>

                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner when answered */}
          {isAnswerSubmitted && (
            <div className="p-4 rounded-2xl bg-stone-950 border border-amber-500/40 space-y-2 animate-fade-in">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>Historical Context & Explanation</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {question.explanation}
              </p>

              {relatedExhibit && onExamineExhibit && (
                <div className="pt-2">
                  <button
                    onClick={() => onExamineExhibit(relatedExhibit)}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
                  >
                    <span>View related exhibit: {relatedExhibit.title}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Action Button */}
          <div className="flex items-center justify-end pt-4">
            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition cursor-pointer ${
                  selectedOption !== null
                    ? 'bg-amber-600 hover:bg-amber-500 text-stone-950 shadow-lg shadow-amber-900/40'
                    : 'bg-stone-800 text-stone-500 cursor-not-allowed'
                }`}
              >
                {t.submit}
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm shadow-lg shadow-amber-900/40 transition cursor-pointer"
              >
                <span>{currentQuestionIndex + 1 < QUIZ_QUESTIONS.length ? t.next : 'View Final Score'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      ) : (
        /* Quiz Complete Card */
        <div className="bg-stone-900/90 rounded-3xl border border-amber-500/30 p-8 sm:p-12 backdrop-blur-md text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 text-stone-950 flex items-center justify-center mx-auto shadow-2xl shadow-amber-900/50">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
              Challenge Completed
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-serif text-stone-100 mt-1">
              Your Explorer Score: {score} / {QUIZ_QUESTIONS.length}
            </h3>
            <p className="text-sm text-stone-300 mt-2 max-w-md mx-auto">
              {score === QUIZ_QUESTIONS.length
                ? 'Outstanding! You achieved the status of Grand Antiquities Historian!'
                : score >= 3
                ? 'Great work! You hold high esteem as a Certified Heritage Explorer.'
                : 'Good attempt! Re-examine the exhibit gallery and challenge yourself again.'}
            </p>
          </div>

          {/* Certificate Badge Display */}
          <div className="p-4 max-w-sm mx-auto bg-stone-950/80 rounded-2xl border border-amber-500/40">
            <div className="text-xs font-mono text-stone-400 uppercase">Honorary Kiosk Badge Awarded</div>
            <div className="text-lg font-bold font-serif text-amber-300 mt-1">
              {score === QUIZ_QUESTIONS.length ? 'Master of World Antiquity' : 'Custodian of Culture'}
            </div>
            <div className="text-[11px] text-stone-500 mt-1">Authenticated by Heritage Kiosk 04</div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm shadow-lg cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.restartQuiz}</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
