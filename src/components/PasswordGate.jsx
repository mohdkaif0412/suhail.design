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

function borderColor(focused, hasValue, isError) {
  if (isError) return '#dc2626';
  if (focused) return '#ffffff';
  if (hasValue) return '#555555';
  return '#252525';
}

function InputField({ type = 'text', placeholder, value, onChange, onKeyDown }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        width: '100%',
        background: '#111',
        border: `1px solid ${borderColor(focused, value.length > 0, false)}`,
        borderRadius: 12,
        padding: '14px 16px',
        fontSize: 14,
        color: '#fff',
        outline: 'none',
        fontFamily: 'inherit',
        boxSizing: 'border-box',
        transition: 'border-color 0.2s',
      }}
    />
  );
}

function TextAreaField({ placeholder, value, onChange, rows = 4 }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        width: '100%',
        background: '#111',
        border: `1px solid ${borderColor(focused, value.length > 0, false)}`,
        borderRadius: 12,
        padding: '14px 16px',
        fontSize: 14,
        color: '#fff',
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
        boxSizing: 'border-box',
        transition: 'border-color 0.2s',
      }}
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

  const handleSend = () => {
    if (!form.name || !form.contact || !form.reason) {
      setError('Fill everything in, please.');
      return;
    }
    setSubmitted(true);
    setError('');
  };

  if (unlocked) return <>{children}</>;

  return (
    <div style={{
      minHeight: '100vh',
      background: '#050505',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
    }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <div style={{
          background: '#0a0a0a',
          border: '1px solid #1a1a1a',
          borderRadius: 20,
          overflow: 'hidden',
          position: 'relative',
        }}>

          {/* Close button — goes back to projects */}
          <button
            onClick={() => router.push('/projects')}
            style={{
              position: 'absolute', top: 16, right: 16,
              background: '#1a1a1a', border: '1px solid #252525',
              borderRadius: '50%', width: 32, height: 32,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#555', zIndex: 10,
              transition: 'color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = '#252525'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.background = '#1a1a1a'; }}
            aria-label="Close"
          >
            <CloseIcon />
          </button>

          {/* ── ENTER PASSWORD ── */}
          {view === 'enter' && (
            <div style={{ padding: 28 }}>
              <h2 style={{
                color: '#fff', fontSize: 13, fontWeight: 800,
                letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 6px',
              }}>Enter Password</h2>
              <p style={{ color: '#444', fontSize: 13, margin: '0 0 22px', lineHeight: 1.6 }}>
                This project is locked. Request access at{' '}
                <a href="mailto:sirsuhail01@gmail.com" style={{ color: '#a78bfa', textDecoration: 'none' }}>
                  sirsuhail01@gmail.com
                </a>
              </p>

              <div style={{
                border: '1px solid #2a2a2a', borderRadius: 14,
                overflow: 'hidden', marginBottom: 22, background: '#000',
              }}>
                <img
                  src={MEME_SRC}
                  alt="Protected case study"
                  style={{
                    width: '100%', display: 'block', maxHeight: 260,
                    objectFit: 'cover', objectPosition: 'center top',
                    filter: 'brightness(0.88) contrast(1.05)',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#111',
                  border: `1px solid ${borderColor(passFocused, password.length > 0, !!error)}`,
                  borderRadius: 12,
                  padding: '0 14px',
                  marginBottom: 10,
                  transition: 'border-color 0.2s',
                  animation: shake ? 'shake 0.4s ease' : 'none',
                  boxSizing: 'border-box',
                }}
              >
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                  onFocus={() => setPassFocused(true)}
                  onBlur={() => setPassFocused(false)}
                  style={{
                    flex: 1, background: 'transparent', border: 'none',
                    outline: 'none', color: '#fff', fontSize: 14,
                    padding: '14px 0', fontFamily: 'inherit',
                  }}
                />
                <button
                  onClick={() => setShowPass(!showPass)}
                  style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                >
                  {showPass ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>

              {error && (
                <p style={{ color: '#ef4444', fontSize: 12, margin: '0 0 12px' }}>{error}</p>
              )}

              <button
                onClick={handleUnlock}
                style={{
                  width: '100%', padding: '15px 0', borderRadius: 12,
                  fontSize: 13, fontWeight: 800, letterSpacing: '0.12em',
                  textTransform: 'uppercase', background: '#fff', color: '#000',
                  border: 'none', cursor: 'pointer', marginBottom: 10, transition: 'transform 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                View Project →
              </button>

              <button
                onClick={() => setView('request')}
                style={{
                  width: '100%', padding: '15px 0', borderRadius: 12,
                  fontSize: 13, fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', background: 'transparent', color: '#fff',
                  border: '1px solid #252525', cursor: 'pointer', transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#111'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                Request Password
              </button>
            </div>
          )}

          {/* ── REQUEST ACCESS ── */}
          {view === 'request' && !submitted && (
            <div style={{ padding: '28px 28px 32px' }}>
              <button
                onClick={() => { setView('enter'); setError(''); }}
                style={{
                  background: 'none', border: 'none', color: '#555', cursor: 'pointer',
                  padding: 0, display: 'flex', alignItems: 'center', gap: 6,
                  marginBottom: 20, fontSize: 13, transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#555'}
              >
                <ArrowLeftIcon /> Back
              </button>

              <h2 style={{
                color: '#fff', fontSize: 13, fontWeight: 800,
                letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 6px',
              }}>Request Password</h2>
              <p style={{ color: '#444', fontSize: 13, margin: '0 0 20px', lineHeight: 1.6 }}>
                Tell me who you are and why you'd like to peek inside.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
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
                  placeholder="Reason to view case study…"
                  value={form.reason}
                  onChange={(e) => { setForm({ ...form, reason: e.target.value }); setError(''); }}
                />
              </div>

              {error && (
                <p style={{ color: '#ef4444', fontSize: 12, margin: '10px 0 0' }}>⚠️ {error}</p>
              )}

              <button
                onClick={handleSend}
                style={{
                  width: '100%', marginTop: 16, padding: '15px 0', borderRadius: 12,
                  fontSize: 13, fontWeight: 800, letterSpacing: '0.12em',
                  textTransform: 'uppercase', background: '#fff', color: '#000',
                  border: 'none', cursor: 'pointer', transition: 'transform 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Send Request
              </button>
            </div>
          )}

          {/* ── SUBMITTED ── */}
          {view === 'request' && submitted && (
            <div style={{ padding: '52px 28px', textAlign: 'center' }}>
              <div style={{ fontSize: 52, marginBottom: 16 }}>📨</div>
              <h2 style={{
                color: '#fff', fontSize: 13, fontWeight: 800,
                letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 8px',
              }}>Request Sent!</h2>
              <p style={{ color: '#555', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                I'll review your request and get back to you shortly.
              </p>
              <button
                onClick={() => { setView('enter'); setSubmitted(false); setForm({ name: '', contact: '', reason: '' }); }}
                style={{
                  marginTop: 24, padding: '10px 24px', borderRadius: 10,
                  fontSize: 12, fontWeight: 600, background: 'transparent',
                  color: '#555', border: '1px solid #1e1e1e', cursor: 'pointer',
                }}
              >
                ← Back
              </button>
            </div>
          )}
        </div>

       
        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-6px); }
            80% { transform: translateX(6px); }
          }
          input::placeholder, textarea::placeholder { color: #3a3a3a; }
        `}</style>
      </div>
    </div>
  );
}
