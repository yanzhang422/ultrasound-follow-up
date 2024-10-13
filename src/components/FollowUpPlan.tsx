import React, { useState } from 'react';
import { Calendar, CheckSquare } from 'lucide-react';

interface FollowUpTemplate {
  id: number;
  name: string;
  content: string;
}

const FollowUpPlan: React.FC = () => {
  const [templates, setTemplates] = useState<FollowUpTemplate[]>([
    { id: 1, name: '超声检查记录', content: '超声检查日期、检查部位、检查结果' },
    { id: 2, name: '病程记录', content: '症状变化、治疗效果、并发症' },
    { id: 3, name: '护理记录', content: '生活质量评估、用药情况、康复指导' },
  ]);

  const [selectedTemplate, setSelectedTemplate] = useState<FollowUpTemplate | null>(null);
  const [planDate, setPlanDate] = useState<string>('');
  const [planContent, setPlanContent] = useState<string>('');

  const handleTemplateSelect = (template: FollowUpTemplate) => {
    setSelectedTemplate(template);
    setPlanContent(template.content);
  };

  const savePlan = () => {
    if (selectedTemplate && planDate && planContent) {
      console.log('保存随访计划:', { template: selectedTemplate.name, date: planDate, content: planContent });
      // 这里可以添加保存到后端的逻辑
      alert('随访计划已保存！');
    } else {
      alert('请填写完整的随访计划信息！');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">随访计划生成</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">选择随访模板</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`p-4 border rounded cursor-pointer ${
                selectedTemplate?.id === template.id ? 'bg-blue-100 border-blue-500' : ''
              }`}
              onClick={() => handleTemplateSelect(template)}
            >
              <h3 className="font-semibold">{template.name}</h3>
              <p className="text-sm text-gray-600">{template.content}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedTemplate && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">生成随访计划</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <input
                type="date"
                className="border p-2 rounded"
                value={planDate}
                onChange={(e) => setPlanDate(e.target.value)}
              />
            </div>
            <textarea
              className="w-full p-2 border rounded h-40"
              placeholder="在此输入随访计划详情..."
              value={planContent}
              onChange={(e) => setPlanContent(e.target.value)}
            ></textarea>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
              onClick={savePlan}
            >
              <CheckSquare size={18} className="mr-2" />
              保存随访计划
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FollowUpPlan;