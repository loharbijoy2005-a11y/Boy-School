import React from 'react';
import { Compass, BookOpen, Bell, HeartHandshake, LayoutGrid, Camera, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const StickyQuickNav: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-slate-900 text-white py-2.5 px-4 border-y border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider shrink-0">
          <Compass className="w-4 h-4 text-amber-400" />
          <span>{t('quickNav.glance')}</span>
        </div>

        <div className="flex items-center gap-4 flex-wrap text-xs font-bold text-slate-300">
          <a href="#desk" className="hover:text-rose-400 flex items-center gap-1 transition-colors">
            <Award className="w-3.5 h-3.5 text-rose-400" /> {t('quickNav.hm')}
          </a>
          <a href="#academics" className="hover:text-rose-400 flex items-center gap-1 transition-colors">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" /> {t('quickNav.streams')}
          </a>
          <a href="#notices" className="hover:text-rose-400 flex items-center gap-1 transition-colors">
            <Bell className="w-3.5 h-3.5 text-amber-400" /> {t('quickNav.routines')}
          </a>
          <a href="#welfare" className="hover:text-rose-400 flex items-center gap-1 transition-colors">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" /> {t('quickNav.schemes')}
          </a>
          <a href="#facilities" className="hover:text-rose-400 flex items-center gap-1 transition-colors">
            <LayoutGrid className="w-3.5 h-3.5 text-purple-400" /> {t('quickNav.facilities')}
          </a>
          <a href="#gallery" className="hover:text-rose-400 flex items-center gap-1 transition-colors">
            <Camera className="w-3.5 h-3.5 text-pink-400" /> {t('quickNav.gallery')}
          </a>
        </div>
      </div>
    </div>
  );
};
