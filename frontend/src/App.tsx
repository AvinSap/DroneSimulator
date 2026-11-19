import { useEffect, useState } from 'react';
import type { Scenario } from './types/scenario';
import { getScenarios } from './api/scenarios';
import './App.css';

function App() {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [selected, setSelected] = useState<Scenario | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getScenarios()
      .then((data) => {
        setScenarios(data);
        setSelected(data[0] ?? null);
      })
      .catch((err: Error) => setError(err.message));
  }, []);

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Scenario library</h2>
        {scenarios.map((s) => (
          <button
            key={s.id}
            className={s.id === selected?.id ? 'scenario active' : 'scenario'}
            onClick={() => setSelected(s)}
          >
            <strong>{s.name}</strong>
            <small>{s.category}</small>
          </button>
        ))}
      </aside>

      <main className="details">
        {selected && (
          <>
            <h1>{selected.name}</h1>
            <p>{selected.summary}</p>
            <h3>Attack</h3>
            <p>{selected.attack}</p>
            <h3>Defense</h3>
            <p>{selected.defense}</p>
          </>
        )}
      </main>
    </div>
  );
}

export default App;