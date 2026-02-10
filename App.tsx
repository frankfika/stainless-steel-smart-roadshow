
import React, { useState, useEffect, useCallback, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import {
  Slide1, Slide2, Slide3, Slide4, Slide5,
  Slide6, Slide7, Slide8, Slide9, Slide10,
  Slide11, Slide12
} from './components/Slides';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isExporting, setIsExporting] = useState(false);
  const totalSlides = 12;
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12];
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const handleStartPresentation = useCallback(() => {
    setDirection(1);
    setCurrentSlide(1);
  }, []);

  const handleExportPdf = async () => {
    if (isExporting || !pdfContainerRef.current) return;
    setIsExporting(true);

    try {
      const container = pdfContainerRef.current;
      container.style.display = 'block';
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '0';

      const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1920, 1080] });
      const slideElements = container.querySelectorAll('.slide-export-page');

      for (let i = 0; i < slideElements.length; i++) {
        const slideEl = slideElements[i] as HTMLElement;
        const canvas = await html2canvas(slideEl, {
          scale: 2,
          backgroundColor: '#020617',
          useCORS: true,
          allowTaint: true,
          width: 1920,
          height: 1080,
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.92);
        if (i > 0) pdf.addPage([1920, 1080], 'landscape');
        pdf.addImage(imgData, 'JPEG', 0, 0, 1920, 1080);
      }

      container.style.display = 'none';
      pdf.save('不锈钢智能制造路演.pdf');
    } catch (err) {
      console.error('PDF export failed:', err);
      // Fallback to print
      window.print();
    } finally {
      setIsExporting(false);
      if (pdfContainerRef.current) {
        pdfContainerRef.current.style.display = 'none';
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const renderActiveSlide = () => {
    const ActiveSlide = slides[currentSlide];
    if (currentSlide === 0) {
      return <ActiveSlide isActive={true} onStart={handleStartPresentation} />;
    }
    return <ActiveSlide isActive={true} />;
  };

  return (
    <div className="h-screen w-screen bg-[#020617] text-slate-100 relative overflow-hidden selection:bg-blue-500/40">
      {/* Dynamic Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] no-print"></div>

      {/* Ambient Lighting */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full no-print"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full no-print"></div>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-900/50 z-50 no-print">
        <div
          className="h-full bg-blue-500 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        ></div>
      </div>

      {/* Slide Container with Transition */}
      <main className="h-full w-full relative z-10 overflow-hidden no-print">
        <div
          key={currentSlide}
          className="h-full w-full transition-all duration-700 ease-in-out"
          style={{
            animation: direction > 0 ? 'slideInNext 0.7s forwards' : 'slideInPrev 0.7s forwards'
          }}
        >
          {renderActiveSlide()}
        </div>
      </main>

      {/* Hidden container for PDF export rendering */}
      <div ref={pdfContainerRef} style={{ display: 'none' }}>
        {slides.map((SlideComponent, index) => (
          <div
            key={index}
            className="slide-export-page"
            style={{
              width: '1920px',
              height: '1080px',
              background: '#020617',
              color: '#f8fafc',
              position: 'relative',
              overflow: 'hidden',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <SlideComponent isActive={true} />
          </div>
        ))}
      </div>

      {/* Print-only container for browser print fallback */}
      <div className="print-container">
        {slides.map((SlideComponent, index) => (
          <div key={index} className="slide-print-page">
            <SlideComponent isActive={true} />
          </div>
        ))}
      </div>

      {/* Advanced Navigation Controls */}
      <div className="fixed bottom-10 right-10 flex items-center gap-4 z-50 group no-print">
        {/* PDF Export Button */}
        <button
          onClick={handleExportPdf}
          disabled={isExporting}
          className="glass px-4 h-14 rounded-2xl flex items-center gap-2 hover:bg-slate-800/80 transition-all border-white/5 group/pdf disabled:opacity-50"
          title="导出为 PDF"
        >
          {isExporting ? (
            <svg className="animate-spin text-red-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          )}
          <span className="text-xs font-bold font-mono text-slate-300">{isExporting ? '导出中...' : 'PDF'}</span>
        </button>

        <div className="glass px-6 py-3 h-14 rounded-2xl text-xs font-black font-mono flex items-center gap-4 border-white/5 backdrop-blur-2xl shadow-xl">
          <span className="text-slate-600 tracking-tighter uppercase">Section</span>
          <div className="flex items-baseline gap-1">
            <span className="text-blue-400 text-lg leading-none">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="text-slate-700">/</span>
            <span className="text-slate-500 leading-none">{String(totalSlides).padStart(2, '0')}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="glass w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-slate-800/80 transition-all border-white/5 disabled:opacity-20 disabled:cursor-not-allowed group/btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:-translate-x-1 transition-transform"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-600/30 disabled:opacity-20 group/btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>

      {/* Institutional Branding */}
      <div className="fixed bottom-10 left-10 z-50 flex items-center gap-4 no-print">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-950 font-black text-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          S
        </div>
        <div>
          <div className="text-sm font-black tracking-widest text-slate-200 uppercase leading-none mb-1">苏州方案 · 智能制造</div>
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Digital-Twin Integrated Production System</div>
        </div>
      </div>

      <style>{`
        @keyframes slideInNext {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInPrev {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media print {
            .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default App;