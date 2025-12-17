import React, { useState } from 'react';
import { Shield, Sword, Crown, Star, Repeat, Award } from 'lucide-react';
import { BookOpen } from 'lucide-react';

// --- CONTENIDO DEL QUIZ (PREGUNTAS Y RESPUESTAS) ---
const questions = [
  {
    questionText: "Un Jefe te llama por tu nombre. ¿Cuál es la forma correcta de responder?",
    answerOptions: [
      { answerText: "¡Sí, Jefe!", isCorrect: false },
      { answerText: "¡Presente!", isCorrect: false },
      { answerText: "¡A tus Órdenes! (Puño al pecho)", isCorrect: true },
      { answerText: "¡Servir es un honor!", isCorrect: false },
    ],
  },
  {
    questionText: "Un Jefe necesita voluntarios y grita: \"¡Vale quien sirve!\". ¿Qué responden los milicianos que se ofrecen?",
    answerOptions: [
      { answerText: "¡Yo!", isCorrect: false },
      { answerText: "¡A tus Órdenes!", isCorrect: false },
      { answerText: "¡Servir es un honor!", isCorrect: true },
    ],
  },
  {
    questionText: "Las tres flechas del escudo de FASTA simbolizan las virtudes teologales. ¿Cuál representa la flecha más alta?",
    answerOptions: [
      { answerText: "La Fe", isCorrect: false },
      { answerText: "La Esperanza", isCorrect: false },
      { answerText: "La Caridad", isCorrect: true },
    ],
  },
  {
    questionText: "Cuando no llevas la boina puesta, ¿cuál es el lugar correcto para guardarla según el reglamento?",
    answerOptions: [
      { answerText: "En el bolsillo del pantalón", isCorrect: false },
      { answerText: "En la charretera de la camisa", isCorrect: true },
      { answerText: "Colgando del cinturón", isCorrect: false },
    ],
  },
  {
    questionText: "Durante la posición de \"Firmes\", ¿cómo debe estar la mano izquierda de un varón?",
    answerOptions: [
      { answerText: "Con el puño cerrado al costado", isCorrect: false },
      { answerText: "Tomando la muñeca derecha por detrás", isCorrect: false },
      { answerText: "Apoyada sobre el cinturón, pulgar separado", isCorrect: true },
    ],
  },
  {
    questionText: "En una formación sin mástil con 3 banderas (Argentina, Vaticano, FASTA), ¿cuál va en el centro?",
    answerOptions: [
      { answerText: "La de FASTA", isCorrect: false },
      { answerText: "La del Vaticano", isCorrect: false },
      { answerText: "La de Argentina", isCorrect: true },
    ],
  },
  {
    questionText: "En un campamento, ¿cuál es el momento más conveniente para realizar la Revista de carpas?",
    answerOptions: [
      { answerText: "Antes de la formación matutina", isCorrect: false },
      { answerText: "Inmediatamente después de la formación matutina", isCorrect: true },
      { answerText: "Justo antes de ir a dormir", isCorrect: false },
    ],
  },
];

// --- NIVELES DE RESULTADO ---
const results = [
    { minScore: 60, maxScore: 70, rank: "¡Jefe de Ruca!", message: "Tu conocimiento del Estilo es impecable. Eres un verdadero custodio de nuestras tradiciones. ¡A tus órdenes!", icon: <Crown /> },
    { minScore: 40, maxScore: 50, rank: "¡Miliciano Veterano!", message: "¡Muy bien hecho! Conoces los fundamentos y detalles del Estilo. Sigue así y pronto estarás listo para guiar a otros. ¡Vale quien sirve!", icon: <Sword /> },
    { minScore: 20, maxScore: 30, rank: "¡Escudero Prometedor!", message: "Tienes las bases, pero hay detalles por pulir. Repasa el manual de Estilo y vuelve a intentarlo. ¡La perseverancia forja el carácter!", icon: <Shield /> },
    { minScore: 0, maxScore: 10, rank: "¡Adherente Curioso!", message: "¡Bienvenido! Todo gran camino empieza con un primer paso. Te invitamos a leer el manual para empaparte de nuestra mística.", icon: <Star /> }
];


const EstiloQuiz = () => {
  // --- LÓGICA DEL QUIZ (ESTADOS) ---
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // --- MANEJADOR DE RESPUESTAS ---
  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 10);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  // --- REINICIAR QUIZ ---
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  // --- CÁLCULO DE RESULTADO FINAL ---
  const finalResult = results.find(r => score >= r.minScore && score <= r.maxScore) || results[results.length - 1];

  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="max-w-3xl mx-auto bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-8 overflow-hidden">
        
        {showResults ? (
          // --- VISTA DE RESULTADOS ---
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <div className="text-amber-500 scale-150">{finalResult.icon}</div>
            </div>
            <h2 className="text-3xl font-bold font-serif text-amber-500 mb-2">{finalResult.rank}</h2>
            <p className="text-2xl font-bold text-white mb-6">Tu puntaje: {score} / 70</p>
            <p className="text-slate-400 mb-10 leading-relaxed">{finalResult.message}</p>
            
            <button
              onClick={handleRestartQuiz}
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
            >
              <Repeat size={18} /> Volver a Intentar
            </button>
                <a className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 mt-4"
                   href="https://drive.google.com/file/d/1aX4PjgsWMqmtHC7obbKdmS_dHA5cMrkz/view?usp=sharing"
                   target="_blank" 
  rel="noopener noreferrer">
                  <BookOpen size={18} /> Material del Estilo
                </a>

          </div>
        ) : (
          // --- VISTA DE PREGUNTAS ---
          <div>
            {/* Encabezado y Barra de Progreso */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-amber-500 font-bold text-sm font-serif">Mide tu Estilo</span>
                <span className="text-slate-400 text-sm font-mono">Pregunta {currentQuestionIndex + 1}/{questions.length}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-amber-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {/* Pregunta */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 min-h-[100px]">
              {questions[currentQuestionIndex].questionText}
            </h2>
            
            {/* Opciones */}
            <div className="space-y-4">
              {questions[currentQuestionIndex].answerOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option.isCorrect)}
                  className="w-full text-left p-4 bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-700 hover:border-amber-500 transition-all duration-300 transform hover:scale-[1.02] font-medium"
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EstiloQuiz;