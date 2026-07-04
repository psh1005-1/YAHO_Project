import { useEffect } from 'react'
import PipelineSection from '../components/PipelineSection'
import RagExplainSection from '../components/RagExplainSection'
import TechStackSection from '../components/TechStackSection'

export default function TechPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <div className="border-b border-slate-100 bg-gradient-to-b from-blue-50 to-white px-5 py-12 text-center md:py-16">
        <span className="text-xs font-bold uppercase tracking-wide text-brand-primary">활용된 기술</span>
        <h1 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">잡아드림의 AI 추천 파이프라인</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
          기업 DB 구축부터 벡터 검색, AI 추천 생성까지 — 잡아드림을 만든 RAG 파이프라인과 기술 스택을 소개합니다.
        </p>
      </div>
      <PipelineSection />
      <RagExplainSection />
      <TechStackSection />
    </>
  )
}
