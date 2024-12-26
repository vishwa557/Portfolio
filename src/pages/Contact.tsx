import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Location',
    details: 'Bangalore',
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Phone',
    details: '+91 9886460801',
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email',
    details: 'vishwa.2959@gmail.com',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="grid gap-8">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}