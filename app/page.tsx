'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-4xl">⚽</span>
              <span className="text-2xl font-bold text-white">World Cup 2026</span>
            </Link>
            <div className="flex space-x-6">
              <Link href="/dashboard" className="text-white hover:text-yellow-400 font-medium transition">Matchs</Link>
              <Link href="/leaderboard" className="text-white hover:text-yellow-400 font-medium transition">Classement</Link>
              <Link href="/signin" className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition">Connexion</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-8xl mb-8 animate-bounce">⚽</div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Pronostiquez la<br/>
            <span className="text-yellow-400">Coupe du Monde 2026</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Rejoignez des milliers de fans. Faites vos pronostics, défiez vos amis et dominez le classement !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:scale-105 shadow-lg">
              🎯 Commencer maintenant
            </Link>
            <Link href="/leaderboard" className="bg-white/10 text-white border-2 border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition">
              🏆 Voir le classement
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Comment ça marche ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-yellow-400 transition">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-white mb-3">1. Inscrivez-vous</h3>
              <p className="text-blue-100">Créez votre compte gratuitement en 30 secondes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-yellow-400 transition">
              <div className="text-6xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold text-white mb-3">2. Pronostiquez</h3>
              <p className="text-blue-100">Choisissez le résultat de chaque match avant le coup d'envoi</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-yellow-400 transition">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-3">3. Gagnez</h3>
              <p className="text-blue-100">3 points par bon pronostic - Soyez le meilleur !</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">48</div>
              <div className="text-blue-200">Matchs à pronostiquer</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">3 pts</div>
              <div className="text-blue-200">Par bon pronostic</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">1</div>
              <div className="text-blue-200">Gagnant à la fin</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Prêt à relever le défi ?</h2>
          <p className="text-xl text-blue-800 mb-8">Rejoignez la compétition maintenant !</p>
          <Link href="/dashboard" className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition inline-block">
            🚀 C'est parti !
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-blue-300">
          <p>⚽ World Cup Predictions 2026 - Fait avec passion pour les fans de foot</p>
        </div>
      </footer>
    </div>
  )
}
