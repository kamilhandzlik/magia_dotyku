export default function CheckboxGroup() {
  return (
    <div className="space-y-4 text-sm text-gray-700 pt-4">
      <CheckboxItem label="Oświadczam, iż zapoznałem/am się z polityką prywatności." />

      <CheckboxItem
        label={`Wysyłając wiadomość wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu kontaktowym w celu skontaktowania się ze mną i odpowiedzi na moją wiadomość, w tym na przesłanie mi oferty handlowej zgodnie z Polityką prywatności i plików cookies (podlinkowane do polityki prywatności) przez Administratora, „NATURAL FLOW” Maja Ławicka, ul. Kazimierza Porębskiego, nr 9, lok. 20, 80-180 Gdańsk, NIP: 5841090151, REGON 191817632. Oświadczam, że podanie danych jest dobrowolne, lecz konieczne do przetworzenia zapytania oraz iż zostałem/am poinformowany/a o prawie żądania dostępu do moich danych osobowych, ich zmiany oraz usunięcia. / By sending a message, I consent to the processing of my personal data provided in the contact form for the purpose of contacting me and responding to my message, including sending me a commercial offer in accordance with the Privacy and Cookies Policy (linked to the privacy policy) by the Administrator, "NATURAL FLOW" Maja Ławicka, Kazimierza Porębskiego street no. 9, lok. 20, 80-180 Gdańsk, NIP: 5841090151, REGON 191817632. I declare that the provision of data is voluntary, but necessary to process the inquiry and that I have been informed about the right to request access to my personal data, its modification and deletion.`}
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
