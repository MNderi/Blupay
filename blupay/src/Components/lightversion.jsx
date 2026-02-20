import React from "react";
import { ArrowUpRight,Sparkles, Zap,Percent} from "lucide-react";
import { GiAfrica} from "react-icons/gi";
import { FaWhatsapp,FaLinkedin } from "react-icons/fa";
import glowingAfrica from "../MapofAfrica (black).png";

import { useState } from "react";
import { WaitlistForm } from "./WaitlistForm";



export function LandingPage() {

  const [isFormOpen,setIsFormOpen]=useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-100 via-blue-50/60 to-slate-100 text-slate-900 overflow-hidden selection:bg-[#2D7CF6]/20">
      
      
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[0%] left-[-5%] w-[400px] h-[400px] bg-sky-300/10 rounded-full blur-[80px] pointer-events-none" />

      {/* NAVBAR */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#2D7CF6] text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <ArrowUpRight size={22} strokeWidth={3}/>
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-slate-900">BluPay</h1>
        </div>
        <button 
        onClick={()=>setIsFormOpen(true)}        
        className="bg-slate-900 text-white md:px-6 md:py-2.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-bold hover:bg-slate-800 transition-all shadow-md">
          Join Waitlist
        </button>
      </nav>

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-16 pb-16 md:pt-12 pt-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-[#2D7CF6] px-4 py-1.5 rounded-full text-xs font-bold border border-blue-200 tracking-wide uppercase">
              <Sparkles size={14} /> Near-zero fees
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl text-black lg:text-6xl font-bold leading-tight">
                        SEND MONEY <br />
                        ACROSS AFRICA{" "}
                        <span className="text-blue-500">INSTANTLY</span>
            </h2>

            <p className="text-slate-500 mt-8 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl leading-relaxed">
              No queues. No delays. Send money across African countries in
              seconds — as easily as sending a message.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-12 max-w-lg mx-auto lg:mx-0">
              <button 
              onClick={()=>setIsFormOpen(true)}
              className="w-full sm:w-auto bg-[#2D7CF6] hover:bg-blue-600 transition-all px-10 py-4 rounded-2xl font-bold text-white shadow-xl shadow-blue-500/25 whitespace-nowrap">
                GET EARLY ACCESS
              </button>
                {/* ModalOverlay */}
                {isFormOpen &&( <div className=" fixed inset-0 z-[100] flex items-center justify-center p-6">

                  {/* backdrop-blur */}
                  <div className=" absolute inset-0 bg-slate-900/40 backdrop-blur-sm" 
                  onClick={()=>setIsFormOpen(false)}/>
                   {/* the actualform */}
                   <div className="relative z-90 w-full max-w-md animate-in fade-in zoom-in duration-300">
                          <WaitlistForm onClose={()=>setIsFormOpen(false)}/>        
                  </div>


                </div>) }

            </div>
              <p className="text-xs font-medium text-slate-500 mt-5 text-black/50">
                  Join <span className="text-black">33+ Africans</span> already connected.
              </p>
          </div>
          <div className="relative flex justify-center lg:justify-end">
             <div className="relative z-10 w-full max-w-[500px]">
                <img 
                  src={glowingAfrica} 
                  className="w-full h-auto drop-shadow-[0_20px_50px_rgba(45,124,246,0.2)]" 
                  alt="Africa Network"
                />
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100 rounded-full blur-[120px] -z-10 opacity-60" />
          </div>
        </div>
      </section>
      
      <section className="relative z-5 px-6 md:px-16 pb-10 overflow-hidden">
        <h3 className="text-blupay-blue font-bold text-3xl mb-6">
          BUILT IN FEATURES
        </h3>
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
          <div className="w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "INSTANT SETTLEMENT",
              text: "Instant cross-border transfers at the speed of light.",
              icon: <Zap size={24} />,
            },
            {
              title: "CONVERSATIONAL PAYMENTS",
              text: "Send money through a simple chat-style interface.",
              icon: <FaWhatsapp size={24} />,
            },
            {
              title: "LOW TRANSPARENT FEES",
              text: "Just 1–2%. What you see is what you pay.",
              icon: <Percent size={24} />,
            },
            {
              title: "PAN-AFRICAN NETWORK",
              text: "Built for African currencies, mobile money, and banks.",
              icon: <GiAfrica size={24} />,
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-10 border border-slate-200 
              shadow-sm hover:shadow-lg 
              hover:-translate-y-1 
              transition-shadow transition-transform transition-colors duration-300
              group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 
              text-[#2D7CF6] 
              group-hover:bg-blupay-gold group-hover:text-white 
              transition-colors duration-300">
                {feature.icon}
              </div>

              <h4 className="font-bold mb-4 tracking-tight text-xl text-slate-900">
                {feature.title}
              </h4>

              <p className="text-slate-500 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
</section>

      {/* <section className="relative z-10 px-5 sm:px-8 md:px-16 pb-10">
        <div className="relative bg-gradient-to-br from-[#2D7CF6] to-[#60A5FA] rounded-2xl border border-white/10 p-8 sm:p-12 overflow-hidden">
          
          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgba(255,255,255,0.2)] pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl font-bold text-center md:text-left text-white">
            JOIN THE FINANCIAL{" "}
            <span className="text-[#E8B931]">REVOLUTION</span>
          </h3>

          <p className="text-blue-50 mt-4 max-w-xl text-sm sm:text-base text-center md:text-left">
            Be the first to experience effortless cross-border payments across
            Africa.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="mt-8 bg-white text-[#2D7CF6] hover:bg-blue-50 transition px-6 py-3 rounded-lg font-medium text-sm">
              JOIN WAITLIST
            </button>
          </div>

          <div className="absolute right-6 bottom-6 text-[#E8B931] opacity-70 hidden sm:block">
            <ArrowUpRight size={54}/>
          </div>
        </div>
      </section> */}

    <footer className=" relative z-5 w-full px-6 md:px-16 mt-20 mb-12">
          <div className="max-w-7xl mx-auto border-t border-slate-500 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-sm font-medium text-slate-500 text-center md:text-left">
          
          <div className="order-2 md:order-1">
            © 2026 Blupay Technologies, Inc.
          </div>

          <div className="order-1 md:order-2">
            <a 
              href="https://www.linkedin.com/company/blu-pay/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#2D7CF6] transition-colors p-2"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          <div className="order-3">
            <a 
              href="https://www.linkedin.com/company/blu-pay/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#2D7CF6] transition-colors uppercase tracking-widest text-[10px] sm:text-xs"
            >
              Contact Us
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}