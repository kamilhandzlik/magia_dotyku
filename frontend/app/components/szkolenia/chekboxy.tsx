export default function CheckboxGroup() {
  return (
    <div className="space-y-4 text-sm text-gray-700 pt-4">
      <CheckboxItem label="Oświadczam, iż zapoznałem/am się z polityką prywatności." />

      <CheckboxItem
        label={`Wysyłając wiadomość wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu kontaktowym w celu skontaktowania się ze mną i odpowiedzi na moją wiadomość, w tym na przesłanie mi oferty handlowej zgodnie z Polityką prywatności i plików cookies (podlinkowane do polityki prywatności) przez Administratora, „Oristyle/Magia Dotyku” Aleksandra Burczyńska, ul. Plebiscytowa 48, 44-280 Rydułtowy, NIP 6471587893, REGON 368412418. Oświadczam, że podanie danych jest dobrowolne, lecz konieczne do przetworzenia zapytania oraz iż zostałem/am poinformowany/a o prawie żądania dostępu do moich danych osobowych, ich zmiany oraz usunięcia.`}
      />
    </div>
  );
}

/* 🔽 pojedynczy checkbox */
function CheckboxItem({ label }: { label: string }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <div className="relative mt-1">
        <input
          type="checkbox"
          className="peer appearance-none w-4 h-4 border border-[#9b6f63] checked:bg-[#9b6f63]"
        />

        <svg
          className="absolute inset-0 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414L8.75 11.586l6.543-6.543a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <span className="leading-relaxed whitespace-pre-line">{label}</span>
    </label>
  );
}
