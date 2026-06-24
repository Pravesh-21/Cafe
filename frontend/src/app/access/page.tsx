'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ReservationResponse {
  id: string;
  name: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  notes: string;
  createdAt: string;
}

export default function AccessPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '2',
    date: '',
    time: '7:00 PM',
    notes: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmedData, setConfirmedData] = useState<ReservationResponse | null>(null);

  // Set minimum date to today
  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDate(`${yyyy}-${mm}-${dd}`);
    // Set default date to today
    setFormData((prev) => ({ ...prev, date: `${yyyy}-${mm}-${dd}` }));
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReservationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setConfirmedData(data.data);
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Reservation submission error:', err);
      setStatus('error');
      setErrorMessage('Failed to connect to server. Please ensure the backend is running.');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setConfirmedData(null);
    setFormData({
      name: '',
      email: '',
      guests: '2',
      date: minDate,
      time: '7:00 PM',
      notes: '',
    });
  };

  // Format date to readable string
  const formatReadableDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <main className="relative min-h-screen bg-[#FAF7F0] text-[#1E1815] overflow-hidden pt-28 pb-24">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#E6C84F]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#B5654A]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Page Header */}
        <div className="text-center md:text-left mb-12 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs uppercase tracking-[0.3em] font-black text-[#B5654A] mb-3 block"
          >
            Table Reservation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-[#1E1815] uppercase tracking-tight leading-[0.9] mb-4"
          >
            Reserve Your Corner.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic text-[#1E1815]/60 text-base md:text-lg leading-relaxed"
          >
            Book your seat in our biophilic sanctuary. Sip, dine, and immerse yourself in the ultimate aesthetic cafe experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: Reservation info & experience (Spans 5/12) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-5 space-y-8 lg:sticky lg:top-28"
          >
            {/* Dining Slots */}
            <div className="bg-white/45 backdrop-blur-md border border-[#1E1815]/5 p-6 md:p-8 rounded-3xl shadow-sm">
              <h3 className="font-display text-lg font-black text-[#1E1815] uppercase tracking-wider mb-4 border-b border-[#1E1815]/5 pb-3">
                Dining Hours
              </h3>
              <div className="space-y-4 font-sans text-xs text-[#1E1815]/80">
                <div className="flex justify-between items-center">
                  <span className="font-bold uppercase tracking-wider">Morning & Brews</span>
                  <span>11:00 AM — 3:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold uppercase tracking-wider">High Tea & Snacks</span>
                  <span>3:00 PM — 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold uppercase tracking-wider">Dinner & Mocktails</span>
                  <span>7:00 PM — 11:00 PM</span>
                </div>
                <div className="pt-2 text-[10px] text-[#B5654A] font-bold uppercase tracking-widest">
                  ★ Open Daily Monday to Sunday
                </div>
              </div>
            </div>

            {/* Experience Guidelines */}
            <div className="bg-white/45 backdrop-blur-md border border-[#1E1815]/5 p-6 md:p-8 rounded-3xl shadow-sm">
              <h3 className="font-display text-lg font-black text-[#1E1815] uppercase tracking-wider mb-4 border-b border-[#1E1815]/5 pb-3">
                Important Guidelines
              </h3>
              <ul className="space-y-3 font-sans text-xs text-[#1E1815]/70 list-disc pl-4 leading-relaxed">
                <li>
                  <strong className="text-[#1E1815]">Grace Period:</strong> We hold reserved tables for a maximum of 15 minutes past the booking time before releasing them.
                </li>
                <li>
                  <strong className="text-[#1E1815]">Group Bookings:</strong> For groups larger than 8 guests, please reach out to us directly via phone or email.
                </li>
                <li>
                  <strong className="text-[#1E1815]">Dietary Needs:</strong> Kindly mention any allergies or dietary preferences in the form so our chefs can accommodate you.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Small Native Reservation Form / Success Ticket (Spans 7/12) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                /* ─── Reservation Form ─── */
                <motion.div
                  key="form-container"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/75 backdrop-blur-md border border-[#1E1815]/10 rounded-[32px] p-8 md:p-10 shadow-xl overflow-hidden flex flex-col"
                >
                  <h3 className="font-display text-xl font-black text-[#1E1815] uppercase tracking-wider mb-6">
                    Book A Table
                  </h3>

                  <form onSubmit={handleReservationSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="name" className="font-display text-[9px] uppercase tracking-widest text-[#1E1815]/50 font-black">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={status === 'submitting'}
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Pankaj Sharma"
                        className="w-full bg-[#FAF7F0]/80 border border-[#1E1815]/10 focus:border-[#E6C84F] focus:ring-1 focus:ring-[#E6C84F]/20 rounded-2xl py-3.5 px-5 font-sans text-xs text-[#1E1815] placeholder-[#1E1815]/30 focus:outline-none transition-all disabled:opacity-50"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="email" className="font-display text-[9px] uppercase tracking-widest text-[#1E1815]/50 font-black">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={status === 'submitting'}
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. sharma@gmail.com"
                        className="w-full bg-[#FAF7F0]/80 border border-[#1E1815]/10 focus:border-[#E6C84F] focus:ring-1 focus:ring-[#E6C84F]/20 rounded-2xl py-3.5 px-5 font-sans text-xs text-[#1E1815] placeholder-[#1E1815]/30 focus:outline-none transition-all disabled:opacity-50"
                      />
                    </div>

                    {/* Guests & Date/Time (Grid) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Guests count */}
                      <div className="flex flex-col gap-1.5 text-left">
                        <label htmlFor="guests" className="font-display text-[9px] uppercase tracking-widest text-[#1E1815]/50 font-black">
                          Guests
                        </label>
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          disabled={status === 'submitting'}
                          className="w-full bg-[#FAF7F0]/80 border border-[#1E1815]/10 focus:border-[#E6C84F] focus:ring-1 focus:ring-[#E6C84F]/20 rounded-2xl py-3.5 px-4 font-sans text-xs text-[#1E1815] focus:outline-none transition-all disabled:opacity-50 appearance-none cursor-pointer"
                          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%231E1815\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundPosition: 'right 12px center', backgroundSize: '12px', backgroundRepeat: 'no-repeat' }}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                          ))}
                        </select>
                      </div>

                      {/* Date */}
                      <div className="flex flex-col gap-1.5 text-left">
                        <label htmlFor="date" className="font-display text-[9px] uppercase tracking-widest text-[#1E1815]/50 font-black">
                          Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          min={minDate}
                          disabled={status === 'submitting'}
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full bg-[#FAF7F0]/80 border border-[#1E1815]/10 focus:border-[#E6C84F] focus:ring-1 focus:ring-[#E6C84F]/20 rounded-2xl py-3.5 px-4 font-sans text-xs text-[#1E1815] focus:outline-none transition-all disabled:opacity-50 cursor-pointer"
                        />
                      </div>

                      {/* Time Slot */}
                      <div className="flex flex-col gap-1.5 text-left">
                        <label htmlFor="time" className="font-display text-[9px] uppercase tracking-widest text-[#1E1815]/50 font-black">
                          Time Slot
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          disabled={status === 'submitting'}
                          className="w-full bg-[#FAF7F0]/80 border border-[#1E1815]/10 focus:border-[#E6C84F] focus:ring-1 focus:ring-[#E6C84F]/20 rounded-2xl py-3.5 px-4 font-sans text-xs text-[#1E1815] focus:outline-none transition-all disabled:opacity-50 appearance-none cursor-pointer"
                          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%231E1815\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundPosition: 'right 12px center', backgroundSize: '12px', backgroundRepeat: 'no-repeat' }}
                        >
                          {['11:30 AM', '1:00 PM', '2:30 PM', '5:00 PM', '6:30 PM', '7:30 PM', '8:30 PM', '9:30 PM'].map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="notes" className="font-display text-[9px] uppercase tracking-widest text-[#1E1815]/50 font-black">
                        Special Notes (Optional)
                      </label>
                      <input
                        type="text"
                        id="notes"
                        name="notes"
                        disabled={status === 'submitting'}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="e.g. Window table / celebrating an anniversary"
                        className="w-full bg-[#FAF7F0]/80 border border-[#1E1815]/10 focus:border-[#E6C84F] focus:ring-1 focus:ring-[#E6C84F]/20 rounded-2xl py-3.5 px-5 font-sans text-xs text-[#1E1815] placeholder-[#1E1815]/30 focus:outline-none transition-all disabled:opacity-50"
                      />
                    </div>

                    {/* Error Message */}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-xs text-left font-sans font-bold uppercase tracking-wider"
                      >
                        ⚠️ {errorMessage}
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-[#1E1815] hover:bg-[#B5654A] text-white font-display text-xs uppercase tracking-widest py-4 rounded-2xl font-black transition-all duration-300 disabled:opacity-50 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                          <span>Confirming Booking...</span>
                        </>
                      ) : (
                        'Confirm Table Reservation'
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                /* ─── Premium Success Ticket ─── */
                <motion.div
                  key="ticket-container"
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                  className="w-full bg-[#1E1815] text-[#FAF7F0] rounded-[36px] shadow-2xl overflow-hidden relative border border-white/5 max-w-md mx-auto"
                >
                  {/* Decorative Ticket Arch Holes (Left & Right Cutouts) */}
                  <div className="absolute top-[48%] -left-4 w-8 h-8 rounded-full bg-[#FAF7F0] z-10 border-r border-white/5" />
                  <div className="absolute top-[48%] -right-4 w-8 h-8 rounded-full bg-[#FAF7F0] z-10 border-l border-white/5" />

                  {/* Ticket Top Half */}
                  <div className="p-8 pb-6 flex flex-col items-center text-center">
                    {/* Success Icon */}
                    <div className="w-12 h-12 rounded-full bg-[#E6C84F]/10 border border-[#E6C84F]/30 flex items-center justify-center text-[#E6C84F] mb-4">
                      ✓
                    </div>
                    <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#E6C84F] font-black mb-1">
                      Reservation Confirmed
                    </span>
                    <h4 className="font-display text-2xl font-black text-white uppercase tracking-tight mb-6">
                      See You Soon.
                    </h4>

                    {/* Barcode representation */}
                    <div className="w-full h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center gap-[3px] px-6 py-2 opacity-80 mb-6">
                      {[2,4,1,3,2,5,1,2,4,2,1,5,3,2,1,4,2,3,1,2,5].map((w, idx) => (
                        <div key={idx} className="h-full bg-white/70 rounded-sm" style={{ width: w }} />
                      ))}
                    </div>

                    {/* Booking Details Table */}
                    <div className="w-full space-y-3.5 border-t border-white/10 pt-5 text-left text-xs font-sans">
                      <div className="flex justify-between">
                        <span className="text-white/40 uppercase tracking-wider text-[9px]">Reservation ID</span>
                        <span className="font-mono font-bold text-white tracking-widest">{confirmedData?.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/40 uppercase tracking-wider text-[9px]">Guest Name</span>
                        <span className="font-bold text-white">{confirmedData?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/40 uppercase tracking-wider text-[9px]">Party Size</span>
                        <span className="font-bold text-[#E6C84F]">{confirmedData?.guests} {confirmedData?.guests === 1 ? 'Person' : 'People'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Ticket Dashed Divider */}
                  <div className="w-full border-t-[2px] border-dashed border-white/10 relative" />

                  {/* Ticket Bottom Half */}
                  <div className="p-8 pt-6 flex flex-col items-center text-center">
                    <div className="w-full space-y-3.5 text-left text-xs font-sans mb-8">
                      <div className="flex justify-between">
                        <span className="text-white/40 uppercase tracking-wider text-[9px]">Date</span>
                        <span className="font-bold text-white">{formatReadableDate(confirmedData?.date || '')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/40 uppercase tracking-wider text-[9px]">Time Slot</span>
                        <span className="font-bold text-white">{confirmedData?.time}</span>
                      </div>
                      {confirmedData?.notes && (
                        <div className="flex flex-col gap-1 border-t border-white/5 pt-3">
                          <span className="text-white/40 uppercase tracking-wider text-[9px]">Special Notes</span>
                          <p className="text-[11px] text-white/70 italic">"{confirmedData.notes}"</p>
                        </div>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="w-full flex flex-col gap-3">
                      <button
                        onClick={() => window.print()}
                        className="w-full bg-[#E6C84F] hover:bg-white text-[#1E1815] font-display text-[10px] uppercase tracking-widest py-3.5 rounded-xl font-black transition-all shadow-md hover:shadow-lg"
                      >
                        Print Ticket / Save PDF
                      </button>
                      <button
                        onClick={resetForm}
                        className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-display text-[10px] uppercase tracking-widest py-3.5 rounded-xl font-black transition-all"
                      >
                        Book Another Table
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
