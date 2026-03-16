/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calculator, Hash, Pencil, ArrowRight } from 'lucide-react';

const apps = [
  {
    id: 'letto-scrittura-numeri',
    title: 'Letto-scrittura numeri',
    description: 'Esercizi mirati per migliorare la lettura e la scrittura dei numeri.',
    icon: BookOpen,
    href: 'https://lettoscritturanumeri.netlify.app/',
    color: 'text-[#1877F2]',
    bgColor: 'bg-[#1877F2]/10',
  },
  {
    id: 'area-del-calcolo',
    title: 'Area del calcolo',
    description: 'Attività interattive per il potenziamento delle abilità di calcolo mentale e scritto.',
    icon: Calculator,
    href: 'https://areadelcalcolo.netlify.app/',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'senso-del-numero',
    title: 'Senso del numero',
    description: 'Giochi e strumenti per sviluppare la comprensione profonda della quantità.',
    icon: Hash,
    href: 'https://matematicasensodelnumero.netlify.app/',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'scrittura-facile',
    title: 'Scrittura facile',
    description: 'Supporti e facilitatori per rendere il processo di scrittura più accessibile.',
    icon: Pencil,
    href: 'https://scritturacorretta.netlify.app/',
    color: 'text-[#1877F2]',
    bgColor: 'bg-[#1877F2]/10',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1877F2] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none">L</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">LogopediApp</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Strumenti digitali per la <span className="text-[#1877F2]">riabilitazione logopedica</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-600 mb-10"
          >
            Una raccolta di web app interattive progettate per supportare terapisti, educatori e pazienti nel percorso di apprendimento e riabilitazione.
          </motion.p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12">
          {apps.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.a
                key={app.id}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:shadow-md hover:border-[#1877F2] transition-all duration-200 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-xl ${app.bgColor} ${app.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{app.title}</h3>
                <p className="text-slate-600 flex-grow mb-6">{app.description}</p>
                <div className="flex items-center text-[#1877F2] font-medium mt-auto">
                  <span>Apri l'app</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} LogopediApp. Tutti i diritti riservati.
          </p>
          <p className="text-slate-400 text-sm mt-4 sm:mt-0">
            Progettato per la riabilitazione
          </p>
        </div>
      </footer>
    </div>
  );
}
