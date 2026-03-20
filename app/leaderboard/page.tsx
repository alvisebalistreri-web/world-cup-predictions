'use client'

import Link from 'next/link'
import { useState } from 'react'

const leaderboard = [
  { rank: 1, name: 'Thomas', points: 45, avatar: '🥇', correct: 15, total: 20 },
  { rank: 2, name: 'Marie', points: 42, avatar: '🥈', correct: 14, total: 20 },
  { rank: 3, name: 'Lucas', points: 39, avatar: '🥉', correct: 13, total: 20 },
  { rank: 4, name: 'Emma', points: 36, avatar: '👤', correct: 12, total: 20 },
  { rank: 5, name: 'Julie', points: 33, avatar: '👤', correct: 11, total: 20 },
  { rank: 6, name: 'Nicolas', points: 30, avatar: '👤', correct: 10, total: 20 },
  { rank: 7, name: 'Sophie', points: 27, avatar: '👤', correct: 9, total: 20 },
  { rank: 8, name: 'Alexandre', points: 24, avatar: '👤', correct: 8, total: 20 },
  { rank: 9, name: 'Camille', points: 21, avatar: '👤', correct: 7, total: 20 },
  { rank: 10, name: 'Maxime', points: 18, avatar: '👤', correct: 6, total: 20 },
]

export default function Leaderboard() {
  const [filter, setFilter] = useState<'all' | 'friends'>('all')

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
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition">Matchs</Link>
              <Link href="/leaderboard" className="text-blue-600 font-semibold">Classement</Link>
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
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">🏆 Classement Général</h1>
          <p className="text-blue-800">Les meilleurs pronostiqueurs de la Coupe du Monde</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-md inline-flex">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'all' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Tous les joueurs
            </button>
            <button
              onClick={() => setFilter('friends')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'friends' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Mes amis
            </button>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {/* 2nd Place */}
          <div className="text-center">
            <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-2xl p-6 shadow-lg">
              <div className="text-6xl mb-3">{leaderboard[1].avatar}</div>
              <div className="text-4xl font-bold text-gray-700 mb-1">{leaderboard[1].points}</div>
              <div className="font-semibold text-gray-600">{leaderboard[1].name}</div>
              <div className="text-sm text-gray-500 mt-1">{leaderboard[1].correct}/{leaderboard[1].total} corrects</div>
            </div>
            <div className="bg-gray-300 text-gray-700 font-bold py-2 rounded-b-lg">🥈 2ème</div>
          </div>

          {/* 1st Place */}
          <div className="text-center -mt-8">
            <div className="bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-t-2xl p-6 shadow-xl border-4 border-yellow-500">
              <div className="text-7xl mb-3">{leaderboard[0].avatar}</div>
              <div className="text-5xl font-bold text-yellow-700 mb-1">{leaderboard[0].points}</div>
              <div className="font-bold text-yellow-800">{leaderboard[0].name}</div>
              <div className="text-sm text-yellow-700 mt-1">{leaderboard[0].correct}/{leaderboard[0].total} corrects</div>
            </div>
            <div className="bg-yellow-400 text-yellow-900 font-bold py-3 rounded-b-lg shadow-lg">🥇 1er</div>
          </div>

          {/* 3rd Place */}
          <div className="text-center">
            <div className="bg-gradient-to-b from-orange-200 to-orange-300 rounded-t-2xl p-6 shadow-lg">
              <div className="text-6xl mb-3">{leaderboard[2].avatar}</div>
              <div className="text-4xl font-bold text-orange-700 mb-1">{leaderboard[2].points}</div>
              <div className="font-semibold text-orange-600">{leaderboard[2].name}</div>
              <div className="text-sm text-orange-500 mt-1">{leaderboard[2].correct}/{leaderboard[2].total} corrects</div>
            </div>
            <div className="bg-orange-300 text-orange-700 font-bold py-2 rounded-b-lg">🥉 3ème</div>
          </div>
        </div>

        {/* Full Leaderboard Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-6">
            <h2 className="text-xl font-bold">📊 Tous les Joueurs</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {leaderboard.map((player, index) => (
              <div
                key={player.rank}
                className={`flex items-center p-4 hover:bg-blue-50 transition ${
                  index < 3 ? 'bg-gradient-to-r from-yellow-50 to-transparent' : ''
                }`}
              >
                <div className="w-12 text-center">
                  {index < 3 ? (
                    <span className="text-2xl">{player.avatar}</span>
                  ) : (
                    <span className="text-xl font-bold text-gray-400">#{player.rank}</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">{player.name}</div>
                  <div className="text-sm text-gray-500">{player.correct} bons sur {player.total}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{player.points}</div>
                  <div className="text-xs text-gray-500">points</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link href="/dashboard" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg">
            🎯 Faire des pronostics
          </Link>
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
