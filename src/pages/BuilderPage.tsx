import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Save, Download } from 'lucide-react';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import { useResumeContext } from '../contexts/ResumeContext';
import TemplateSelector from '../components/TemplateSelector';
import { exportToPdf } from '../utils/exportUtils';

const BuilderPage: React.FC = () => {
  const { resumeData, selectedTemplate } = useResumeContext();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const steps = [
    { id: 'template', title: 'Choose Template' },
    { id: 'personal', title: 'Personal Info' },
    { id: 'experience', title: 'Work Experience' },
    { id: 'education', title: 'Education' },
    { id: 'skills', title: 'Skills' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleExport = () => {
    exportToPdf(resumeData, selectedTemplate);
  };

  // Toggle preview on mobile
  const togglePreview = () => {
    setIsPreviewVisible(!isPreviewVisible);
  };

  // Responsive layout handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsPreviewVisible(true);
      } else {
        setIsPreviewVisible(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(index)}
                className={`px-4 py-2 whitespace-nowrap mr-2 rounded-md transition-colors ${
                  index === currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {index + 1}. {step.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className={`w-full lg:w-1/2 transition-all duration-300 ${
            isPreviewVisible && window.innerWidth < 1024 ? 'hidden' : 'block'
          }`}>
            {currentStep === 0 && <TemplateSelector />}
            {currentStep > 0 && <ResumeForm currentStep={steps[currentStep].id} />}

            <div className="mt-6 flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`flex items-center px-4 py-2 rounded-md ${
                  currentStep === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Previous
              </button>
              
              <div className="flex space-x-2">
                {/* Mobile Preview Toggle */}
                <button
                  onClick={togglePreview}
                  className="lg:hidden px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                  {isPreviewVisible ? 'Edit' : 'Preview'}
                </button>
                
                {/* Save Button */}
                <button
                  onClick={() => {}} // Save functionality
                  className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 flex items-center"
                >
                  <Save className="w-4 h-4 mr-1" /> Save
                </button>
                
                {/* Export Button */}
                <button
                  onClick={handleExport}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
                >
                  <Download className="w-4 h-4 mr-1" /> Export
                </button>

                {/* Next Button */}
                {currentStep < steps.length - 1 && (
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                  >
                    Next <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className={`w-full lg:w-1/2 bg-white border rounded-lg shadow-sm transition-all duration-300 ${
            !isPreviewVisible && window.innerWidth < 1024 ? 'hidden' : 'block'
          }`}>
            <div className="p-4 border-b">
              <h2 className="text-xl font-semibold">Preview</h2>
            </div>
            <div className="p-4 flex justify-center">
              <ResumePreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;