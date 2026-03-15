import { motion } from 'motion/react';
import { Database, FileText, GitMerge, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Unstructured to Structured",
      description: "Transform narrative cohort definitions from scholarly articles into computable patient selection criteria."
    },
    {
      icon: <Database className="w-6 h-6 text-teal-600" />,
      title: "Multimodal Integration",
      description: "Enable downstream translation into executable cohort queries over imaging repositories and integrated clinical data."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: "Reproducibility & Fairness",
      description: "Address the disconnect between narrative definitions and computable selection to improve fairness assessment."
    },
    {
      icon: <GitMerge className="w-6 h-6 text-emerald-600" />,
      title: "Standardized Workflows",
      description: "Develop reusable methods applicable to automated cohort selection workflows across diverse clinical domains."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">About CohortX</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Medical imaging studies and clinical trials critically rely on well-defined patient cohorts. CohortX bridges the gap between unstructured free text and operationalized, machine-interpretable representations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg prose-blue"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Cohort selection criteria are typically described in unstructured free text within scholarly articles, making them difficult to operationalize for large-scale medical image analysis. This disconnect remains a significant barrier to reproducibility, fairness assessment, and efficient use of imaging and clinical data.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Novelty</h3>
            <p className="text-gray-600 leading-relaxed">
              CohortX focuses on <strong className="text-gray-900 font-semibold">computable cohort definitions</strong> rather than mere text extraction. The representations must capture logical, demographic, and temporal constraints, allowing for translation into executable cohort queries over imaging repositories and integrated clinical data (e.g., EHR-linked imaging cohorts).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 mb-5">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
