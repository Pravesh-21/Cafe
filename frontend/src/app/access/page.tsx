'use client';

import { useState } from 'react';
import { useScrollAnim } from '@/components/useScrollAnim';

export default function AccessPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const titleRef = useScrollAnim({ y: 30, duration: 1 });
  const formRef = useScrollAnim({ y: 40, duration: 1.2, delay: 0.1 });

  const handleReservationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Access successfully requested.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Reservation connection error:', err);
      setStatus('error');
      setMessage('Failed to connect to server. Please try again later.');
    }
  };

  return (
    <main className="relative min-h-screen bg-[#FAF7F0] text-[#1E1815] overflow-hidden pt-24 pb-24">
      <section className="relative min-h-[70vh] px-6 md:px-12 lg:px-24 flex flex-col justify-center">
        <div className="max-w-xl w-full mx-auto">
          <div ref={titleRef}>
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-black text-[#B5654A] mb-4 block">SECURE ACCESS</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#1E1815] uppercase tracking-tight leading-none mb-6">
              REQUEST A SEAT AT THE BAR.
            </h2>
            <p className="font-sans text-base text-[#1E1815]/70 mb-12">
              We operate on a limited extraction schedule. Request premium membership credentials today to unlock the reserve list.
            </p>
          </div>

          <div ref={formRef}>
            <form onSubmit={handleReservationSubmit} className="flex flex-col gap-6">
              <div className="border-b-2 border-[#1E1815] pb-2">
                <input
                  type="email"
                  required
                  disabled={status === 'submitting'}
                  placeholder="EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent w-full font-display text-sm uppercase tracking-wider text-[#1E1815] placeholder-[#1E1815]/40 focus:outline-none disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-[#1E1815] hover:bg-[#B5654A] text-white font-display text-xs uppercase tracking-widest py-4 px-8 font-black transition-all self-start disabled:opacity-50 shadow-md"
              >
                {status === 'submitting' ? 'Requesting Access...' : 'Request Access'}
              </button>
            </form>

            {message && (
              <div
                className={`mt-6 p-4 border font-sans text-sm tracking-wider uppercase rounded transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-emerald-50 border-emerald-500/20 text-emerald-800'
                    : 'bg-rose-50 border-rose-500/20 text-rose-800'
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
