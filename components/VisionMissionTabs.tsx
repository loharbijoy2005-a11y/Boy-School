import React from 'react';
import { Target, Compass, Award, Sparkles, Heart, ShieldCheck } from 'lucide-react';
import ScrollRevealCard from './ScrollRevealCard';
import { useLanguage } from '../contexts/LanguageContext';

export const VisionMissionTabs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-[#FAF7F2] text-slate-800 relative border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#B45309] uppercase tracking-widest bg-amber-100/60 px-3 py-1 rounded-full border border-amber-300/60">
            {t('vision.pillars')}
          </span>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-[#1E293B]">
            {t('vision.heading')}
          </h2>
          <p className="text-xs text-slate-600">
            {t('vision.subtext')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          <ScrollRevealCard delay={0} animation="fade-up">
            <div className="bg-white p-8 rounded-3xl border border-[#E8DFD0] space-y-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group h-full">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-[#B45309] flex items-center justify-center border border-amber-200 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-serif font-extrabold text-2xl text-[#1E293B] group-hover:text-[#B45309] transition-colors">
                {t('vision.visionTitle')}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {t('vision.visionText')}
              </p>
              <div className="pt-2 border-t border-[#E8DFD0] text-[11px] text-[#B45309] font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('vision.visionTag')}</span>
              </div>
            </div>
          </ScrollRevealCard>

          <ScrollRevealCard delay={150} animation="fade-up">
            <div className="bg-white p-8 rounded-3xl border border-[#E8DFD0] space-y-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group h-full">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-[#9D174D] flex items-center justify-center border border-rose-200 group-hover:scale-110 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="font-serif font-extrabold text-2xl text-[#1E293B] group-hover:text-[#9D174D] transition-colors">
                {t('vision.missionTitle')}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {t('vision.missionText')}
              </p>
              <div className="pt-2 border-t border-[#E8DFD0] text-[11px] text-[#9D174D] font-bold flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5" />
                <span>{t('vision.missionTag')}</span>
              </div>
            </div>
          </ScrollRevealCard>

          <ScrollRevealCard delay={300} animation="fade-up">
            <div className="bg-white p-8 rounded-3xl border border-[#E8DFD0] space-y-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group h-full">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#047857] flex items-center justify-center border border-emerald-200 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-serif font-extrabold text-2xl text-[#1E293B] group-hover:text-[#047857] transition-colors">
                {t('vision.aimsTitle')}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {t('vision.aimsText')}
              </p>
              <div className="pt-2 border-t border-[#E8DFD0] text-[11px] text-[#047857] font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t('vision.aimsTag')}</span>
              </div>
            </div>
          </ScrollRevealCard>

        </div>

      </div>
    </section>
  );
};
