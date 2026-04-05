import { motion } from 'motion/react';
import { CalendarDays } from 'lucide-react';

const timeline = [
  { date: 'April 1, 2026', title: 'Training Data Release', description: 'Release of the training cases for all tasks.' },
  { date: 'April 1, 2026', title: 'Submissions Open', description: 'Participants can start submitting their results.' },
  { date: 'April 30, 2026', title: 'Task 4 Registration Deadline', description: 'Last day to register for the Challenge Task 4.' },
  { date: 'July 1, 2026', title: 'Task 4 Submission Deadline', description: 'Final deadline for Task 4 submissions.' },
  { date: 'July 15, 2026', title: 'Tasks 1-3 Submission Deadline', description: 'Final deadline for Tasks 1, 2, and 3.' },
  { date: 'August 1, 2026', title: 'Results Release', description: 'Announcement of the top performing teams.' },
  { date: 'October 4-8, 2026', title: 'Challenge Showcase', description: 'Presentation of results at MICCAI 2026.' },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">Important Dates</h2>
          <p className="mt-4 text-lg text-gray-600">
            Mark your calendars for the key milestones of the CohortX challenge.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 transform sm:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Center dot */}
                <div className="absolute left-4 sm:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-500 transform -translate-x-1/2 flex items-center justify-center z-10 shadow-md mt-1 sm:mt-0">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                </div>

                {/* Content */}
                <div className={`ml-14 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12 text-left sm:text-right'}`}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
                    <div className={`absolute top-1/2 w-4 h-4 bg-white border-t border-r border-gray-100 transform -translate-y-1/2 hidden sm:block ${
                      index % 2 === 0 
                        ? '-left-2 -rotate-135' 
                        : '-right-2 rotate-45'
                    }`} />
                    <div className={`flex items-center gap-2 mb-3 text-blue-600 font-bold ${index % 2 === 0 ? '' : 'sm:justify-end'}`}>
                      <CalendarDays className="w-5 h-5" />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
