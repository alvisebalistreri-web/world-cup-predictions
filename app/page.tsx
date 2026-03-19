import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 py-20 text-center text-white">
        <div className="text-8xl mb-8">⚽</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          World Cup Predictions
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Faites vos pronostics pour la Coupe du Monde et défiez vos amis !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition">
            Voir les matchs
          </Link>
          <Link href="/leaderboard" className="border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg transition">
            Classement
          </Link>
        </div>
      </div>
    </div>
  )
}
