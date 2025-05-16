import React from 'react';
import { Trash2, Plus } from 'lucide-react';
import { useResumeContext } from '../../contexts/ResumeContext';

const EducationForm: React.FC = () => {
  const { 
    resumeData, 
    addEducation, 
    updateEducation, 
    removeEducation 
  } = useResumeContext();
  const { education } = resumeData;

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateEducation(index, { [name]: value });
  };

  const handleCheckbox = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateEducation(index, { [name]: checked });
  };

  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div key={index} className="p-4 border rounded-md bg-gray-50 relative">
          <button
            type="button"
            onClick={() => removeEducation(index)}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500"
            title="Remove education"
          >
            <Trash2 className="h-5 w-5" />
          </button>

          <h3 className="font-medium text-gray-900 mb-3">Education {index + 1}</h3>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Institution/School*
            </label>
            <input
              type="text"
              name="institution"
              value={edu.institution}
              onChange={(e) => handleChange(index, e)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="University Name"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Degree*
              </label>
              <input
                type="text"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Bachelor of Science"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Field of Study*
              </label>
              <input
                type="text"
                name="field"
                value={edu.field}
                onChange={(e) => handleChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Computer Science"
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
                value={edu.startDate}
                onChange={(e) => handleChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date {!edu.current && '*'}
              </label>
              <input
                type="month"
                name="endDate"
                value={edu.endDate}
                onChange={(e) => handleChange(index, e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={edu.current}
                required={!edu.current}
              />
            </div>
          </div>
          
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="current"
                checked={edu.current}
                onChange={(e) => handleCheckbox(index, e)}
                className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
              />
              <span className="ml-2 text-sm text-gray-700">
                I am currently studying here
              </span>
            </label>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={addEducation}
        className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
      >
        <Plus className="h-4 w-4 mr-2" /> Add Another Education
      </button>
    </div>
  );
};

export default EducationForm;