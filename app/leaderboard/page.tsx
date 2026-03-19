import Link from 'next/link'

const leaderboard = [
  { rank: 1, name: 'Thomas', points: 45, avatar: '🥇' },
  { rank: 2, name: 'Marie', points: 42, avatar: '🥈' },
  { rank: 3, name: 'Lucas', points: 39, avatar: '🥉' },
  { rank: 4, name: 'Emma', points: 36, avatar: '👤' },
  { rank: 5, name: 'Julie', points: 33, avatar: '👤' },
]

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">⚽ World Cup</Link>
          <div className="flex gap-4">
            <Link href="/dashboard" className="text-gray-600">Matchs</Link>
            <Link href="/leaderboard" className="text-blue-600 font-semibold">Classement</Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Classement Général</h1>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">#</th>
                <th className="text-left p-4">Joueur</th>
                <th className="text-right p-4">Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(player => (
                <tr key={player.rank} className="border-t hover:bg-gray-50">
                  <td className="p-4 text-2xl">{player.avatar}</td>
                  <td className="p-4 font-semibold">{player.name}</td>
                  <td className="p-4 text-right font-bold text-blue-600">{player.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
