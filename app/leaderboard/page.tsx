'use client'

import Link from 'next/link'
import { useState } from 'react'

const leaderboard = [
  { rank: 1, name: 'Thomas', points: 45, avatar: '🥇', correct: 15, total: 20, streak: 5 },
  { rank: 2, name: 'Marie', points: 42, avatar: '🥈', correct: 14, total: 20, streak: 3 },
  { rank: 3, name: 'Lucas', points: 39, avatar: '🥉', correct: 13, total: 20, streak: 2 },
  { rank: 4, name: 'Emma', points: 36, avatar: '👤', correct: 12, total: 20, streak: 1 },
  { rank: 5, name: 'Julie', points: 33, avatar: '👤', correct: 11, total: 20, streak: 0 },
  { rank: 6, name: 'Nicolas', points: 30, avatar: '👤', correct: 10, total: 20, streak: 2 },
  { rank: 7, name: 'Sophie', points: 27, avatar: '👤', correct: 9, total: 20, streak: 1 },
  { rank: 8, name: 'Alexandre', points: 24, avatar: '👤', correct: 8, total: 20, streak: 0 },
  { rank: 9, name: 'Camille', points: 21, avatar: '👤', correct: 7, total: 20, streak: 1 },
  { rank: 10, name: 'Maxime', points: 18, avatar: '👤', correct: 6, total: 20, streak: 0 },
]

export default function Leaderboard() {
  const [filter, setFilter] = useState<'all' | 'friends'>('all')

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
              <Link href="/dashboard" className="text-white/60 hover:text-white transition text-sm sm:text-base">Matchs</Link>
              <Link href="/leaderboard" className="text-yellow-400 font-semibold text-sm sm:text-base">Classement</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">🏆</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0a0e27] mb-3 sm:mb-4">CLASSEMENT GÉNÉRAL</h1>
          <p className="text-base sm:text-lg md:text-xl text-[#0a0e27]/80 max-w-2xl mx-auto px-4">
            Les meilleurs pronostiqueurs de la Coupe du Monde 2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Filter Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1 inline-flex">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${
                filter === 'all' 
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a0e27] shadow-lg shadow-yellow-500/30' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter('friends')}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${
                filter === 'friends' 
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a0e27] shadow-lg shadow-yellow-500/30' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Mes </span>Amis
            </button>
          </div>
        </div>

        {/* Podium - Top 3 */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-12 sm:mb-16">
          {/* 2nd Place */}
          <div className="text-center order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-400 to-gray-500 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition" />
              <div className="relative bg-gradient-to-b from-gray-300 to-gray-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transform transition duration-500 group-hover:-translate-y-2">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-3 md:mb-4">{leaderboard[1].avatar}</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-700 mb-1 sm:mb-2">{leaderboard[1].points}</div>
                <div className="font-black text-gray-600 text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 truncate px-1">{leaderboard[1].name}</div>
                <div className="text-xs sm:text-sm text-gray-500 hidden md:block">{leaderboard[1].correct}/{leaderboard[1].total} corrects</div>
              </div>
            </div>
            <div className="mt-2 sm:mt-3 md:mt-4 bg-gradient-to-r from-gray-400 to-gray-500 text-gray-800 font-black py-1.5 sm:py-2 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-lg">
              🥈 2ÈME
            </div>
          </div>

          {/* 1st Place */}
          <div className="text-center order-1 -mt-4 sm:-mt-6 md:-mt-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-2xl sm:rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition" />
              <div className="relative bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 sm:border-4 border-yellow-300 transform transition duration-500 group-hover:-translate-y-2 shadow-2xl shadow-yellow-500/30">
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-[#0a0e27] px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full font-black text-xs sm:text-sm shadow-lg">
                    👑 LEADER
                  </div>
                </div>
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 sm:mb-3 md:mb-4 mt-2 sm:mt-4">{leaderboard[0].avatar}</div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-yellow-800 mb-1 sm:mb-2">{leaderboard[0].points}</div>
                <div className="font-black text-yellow-900 text-base sm:text-lg md:text-xl mb-0.5 sm:mb-1 truncate px-1">{leaderboard[0].name}</div>
                <div className="text-yellow-700 text-xs sm:text-sm hidden md:block">{leaderboard[0].correct}/{leaderboard[0].total} corrects</div>
              </div>
            </div>
            <div className="mt-2 sm:mt-3 md:mt-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 font-black py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-xl shadow-lg">
              🥇 1ER
            </div>
          </div>

          {/* 3rd Place */}
          <div className="text-center order-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-orange-500 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition" />
              <div className="relative bg-gradient-to-b from-orange-300 to-orange-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transform transition duration-500 group-hover:-translate-y-2">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-3 md:mb-4">{leaderboard[2].avatar}</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-700 mb-1 sm:mb-2">{leaderboard[2].points}</div>
                <div className="font-black text-orange-600 text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 truncate px-1">{leaderboard[2].name}</div>
                <div className="text-xs sm:text-sm text-orange-500 hidden md:block">{leaderboard[2].correct}/{leaderboard[2].total} corrects</div>
              </div>
            </div>
            <div className="mt-2 sm:mt-3 md:mt-4 bg-gradient-to-r from-orange-400 to-orange-500 text-orange-900 font-black py-1.5 sm:py-2 md:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-lg">
              🥉 3ÈME
            </div>
          </div>
        </div>

        {/* Full Leaderboard Table */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white flex items-center space-x-2 sm:space-x-3">
              <span>📊</span>
              <span>Tous les Joueurs</span>
            </h2>
          </div>
          <div className="divide-y divide-white/5">
            {leaderboard.map((player, index) => (
              <div
                key={player.rank}
                className={`flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 hover:bg-white/5 transition group ${
                  index < 3 ? 'bg-gradient-to-r from-yellow-500/5 to-transparent' : ''
                }`}
              >
                <div className="w-12 sm:w-16 text-center flex-shrink-0">
                  {index < 3 ? (
                    <span className="text-2xl sm:text-3xl">{player.avatar}</span>
                  ) : (
                    <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto bg-white/5 rounded-full flex items-center justify-center text-white/40 font-bold group-hover:bg-white/10 group-hover:text-white transition text-sm sm:text-base">
                      #{player.rank}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 ml-2 sm:ml-4">
                  <div className="font-bold text-white text-sm sm:text-base md:text-lg truncate">{player.name}</div>
                  <div className="text-white/40 text-xs sm:text-sm">{player.correct}/{player.total}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                    {player.points}
                  </div>
                  <div className="text-white/40 text-xs">pts</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link href="/dashboard" className="group relative inline-flex">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition" />
            <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-10 py-3 sm:py-4 md:py-5 rounded-full font-black text-sm sm:text-base md:text-lg hover:scale-105 transition-transform shadow-xl flex items-center space-x-2 sm:space-x-3">
              <span>🎯</span>
              <span>Faire des Pronostics</span>
              <span className="group-hover:translate-x-1 transition-transform hidden sm:inline">→</span>
            </div>
          </Link>
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
