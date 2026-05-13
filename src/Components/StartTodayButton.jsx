import React from "react";

const ProgrammingTracks = ({ state, close, availablePrograms, activePrograms, onAdd }) => {
  if (!state) {
    return null;
  }

  const isAdded = (programId) => activePrograms.some((program) => program.id === programId)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/80">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-4xl bg-slate-950 p-8 text-white shadow-2xl border border-white/10">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lime-400 font-semibold text-sm uppercase tracking-[0.35em]">Program Introduction</p>
            <h2 className="mt-4 text-4xl font-bold text-white">Start with a program that matches your goal</h2>
            <p className="mt-3 text-gray-400">Here is a demo overview of the main FitZone programs. Each one is designed to help members train with structure and confidence.</p>
          </div>
          <button
            onClick={close}
            className="self-start rounded-full bg-white/10 px-5 py-3 text-sm text-white transition hover:bg-white/20"
          >
            Close</button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {availablePrograms.map((program) => {
            const alreadyAdded = isAdded(program.id)
            return (
              <div key={program.id} className="rounded-4xl border border-white/10 bg-[#050915] p-6 shadow-lg shadow-black/20">
                <p className="text-sm uppercase tracking-[0.35em] text-lime-400">{program.duration}</p>
                <div className="text-5xl my-4">{program.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{program.title}</h3>
                <p className="mt-3 text-gray-400">{program.description}</p>
                <div className="mt-4 space-y-2 text-gray-200">
                  <p><span className="font-semibold text-white">Sessions:</span> {program.sessions}</p>
                  <p><span className="font-semibold text-white">Schedule:</span> {program.schedule}</p>
                </div>
                <div className="mt-4 space-y-2">
                  {program.highlights.map((highlight, index) => (
                    <div key={index} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/90">{highlight}</div>
                  ))}
                </div>
                <button
                  disabled={alreadyAdded}
                  onClick={() => onAdd(program)}
                  className={`mt-6 w-full rounded-3xl px-4 py-3 text-lg font-semibold transition ${alreadyAdded ? 'bg-white/10 text-gray-400 cursor-not-allowed' : 'bg-lime-400 text-slate-950 hover:bg-lime-300'}`}
                >
                  {alreadyAdded ? 'Added' : 'Add to My Programs'}                </button>
              </div>
            )          })}
        </div>
      </div>
    </div>
  );
};

export default ProgrammingTracks;
