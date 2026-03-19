import Link from 'next/link'

const matches = [
  { id: 1, teamA: 'France', teamB: 'Brésil', flagA: '🇫🇷', flagB: '🇧🇷', date: '2026-06-15 18:00' },
  { id: 2, teamA: 'Allemagne', teamB: 'Argentine', flagA: '🇩🇪', flagB: '🇦🇷', date: '2026-06-15 21:00' },
  { id: 3, teamA: 'Espagne', teamB: 'Angleterre', flagA: '🇪🇸', flagB: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', date: '2026-06-16 18:00' },
  { id: 4, teamA: 'Italie', teamB: 'Portugal', flagA: '🇮🇹', flagB: '🇵🇹', date: '2026-06-16 21:00' },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">⚽ World Cup</Link>
          <div className="flex gap-4">
            <Link href="/dashboard" className="text-blue-600 font-semibold">Matchs</Link>
            <Link href="/leaderboard" className="text-gray-600">Classement</Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Matchs à venir</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {matches.map(match => (
            <div key={match.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">{match.date}</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">À venir</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-center flex-1">
                  <div className="text-4xl mb-2">{match.flagA}</div>
                  <div className="font-semibold">{match.teamA}</div>
                </div>
                <div className="text-2xl font-bold text-gray-400 px-4">VS</div>
                <div className="text-center flex-1">
                  <div className="text-4xl mb-2">{match.flagB}</div>
                  <div className="font-semibold">{match.teamB}</div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">{match.teamA}</button>
                <button className="bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition">Nul</button>
                <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">{match.teamB}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
