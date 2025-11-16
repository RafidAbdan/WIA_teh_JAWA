"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ================= NAVBAR ================= */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-3 px-20 flex items-center justify-between z-50 backdrop-blur-xl transition-all duration-500 
      ${isScrolled ? "bg-white/30 shadow-sm" : "bg-white/80"}`}
    >
      <div className="flex items-center gap-3">
        <img src="/assets/logo.png" className="w-20 h-20 object-contain" />
      </div>

      <ul className="hidden md:flex gap-12 text-base font-medium text-gray-700 mx-auto">
        {[
          { name: "Jelajah", link: "/jelajah" },
          { name: "Tentang Kami", link: "/#tentang" },
          { name: "Kontak", link: "/kontak" },
        ].map((item, i) => (
          <li key={i}>
            <a
              href={item.link}
              className="relative transition-all duration-300 hover:text-[#6FC233] 
              after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#6FC233] 
              after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="bg-[#69325A] text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-3">
        <div>
          <img src="/assets/logo.png" className="w-20 h-20 object-contain mb-3" />
          <p className="text-sm text-white/80">Platform yang membantu UMKM berkembang di era digital.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Tentang Kami</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Cerita Kami</li>
            <li>Berita</li>
            <li>Kontak</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Pendukung</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Kontak</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Ikuti Kami</h4>
          <div className="flex gap-4">
            <a href="#" className="text-white/90">Instagram</a>
            <a href="#" className="text-white/90">Twitter</a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Veats. Semua hak dilindungi undang-undang.
      </div>
    </footer>
  );
}

/* ================= PAGE KONTAK ================= */
export default function KontakPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />

      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-[480px] h-[480px] bg-[#79C268]/35 blur-[150px] rounded-full"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FC9E84]/35 blur-[150px] rounded-full"></div>

      {/* CONTENT */}
      <section className="pt-40 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT + IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-gray-700 max-w-md">
            Kirim email, nomor telepon, atau lengkapi formulir untuk mempelajari bagaimana
            Veats dapat menyelesaikan masalah Anda.
          </p>

          <img
            src="/assets/tehKontak.png"
            className="w-80 mt-8 drop-shadow-xl"
          />
        </motion.div>

        {/* RIGHT FORM CARD */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-xl font-bold mb-6">Formulir Pengaduan</h2>

          <form className="space-y-4">

            {/* 2 COL INPUT */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nama Depan"
                className="px-4 py-3 rounded-md bg-gray-100 outline-none"
              />
              <input
                type="text"
                placeholder="Nama Belakang"
                className="px-4 py-3 rounded-md bg-gray-100 outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-gray-100 outline-none"
            />

            <input
              type="text"
              placeholder="No. Telepon"
              className="w-full px-4 py-3 rounded-md bg-gray-100 outline-none"
            />

            <textarea
              placeholder="Bagaimana kami bisa membantu?"
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-gray-100 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#5A7DDF] hover:bg-[#4d6ec7] text-white py-3 rounded-lg font-medium"
            >
              Kirim
            </button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
