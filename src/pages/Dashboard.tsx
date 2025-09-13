import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-dark-gradient font-sans">
      {/* Sidebar */}
      <aside className="sidebar-dark w-20 md:w-64 flex flex-col items-center py-8">
        <div className="mb-10">
          <span className="text-accentPurpleStart text-2xl font-bold tracking-tight">Logo</span>
        </div>
        <nav className="flex flex-col gap-8 w-full items-center">
          <button className="group flex items-center gap-3 text-textSecondary hover:text-accentPurpleEnd transition">
            <span className="hidden md:inline">Dashboard</span>
          </button>
          <button className="group flex items-center gap-3 text-textSecondary hover:text-accentPurpleEnd transition">
            <span className="hidden md:inline">Widgets</span>
          </button>
          <button className="group flex items-center gap-3 text-textSecondary hover:text-accentPurpleEnd transition">
            <span className="hidden md:inline">Reviews</span>
          </button>
          <button className="group flex items-center gap-3 text-textSecondary hover:text-accentPurpleEnd transition">
            <span className="hidden md:inline">Customers</span>
          </button>
          <button className="group flex items-center gap-3 text-textSecondary hover:text-accentPurpleEnd transition">
            <span className="hidden md:inline">Online Analysis</span>
          </button>
          <button className="group flex items-center gap-3 text-textSecondary hover:text-accentPurpleEnd transition">
            <span className="hidden md:inline">Settings</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-6 border-b border-white/10 bg-cardGlass backdrop-blur-glass shadow-soft">
          <h1 className="text-2xl font-bold text-textMain tracking-tight">Dashboard</h1>
          <button className="btn-modern rounded-full p-3">+</button>
        </header>

        {/* Ejemplo de input moderno */}
        <div className="px-8 pt-8">
          <input
            type="text"
            placeholder="Buscar..."
            className="input-glass w-full max-w-xs mb-6"
          />
        </div>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-8">
          {/* Card 1: Reviews */}
          <div className="card-glass flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-textSecondary font-semibold">Reviews</span>
              <div className="flex gap-2">
                <span className="bg-darkBgEnd rounded-full p-1 text-accentGreen text-xs">F</span>
                <span className="bg-darkBgEnd rounded-full p-1 text-accentRed text-xs">I</span>
                <span className="bg-darkBgEnd rounded-full p-1 text-accentYellow text-xs">T</span>
              </div>
            </div>
            <div className="text-4xl font-bold text-textMain">1,281</div>
            <div className="flex items-center gap-2">
              <span className="text-accentGreen font-semibold">+12% semanal</span>
              <span className="text-xs text-textSecondary">↑</span>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-accentGreen">+1,100 positivos</span>
              <span className="text-accentRed">-181 negativos</span>
            </div>
          </div>

          {/* Card 2: Avg. Rating */}
          <div className="card-glass flex flex-col gap-2">
            <span className="text-textSecondary font-semibold">Avg. Rating</span>
            <div className="text-4xl font-bold text-textMain">4.6</div>
            <div className="flex items-center gap-1">
              <span className="text-accentYellow">★</span>
              <span className="text-accentYellow">★</span>
              <span className="text-accentYellow">★</span>
              <span className="text-accentYellow">★</span>
              <span className="text-darkBgEnd">★</span>
            </div>
            <span className="text-accentGreen font-semibold">+0.2 semanal</span>
          </div>

          {/* Card 3: Sentiment Analysis */}
          <div className="card-glass flex flex-col gap-2">
            <span className="text-textSecondary font-semibold">Sentiment Analysis</span>
            <div className="flex justify-center items-center h-20">
              <div className="w-16 h-16 rounded-full bg-purple-gradient opacity-80 flex items-center justify-center">
                <span className="text-white font-bold text-lg">72%</span>
              </div>
            </div>
            <div className="flex justify-between text-xs mt-2">
              <span className="text-accentGreen">Positivo</span>
              <span className="text-textSecondary">Neutro</span>
              <span className="text-accentRed">Negativo</span>
            </div>
          </div>
        </section>

        {/* Main Chart */}
        <section className="px-8 pb-8">
          <div className="card-glass p-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-textSecondary font-semibold">Visitantes diarios</span>
              <span className="text-2xl font-bold text-textMain">821 hoy</span>
            </div>
            <div className="h-48 flex items-center justify-center">
              <span className="text-accentPurpleStart text-lg">[Gráfico de visitantes aquí]</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
