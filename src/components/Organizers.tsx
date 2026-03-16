import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

const organizers = [
  { name: 'Anas H. Alzahrani', affiliation: 'King Abdulaziz University, Saudi Arabia', role: 'Primary Contact', email: 'mailto:anashalzahrani@gmail.com' },
  { name: 'Houcemeddine Turki', affiliation: 'University of Sfax, Tunisia', role: 'Primary Contact', email: 'mailto:turkiabdelwaheb@hotmail.fr' },
  { name: 'Abdullah Altammami', affiliation: 'Rutgers University, USA' },
  { name: 'Ahmed Nebli', affiliation: 'Independent Researcher, Germany' },
  { name: 'Naveed Aman Pasha', affiliation: 'Jinnah Sindh Medical University, Pakistan' },
  { name: 'Mohamed Ali Hadj Taieb', affiliation: 'University of Sfax, Tunisia' },
  { name: 'Mohamed Ben Aouicha', affiliation: 'University of Sfax, Tunisia' },
  { name: 'Fahad Almsned', affiliation: 'King Fahad Specialist Hospital Dammam, Saudi Arabia' },
];

export default function Organizers() {
  return (
    <section id="organizers" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">Organizing Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            An international team of researchers and clinicians.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizers.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-teal-50 rounded-full flex items-center justify-center mb-5 text-2xl font-bold text-blue-800 border-2 border-white shadow-md">
                {org.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{org.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{org.affiliation}</p>
              
              {org.role && (
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100">
                    <Mail className="w-3 h-3" />
                    <a href={org.email}>{org.role}</a>
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
