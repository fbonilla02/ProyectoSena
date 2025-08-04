"use client";

import { useState } from "react";

export default function ModalUser({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    age: "",
    sex: "Masculino",
    height_cm: "",
    weight_kg: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/me", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    onClose(); // cerrar el modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Completa tu perfil</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="age"
            placeholder="Edad"
            type="number"
            value={formData.age}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
          <input
            name="height_cm"
            placeholder="Altura (cm)"
            type="number"
            value={formData.height_cm}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            name="weight_kg"
            placeholder="Peso (kg)"
            type="number"
            value={formData.weight_kg}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            name="notes"
            placeholder="Notas (opcional)"
            type="text"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
