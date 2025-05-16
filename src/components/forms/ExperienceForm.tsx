import React from 'react';
import { Trash2, Plus } from 'lucide-react';
import { useResumeContext } from '../../contexts/ResumeContext';

const ExperienceForm: React.FC = () => {
  const { 
    resumeData, 
    addExperience, 
    updateExperience, 
    removeExperience 
  } = useResumeContext();
  const { experience } = resumeData;

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateExperience(index, { [name]: value });
  };

  const handleCheckbox = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateExperience(index, { [name]: checked });
  };

  return (
    <div className="space-y-6">
      {experience.map((exp, index) => (
        <div key={index} className="p-4 border rounded-md bg-gray-50 relative">
          <button
            type="button"
            onClick={() => removeExperience(index)}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500"
            title="Remove experience"
          >
            <Trash2 className="h-5 w-5" />
          </button>

          <h3 className="font-medium text-gray-900 mb-3">Position {index + 1}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company/Organization*
              </label>
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => handleChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Company Name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title*
              </label>
              <input
                type="text"
                name="position"
                value={exp.position}
                onChange={(e) => handleChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Software Engineer"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date*
              </label>
              <input
                type="month"
                name="startDate"
                value={exp.startDate}
                onChange={(e) => handleChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date {!exp.current && '*'}
              </label>
              <input
                type="month"
                name="endDate"
                value={exp.endDate}
                onChange={(e) => handleChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={exp.current}
                required={!exp.current}
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="current"
                checked={exp.current}
                onChange={(e) => handleCheckbox(index, e)}
                className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
              />
              <span className="ml-2 text-sm text-gray-700">
                I currently work here
              </span>
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description*
            </label>
            <textarea
              name="description"
              value={exp.description}
              onChange={(e) => handleChange(index, e)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="• Describe your responsibilities and achievements&#10;• Use bullet points starting with action verbs&#10;• Include metrics and results where possible"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Use bullet points (• ) for each achievement and focus on results and impact.
            </p>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={addExperience}
        className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
      >
        <Plus className="h-4 w-4 mr-2" /> Add Another Position
      </button>
    </div>
  );
};

export default ExperienceForm;