import React from "react";
import { authContent } from "../Data/Data";

const AuthModal = ({ open, close, mode, switchMode }) => {
  const authtext = authContent[mode];
  if (!open) {
    return;
  }
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center  px-4 py-8 bg-black/50  ">
      <div className="bg-gray-800 w-full max-w-md rounded-3xl p-6 shadow-xl md:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase text-lime-400">
              {authtext.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-white">
              {authtext.title}
            </h2>
            <p className="mt-3 text-sm text-gray-400">{authtext.description}</p>
          </div>
          <button onClick={close} className="text-white bg-gray-600 rounded-2xl w-32 h-8">
            Close
          </button>
        </div>
        <form className="space-y-4">
          {authtext.fields.map((field) => (
            <label className="block " key={field.label}>
              <span className="mb-2 block text-sm font-semibold text-white">
                {field.label}
              </span>
              <input
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition bg-gray-900 focus:border-lime-500 text-white"
                type={field.type}
                placeholder={field.placeholder}
              />
            </label>
          ))}
          <button
            type="button"
            className="w-full rounded-2xl bg-lime-400 px-4 py-3  transition hover:bg-lime-500"
          >
            {authtext.primaryLabel}
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-white">
          {authtext.secondaryText}
          <button
            onClick={switchMode}
            className="ml-4 font-semibold text-lime-400 hover:text-lime-500"
          >
            {authtext.secondaryAction}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;