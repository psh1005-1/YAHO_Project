import { BrowserRouter, Routes, Route } from 'react-router-dom'
import watermarkImg from './assets/watermark-people.jpg'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import TechPage from './pages/TechPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        {/* 스크롤과 무관하게 우하단에 고정되는 워터마크 장식 이미지 */}
        <img
          src={watermarkImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none fixed -bottom-4 -right-4 z-40 w-32 opacity-[0.14] select-none sm:w-44 lg:w-56"
          style={{
            maskImage: 'radial-gradient(ellipse 65% 65% at 55% 40%, black 45%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 55% 40%, black 45%, transparent 100%)',
          }}
        />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tech" element={<TechPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white px-5 py-10 text-center">
      <p className="text-sm font-bold text-brand-navy">잡아드림 (Job-a-Dream)</p>
      <p className="mt-1 text-xs text-slate-400">BEPA 청끌기업 데이터 기반 RAG 취업 매칭 서비스 · 해커톤 데모</p>
    </footer>
  )
}
