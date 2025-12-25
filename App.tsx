
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a2e12] text-white selection:bg-[#c41e3a] selection:text-white pb-20 overflow-hidden relative">
      {/* Content Container */}
      <main className="max-w-2xl mx-auto px-6 pt-16 space-y-24">
        
        {/* 1. Pembuka */}
        <section className="flex flex-col items-center justify-center text-center py-10">
          <h1 className="text-6xl md:text-8xl font-romance mb-4 text-[#f8f9fa] drop-shadow-lg">
            Halo ❤️
          </h1>
          <div className="w-16 h-1 mt-4 bg-[#c41e3a] rounded-full"></div>
        </section>

        {/* Couple Illustration - Static */}
        <section className="flex justify-center items-center space-x-8 py-4">
          <div className="text-6xl">👦🏻</div>
          <div className="text-4xl text-[#ff4d4d]">❤️</div>
          <div className="text-6xl">👧🏻</div>
        </section>

        {/* 2. Ucapan Natal */}
        <section className="text-center space-y-6 bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-romance text-[#c41e3a]">Selamat Natal 🎄✨</h2>
          <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
            Semoga damai dan cinta selalu menyertai kita
          </p>
        </section>

        {/* 3. Permintaan Maaf */}
        <section className="text-center space-y-6">
          <div className="inline-block p-4 bg-[#c41e3a]/10 rounded-full mb-2">
            <span className="text-3xl">🙏</span>
          </div>
          <p className="text-xl md:text-2xl font-semibold text-white/80">
            Aku minta maaf atas semua kesalahan yang pernah terjadi
          </p>
          <p className="text-lg md:text-xl text-white/60 italic">
            Baik yang disengaja maupun tidak
          </p>
        </section>

        {/* 4. Ucapan Terima Kasih */}
        <section className="text-center space-y-6 bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 p-4 opacity-30 text-3xl">🌿</div>
          <div className="absolute bottom-0 right-0 p-4 opacity-30 text-3xl">🌿</div>
          
          <h2 className="text-3xl md:text-4xl font-romance text-[#f8f9fa]">Thank You...</h2>
          <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
            Terima kasih karena tetap bertahan
          </p>
          <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
            Terima kasih sudah menemani setiap proses
          </p>
        </section>

        {/* 5. Harapan */}
        <section className="text-center space-y-6">
          <div className="text-4xl mb-4">🌱</div>
          <p className="text-xl md:text-2xl font-medium text-white/90">
            Semoga ke depan kita bisa tumbuh bersama
          </p>
          <p className="text-xl md:text-2xl font-semibold text-[#c41e3a]">
            Lebih sabar, lebih kuat, dan saling mencintai
          </p>
        </section>

        {/* 6. Penutup */}
        <section className="text-center py-20 relative">
          <div className="relative inline-block">
             <h1 className="text-6xl md:text-8xl font-romance text-white drop-shadow-[0_4px_10px_rgba(196,30,58,0.8)]">
               I LOVE YOU ❤️
             </h1>
          </div>
          
          <div className="mt-12 flex justify-center space-x-2 opacity-50">
            <span>✨</span>
            <span>❄️</span>
            <span>✨</span>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full text-center py-10 text-white/30 text-sm">
        <p>Made with love & Christmas spirit 🎄</p>
      </footer>
    </div>
  );
};

export default App;
