"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ------------------------------------
                HOME
------------------------------------ */
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Footer />
    </main>
  );
}

/* ------------------------------------
              NAVBAR
------------------------------------ */

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-3 px-6 md:px-20 flex items-center justify-between z-50 backdrop-blur-xl transition-all duration-500 
      ${isScrolled ? "bg-white/30 opacity-80 shadow-sm" : "bg-white/80 opacity-80"}`}
    >
      {/* LOGO*/}
      <img
        src="/assets/logo.png"
        alt="Veats logo"
        className="w-16 h-16 md:w-20 md:h-20 object-contain"
      />

      {/* MENU */}
      <ul className="
        hidden md:flex 
        gap-10 
        text-base font-medium text-gray-700
        absolute left-1/2 -translate-x-1/2
      ">
        <li>
          <a
            href="/jelajah"
            className="relative transition-all duration-300 hover:text-[#6FC233] 
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#6FC233] 
            after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Jelajah
          </a>
        </li>

        <li>
          <a
            href="/#tentang"
            className="relative transition-all duration-300 hover:text-[#6FC233]
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#6FC233] 
            after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Tentang Kami
          </a>
        </li>

        <li>
          <a
            href="/kontak"
            className="relative transition-all duration-300 hover:text-[#6FC233]
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#6FC233] 
            after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Kontak
          </a>
        </li>
      </ul>
    </nav>
  );
}

/* ------------------------------------
                HERO
------------------------------------ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-28 md:pt-32">

      {/* RESPONSIVE BLUR BACKGROUND */}
      <div className="absolute -top-40 -left-24 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#6FC233]/40 rounded-full blur-[100px] md:blur-[130px]" />
      <div className="absolute top-10 right-0 w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-[#FC9E84]/40 rounded-full blur-[120px] md:blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 w-[260px] h-[260px] md:w-[480px] md:h-[480px] bg-[#69325A]/30 rounded-full blur-[110px] md:blur-[150px]" />
      <div className="absolute bottom-20 right-1/3 w-[240px] h-[240px] md:w-[420px] md:h-[420px] bg-[#FDB022]/40 rounded-full blur-[100px] md:blur-[130px]" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT TEXT */}
        <div className="flex-1 text-left md:pr-8">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-xl"
          >
            Menghubungkan UMKM dengan Lebih Banyak Pelanggan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-gray-700 max-w-md text-sm md:text-base"
          >
            Veats hadir sebagai platform yang membantu UMKM berkembang di era digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6"
          >
            <a
              href="/jelajah"
              className="inline-block bg-[#6FC233] hover:bg-[#5fb328] text-white px-5 py-3 rounded-md shadow text-sm md:text-base"
            >
              Jelajah
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 flex justify-center md:justify-end w-full"
        >
          <img
            src="/assets/hero.png"
            alt="Hero food"
            className="w-[80%] md:w-full max-w-sm md:max-w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------
                STATS
------------------------------------ */
function Stats() {
  return (
    <section className="relative">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/owner.jpg')" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28 text-center text-white">

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-4xl font-serif italic mb-8 md:mb-10"
          >
            Diberdayakan oleh Komunitas, Didukung oleh Kepercayaan
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {[
              { value: "50+", label: "UMKM Bergabung" },
              { value: "300+", label: "Produk Tersedia" },
              { value: "1000+", label: "Pelanggan Aktif" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex-1 max-w-xs"
              >
                <h3 className="text-3xl md:text-5xl font-bold">{s.value}</h3>
                <p className="mt-2 uppercase tracking-wide text-sm md:text-base">{s.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ------------------------------------
                ABOUT
------------------------------------ */
function About() {
  return (
    <section id="tentang" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <img
            src="/assets/bg-owner.png"
            className="w-full rounded-md shadow-lg"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Setiap Pesanan Membuat Perubahan
          </h3>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            Ketika Anda memilih Veats, Anda tidak hanya membeli makanan.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

/* ------------------------------------
                FOOTER
------------------------------------ */
function Footer() {
  return (
    <footer id="kontak" className="bg-[#69325A] text-white py-12 mt-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">

        <div>
          <img src="/assets/logo.png" className="w-16 md:w-20 object-contain mb-3" />
          <p className="text-sm text-white/80">Platform UMKM Modern</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Tentang Kami</h4>
          <ul className="text-sm text-white/80 space-y-2">
            <li>Cerita Kami</li>
            <li>Berita</li>
            <li>Kontak</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Pendukung</h4>
          <ul className="text-sm text-white/80 space-y-2">
            <li>Kontak</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Ikuti Kami</h4>
          <div className="flex gap-4 text-sm text-white/80">
            <a>Instagram</a>
            <a>Twitter</a>
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-white/70 mt-8 border-t border-white/10 pt-4">
        © {new Date().getFullYear()} Veats. Semua hak dilindungi.
      </div>
    </footer>
  );
}
