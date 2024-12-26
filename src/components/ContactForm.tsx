import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('sent');
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={status === 'sending' || status === 'sent'}
        className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 ${
          status === 'sent'
            ? 'bg-green-500'
            : status === 'error'
            ? 'bg-red-500'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {status === 'sending' ? (
          'Sending...'
        ) : status === 'sent' ? (
          'Message Sent!'
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </motion.button>
    </motion.form>
  );
}