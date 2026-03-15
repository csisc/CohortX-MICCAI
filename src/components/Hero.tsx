import { motion } from 'motion/react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-90" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-teal-100 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wider mb-6 border border-blue-200 shadow-sm">
            MICCAI 2026 CHALLENGE
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
            Extracting Executable Cohort Definitions <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              for Medical Imaging Research
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
            A shared benchmark for extracting, structuring, and semantically representing cohort selection criteria from scholarly medical articles.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="#tasks"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Explore Tasks
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-xl text-blue-700 bg-white border border-blue-100 hover:bg-blue-50 transition-all shadow-sm hover:shadow w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-600 font-medium">
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
              <Calendar className="w-5 h-5 mr-2 text-blue-500" />
              <span>April - October 2026</span>
            </div>
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
              <MapPin className="w-5 h-5 mr-2 text-teal-500" />
              <span>MICCAI 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
