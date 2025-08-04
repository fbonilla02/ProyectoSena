"use client";
import Modal from "@/components/modals/ModalUser";
import { CalendarApp } from "@/components/ui/calendar/Calendar";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch("/api/me");
      const data = await res.json();
      if (!data || !data.profile) {
        setShowModal(true); // mostrar el modal si no hay perfil
      } else {
        setProfile(data.profile);
      }
    };
    fetchProfile();
  }, []);
  console.log(profile);
  return (
    <div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <CalendarApp />
    </div>
  );
}
