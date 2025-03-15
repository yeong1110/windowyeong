import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App',
  description: 'My App is a...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
			<head>
			<link rel="icon" type="image/svg+xml" href="/logo.svg" />
			</head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}