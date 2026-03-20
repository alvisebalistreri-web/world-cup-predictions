'use client'

import Link from 'next/link'
import { useState } from 'react'

const matches = [
  { id: 1, teamA: 'France', teamB: 'Brésil', flagA: '🇫🇷', flagB: '🇧🇷', date: '15 Juin 2026 - 18:00', group: 'Groupe A' },
  { id: 2, teamA: 'Allemagne', teamB: 'Argentine', flagA: '🇩🇪', flagB: '🇦🇷', date: '15 Juin 2026 - 21:00', group: 'Groupe B' },
  { id: 3, teamA: 'Espagne', teamB: 'Angleterre', flagA: '🇪🇸', flagB: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', date: '16 Juin 2026 - 18:00', group: 'Groupe C' },
  { id: 4, teamA: 'Italie', teamB: 'Portugal', flagA: '🇮🇹', flagB: '🇵🇹', date: '16 Juin 2026 - 21:00', group: 'Groupe D' },
  { id: 5, teamA: 'Belgique', teamB: 'Pays-Bas', flagA: '🇧🇪', flagB: '🇳🇱', date: '17 Juin 2026 - 18:00', group: 'Groupe E' },
  { id: 6, teamA: 'Croatie', teamB: 'Uruguay', flagA: '🇭🇷', flagB: '🇺🇾', date: '17 Juin 2026 - 21:00', group: 'Groupe F' },
]

export default function Dashboard() {
  const [predictions, setPredictions] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({})

  const handlePredict = (matchId: number, result: string) => {
    setPredictions(prev => ({ ...prev, [matchId]: result }))
  }

  const handleSubmit = (matchId: number) => {
    if (predictions[matchId]) {
      setSubmitted(prev => ({ ...prev, [matchId]: true }))
      alert(`✅ Pronostic enregistré : ${predictions[matchId]}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">⚽</span>
              <span className="text-xl font-bold text-blue-900">World Cup 2026</span>
            </Link>
            <div className="flex space-x-6 items-center">
              <Link href="/dashboard" className="text-blue-600 font-semibold">Matchs</Link>
              <Link href="/leaderboard" className="text-gray-600 hover:text-blue-600 transition">Classement</Link>
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold">
                  👤 Invité
                </div>
                <Link href="/signin" className="text-blue-600 font-semibold hover:underline">Connexion</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">📅 Matchs à Venir</h1>
          <p className="text-blue-100">Faites vos pronostics avant le coup d'envoi !</p>
        </div>
      </div>

      {/* Match Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map(match => (
            <div key={match.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium">{match.group}</span>
                  <span className="opacity-80">{match.date}</span>
                </div>
              </div>

              {/* Teams */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-center flex-1">
                    <div className="text-5xl mb-2">{match.flagA}</div>
                    <div className="font-bold text-lg text-gray-800">{match.teamA}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-400 px-4">VS</div>
                  <div className="text-center flex-1">
                    <div className="text-5xl mb-2">{match.flagB}</div>
                    <div className="font-bold text-lg text-gray-800">{match.teamB}</div>
                  </div>
                </div>

                {/* Prediction Buttons */}
                {!submitted[match.id] ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => handlePredict(match.id, match.teamA)}
                        className={`py-3 rounded-lg font-semibold transition ${
                          predictions[match.id] === match.teamA
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {match.teamA}
                      </button>
                      <button
                        onClick={() => handlePredict(match.id, 'Nul')}
                        className={`py-3 rounded-lg font-semibold transition ${
                          predictions[match.id] === 'Nul'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Nul
                      </button>
                      <button
                        onClick={() => handlePredict(match.id, match.teamB)}
                        className={`py-3 rounded-lg font-semibold transition ${
                          predictions[match.id] === match.teamB
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {match.teamB}
                      </button>
                    </div>
                    <button
                      onClick={() => handleSubmit(match.id)}
                      disabled={!predictions[match.id]}
                      className={`w-full py-3 rounded-lg font-bold transition ${
                        predictions[match.id]
                          ? 'bg-yellow-400 text-blue-900 hover:bg-yellow-300'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {predictions[match.id] ? '✅ Valider mon pronostic' : 'Choisis un résultat'}
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-4 bg-green-50 rounded-lg">
                    <div className="text-3xl mb-2">✅</div>
                    <div className="text-green-600 font-semibold">Pronostic enregistré !</div>
                    <div className="text-gray-600 mt-1">Votre choix : <strong>{predictions[match.id]}</strong></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>⚽ World Cup Predictions 2026</p>
        </div>
      </footer>
    </div>
  )
}
