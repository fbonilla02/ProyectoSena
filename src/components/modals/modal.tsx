import React from "react";

export const Modal = () => {
  return (
    <div className="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
      <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
        <div className="max-w-md mx-auto space-y-6">
          <p className="text-gray-600">Información física</p>

          <div className="text-base leading-7">
            <p className="font-medium text-gray-700">Peso actual</p>
            <input placeholder="ex: 21" />
          </div>
          <div className="text-base leading-7">
            <p className="font-medium text-gray-700">Altura</p>
            <input placeholder="ex: 1.70" />
          </div>
        </div>
      </div>
    </div>
  );
};
