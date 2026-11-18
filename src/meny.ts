// Dag 3, del 2: Funktioner som arbetar med menyn. Gör alla tester gröna på tests.html.
// Använd filter, map, find, reduce och sort där det passar.
// Typerna (Ratt, OrderRad) finns i typer.ts. Röda understrykningar tills du skrivit return är normalt.
import { formateraPris } from "./pris";
import type { Ratt, OrderRad } from "./typer";

// 1. Alla vegetariska rätter (filter). Returnerar en ny array.
export function vegetariskaRatter(meny: Ratt[]): Ratt[] {
  // TODO
  // Filter metoden passar här
  return meny.filter((ratt) => ratt.vegetarisk);
}
// 2. Bara namnen, som en array av text (map). ["Kardemummabulle", ...]
export function rattNamn(meny: Ratt[]): string[] {
  // TODO
  return meny.map((ratt) => ratt.namn);
}

// 3. En prislista som text: "Kardemummabulle – 35 kr" (map + formateraPris)
export function prislista(meny: Ratt[]): string[] {
  // TODO
  return meny.map((ratt) => `${ratt.namn} – ${formateraPris(ratt.pris)}`);
}

// 4. Hitta en rätt via id (find). Returnerar objektet, eller undefined om det saknas.
export function hittaRatt(meny: Ratt[], id: number): Ratt | undefined {
  // TODO
  return meny.find((ratt) => ratt.id === id);
}

// 5. Den billigaste rätten (reduce). Returnerar objektet. Tom lista ger undefined.
export function billigast(meny: Ratt[]): Ratt | undefined {
  // TODO
  if (meny.length === 0) {
    return undefined;
  }

  return meny.reduce((prevValue, currentValue) => {
    return currentValue.pris < prevValue.pris ? currentValue : prevValue;
  });
}

// 6. Sortera efter pris, billigast först. Returnerar en NY array.
//    Den ursprungliga listan får INTE ändras (sort ändrar originalet, så kopiera först).
export function sorteraEfterPris(meny: Ratt[]): Ratt[] {
  // TODO
  return [...meny].sort((a, b) => a.pris - b.pris);
}

// 7. Totalpris för en order. order = [{ id: 1, antal: 2 }, { id: 5, antal: 1 }]
//    Slå upp priset för varje id i menyn. Okända id räknas som 0 kr.
export function totalPris(order: OrderRad[], meny: Ratt[]): number {
  // TODO
  return order.reduce((summa, rad) => {
    const ratt = meny.find((r) => r.id === rad.id);
    const pris = ratt ? ratt.pris : 0;
    return summa + pris * rad.antal;
  }, 0);
}

// 8. Antal rätter per kategori som ett objekt: { bakverk: 3, dryck: 2, lunch: 3 } (reduce)
export function perKategori(meny: Ratt[]): Record<string, number> {
  // TODO
  return meny.reduce(
    (antal, ratt) => {
      const kategori = ratt.kategori;
      antal[kategori] = (antal[kategori] || 0) + 1;
      return antal;
    },
    {} as Record<string, number>,
  );
}

// 9. En kopia av rätten med nytt pris. Originalet får INTE ändras (spread: { ...ratt }).
export function medNyttPris(ratt: Ratt, nyttPris: number): Ratt {
  // TODO
  // Man slipper oväntade ändringar på andra ställen i programmet som använder samma objekt
  return { ...ratt, pris: nyttPris };
}
