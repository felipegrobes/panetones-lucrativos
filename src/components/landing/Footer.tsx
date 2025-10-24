"use client";

import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-primary/5 py-8">
      <div className="container text-center text-sm text-foreground/60">
        <p>&copy; {year} Panettone Profits. Todos los derechos reservados.</p>
        <p className="mt-2">
            Una empresa dedicada a tu éxito culinario y financiero.
        </p>
      </div>
    </footer>
  );
}
