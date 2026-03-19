import './globals.css'

export const metadata = {
  title: 'World Cup Predictions',
  description: 'Faites vos pronostics pour la Coupe du Monde',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
