import React, { useState, useEffect } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';
import ScrollRevealCard from './ScrollRevealCard';
import { useLanguage } from '../contexts/LanguageContext';

interface EventGalleryProps {
  galleryItems?: GalleryItem[];
}

export const EventGallery: React.FC<EventGalleryProps> = ({ galleryItems: propGallery }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);
  const { t } = useLanguage();

  const defaultItems: GalleryItem[] = [
    { id: '1', title: 'Saraswati Puja Floral & Alpona Decoration', category: 'Cultural', imageUrl: '/assets/saraswati_puja.jpg' },
    { id: '2', title: 'Annual Athletic Sports Championship Meet', category: 'Sports', imageUrl: '/assets/sports_day.jpg' },
    { id: '3', title: 'Oasis Scholarship Karate Self-Defense Drill', category: 'Empowerment', imageUrl: '/assets/sports_day.jpg' },
    { id: '4', title: 'STEM Science & Robotics Exhibition', category: 'Academics', imageUrl: '/assets/science_exhibition.jpg' },
    { id: '5', title: 'Annual Academic Prize Distribution', category: 'Ceremony', imageUrl: '/assets/prize_distribution.jpg' },
    { id: '6', title: 'NCC & Defense Drill Demonstration', category: 'NCC', imageUrl: '/assets/ncc_defense.jpg' },
    { id: '7', title: 'ICT Computer Lab Practical Session', category: 'Academics', imageUrl: '/assets/science_lab.jpg' },
    { id: '8', title: 'Independence Day Parade & Cultural Dance', category: 'Cultural', imageUrl: '/assets/hero_campus.jpg' },
  ];

  // Load gallery from localStorage reactively
  useEffect(() => {
    const loadGallery = () => {
      if (propGallery && propGallery.length > 0) {
        setGalleryData(propGallery);
        return;
      }
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('mgghs_gallery');
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setGalleryData(parsed);
              return;
            }
          } catch (e) {}
        }
      }
      setGalleryData(defaultItems);
    };

    loadGallery();

    // Listen for storage changes (when admin uploads)
    const handleStorage = () => loadGallery();
    window.addEventListener('storage', handleStorage);
    window.addEventListener('mgghs_gallery_updated', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('mgghs_gallery_updated', handleStorage);
    };
  }, [propGallery]);

  const items = galleryData.length > 0 ? galleryData : defaultItems;

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  const openLightbox = (item: GalleryItem, idx: number) => {
    setSelectedPhoto(item);
    setSelectedIndex(idx);
  };

  const goNext = () => {
    const next = (selectedIndex + 1) % filteredItems.length;
    setSelectedPhoto(filteredItems[next]);
    setSelectedIndex(next);
  };

  const goPrev = () => {
    const prev = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPhoto(filteredItems[prev]);
    setSelectedIndex(prev);
  };

  return (
    <section id="gallery" className="py-10 md:py-20 bg-[#FAF7F2] text-slate-800 relative border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-3 md:px-4 space-y-6 md:space-y-12">
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 border-b border-[#E8DFD0] pb-4 md:pb-6">
          <div>
            <span className="text-xs font-bold text-[#9D174D] uppercase tracking-widest bg-rose-100/60 px-3 py-1 rounded-full border border-rose-300/60 mb-2 inline-block">
              {t('gallery.badge')}
            </span>
            <h2 className="font-serif font-extrabold text-2xl md:text-4xl text-[#1E293B]">
              {t('gallery.heading')}
            </h2>
            <p className="text-xs text-slate-600 mt-1 hidden sm:block">
              {t('gallery.subtext')}
            </p>
          </div>

          {/* Category Filters - horizontally scrollable on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {['all', 'Cultural', 'Sports', 'Empowerment', 'Academics', 'Ceremony'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#9D174D] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-rose-50 border border-[#E8DFD0]'
                }`}
              >
                {cat === 'all' ? t('gallery.all') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredItems.map((item, idx) => (
            <ScrollRevealCard key={item.id} delay={(idx % 4) * 80} animation="zoom-in">
              <div
                onClick={() => openLightbox(item, idx)}
                className="bg-white rounded-xl md:rounded-2xl border border-[#E8DFD0] overflow-hidden relative group cursor-pointer shadow-xs hover:shadow-md hover:border-[#9D174D]/50 transition-all h-full"
              >
                <div className="h-36 sm:h-44 md:h-48 overflow-hidden relative bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1E293B]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#B45309] text-white flex items-center justify-center font-bold shadow-md">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="p-2.5 md:p-3.5 space-y-1">
                  <span className="text-[10px] font-extrabold text-[#B45309] uppercase bg-amber-100/80 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-[#1E293B] group-hover:text-[#9D174D] transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            </ScrollRevealCard>
          ))}
        </div>

      </div>

      {/* Mobile-optimized Lightbox Modal with Prev/Next */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-3 md:p-6">
          <div className="bg-white rounded-2xl md:rounded-3xl w-full max-w-3xl relative text-slate-900 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-3 top-3 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-rose-700 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="h-[55vw] max-h-[420px] min-h-[220px] bg-slate-950 flex items-center justify-center relative">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />

              {/* Prev/Next buttons */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); goPrev(); }}
                    className="absolute left-2 w-9 h-9 rounded-full bg-black/50 hover:bg-[#9D174D] text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); goNext(); }}
                    className="absolute right-2 w-9 h-9 rounded-full bg-black/50 hover:bg-[#9D174D] text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Photo Info */}
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-serif font-extrabold text-sm md:text-base text-[#1E293B] line-clamp-1">{selectedPhoto.title}</h3>
                <span className="text-[#B45309] font-bold uppercase text-[11px]">{selectedPhoto.category}</span>
              </div>
              <span className="text-slate-400 text-xs font-mono">{selectedIndex + 1} / {filteredItems.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
