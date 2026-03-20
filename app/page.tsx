'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0e27] overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Navigation Premium */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0e27]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-50 group-hover:opacity-75 transition" />
                <span className="relative text-4xl">⚽</span>
              </div>
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  WORLD CUP
                </span>
                <span className="text-2xl font-black text-yellow-400 ml-2">2026</span>
              </div>
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/dashboard" className="relative group">
                <span className="text-white/80 group-hover:text-white font-medium transition">Matchs</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/leaderboard" className="relative group">
                <span className="text-white/80 group-hover:text-white font-medium transition">Classement</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/signin" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition" />
                <span className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a0e27] px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform inline-block">
                  Connexion
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section Premium */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
                <span className="text-yellow-400 font-medium text-sm">🏆 Coupe du Monde 2026</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  PRONOSTIQUEZ
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  LA LÉGENDE
                </span>
              </h1>

              <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                Rejoignez l'expérience ultime de pronostics sportifs. 
                <span className="text-white/80 font-medium"> Défiez des milliers de fans</span>, 
                grimpez les classements et prouvez votre expertise footballistique.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard" className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition" />
                  <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0a0e27] px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all duration-300 shadow-2xl flex items-center space-x-3">
                    <span>🎯</span>
                    <span>Commencer l'Aventure</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
                <Link href="/leaderboard" className="group relative">
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-3">
                    <span>🏆</span>
                    <span>Voir le Classement</span>
                  </div>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-4xl font-black text-yellow-400 mb-1">48</div>
                  <div className="text-white/40 text-sm">Matchs à jouer</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-yellow-400 mb-1">3 pts</div>
                  <div className="text-white/40 text-sm">Par victoire</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-yellow-400 mb-1">∞</div>
                  <div className="text-white/40 text-sm">Gloire éternelle</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="relative z-10">
                {/* Floating Cards */}
                <div className="absolute top-0 right-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 transform rotate-6 hover:rotate-0 transition-all duration-500">
                  <div className="flex items-center space-x-4">
                    <span className="text-5xl">🇫🇷</span>
                    <div>
                      <div className="text-white font-bold">France</div>
                      <div className="text-white/40 text-sm">Favori #1</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 left-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 transform -rotate-6 hover:rotate-0 transition-all duration-500">
                  <div className="flex items-center space-x-4">
                    <span className="text-5xl">🇧🇷</span>
                    <div>
                      <div className="text-white font-bold">Brésil</div>
                      <div className="text-white/40 text-sm">Favori #2</div>
                    </div>
                  </div>
                </div>

                {/* Main Trophy */}
                <div className="relative bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-12 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-3xl animate-pulse" />
                  <div className="relative">
                    <div className="text-9xl mb-6 animate-bounce">🏆</div>
                    <div className="text-2xl font-black text-yellow-400 mb-2">COUPE DU MONDE</div>
                    <div className="text-white/60">Édition 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4">
              COMMENT ÇA MARCHE ?
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Trois étapes simples pour tenter votre chance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📝',
                title: 'Inscription',
                desc: 'Créez votre compte en 30 secondes. Gratuit, sans engagement.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: '🔮',
                title: 'Pronostics',
                desc: 'Analysez, choisissez et validez vos pronostics avant chaque match.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: '🏆',
                title: 'Victoire',
                desc: '3 points par victoire. Dominez le classement et gagnez la gloire.',
                color: 'from-yellow-400 to-yellow-500'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500`} />
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 text-4xl`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-black text-[#0a0e27] mb-4">
                  PRÊT À RELEVER LE DÉFI ?
                </h2>
                <p className="text-xl text-[#0a0e27]/80 mb-8">
                  Rejoignez la compétition maintenant et écrivez votre nom dans l'histoire !
                </p>
                <Link href="/dashboard" className="inline-flex items-center space-x-3 bg-[#0a0e27] text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl">
                  <span>🚀</span>
                  <span>C'EST PARTI !</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">⚽</span>
            <span className="text-white/60 font-medium">World Cup Predictions 2026</span>
          </div>
          <div className="text-white/40 text-sm">
            Fait avec passion pour les vrais fans de football ⚽
          </div>
        </div>
      </footer>
    </div>
  )
}
