import React from 'react'

const Addprogram = ({ open, close, availablePrograms, activePrograms, onAdd }) => {
  if (!open) {
    return null
  }

  const isAdded = (programId) => activePrograms.some((program) => program.id === programId)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8">
      <div className="w-full max-w-275 overflow-hidden rounded-4xlrder border-white/10 bg-[#091521] p-8 shadow-[0_35px_90px_rgba(0,0,0,0.7)]">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lime-400 text-xs uppercase tracking-[0.45em]">Add Programs</p>
            <h2 className="mt-4 text-[2.7rem] font-bold text-white">Choose from available programs</h2>
            <p className="mt-3 max-w-2xl text-gray-400">Add one of the existing fitness programs to your active plan.</p>
          </div>
          <button
            onClick={close}
            className="rounded-full border border-white/10 bg-slate-950/95 px-5 py-3 text-sm text-white transition hover:bg-slate-900"
          >
            Close
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {availablePrograms.map((program) => {
            const alreadyAdded = isAdded(program.id)
            return (
              <div key={program.id} className="rounded-[1.75rem] border border-white/10 bg-[#08121d] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
                <p className="text-sm uppercase tracking-[0.35em] text-lime-400">Fitness Program</p>
                <div className="mt-5 rounded-3xl bg-white/5 p-5 text-5xl text-center text-white">{program.icon}</div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{program.title}</h3>
                <p className="mt-3 text-gray-300">{program.description}</p>
                <div className="mt-5 space-y-3 text-gray-300">
                  <p><span className="font-semibold text-white">Duration:</span> {program.duration}</p>
                  <p><span className="font-semibold text-white">Sessions:</span> {program.sessions}</p>
                  <p><span className="font-semibold text-white">Schedule:</span> {program.schedule}</p>
                </div>
                <div className="mt-5 space-y-3">
                  {program.highlights.map((highlight, index) => (
                    <div key={index} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90">{highlight}</div>
                  ))}
                </div>
                <button
                  disabled={alreadyAdded}
                  onClick={() => onAdd(program)}
                  className={`mt-6 w-full rounded-3xl px-4 py-3 text-lg font-semibold transition ${alreadyAdded ? 'bg-white/10 text-gray-400 cursor-not-allowed' : 'bg-lime-400 text-slate-950 hover:bg-lime-300'}`}
                >
                  {alreadyAdded ? 'Added' : 'Add to My Programs'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Addprogram
