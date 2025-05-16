import React from 'react';
import { useResumeContext } from '../contexts/ResumeContext';
import { Palette } from 'lucide-react';

const TemplateSelector: React.FC = () => {
  const { selectedTemplate, setSelectedTemplate, selectedColor, setSelectedColor } = useResumeContext();

  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      description: 'A clean and professional template with a sidebar design.',
      image: 'https://images.pexels.com/photos/4119320/pexels-photo-4119320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'classic',
      name: 'Classic',
      description: 'A traditional layout that stands the test of time.',
      image: 'https://images.pexels.com/photos/4119039/pexels-photo-4119039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'A simple and elegant design that focuses on content.',
      image: 'https://images.pexels.com/photos/4119143/pexels-photo-4119143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const colors = [
    { name: 'blue', class: 'bg-blue-600' },
    { name: 'emerald', class: 'bg-emerald-600' },
    { name: 'purple', class: 'bg-purple-600' },
    { name: 'red', class: 'bg-red-600' },
    { name: 'amber', class: 'bg-amber-600' },
    { name: 'gray', class: 'bg-gray-700' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-xl font-semibold mb-6">Choose a Template</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`cursor-pointer border rounded-lg overflow-hidden transition-all ${
              selectedTemplate === template.id 
                ? 'ring-2 ring-blue-500 transform scale-[1.02]' 
                : 'hover:shadow-md'
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <img 
                src={template.image} 
                alt={template.name}
                className="w-full h-full object-cover"
              />
              {selectedTemplate === template.id && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 text-sm">
                  Selected
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
              <p className="text-gray-600 text-sm">{template.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Color Customization */}
      <div className="mt-8">
        <div className="flex items-center mb-4">
          <Palette className="h-5 w-5 mr-2 text-gray-700" />
          <h3 className="font-semibold">Color Scheme</h3>
        </div>
        
        <div className="flex space-x-4">
          {colors.map(color => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-8 h-8 rounded-full ${color.class} ${
                selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">Click a color to preview it in your resume.</p>
      </div>
    </div>
  );
};

export default TemplateSelector;