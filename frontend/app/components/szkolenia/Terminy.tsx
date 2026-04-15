import { useEffect, useState } from "react";

export default function Terminy() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/events/")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Błąd:", err));
  }, []);

  const formatEvent = (event) => {
    const start = new Date(event.start_date).toLocaleDateString("pl-PL");
    const end = event.end_date
      ? new Date(event.end_date).toLocaleDateString("pl-PL")
      : null;

    return `${start}${end ? " - " + end : ""} – ${event.location} ${event.title}`;
  };

  return (
    <div className="space-y-2">
      <h2 className="text-4xl text-gray-600 font-bold text-center">Terminy</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {events.map((event) => (
          <p
            key={event.id}
            className="text-gray-600 text-lg text-center leading-relaxed border-b border-gray-200 pb-2"
          >
            {formatEvent(event)}
          </p>
        ))}
      </div>
    </div>
  );
}
