import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
              CohortX
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Extracting Executable Cohort Definitions for Medical Imaging Research.
              A challenge hosted at MICCAI 2026.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/anas_alzahrani" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/AnasAlzahrani" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/anas-alzahrani-md-phd-mph-7b055218b/" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About the Challenge</a></li>
              <li><a href="#tasks" className="text-gray-400 hover:text-white transition-colors text-sm">Challenge Tasks</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-white transition-colors text-sm">Important Dates</a></li>
              <li><a href="#organizers" className="text-gray-400 hover:text-white transition-colors text-sm">Organizing Team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="https://www.kaggle.com/" className="text-gray-400 hover:text-white transition-colors text-sm">Kaggle Platform</a></li>
              <li><a href="https://openreview.net/group?id=MICCAI.org/2026/Workshop/CohortX_Task_4" className="text-gray-400 hover:text-white transition-colors text-sm">OpenReview</a></li>
              <li><a href="https://conferences.miccai.org/2026/en/default.asp" className="text-gray-400 hover:text-white transition-colors text-sm">MICCAI 2026 Website</a></li>
              <li><a href="#organizers" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CohortX Challenge Organizers. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
