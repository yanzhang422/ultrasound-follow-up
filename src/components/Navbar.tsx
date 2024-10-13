import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Stethoscope size={24} />
          <span className="text-xl font-bold">超声随访系统</span>
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">患者管理</Link>
          <Link to="/follow-up" className="hover:underline">随访计划</Link>
          <Link to="/analysis" className="hover:underline">数据分析</Link>
          <Link to="/communication" className="hover:underline">实时交流</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;