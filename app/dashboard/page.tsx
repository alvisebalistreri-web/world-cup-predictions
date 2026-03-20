'use client'

import Link from 'next/link'
import { useState } from 'react'

const matches = [
  { id: 1, teamA: 'France', teamB: 'Brésil', flagA: '🇫🇷', flagB: '🇧🇷', date: '15 Juin 2026', time: '18:00', group: 'Groupe A', stadium: 'Stade de France' },
  { id: 2, teamA: 'Allemagne', teamB: 'Argentine', flagA: '🇩🇪', flagB: '🇦🇷', date: '15 Juin 2026', time: '21:00', group: 'Groupe B', stadium: 'Allianz Arena' },
  { id: 3, teamA: 'Espagne', teamB: 'Angleterre', flagA: '🇪🇸', flagB: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', date: '16 Juin 2026', time: '18:00', group: 'Groupe C', stadium: 'Santiago Bernabéu' },
  { id: 4, teamA: 'Italie', teamB: 'Portugal', flagA: '🇮🇹', flagB: '🇵🇹', date: '16 Juin 2026', time: '21:00', group: 'Groupe D', stadium: 'San Siro' },
  { id: 5, teamA: 'Belgique', teamB: 'Pays-Bas', flagA: '🇧🇪', flagB: '🇳🇱', date: '17 Juin 2026', time: '18:00', group: 'Groupe E', stadium: 'Atomium Stadium' },
  { id: 6, teamA: 'Croatie', teamB: 'Uruguay', flagA: '🇭🇷', flagB: '🇺🇾', date: '17 Juin 2026', time: '21:00', group: 'Groupe F', stadium: 'Stade de Zagreb' },
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
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0e27]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-3xl sm:text-4xl">⚽</span>
              <div>
                <span className="text-base sm:text-xl font-black text-white">WORLD CUP</span>
                <span className="text-base sm:text-xl font-black text-yellow-400 ml-1 sm:ml-2">2026</span>
              </div>
            </Link>
            <div className="flex items-center space-x-3 sm:space-x-6 lg:space-x-8">
              <Link href="/dashboard" className="text-yellow-400 font-semibold text-sm sm:text-base">Matchs</Link>
              <Link href="/leaderboard" className="text-white/60 hover:text-white transition text-sm sm:text-base hidden sm:inline">Classement</Link>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a0e27] px-3 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-base">
                  👤 Invité
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-8 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">📅 Matchs à Venir</h1>
              <p className="text-blue-100 text-sm sm:text-base md:text-xl">Faites vos pronostics avant le coup d'envoi !</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4">
              <div className="text-2xl sm:text-3xl font-black text-yellow-400">{matches.length}</div>
              <div className="text-blue-100 text-xs sm:text-sm">Matchs disponibles</div>
            </div>
          </div>
        </div>
      </div>

      {/* Match Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="grid gap-4 sm:gap-6">
          {matches.map(match => (
            <div key={match.id} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-600/50 to-blue-800/50 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1 rounded-full text-white/80 text-xs sm:text-sm font-medium">
                      {match.group}
                    </span>
                    <span className="text-white/60 text-xs sm:text-sm truncate">{match.stadium}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 text-white/80 text-xs sm:text-sm flex-wrap justify-end">
                    <span className="text-yellow-400">📅</span>
                    <span className="font-medium">{match.date}</span>
                    <span className="text-white/40 hidden sm:inline">•</span>
                    <span className="font-medium">{match.time}</span>
                  </div>
                </div>

                {/* Teams & Prediction */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    {/* Team A */}
                    <div className="flex-1 text-center group/team cursor-pointer">
                      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-4 transform group-hover/team:scale-110 transition duration-300">{match.flagA}</div>
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white leading-tight">{match.teamA}</div>
                    </div>

                    {/* VS */}
                    <div className="px-4 sm:px-8">
                      <div className="text-2xl sm:text-3xl font-black text-white/20">VS</div>
                    </div>

                    {/* Team B */}
                    <div className="flex-1 text-center group/team cursor-pointer">
                      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-4 transform group-hover/team:scale-110 transition duration-300">{match.flagB}</div>
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white leading-tight">{match.teamB}</div>
                    </div>
                  </div>

                  {/* Prediction Section */}
                  {!submitted[match.id] ? (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="text-center text-white/60 text-sm sm:text-base mb-2 sm:mb-4">
                        <span className="text-yellow-400">🔮</span> <span className="hidden sm:inline">Qui va gagner ? </span>Choisis un résultat
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        <button
                          onClick={() => handlePredict(match.id, match.teamA)}
                          className={`relative group/btn py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black transition-all duration-300 text-xs sm:text-base ${
                            predictions[match.id] === match.teamA
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white scale-105 shadow-lg shadow-blue-500/30'
                              : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <div className="text-xl sm:text-2xl mb-0.5 sm:mb-1">{match.flagA}</div>
                          <div className="leading-tight">{match.teamA}</div>
                        </button>
                        <button
                          onClick={() => handlePredict(match.id, 'Nul')}
                          className={`relative group/btn py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black transition-all duration-300 text-xs sm:text-base ${
                            predictions[match.id] === 'Nul'
                              ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white scale-105 shadow-lg shadow-purple-500/30'
                              : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <div className="text-xl sm:text-2xl mb-0.5 sm:mb-1">🤝</div>
                          <div>Nul</div>
                        </button>
                        <button
                          onClick={() => handlePredict(match.id, match.teamB)}
                          className={`relative group/btn py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black transition-all duration-300 text-xs sm:text-base ${
                            predictions[match.id] === match.teamB
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white scale-105 shadow-lg shadow-blue-500/30'
                              : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <div className="text-xl sm:text-2xl mb-0.5 sm:mb-1">{match.flagB}</div>
                          <div className="leading-tight">{match.teamB}</div>
                        </button>
                      </div>
                      <button
                        onClick={() => handleSubmit(match.id)}
                        disabled={!predictions[match.id]}
                        className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black transition-all duration-300 text-sm sm:text-base lg:text-lg ${
                          predictions[match.id]
                            ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a0e27] hover:scale-105 shadow-lg shadow-yellow-500/30'
                            : 'bg-white/5 text-white/20 cursor-not-allowed'
                        }`}
                      >
                        {predictions[match.id] ? `✅ Valider : ${predictions[match.id]}` : 'Choisis un résultat'}
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-6 sm:py-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl sm:rounded-2xl border border-green-500/30">
                      <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✅</div>
                      <div className="text-green-400 font-black text-base sm:text-lg md:text-xl mb-1 sm:mb-2">Pronostic Enregistré !</div>
                      <div className="text-white/60 text-sm sm:text-base">Votre choix : <span className="text-yellow-400 font-bold">{predictions[match.id]}</span></div>
                      <div className="text-white/40 text-xs sm:text-sm mt-2">Modifiable jusqu'au coup d'envoi</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-8 sm:mt-12 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-white/40 text-sm sm:text-base">
          ⚽ World Cup Predictions 2026
        </div>
      </footer>
    </div>
  )
}
