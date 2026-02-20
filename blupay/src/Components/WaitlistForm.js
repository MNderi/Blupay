import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { X, ChevronDown } from "lucide-react";

const africanCountries = [
  "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", 
  "Central African Republic", "Chad", "Comoros", "Congo", "Djibouti", "Egypt", "Equatorial Guinea", 
  "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", 
  "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", 
  "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", 
  "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", 
  "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
];

export function WaitlistForm({ onClose }) {
  const [state, handleSubmit] = useForm("xeelzrwv");

  if (state.succeeded) {
    return (
      <div className="text-center p-8 md:p-12 bg-white rounded-[2rem] shadow-2xl border border-slate-100 max-w-[95vw] mx-auto">
        <div className="w-16 h-16 bg-blue-50 text-[#2D7CF6] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 tracking-tighter">YOU'RE ON THE LIST!</h3>
        <p className="text-slate-500 text-sm">We'll notify you the moment BluPay goes live.</p>
        <button onClick={onClose} className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm w-full md:w-auto">DONE</button>
      </div>
    );
  }

  return (
    /* Added max-h and overflow-y-auto so the form is scrollable on short phones */
    <div className="relative bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl w-full max-w-md border border-slate-100 max-h-[90vh] overflow-y-auto">
      <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-slate-600 transition-colors z-20">
        <X size={20} />
      </button>

      <div className="mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-black tracking-tighter text-slate-900">JOIN THE WAITLIST</h3>
        <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium">Be part of the financial revolution.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
        <div>
          <label className="block text-[10px] font-black tracking-[0.15em] text-slate-400 uppercase mb-1.5 ml-1" htmlFor="name">Full Name</label>
          <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 md:py-3.5 text-sm focus:ring-2 focus:ring-[#2D7CF6] focus:border-transparent outline-none transition-all" id="name" name="name" required placeholder="Enter your full name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-[10px] mt-1 font-bold" />
        </div>

        <div>
          <label className="block text-[10px] font-black tracking-[0.15em] text-slate-400 uppercase mb-1.5 ml-1" htmlFor="email">Email Address</label>
          <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 md:py-3.5 text-sm focus:ring-2 focus:ring-[#2D7CF6] focus:border-transparent outline-none transition-all" id="email" type="email" name="email" required placeholder="email@address.com" />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] mt-1 font-bold" />
        </div>

        <div>
          <label className="block text-[10px] font-black tracking-[0.15em] text-slate-400 uppercase mb-1.5 ml-1" htmlFor="country">Which country are you most likely to transact with</label>
          <div className="relative">
            <select 
              id="country" 
              name="country" 
              required
              defaultValue=""
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 md:py-3.5 text-sm focus:ring-2 focus:ring-[#2D7CF6] focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>Select a country</option>
              {africanCountries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
              <ChevronDown size={16} />
            </div>
          </div>
          <ValidationError prefix="Country" field="country" errors={state.errors} className="text-red-500 text-[10px] mt-1 font-bold" />
        </div>

        <button 
          className="w-full bg-[#2D7CF6] text-white font-black py-3.5 md:py-4 rounded-xl mt-4 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed tracking-widest text-[10px] md:text-xs" 
          type="submit" 
          disabled={state.submitting}
        >
          {state.submitting ? "SENDING..." : "GET EARLY ACCESS"}
        </button>
      </form>
    </div>
  );
}