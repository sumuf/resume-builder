import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, Zap, Download } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Create a Professional Resume in Minutes</h1>
            <p className="text-xl mb-8">Stand out with a beautifully designed resume that showcases your skills and experience.</p>
            <Link 
              to="/builder" 
              className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md shadow-lg hover:bg-gray-100 transition-colors"
            >
              Create Your Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ResumeForge?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FileText className="h-10 w-10 text-blue-600" />}
              title="Professional Templates"
              description="Choose from multiple professionally designed templates that make your resume stand out."
            />
            <FeatureCard 
              icon={<Zap className="h-10 w-10 text-blue-600" />}
              title="Easy to Use"
              description="Our step-by-step process makes creating a resume simple and straightforward."
            />
            <FeatureCard 
              icon={<Download className="h-10 w-10 text-blue-600" />}
              title="Export Options"
              description="Download your resume in multiple formats including PDF, ready to submit to employers."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepCard 
                number={1}
                title="Fill in your details"
                description="Add your personal information, work experience, education, and skills."
              />
              <StepCard 
                number={2}
                title="Choose a template"
                description="Select from our collection of professional resume templates."
              />
              <StepCard 
                number={3}
                title="Download & apply"
                description="Export your resume in your preferred format and start applying for jobs."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Professional Resume?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of job seekers who have created resumes that got them hired.</p>
          <Link 
            to="/builder" 
            className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md shadow-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center transition-transform hover:scale-105">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HomePage;