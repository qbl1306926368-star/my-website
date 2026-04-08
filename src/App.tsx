/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Eye, Menu, MousePointer2, User, BookOpen, Tv, Zap, Rocket, Activity, Search, ArrowRight } from 'lucide-react';

function Navbar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl bg-white brutal-border rounded-full px-6 py-3 flex justify-between items-center z-50 brutal-shadow">
        <ul className="hidden md:flex w-full justify-center gap-12 font-bold text-sm">
          {['首页', '关于我', '运营项目', '视频', '产品'].map((tab) => (
            <li key={tab}>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setActiveTab(tab); }}
                className={`transition-colors px-4 py-1 rounded-md ${activeTab === tab ? 'brutal-border brutal-shadow-sm bg-white' : 'hover:text-brand-blue'}`}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white text-brand-dark p-2 rounded-xl brutal-border brutal-shadow-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all absolute right-4 md:hidden"
        >
          <Menu size={20} />
        </button>
        <button className="hidden md:flex bg-white text-brand-dark p-2 rounded-xl brutal-border brutal-shadow-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all absolute right-4">
          <Mail size={20} />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center md:hidden">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 bg-white text-brand-dark p-3 rounded-xl brutal-border brutal-shadow-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
          >
            ✕
          </button>
          <ul className="flex flex-col items-center gap-8 font-black text-3xl">
            {['首页', '关于我', '运营项目', '视频', '产品'].map((tab) => (
              <li key={tab}>
                <a 
                  href="#" 
                  onClick={(e) => { 
                     e.preventDefault(); 
                    setActiveTab(tab);
                    setIsMenuOpen(false);
                  }}
                  className={`transition-colors px-6 py-2 rounded-xl block ${activeTab === tab ? 'bg-brand-yellow brutal-border brutal-shadow' : 'hover:text-brand-blue'}`}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function Hero({ setShowContactModal, setActiveTab }: { setShowContactModal: (show: boolean) => void; setActiveTab: (tab: string) => void }) {
  return (
    <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center min-h-screen">
      <div>
        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
          I'm <span className="bg-brand-red text-white px-3 py-1 inline-block transform -rotate-2">丘宝伶</span>,<br />
          a AI <br />
          enthusiast <br />
          <span className="bg-brand-blue text-white px-3 py-1 inline-block transform rotate-2 mt-2">内容创作者</span>
        </h1>
        <p className="text-gray-600 mb-10 max-w-md font-medium leading-relaxed">
          Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices nulla sed dolor.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setShowContactModal(true)}
            className="bg-brand-dark text-white px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 brutal-shadow hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
          >
            <Mail size={18} /> Get in touch
          </button>
          <button
            onClick={() => setActiveTab('运营项目')}
            className="bg-white text-brand-dark brutal-border px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 brutal-shadow hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
          >
            <Eye size={18} /> View portfolio
          </button>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-brand-yellow brutal-border rounded-[2rem] aspect-square w-full max-w-[420px] brutal-shadow relative overflow-hidden flex items-end justify-center">
          <img src="/123.png" alt="Profile" className="w-full h-full object-cover absolute bottom-0 transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="absolute top-1/2 -left-6 bg-white p-2 rounded-xl brutal-border brutal-shadow-sm transform -rotate-12 animate-bounce">
          <MousePointer2 size={28} className="text-brand-dark fill-brand-dark" />
        </div>
      </div>
    </section>
  );
}



function RecentUpdates() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto relative">
      <div className="absolute top-10 left-10 text-xl font-bold">←</div>
      <div className="absolute top-10 right-10 text-xl font-bold">→</div>
      
      <div className="inline-block bg-brand-pink text-white px-6 py-2 brutal-border brutal-shadow transform -rotate-2 mb-16">
        <h2 className="text-2xl font-black tracking-wide">近日生活 | RECENT UPDATES</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-[20%] w-3 h-3 rounded-full bg-brand-blue brutal-border"></div>
        <div className="absolute top-[-20px] left-[25%] w-3 h-3 rounded-full bg-brand-pink brutal-border"></div>
        <div className="absolute top-[-10px] right-[25%] w-3 h-3 rounded-full bg-brand-blue brutal-border"></div>
        <div className="absolute top-10 right-[20%] w-3 h-3 rounded-full bg-brand-pink brutal-border"></div>
        
        {/* Card 1 */}
        <div className="bg-white brutal-border rounded-2xl p-6 w-full max-w-[280px] shadow-[6px_6px_0px_0px_#4d84f5] relative z-10 hover:-translate-y-2 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-full aspect-[4/3] bg-[#f4f5f7] rounded-2xl brutal-border mb-4 flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full max-w-[100px] absolute bottom-0">
                {/* Glowing shelf */}
                <rect x="10" y="80" width="80" height="5" fill="#1a1a1a" />
                <rect x="15" y="60" width="70" height="3" fill="#1a1a1a" />
                <rect x="20" y="40" width="60" height="3" fill="#1a1a1a" />
                <path d="M10 80 H90" stroke="#8add7c" strokeWidth="1" filter="url(#glow)" />

                {/* Books */}
                <rect x="12" y="65" width="10" height="15" fill="#4d84f5" stroke="#1a1a1a" strokeWidth="1" />
                <rect x="25" y="55" width="12" height="25" fill="#eb6b74" stroke="#1a1a1a" strokeWidth="1" />
                <rect x="40" y="60" width="11" height="20" fill="#f5c65a" stroke="#1a1a1a" strokeWidth="1" />
                <rect x="54" y="50" width="13" height="30" fill="#8add7c" stroke="#1a1a1a" strokeWidth="1" />
                <rect x="70" y="68" width="9" height="12" fill="#ff75c3" stroke="#1a1a1a" strokeWidth="1" />

                {/* Book Titles / Spines */}
                <text x="17" y="78" fontSize="4" fill="white" transform="rotate(-90 17 78)">BOOK A</text>
                <text x="31" y="78" fontSize="4" fill="white" transform="rotate(-90 31 78)">BOOK B</text>
                <text x="45" y="78" fontSize="4" fill="white" transform="rotate(-90 45 78)">BOOK C</text>
                <text x="60" y="78" fontSize="4" fill="white" transform="rotate(-90 60 78)">BOOK D</text>
                <text x="74" y="78" fontSize="4" fill="white" transform="rotate(-90 74 78)">BOOK E</text>

                {/* filter for glow */}
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>
            <span className="font-bold">最近在读</span>
          </div>
          <p className="text-center font-medium mt-6 mb-2">《纳瓦尔宝典》</p>
          <div className="absolute -top-4 -left-4 text-2xl">★</div>
          <div className="absolute -bottom-4 -left-2 text-xl">✦</div>
          <div className="absolute top-1/2 -right-3 w-4 h-4 bg-brand-green brutal-border transform rotate-45"></div>
        </div>

        {/* Arrow 1 */}
        <div className="hidden md:block w-16 h-8 relative">
          <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
            <path d="M 0 25 Q 50 -10 100 25" fill="none" stroke="#ff75c3" strokeWidth="3" strokeDasharray="6 6" />
            <path d="M 90 15 L 100 25 L 90 35" fill="none" stroke="#4d84f5" strokeWidth="3" />
          </svg>
        </div>

        {/* Card 2 */}
        <div className="bg-white brutal-border rounded-2xl p-6 w-full max-w-[280px] shadow-[6px_6px_0px_0px_#ff75c3] relative z-10 hover:-translate-y-2 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-full aspect-[4/3] bg-[#f4f5f7] rounded-2xl brutal-border mb-4 flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full max-w-[100px]">
                {/* Screen background */}
                <rect x="10" y="15" width="80" height="55" fill="#1a1a1a" rx="3" />

                {/* Video covers (simplified) */}
                <rect x="15" y="20" width="30" height="20" fill="#eb6b74" rx="2" />
                <text x="20" y="32" fontSize="6" fill="white">黄帝内经</text>

                <rect x="55" y="40" width="30" height="20" fill="#4d84f5" rx="2" />
                <text x="60" y="52" fontSize="6" fill="white">三星堆</text>

                {/* Play button */}
                <circle cx="50" cy="42.5" r="8" fill="#f5c65a" />
                <path d="M47 38 L54 42.5 L47 47 Z" fill="#1a1a1a" />

                {/* Progress bar */}
                <rect x="10" y="70" width="80" height="5" fill="#cccccc" />
                <rect x="10" y="70" width="45" height="5" fill="#eb6b74" />
                <circle cx="55" cy="72.5" r="4" fill="#eb6b74" stroke="#1a1a1a" strokeWidth="1" />
              </svg>
            </div>
            <span className="font-bold">最近在刷</span>
          </div>
          <p className="text-center font-medium mt-6 mb-2">倪海夏讲《黄帝内经》、三星堆纪录片</p>
          <div className="w-1/2 h-[2px] bg-brand-pink mx-auto"></div>
          <div className="absolute -top-6 right-10 text-brand-pink font-bold text-2xl">⚡</div>
          <div className="absolute -bottom-3 left-4 w-4 h-4 bg-brand-blue brutal-border transform rotate-12"></div>
          <div className="absolute bottom-4 right-4 text-xl transform rotate-45">↘</div>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:block w-16 h-8 relative">
          <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
            <path d="M 0 25 Q 50 -10 100 25" fill="none" stroke="#ff75c3" strokeWidth="3" strokeDasharray="6 6" />
            <path d="M 90 15 L 100 25 L 90 35" fill="none" stroke="#4d84f5" strokeWidth="3" />
          </svg>
        </div>

        {/* Card 3 */}
        <div className="bg-white brutal-border rounded-2xl p-6 w-full max-w-[280px] shadow-[6px_6px_0px_0px_#8add7c] relative z-10 hover:-translate-y-2 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-full aspect-[4/3] bg-[#f4f5f7] rounded-2xl brutal-border mb-4 flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full max-w-[100px]">
                {/* Circuit Board Background */}
                <rect x="10" y="10" width="80" height="80" fill="#1a1a1a" rx="5" />

                {/* Neon Lines */}
                <line x1="20" y1="20" x2="80" y2="20" stroke="#8add7c" strokeWidth="2" filter="url(#neonGlow)" />
                <line x1="20" y1="35" x2="70" y2="35" stroke="#4d84f5" strokeWidth="2" filter="url(#neonGlow)" />
                <line x1="30" y1="50" x2="80" y2="50" stroke="#eb6b74" strokeWidth="2" filter="url(#neonGlow)" />
                <line x1="20" y1="65" x2="60" y2="65" stroke="#f5c65a" strokeWidth="2" filter="url(#neonGlow)" />

                {/* Icons (simplified) */}
                <circle cx="25" cy="20" r="3" fill="white" />
                <rect x="75" y="17" width="6" height="6" fill="white" />
                <path d="M22 38 L28 38 L25 44 Z" fill="white" />
                <polygon points="77,47 83,47 80,53" fill="white" />
                <rect x="17" y="62" width="6" height="6" fill="white" transform="rotate(45 20 65)" />

                {/* filter for neon glow */}
                <defs>
                  <filter id="neonGlow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>
            <span className="font-bold">最近折腾</span>
          </div>
          <p className="text-center font-medium mt-6 mb-2">vibecoding、ai漫剧、openclaw</p>
          <div className="absolute -top-4 right-10 text-brand-pink font-bold text-2xl">⚡</div>
          <div className="absolute -bottom-4 -right-4 text-2xl">★</div>
          <div className="absolute bottom-2 right-1/2 text-xl">✦</div>
        </div>

        {/* Arrow 3 */}
        <div className="hidden md:block w-16 h-8 relative">
          <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
            <path d="M 0 25 Q 50 -10 100 25" fill="none" stroke="#ff75c3" strokeWidth="3" strokeDasharray="6 6" />
            <path d="M 90 15 L 100 25 L 90 35" fill="none" stroke="#4d84f5" strokeWidth="3" />
          </svg>
        </div>

        {/* Card 4 */}
        <div className="bg-white brutal-border rounded-2xl p-6 w-full max-w-[280px] shadow-[6px_6px_0px_0px_#f5c65a] relative z-10 hover:-translate-y-2 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-full aspect-[4/3] bg-[#f4f5f7] rounded-2xl brutal-border mb-4 flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full max-w-[100px]">
                {/* Headphones */}
                <path d="M20 50 A30 30 0 0 1 80 50" fill="none" stroke="#1a1a1a" strokeWidth="5" />
                <circle cx="20" cy="50" r="10" fill="#f5c65a" stroke="#1a1a1a" strokeWidth="2" />
                <circle cx="80" cy="50" r="10" fill="#f5c65a" stroke="#1a1a1a" strokeWidth="2" />

                {/* Film Reel */}
                <circle cx="35" cy="25" r="8" fill="#1a1a1a" />
                <circle cx="65" cy="25" r="8" fill="#1a1a1a" />
                <line x1="35" y1="25" x2="65" y2="25" stroke="#1a1a1a" strokeWidth="2" />
                <rect x="30" y="20" width="40" height="10" fill="#cccccc" opacity="0.5" />

                {/* Podcast covers (simplified) */}
                <rect x="25" y="65" width="20" height="10" fill="#eb6b74" rx="2" />
                <text x="28" y="72" fontSize="4" fill="white">鲁豫</text>
                <rect x="55" y="65" width="20" height="10" fill="#4d84f5" rx="2" />
                <text x="58" y="72" fontSize="4" fill="white">咖啡</text>
              </svg>
            </div>
            <span className="font-bold">最近在听</span>
          </div>
          <p className="text-center font-medium mt-6 mb-2">
            鲁豫老师《岩中花述》
            <br />
            《来都来了》
            <br />
            《声动早咖啡》
          </p>
          <div className="absolute -top-4 right-10 text-brand-yellow font-bold text-2xl">♬</div>
          <div className="absolute -bottom-4 -right-4 text-2xl">♪</div>
          <div className="absolute bottom-2 right-1/2 text-xl">♫</div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black inline-flex items-center gap-4">
          地球Online 
          <span className="bg-brand-pink text-white px-4 py-1 inline-block transform -rotate-1 brutal-border">开放游戏进度</span>
        </h2>
      </div>

      <div className="bg-white brutal-border rounded-[2rem] p-8 md:p-16 bg-grid relative">
        {/* Header Labels */}
        <div className="flex justify-between mb-16 relative z-10">
          <div className="bg-white brutal-border px-6 py-2 font-black text-xl shadow-[4px_4px_0px_0px_#ff75c3]">
            主线任务
          </div>
          <div className="bg-white brutal-border px-6 py-2 font-black text-xl shadow-[4px_4px_0px_0px_#8add7c]">
            支线任务
          </div>
        </div>

        {/* Timeline Center Line */}
        <div className="absolute left-1/2 top-12 bottom-12 w-1 border-l-[3px] border-dashed border-brand-dark -translate-x-1/2"></div>
        
        {/* Top Arrow */}
        <div className="absolute left-1/2 top-8 -translate-x-1/2 w-8 h-8 bg-white brutal-border rounded-lg flex items-center justify-center z-10">
          <div className="w-3 h-3 border-t-[3px] border-l-[3px] border-brand-dark transform rotate-45 translate-y-1"></div>
        </div>

        <div className="space-y-16 relative z-10">
          {/* Item 2 - Left */}
          <div className="flex justify-between items-center w-full">
            <div className="w-[45%] flex justify-end">
              <div className="bg-white brutal-border rounded-xl p-5 w-full max-w-sm shadow-[6px_6px_0px_0px_#4d84f5] flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="bg-brand-blue text-white p-3 rounded-lg brutal-border-sm flex-shrink-0">
                  <Rocket size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-brand-dark text-white text-xs px-2 py-0.5 rounded">已完成</span>
                    <span className="font-black text-lg">2025.9-2026.4</span>
                  </div>
                  <p className="text-sm font-medium">AIGC内容运营，深度应用即梦、扣子、nanobanana，飞书多维表格高级功能与、API 接口对接</p>
                </div>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-white brutal-border relative z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-brand-dark"></div>
            </div>
            <div className="w-[45%]"></div>
          </div>

          {/* Item 3 - Right */}
          <div className="flex justify-between items-center w-full">
            <div className="w-[45%]"></div>
            <div className="w-6 h-6 rounded-full bg-white brutal-border relative z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-brand-dark"></div>
            </div>
            <div className="w-[45%] flex justify-start">
              <div className="bg-white brutal-border rounded-xl p-5 w-full max-w-sm shadow-[6px_6px_0px_0px_#f5c65a] flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-black text-lg">2026.01</span>
                    <span className="bg-brand-dark text-white text-xs px-2 py-0.5 rounded">已完成</span>
                  </div>
                  <p className="text-sm font-medium">开启养成阅读习惯，每日坚持输入</p>
                </div>
                <div className="bg-brand-yellow text-brand-dark p-3 rounded-lg brutal-border-sm flex-shrink-0">
                  <Activity size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Item 1 - Right */}
          <div className="flex justify-between items-center w-full">
            <div className="w-[45%]"></div>
            <div className="w-6 h-6 rounded-full bg-white brutal-border relative z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
            <div className="w-[45%] flex justify-start">
              <div className="bg-white brutal-border rounded-xl p-5 w-full max-w-sm shadow-[6px_6px_0px_0px_#ff75c3] flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-black text-lg">2025.11</span>
                    <span className="bg-brand-dark text-white text-xs px-2 py-0.5 rounded">进行中</span>
                  </div>
                  <p className="text-sm font-medium">开始了ai编程，从自己的需求出发做了一些小产品，还上线了个人网站</p>
                </div>
                <div className="bg-brand-pink text-white p-3 rounded-lg brutal-border-sm flex-shrink-0">
                  <span className="font-bold text-xl">{"<>"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* New Item - Right */}
          <div className="flex justify-between items-center w-full">
            <div className="w-[45%]"></div>
            <div className="w-6 h-6 rounded-full bg-white brutal-border relative z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-brand-dark"></div>
            </div>
            <div className="w-[45%] flex justify-start">
              <div className="bg-white brutal-border rounded-xl p-5 w-full max-w-sm shadow-[6px_6px_0px_0px_#4d84f5] flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-black text-lg">2025.9</span>
                    <span className="bg-brand-dark text-white text-xs px-2 py-0.5 rounded">已完成</span>
                  </div>
                  <p className="text-sm font-medium">爱上了听各种播客</p>
                </div>
                <div className="bg-brand-blue text-white p-3 rounded-lg brutal-border-sm flex-shrink-0">
                  <BookOpen size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Item 4 - Right */}
          <div className="flex justify-between items-center w-full">
            <div className="w-[45%]"></div>
            <div className="w-6 h-6 rounded-full bg-white brutal-border relative z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-brand-dark"></div>
            </div>
            <div className="w-[45%] flex justify-start">
              <div className="bg-white brutal-border rounded-xl p-5 w-full max-w-sm shadow-[6px_6px_0px_0px_#ff75c3] flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-black text-lg">2025.6</span>
                    <span className="bg-brand-dark text-white text-xs px-2 py-0.5 rounded">已完成</span>
                  </div>
                  <p className="text-sm font-medium">开始养生，自制养生茶，锻炼八段锦</p>
                </div>
                <div className="bg-brand-pink text-white p-3 rounded-lg brutal-border-sm flex-shrink-0">
                  <Tv size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Item 4 - Left */}
          <div className="flex justify-between items-center w-full">
            <div className="w-[45%] flex justify-end">
              <div className="bg-white brutal-border rounded-xl p-5 w-full max-w-sm shadow-[6px_6px_0px_0px_#4d84f5] flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="bg-brand-blue text-white p-3 rounded-lg brutal-border-sm flex-shrink-0">
                  <Rocket size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-brand-dark text-white text-xs px-2 py-0.5 rounded">已完成</span>
                    <span className="font-black text-lg">2025.2-2025.5</span>
                  </div>
                  <p className="text-sm font-medium">ai内容创作，开始学习并应用 ComfyUI、即梦 制作高质量图文宣发素材</p>
                </div>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-white brutal-border relative z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-brand-dark"></div>
            </div>
            <div className="w-[45%]"></div>
          </div>

          {/* Item 6 - Left */}
          <div className="flex justify-between items-center w-full">
            <div className="w-[45%] flex justify-end">
              <div className="bg-white brutal-border rounded-xl p-5 w-full max-w-sm shadow-[6px_6px_0px_0px_#4d84f5] flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="bg-brand-blue text-white p-3 rounded-lg brutal-border-sm flex-shrink-0">
                  <Rocket size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-brand-dark text-white text-xs px-2 py-0.5 rounded">已完成</span>
                    <span className="font-black text-lg">2024.12-2025.2</span>
                  </div>
                  <p className="text-sm font-medium">ai视频制作，开始利用即梦、可灵生成图片和视频素材，</p>
                </div>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-white brutal-border relative z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-brand-dark"></div>
            </div>
            <div className="w-[45%]"></div>
          </div>

          {/* Item 8 - Left */}
          <div className="flex justify-between items-center w-full">
            <div className="w-[45%] flex justify-end">
              <div className="bg-white brutal-border rounded-xl p-5 w-full max-w-sm shadow-[6px_6px_0px_0px_#4d84f5] flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="bg-brand-blue text-white p-3 rounded-lg brutal-border-sm flex-shrink-0">
                  <Rocket size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-brand-dark text-white text-xs px-2 py-0.5 rounded">已完成</span>
                    <span className="font-black text-lg">2023.8 – 2023.10</span>
                  </div>
                  <p className="text-sm font-medium">开始了解ai，接触各种ai软件，慢慢深入应用</p>
                </div>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-white brutal-border relative z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-brand-dark"></div>
            </div>
            <div className="w-[45%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProjectShowcaseCardProps {
  mainImage: string;
  thumbnails: string[];
  projectName: string;
  techStack: string[];
  description: string;
  link: string;
}

interface AppConceptShowcaseCardProps {
  initialImage: string;
  hoverImage: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  link: string;
}

function ProjectShowcaseCard({ mainImage, thumbnails, projectName, techStack, description }: ProjectShowcaseCardProps) {
  const [currentImage, setCurrentImage] = useState(mainImage);

  return (
    <div className="bg-white brutal-border rounded-2xl p-6 brutal-shadow hover:-translate-y-2 transition-transform duration-300 flex flex-col md:flex-row items-stretch gap-6">
      {/* Left Column: Image Showcase */}
      <div className="md:w-3/5 relative">
        {/* Mac Browser Frame */}
        <div className="brutal-border rounded-t-lg bg-gray-200 p-2 flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="brutal-border brutal-border-t-0 rounded-b-lg overflow-hidden aspect-video">
          <img src={currentImage} alt={projectName} className="w-full h-full object-cover" />
        </div>
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt={`${projectName} thumbnail ${index + 1}`}
              className={`w-20 h-16 object-cover rounded-md cursor-pointer brutal-border ${currentImage === thumb ? 'brutal-border-brand-blue' : ''} hover:brutal-border-brand-yellow transition-all`}
              onClick={() => setCurrentImage(thumb)}
            />
          ))}
        </div>
      </div>

      {/* Right Column: Information Description */}
      <div className="md:w-2/5 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-black mb-3">{projectName}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span key={index} className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-600 font-medium leading-relaxed">
            {description}
          </p>
        </div>
        <button className="mt-6 bg-white brutal-border px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 w-full hover:bg-brand-dark hover:text-white transition-colors">
          View Project <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

function AppConceptShowcaseCard({ initialImage, hoverImage, title, subtitle, problem, solution, link }: AppConceptShowcaseCardProps) {
  const [currentImage, setCurrentImage] = useState(initialImage);

  return (
    <div
      className="bg-white brutal-border rounded-2xl p-6 brutal-shadow hover:-translate-y-2 transition-transform duration-300 flex flex-col md:flex-row items-stretch gap-6"
      onMouseEnter={() => setCurrentImage(hoverImage)}
      onMouseLeave={() => setCurrentImage(initialImage)}
    >
      {/* Left (40%): Phone Mockup */}
      <div className="md:w-2/5 w-full flex items-center justify-center relative p-4">
        <div className="relative w-48 h-96 bg-gray-800 rounded-[2.5rem] brutal-border-black shadow-lg overflow-hidden flex items-center justify-center">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-b-xl z-10">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-gray-700 rounded-full"></div> {/* Earpiece */}
          </div>
          {/* Screen */}
          <div className="relative w-[calc(100%-10px)] h-[calc(100%-10px)] bg-white rounded-[2rem] overflow-hidden">
            <img src={currentImage} alt="App Screenshot" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Right (60%): Text Content */}
      <div className="md:w-3/5 w-full flex flex-col justify-center p-4">
        <h3 className="text-3xl font-black mb-2">{title}</h3>
        <p className="text-gray-600 font-medium mb-4">{subtitle}</p>
        
        <div className="mb-4">
          <p className="font-bold text-gray-800 mb-1">💡 Problem:</p>
          <p className="text-sm text-gray-700">{problem}</p>
        </div>

        <div>
          <p className="font-bold text-gray-800 mb-1">🚀 Solution:</p>
          <p className="text-sm text-gray-700">{solution}</p>
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-brand-dark text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 w-full md:w-auto hover:bg-brand-blue transition-colors brutal-shadow"
          >
            View Project <ArrowRight size={18} />
          </a>
        )}
      </div>
    </div>
  );
}

function VibeWorkshop() {
  const products = [
    {
      type: 'showcase',
      mainImage: '/7.jpg',
      thumbnails: ['/7.jpg', '/8.jpg', '/9.jpg', '/10.png', '/11.png'],
      projectName: '彩虹之家网上购物商城',
      techStack: ['#Vue', '#SpringBoot', '#全栈开发'],
      description: '这是一个基于Vue和SpringBoot的全栈网上购物商城项目。它包含了用户管理、商品浏览、购物车、订单处理、支付集成等核心功能。致力于提供流畅的用户体验和稳定的后台服务。'
    },
    {
      type: 'appConceptShowcase',
      initialImage: '/12.png',
      hoverImage: '/13.png',
      title: 'MindJournal 灵感手记--App概念原型',
      subtitle: '用创意工具解决灵感焦虑',
      problem: '碎片化的灵感难以留存和整理。',
      solution: '打造一个支持想法嵌套和知识图谱化管理的极简助手，目前已跑通 MVP 核心 UI。',
      link: 'file:///C:/Users/%E4%B8%98%E5%AE%9D%E4%BC%B6/Desktop/index.html'
    },
    // Add more regular product cards here if needed
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
        <div>
          <div className="inline-block bg-brand-dark text-white text-xs font-bold px-3 py-1 rounded-md mb-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div> AI LAB
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            Vibe <span className="bg-brand-yellow text-brand-dark px-2 inline-block brutal-border">Workshop</span>
          </h2>
          <p className="text-gray-600 font-medium max-w-xl">
            为了让生活和工作简单、有趣一点点，和AI大脑折腾出来的一些代码边角料。
          </p>
        </div>
        
        <div className="w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="搜索产品..." 
              className="w-full md:w-64 bg-white brutal-border rounded-full py-3 pl-12 pr-4 outline-none focus:shadow-[4px_4px_0px_0px_#1a1a1a] transition-shadow"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        {products.map((product, index) => {
          if (product.type === 'showcase') {
            return (
              <ProjectShowcaseCard
                key={index}
                mainImage={product.mainImage}
                thumbnails={product.thumbnails}
                projectName={product.projectName}
                techStack={product.techStack}
                description={product.description}
              />
            );
          } else if (product.type === 'card') {
            return (
              <div key={index} className="bg-white brutal-border rounded-3xl p-8 brutal-shadow hover:-translate-y-2 transition-transform duration-300 bg-grid relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent z-0"></div>
                <div className="relative z-10">
                  <div className="inline-block bg-brand-dark text-white text-xs font-bold px-3 py-1 rounded-md mb-6">
                    ✦ {product.id}
                  </div>
                  <h3 className="text-3xl font-black mb-4">{product.title}</h3>
                  <div className="border-l-[3px] border-brand-dark pl-4 mb-8">
                    <p className="font-medium text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <button className="bg-white brutal-border px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 w-full hover:bg-brand-dark hover:text-white transition-colors">
                    View Product <ArrowRight size={18} />
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4 font-bold tracking-widest uppercase">
                    RELEASED ON {product.releaseDate}
                  </p>
                </div>
              </div>
            );
          } else if (product.type === 'appConceptShowcase') {
            return (
              <AppConceptShowcaseCard
                key={index}
                initialImage={product.initialImage}
                hoverImage={product.hoverImage}
                title={product.title}
                subtitle={product.subtitle}
                problem={product.problem}
                solution={product.solution}
                link={product.link}
              />
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}


function About() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="bg-brand-yellow brutal-border rounded-[2rem] p-8 md:p-16 brutal-shadow relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              关于我 | About Me
            </h2>
            <p className="text-brand-dark font-medium leading-relaxed mb-6 text-lg">
              你好！我是丘宝伶。 在真实世界里，我是一个热爱生活、拥有“活人感”的女孩。我喜欢做手工，<span className="bg-brand-pink text-white px-1 py-0.5 rounded">缝纫</span>各种小物件，我喜欢打<span className="bg-brand-blue text-white px-1 py-0.5 rounded">羽毛球</span>，享受和朋友们一起挥洒汗水，喜欢<span className="bg-purple-500 text-white px-1 py-0.5 rounded">弹电吉他</span>还喜欢穿漂亮衣服、对了我的日常还非常之养生，闲暇时会自学<span className="bg-white text-brand-dark px-1 py-0.5 rounded">中医</span>。
            </p>
            <p className="text-brand-dark font-medium leading-relaxed text-lg">
              而在数字宇宙中，我是一名狂热的 <span className="bg-brand-red text-white px-1 py-0.5 rounded">AIGC 探索者</span>与内容运营者。作为 AI 的追随者，我总是迫不及待地去上手最新的<span className="bg-brand-green text-white px-1 py-0.5 rounded">模型</span>，热衷于测试不同模型的能力边界，并致力于将前沿技术转化为高效的<span className="bg-brand-blue text-white px-1 py-0.5 rounded">创意生产力</span>。<br /> 从缝制一件衣服到跑通一个复杂的 AI 工作流，我都在以 100% 的热情探索着这个庞大而有趣的世界。我相信“<span className="bg-brand-yellow text-white px-1 py-0.5 rounded">AI-First</span>”不仅是解决问题的新路径，更是释放个人创造力的魔法！
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-square bg-white brutal-border rounded-2xl brutal-shadow transform rotate-3 flex items-center justify-center overflow-hidden">
              <img src="/Gemini_Generated_Image_i6l22hi6l22hi6l2.png" alt="ID Card" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Articles() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          我的运营项目 <span className="bg-brand-blue text-white px-3 py-1 inline-block transform rotate-2">Operation</span>
        </h2>
        <p className="text-gray-600 font-medium">分享我的技术见解和生活感悟。</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white brutal-border rounded-2xl p-6 brutal-shadow hover:-translate-y-2 transition-transform duration-300">
            {i === 1 ? (
              <img src="/data_report.png" alt="Data Report" className="w-full h-auto object-cover rounded-lg" />
            ) : i === 3 ? (
              <img src="/图片3.png" alt="Image 3" className="w-full h-auto object-cover rounded-lg" />
            ) : i === 2 ? (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-brand-dark text-white text-xs font-bold px-2 py-1 rounded">2025.12</span>
                </div>
                <h3 className="text-2xl font-black mb-3">从“0-1”独立运营项目</h3>
                <p className="text-gray-600 font-medium mb-6">
                  项目概述：<br />
                  独立负责快手短视频账号“晚风浮过”。账号精准定位“女频情感”赛道，通过“高共鸣小说文案改编 + 氛围感视频混剪”打造出多支百万级播放爆款<br />
                  <br />
                  核心数据与成果：<br />
                  粉丝增长： 从 0 增长至近 4,000<br />
                  互动数据： 累计获赞量突破 20.7万，作品总数108支。<br />
                  爆款打造： 成功孵化多条爆款视频，其中视频最高播放量达 272万<br />
                  <br />
                  核心能力体现<br />
                  1. 极具共情力，能精准捕捉女性用户情感痛点与审美偏好<br />
                  2. 具备从0到1独立完成策划、剪辑到平台运营的执行力<br />
                  3.以客观数据指导内容方向，能快速沉淀并优化爆款SOP
                </p>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-brand-dark text-white text-xs font-bold px-2 py-1 rounded">2023.12</span>
                </div>
                <h3 className="text-2xl font-black mb-3">从“0-1”独立运营项目</h3>
                <p className="text-gray-600 font-medium mb-6">
                  项目概述：<br />
                  独立负责职场生存类短视频账号“胡八一的经营笔记”。账号精准定位“职场/管理”垂直高净值人群，通过“管理痛点剖析+AI画面高效视频制作”模式，将硬核干货转化为具有高分享价值的视频<br />
                  <br />
                  核心数据与成果：<br />
                  1.跑通标准化制作流程，累计发布专业知识短视频 50+ 支。<br />
                  2.在垂直赛道获得稳定流量，单支视频最高播放量达 5.5万。<br />
                  3.沉淀了几套ai稳定生图的prompt<br />
                  <br />
                  核心能力体现：<br />
                  1. 极具共情力，能精准捕捉女性用户情感痛点与审美偏好<br />
                  2.“AI+内容”的数字化运营思维： 熟练引入并应用数字化赋能内容，提升专业内容的量产效率。<br />
                  3.B端/职场人群心理洞察： 区别于泛娱乐内容，深度理解职场人群“寻求解决方案”与“表达职场诉求”的社交心理
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

interface Video {
  title: string;
  duration: string;
  link: string;
  thumbnail?: string;
}

interface VideoProps {
  title: string;
  description: string | JSX.Element;
  videos: Video[];
  titleSpanContent?: string;
  titleSpanClass?: string;
}

function Videos({ title, description, videos, titleSpanContent, titleSpanClass }: VideoProps) {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          {title} {titleSpanContent && <span className={titleSpanClass || "bg-brand-pink text-white px-3 py-1 inline-block transform -rotate-2"}>{titleSpanContent}</span>}
        </h2>
        <p className="text-gray-600 font-medium">{description}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <a href={video.link} target="_blank" rel="noopener noreferrer" key={index} className="bg-white brutal-border rounded-2xl overflow-hidden brutal-shadow hover:-translate-y-2 transition-transform duration-300 block">
            <div className="aspect-video bg-brand-bg brutal-border-b flex items-center justify-center relative group cursor-pointer">
              {video.thumbnail ? (
                <img src={video.thumbnail} alt={video.title} className="absolute inset-0 w-full h-full object-cover" />
              ) : null}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <div className="w-16 h-16 bg-white brutal-border rounded-full flex items-center justify-center brutal-shadow-sm group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-brand-red border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black mb-2">{video.title}</h3>
              <p className="text-gray-500 text-sm font-medium">时长: {video.duration} · 播放量: N/A</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

const bilibiliVideoList: Video[] = [
  { title: "Bilibili Video 1", duration: "2:30", link: "https://www.bilibili.com/video/BV1xxxx" },
  { title: "Bilibili Video 2", duration: "5:00", link: "https://www.bilibili.com/video/BV2xxxx" },
  { title: "Bilibili Video 3", duration: "1:15", link: "https://www.bilibili.com/video/BV3xxxx" },
];

const douyinVideoList: Video[] = [
  {
    title: "先完成再完美的作品】AI时代，如何打造不可替代的核心竞争力",
    duration: "1:07",
    link: "https://v.douyin.com/rCzuJyJ1fvY/",
    thumbnail: "/1.jpg",
  },
  {
    title: "先完成再完美的作品】# 阅读分享 # 提升自己 # 长期主义 # 纳瓦...",
    duration: "9:48",
    link: "https://v.douyin.com/5HiegHyGZ1A/",
    thumbnail: "/2.jpg",
  },
  {
    title: "先完成再完美的作品】坚持写成功日记，人生真的会变顺# 成功日记 # 正...",
    duration: "3:33",
    link: "https://v.douyin.com/4fZA1o0AYXw/",
    thumbnail: "/3.jpg",
  },
];

const aiVideoList: Video[] = [
  { title: "AI广告片", duration: "7:00", link: "#", thumbnail: "/5.png" },
  { title: "AI动漫短片创作分享", duration: "10:30", link: "#", thumbnail: "/4.png" },
  { title: "AI高奢侈广告", duration: "4:10", link: "#", thumbnail: "/6.png" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('首页');
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pt-24">
        {activeTab === '首页' && (
          <>
            <Hero setShowContactModal={setShowContactModal} setActiveTab={setActiveTab} />

          </>
        )}
        {activeTab === '关于我' && (
          <>
            <About />
            <RecentUpdates />
            <Timeline />
          </>
        )}
        {activeTab === '运营项目' && <Articles />}
        {activeTab === '视频' && (
          <>

            <Videos 
              title="抖音" 
              description="在 抖音 上分享我的日常和教程。" 
              videos={douyinVideoList} 
              titleSpanContent="分享账号"
              titleSpanClass="bg-brand-red text-white px-3 py-1 inline-block transform -rotate-2"
            />
            <Videos 
              title="AI视频" 
              description={<>极速跳转链接（包含创作思路）： <a href="https://fcnpmetonrl2.feishu.cn/wiki/C9mTwhXd5inoyEkf16rcYbInnRe?from=from_copylink" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://fcnpmetonrl2.feishu.cn/wiki/C9mTwhXd5inoyEkf16rcYbInnRe?from=from_copylink</a></>} 
              videos={aiVideoList}
              titleSpanContent="AIGC"
              titleSpanClass="bg-brand-pink text-white px-3 py-1 inline-block transform rotate-2"
            />
          </>
        )}
        {activeTab === '产品' && <VibeWorkshop />}
      </main>

      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl brutal-border brutal-shadow-lg relative">
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 bg-white text-brand-dark p-2 rounded-xl brutal-border brutal-shadow-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">联系方式</h3>
            <p className="text-lg mb-2">我的邮箱：1306926368@qq.com</p>
            <p className="text-lg">我的微信：THEbx28</p>
          </div>
        </div>
      )}
      
      <footer className="py-8 text-center text-gray-500 font-medium text-sm">
        <p>© {new Date().getFullYear()} John Carter. All rights reserved.</p>
      </footer>
    </div>
  );
}

