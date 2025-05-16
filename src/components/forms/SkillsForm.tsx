import React from 'react';
import { Trash2, Plus } from 'lucide-react';
import { useResumeContext } from '../../contexts/ResumeContext';

const SkillsForm: React.FC = () => {
  const { 
    resumeData, 
    addSkill, 
    updateSkill, 
    removeSkill 
  } = useResumeContext();
  const { skills } = resumeData;

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateSkill(index, { [name]: value });
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-600 mb-4">
        Add relevant skills that showcase your expertise. Include both technical and soft skills.
      </p>
      
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="flex-grow">
            <input
              type="text"
              name="name"
              value={skill.name}
              onChange={(e) => handleChange(index, e)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Skill name (e.g., JavaScript, Project Management)"
              required
            />
          </div>
          
          <div className="w-40">
            <select
              name="level"
              value={skill.level}
              onChange={(e) => handleChange(index, e)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          
          <button
            type="button"
            onClick={() => removeSkill(index)}
            className="p-1 text-gray-400 hover:text-red-500"
            title="Remove skill"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      ))}
      
      <button
        type="button"
        onClick={addSkill}
        className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
      >
        <Plus className="h-4 w-4 mr-2" /> Add Another Skill
      </button>
      
      <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-100">
        <h3 className="text-md font-medium text-blue-800 mb-2">Skill Tips:</h3>
        <ul className="list-disc pl-5 text-blue-700 text-sm">
          <li>Include a mix of technical skills and soft skills</li>
          <li>List skills relevant to the job you're applying for</li>
          <li>Be honest about your proficiency level</li>
          <li>Include both hard skills (e.g., programming languages) and soft skills (e.g., leadership)</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsForm;