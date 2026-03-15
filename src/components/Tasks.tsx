import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Trophy, Code, Database, FileText, Network, Users } from 'lucide-react';

const tasks = [
  {
    id: 'task1',
    title: 'Task 1: Extracting Cohort Selection Criteria from Free Texts',
    url: 'https://www.kaggle.com/competitions/cohort-x-task-1',
    icon: <FileText className="w-5 h-5" />,
    abstract: 'Develop low-resource automated systems capable of identifying key cohort selection criteria from biomedical literature (PMC full texts). Focuses on NLP approaches combining number recognition, semantic similarity, and context-aware text parsing.',
    platform: 'Kaggle',
    dataset: 'Training: 416, Validation: 300, Test: 200 cases. Publicly available data from ClinicalTrials.gov, PubMed, and PMC.',
    metrics: 'Average similarity score (Number similarity, BERT-based cosine similarity, FM3S ontology-based semantic similarity) and polarity consistency coefficient.',
    prizes: ['1st: $120', '2nd: $100', '3rd: $80'],
    participation: 'Pre-processing permitted offline (Intel Core i7, 16GB RAM). No GPUs/cloud required. Code submission on Kaggle.'
  },
  {
    id: 'task2',
    title: 'Task 2: Structuring Cohort Eligibility Criteria in the form of Triples',
    url: 'https://www.kaggle.com/competitions/cohort-x-task-2',
    icon: <Network className="w-5 h-5" />,
    abstract: 'Automatic transformation of free-text eligibility criteria into a structured yet human-readable, triple-based format. Segment eligibility criteria into inclusion and exclusion sets, identify individual criteria, and assign descriptive attributes.',
    platform: 'Kaggle',
    dataset: 'Training: 100, Validation: 25, Test: 25 cases. Converted to triples using ChatGPT with human validation.',
    metrics: 'Average similarity score between predicted and reference triples using adapted FM3S ontology-based semantic similarity, plus polarity-aware consistency measure.',
    prizes: ['1st: $120', '2nd: $100', '3rd: $80'],
    participation: 'No user interaction allowed at any step. Code submission on Kaggle.'
  },
  {
    id: 'task3',
    title: 'Task 3: Resolving Medical Conditions to ICD-10-CM Codes',
    url: 'https://www.kaggle.com/competitions/cohort-x-task-3',
    icon: <Database className="w-5 h-5" />,
    abstract: 'Automatically identify all relevant ICD-10-CM codes corresponding to a given medical condition name. Challenges algorithms to model semantic relatedness, hierarchical relationships, and clinical specificity within large medical ontologies.',
    platform: 'Kaggle',
    dataset: 'Sample: 5, Test: 23 cases. Data derived from scholarly publications (Google Scholar Labs Service) with human validation.',
    metrics: 'F1-Score assessing precision and recall in identifying ICD-10-CM codes.',
    prizes: ['1st: $120', '2nd: $100', '3rd: $80'],
    participation: 'Pre-processing permitted offline. Code submission on Kaggle.'
  },
  {
    id: 'task4',
    title: 'Task 4: Semantic Data Modeling Using Biomedical Ontologies',
    icon: <Code className="w-5 h-5" />,
    abstract: 'Design a robust data model that converts structured eligibility criteria into a semantically rich knowledge graph. Develop ontology-aligned models using established biomedical or core ontologies (e.g., FHIR, OWL, RDFS, SKOS, OBO Foundry).',
    platform: 'OpenReview',
    dataset: '40 cases provided for semantic annotation. This is a data modelling task.',
    metrics: 'Expert-based qualitative assessment on: reproducibility, intelligibility, flexibility, and standards compliance.',
    prizes: ['1st: $120', '2nd: $100', '3rd: $80'],
    participation: 'Submission includes a knowledge graph schema and RDF/Turtle translation of 10 examples via OpenReview.'
  }
];

export default function Tasks() {
  const [activeTask, setActiveTask] = useState(tasks[0].id);

  return (
    <section id="tasks" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">Challenge Tasks</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Participants may choose to compete in any subset of tasks according to their interests, technical background, and available resources.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {tasks.map((task) => (
              <button
                key={task.id}
                onClick={() => setActiveTask(task.id)}
                className={`text-left px-6 py-5 rounded-2xl transition-all duration-200 flex items-start gap-4 ${
                  activeTask === task.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 ring-1 ring-blue-600'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-700 border border-gray-200 hover:border-blue-200'
                }`}
              >
                <div className={`mt-0.5 ${activeTask === task.id ? 'text-white' : 'text-blue-600'}`}>
                  {task.icon}
                </div>
                <span className="font-semibold text-sm sm:text-base leading-snug">{task.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              {tasks.map((task) => (
                activeTask === task.id && (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-gray-200/40 border border-gray-100 h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 pr-4">{task.title}</h3>
                      <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 whitespace-nowrap">
                        <a href={task.url}>See on {task.platform}</a>
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {task.abstract}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 flex-grow">
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                          <Database className="w-5 h-5 text-blue-500" />
                          Dataset
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{task.dataset}</p>
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                          <CheckCircle2 className="w-5 h-5 text-teal-500" />
                          Evaluation Metrics
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{task.metrics}</p>
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 md:col-span-2">
                        <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                          <Users className="w-5 h-5 text-indigo-500" />
                          Participation Policy
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{task.participation}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-gray-100 gap-4 mt-auto">
                      <div>
                        <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                          <Trophy className="w-5 h-5 text-yellow-500" />
                          Prizes
                        </h4>
                        <div className="flex flex-wrap gap-3 text-sm font-bold text-gray-700">
                          {task.prizes.map((prize, i) => (
                            <span key={i} className="bg-yellow-50 text-yellow-800 px-3 py-1.5 rounded-lg border border-yellow-200 shadow-sm">
                              {prize}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="sm:hidden w-full text-right">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                          Platform: {task.platform}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
