'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const MEME_SRC = '/FirstDesign.svg';
const CORRECT_PASSWORD = 'suhail2024';

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

function InputField({ type = 'text', placeholder, value, onChange, onKeyDown }) {
  const [focused, setFocused] = useState(false);
  const border =
    focused ? 'border-white' : value.length > 0 ? 'border-[#555]' : 'border-[#252525]';
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={`w-full bg-[#111] ${border} border rounded-xl px-4 py-3.5 text-sm text-white outline-none font-sans transition-colors duration-200 placeholder:text-[#3a3a3a]`}
    />
  );
}

function TextAreaField({ placeholder, value, onChange, rows = 4 }) {
  const [focused, setFocused] = useState(false);
  const border =
    focused ? 'border-white' : value.length > 0 ? 'border-[#555]' : 'border-[#252525]';
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={`w-full bg-[#111] ${border} border rounded-xl px-4 py-3.5 text-sm text-white outline-none font-sans resize-none transition-colors duration-200 placeholder:text-[#3a3a3a]`}
    />
  );
}

export default function PasswordGate({ children }) {
  const router = useRouter();
  const [view, setView] = useState('enter');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [passFocused, setPassFocused] = useState(false);
  const [error, setError] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '', reason: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [shake, setShake] = useState(false);

  const handleUnlock = () => {
    if (password === CORRECT_PASSWORD) {
      setUnlocked(true);
      setError('');
    } else {
      setError("Nope. Not even close. 💀");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleSend = async () => {
    if (!form.name || !form.contact || !form.reason) {
      setError('Fill everything in, please.');
      return;
    }
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/request-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Failed to send. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (unlocked) return <>{children}</>;

  const passBorderCls = error
    ? 'border-red-600'
    : passFocused
    ? 'border-white'
    : password.length > 0
    ? 'border-[#555]'
    : 'border-[#252525]';

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 py-6 font-sans">
      <div className="w-full max-w-[420px]">
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-[20px] overflow-hidden relative">

          {/* Close button */}
          <button
            onClick={() => router.back()}
            className="absolute top-4 right-4 bg-[#1a1a1a] border border-[#252525] rounded-full w-8 h-8 flex items-center justify-center text-[#555] z-10 hover:text-white hover:bg-[#252525] transition-colors duration-200 cursor-pointer"
            aria-label="Close"
          >
            <CloseIcon />
          </button>

          {/* ── ENTER PASSWORD ── */}
          {view === 'enter' && (
            <div className="p-7">
              <h2 className="text-white text-[13px] font-extrabold tracking-[0.18em] uppercase mb-1.5">
                Enter Password
              </h2>
              <p className="text-[#888] text-[13px] mb-5 leading-relaxed">
                Request access below or mail at{' '}
                <a
                  href="mailto:sirsuhail01@gmail.com"
                  className="text-white font-bold no-underline"
                >
                  sirsuhail01@gmail.com
                </a>
              </p>

              {/* Meme image */}
              <div className="border border-[#2a2a2a] rounded-[14px] overflow-hidden mb-5 bg-black">
                <img
                  src={MEME_SRC}
                  alt="Protected case study"
                  className="w-full block max-h-[260px] object-cover object-top brightness-[0.88] contrast-[1.05]"
                />
              </div>

              {/* Password input */}
              <div
                className={`flex items-center bg-[#111] border ${passBorderCls} rounded-xl px-3.5 mb-2.5 transition-colors duration-200 ${shake ? 'animate-shake' : ''}`}
              >
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                  onFocus={() => setPassFocused(true)}
                  onBlur={() => setPassFocused(false)}
                  className="flex-1 bg-transparent border-none outline-none text-white text-sm py-3.5 font-sans placeholder:text-[#3a3a3a]"
                />
                <button
                  onClick={() => setShowPass(!showPass)}
                  className="bg-transparent border-none text-[#555] cursor-pointer p-0 flex items-center"
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                >
                  {showPass ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>

              {error && (
                <p className="text-red-500 text-xs mb-3">{error}</p>
              )}

              <button
                onClick={handleUnlock}
                className="w-full py-[15px] rounded-xl text-[13px] font-extrabold tracking-[0.12em] uppercase bg-white text-black border-none cursor-pointer mb-2.5 hover:scale-[1.02] transition-transform duration-150"
              >
                View Project →
              </button>

              <button
                onClick={() => setView('request')}
                className="w-full py-[15px] rounded-xl text-[13px] font-bold tracking-[0.08em] uppercase bg-transparent text-white border border-[#252525] cursor-pointer hover:bg-[#111] transition-colors duration-200"
              >
                Request Password
              </button>
            </div>
          )}

          {/* ── REQUEST ACCESS ── */}
          {view === 'request' && !submitted && (
            <div className="p-7 pb-8">
              <button
                onClick={() => { setView('enter'); setError(''); }}
                className="bg-transparent border-none text-[#555] cursor-pointer p-0 flex items-center gap-1.5 mb-5 text-[13px] hover:text-white transition-colors duration-200"
              >
                <ArrowLeftIcon /> Back
              </button>

              <h2 className="text-white text-[13px] font-extrabold tracking-[0.18em] uppercase mb-1.5">
                Request Password
              </h2>
              <p className="text-[#444] text-[13px] mb-5 leading-relaxed">
                Tell me who you are and why you'd like to peek inside. If your email is provided, I'll reply directly.
              </p>

              <div className="flex flex-col gap-2.5">
                <InputField
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setError(''); }}
                />
                <InputField
                  placeholder="Email or Contact Number"
                  value={form.contact}
                  onChange={(e) => { setForm({ ...form, contact: e.target.value }); setError(''); }}
                />
                <TextAreaField
                  placeholder="Why do you want to view this case study?"
                  value={form.reason}
                  onChange={(e) => { setForm({ ...form, reason: e.target.value }); setError(''); }}
                />
              </div>

              {error && (
                <p className="text-red-500 text-xs mt-2.5">⚠️ {error}</p>
              )}

              <button
                onClick={handleSend}
                disabled={sending}
                className="w-full mt-4 py-[15px] rounded-xl text-[13px] font-extrabold tracking-[0.12em] uppercase bg-white text-black border-none cursor-pointer hover:scale-[1.02] transition-transform duration-150 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {sending ? 'Sending…' : 'Send Request'}
              </button>
            </div>
          )}

          {/* ── SUBMITTED ── */}
          {view === 'request' && submitted && (
            <div className="px-7 py-[52px] text-center">
              <div className="text-[52px] mb-4">📨</div>
              <h2 className="text-white text-[13px] font-extrabold tracking-[0.18em] uppercase mb-2">
                Request Sent!
              </h2>
              <p className="text-[#555] text-[13px] leading-relaxed">
                I've received your request and will get back to you shortly.{' '}
                {form.contact.includes('@') && 'Check your inbox for a confirmation.'}
              </p>
              <button
                onClick={() => {
                  setView('enter');
                  setSubmitted(false);
                  setForm({ name: '', contact: '', reason: '' });
                }}
                className="mt-6 px-6 py-2.5 rounded-[10px] text-xs font-semibold bg-transparent text-[#555] border border-[#1e1e1e] cursor-pointer"
              >
                ← Back
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%  { transform: translateX(-8px); }
          40%  { transform: translateX(8px); }
          60%  { transform: translateX(-6px); }
          80%  { transform: translateX(6px); }
        }
        .animate-shake { animation: shake 0.4s ease; }
      `}</style>
    </div>
  );
}
