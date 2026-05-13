import React from 'react'

const ProgramButton = ({ open, close, activePrograms, availablePrograms, onRemove, onOpenAdd }) => {
  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-8 md:px-8">
        <div className="mb-8 rounded-4xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-lime-400">My Programs</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Your active fitness programs</h2>
              <p className="mt-3 text-gray-400">Track the training plans you joined and stay consistent with your weekly routine.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAdd}
                className="rounded-2xl border border-lime-400/30 bg-lime-400/10 px-6 py-3 text-lg text-lime-300 transition hover:bg-lime-400/20"
              >
                + Add Program
              </button>
              <button
                onClick={close}
                className="rounded-2xl bg-lime-400 px-6 py-3 text-lg font-semibold text-slate-950 transition hover:bg-lime-300"
              >
                Back to Home
              </button>
            </div>
          </div>

          <div className="mt-8 rounded-4xl border border-white/10 bg-[#02050d] p-6">
            {activePrograms.length === 0 ? (
              <div className="rounded-4xl border border-white/10 bg-white/5 p-8 text-center text-gray-300">
                <p className="text-xl font-semibold text-white">No programs added yet</p>
                <p className="mt-2">Press + Add Program to build your active workout plan.</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {activePrograms.map((program) => (
                  <div key={program.id} className="rounded-4xl border border-white/10 bg-slate-900 p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-lime-400">Active Program</p>
                    <h3 className="mt-4 text-3xl font-semibold text-white">{program.title}</h3>
                    <p className="mt-4 text-gray-300">Coach: {program.coach}</p>
                    <p className="text-gray-300">Schedule: {program.schedule}</p>
                    <div className="mt-4 rounded-3xl bg-white/5 px-4 py-3 text-gray-300">Progress: {program.progress}</div>
                    <button
                      onClick={() => onRemove(program.id)}
                      className="mt-6 w-full rounded-2xl border border-red-400/20 bg-red-500/10 py-3 text-lg text-red-300 transition hover:bg-red-500/20"
                    >
                      Cancel Program
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="rounded-4xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl">
          <h1 className="text-2xl font-bold text-white mb-5">Available Programs</h1>
          <div className="grid gap-6 lg:grid-cols-3">
            {availablePrograms.map((program) => (
              <div key={program.id} className="rounded-4xl border border-white/10 bg-[#02050d] p-6">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{program.title}</h3>
                <p className="text-md text-gray-400">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramButton
