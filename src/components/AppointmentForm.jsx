import React from 'react';
import { motion } from 'framer-motion';
import { allTreatments } from '../data/treatments';
import { Send, Phone, Loader2 } from 'lucide-react';

const WHATSAPP_NUMBER = '919606042223';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  treatment: '',
  date: '',
  time: '',
  message: '',
};

export default function AppointmentForm() {
  const [formData, setFormData] = React.useState(initialForm);
  const [errors, setErrors] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [formKey, setFormKey] = React.useState(0);

  const getTreatmentName = (id) => {
    const t = allTreatments.find(t => t.id === id);
    return t ? t.title : id;
  };

  const isSunday = (dateStr) => {
    if (!dateStr) return false;
    const day = new Date(dateStr).getDay();
    return day === 0;
  };

  const isTimeValid = (timeStr) => {
    if (!timeStr) return true;
    return timeStr >= '10:00' && timeStr <= '21:00';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (name === 'date' && isSunday(value)) {
      newErrors.date = 'Sundays are not available. Please select another day.';
      setFormData({ ...formData, date: '' });
      setErrors(newErrors);
      return;
    }

    if (name === 'date') {
      delete newErrors.date;
    }

    if (name === 'time') {
      if (value && !isTimeValid(value)) {
        newErrors.time = 'Please select a time between 10:00 AM and 9:00 PM.';
        setFormData({ ...formData, time: '' });
        setErrors(newErrors);
        return;
      }
      delete newErrors.time;
    }

    setFormData({ ...formData, [name]: value });
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (isSunday(formData.date)) {
      newErrors.date = 'Sundays are not available. Please select another day.';
    }
    if (formData.time && !isTimeValid(formData.time)) {
      newErrors.time = 'Please select a time between 10:00 AM and 9:00 PM.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    const treatmentName = getTreatmentName(formData.treatment);
    const timeStr = formData.time ? ` at ${formData.time}` : '';

    const message = `Hi Prashali Skin Sciences! 👋

I would like to book an appointment.

📋 Details:
• Name: ${formData.name}
• Phone: ${formData.phone}${formData.email ? `\n• Email: ${formData.email}` : ''}
• Treatment: ${treatmentName}
• Preferred Date: ${formData.date}${timeStr}${formData.message ? `\n• Message: ${formData.message}` : ''}

Please confirm my appointment. Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    setTimeout(() => {
      setIsLoading(false);
      setFormData(initialForm);
      setFormKey(prev => prev + 1);
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100">
      <div className="p-8 md:p-10">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">Book Your Consultation</h3>
        <p className="text-slate-500 text-sm mb-2">Fill in your details and we will redirect you to WhatsApp.</p>
        <p className="text-xs text-slate-400 mb-8">Your message will be pre-filled — just tap send!</p>

        <form key={formKey} onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Full Name *</label>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none transition text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Phone Number *</label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none transition text-sm"
                placeholder="+91 9876543210"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none transition text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Treatment Interested In *</label>
              <select
                required
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none transition text-sm"
              >
                <option value="">Select treatment</option>
                {allTreatments.map((t) => (
                  <option key={t.id} value={t.id}>{t.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Preferred Date *</label>
              <input
                required
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                className={`w-full px-4 py-3 rounded-xl border outline-none transition text-sm ${errors.date ? 'border-red-400 focus:ring-2 focus:ring-red-400' : 'border-slate-200 focus:ring-2 focus:ring-primary-500'}`}
              />
              {errors.date && (
                <p className="text-red-500 text-xs mt-1">{errors.date}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={formData.time || ''}
                onChange={handleChange}
                min="10:00"
                max="21:00"
                className={`w-full px-4 py-3 rounded-xl border outline-none transition text-sm ${errors.time ? 'border-red-400 focus:ring-2 focus:ring-red-400' : 'border-slate-200 focus:ring-2 focus:ring-primary-500'}`}
              />
              {errors.time && (
                <p className="text-red-500 text-xs mt-1">{errors.time}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Message (Optional)</label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none transition text-sm resize-none"
              placeholder="Any specific concerns..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all text-base disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Redirecting to WhatsApp...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Book via WhatsApp
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-500 mb-3">Or call us directly</p>
          <a
            href="tel:+919606042223"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
          >
            <Phone className="h-5 w-5" />
            +91 9606042223
          </a>
        </div>
      </div>
    </div>
  );
}
