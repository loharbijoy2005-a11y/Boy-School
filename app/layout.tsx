import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: "Mahishadal Gayeswari Girls' High School (H.S.) | Official Portal",
  description: "Official web portal of Mahishadal Gayeswari Girls' High School (H.S.), Purba Medinipur, West Bengal. Estd. 1945. Affiliated to WBBSE & WBCHSE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="icon" type="image/jpg" href="/assets/school_logo.jpg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased font-sans overflow-x-hidden w-full">
        <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
