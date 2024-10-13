import React from 'react';
import { BarChart, PieChart, LineChart } from 'lucide-react';

const DataAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">数据记录与分析</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart size={24} className="mr-2" />
            患者恢复情况
          </h2>
          <p className="text-gray-600">此处显示患者恢复情况的柱状图</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <PieChart size={24} className="mr-2" />
            随访完成率
          </h2>
          <p className="text-gray-600">此处显示随访完成率的饼图</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <LineChart size={24} className="mr-2" />
            治疗效果趋势
          </h2>
          <p className="text-gray-600">此处显示治疗效果趋势的折线图</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">数据分析报告</h2>
        <textarea
          className="w-full p-2 border rounded h-40"
          placeholder="在此输入数据分析报告..."
        ></textarea>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          生成报告
        </button>
      </div>
    </div>
  );
};

export default DataAnalysis;