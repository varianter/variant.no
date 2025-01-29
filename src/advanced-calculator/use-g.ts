import { useEffect, useState } from "react";

// Grunnbeløpet (G) per 2024-05-01 er 124028 kroner.
const DEFAULT_G_FALLBACK = 124028;

export function useOneG() {
  const [grunnbelop, setGrunnbelop] = useState(DEFAULT_G_FALLBACK);
  useEffect(() => {
    const fetchG = async () => {
      try {
        const res = await fetch("https://g.nav.no/api/v1/grunnbeloep");
        const json = await res.json();

        if (json.grunnbeloep) {
          setGrunnbelop(json.grunnbeloep);
        }
      } catch (e) {
        console.error("Failed to fetch G", e);
        setGrunnbelop(DEFAULT_G_FALLBACK);
      }
    };

    fetchG();
  }, []);

  return grunnbelop;
}
