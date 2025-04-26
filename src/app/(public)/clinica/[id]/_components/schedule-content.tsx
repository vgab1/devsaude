"use client";

import Image from "next/image";
import imgTest from "../../../../../../public/foto1.png";
import { MapPin } from "lucide-react";

export function ScheduleContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-32 bg-emerald-500" />
      <section className="container mx-auto px-4 -mt-16">
        <div className="max-w-2xl mx-auto">
          <article className="flex flex-col items-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white mb-6">
              <Image
                src={imgTest}
                alt="Foto da clinica"
                className="object-cover"
                fill
              />
            </div>
            <h1 className="text-2xl font-bold mb-1">Clínica teste</h1>
            <div className="flex items-center gap-1">
              <MapPin className="w-5 h-5" />
              <span>Rua x, centro, Brasília - DF</span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
