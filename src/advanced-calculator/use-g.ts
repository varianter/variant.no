import { useEffect, useState } from 'react';

const DEFAULT_G_FALLBACK = 118620;

export function useOneG() {
  const [grunnbelop, setGrunnbelop] = useState(DEFAULT_G_FALLBACK);
  useEffect(() => {
    const fetchG = async () => {
      try {
        const res = await fetch('https://g.nav.no/api/v1/grunnbeloep');
        const json = await res.json();

        if (json.grunnbeloep) {
          setGrunnbelop(json.grunnbeloep);
        }
      } catch (e) {}
    };

    fetchG();
  }, []);

  return grunnbelop;
}
