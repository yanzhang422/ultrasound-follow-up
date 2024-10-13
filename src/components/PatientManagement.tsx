import React, { useState } from 'react';
import { User, Plus, Edit, Trash2, Save, X } from 'lucide-react';

interface Patient {
  id: number;
  name: string;
  age: number;
  diagnosis: string;
}

const PatientManagement: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [newPatient, setNewPatient] = useState({ name: '', age: '', diagnosis: '' });
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);

  const addPatient = () => {
    if (newPatient.name && newPatient.age && newPatient.diagnosis) {
      setPatients([...patients, { ...newPatient, id: Date.now(), age: parseInt(newPatient.age) }]);
      setNewPatient({ name: '', age: '', diagnosis: '' });
    }
  };

  const startEditing = (patient: Patient) => {
    setEditingPatient(patient);
  };

  const cancelEditing = () => {
    setEditingPatient(null);
  };

  const saveEdit = () => {
    if (editingPatient) {
      setPatients(patients.map(p => p.id === editingPatient.id ? editingPatient : p));
      setEditingPatient(null);
    }
  };

  const deletePatient = (id: number) => {
    setPatients(patients.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">患者信息管理</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">添加新患者</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="姓名"
            className="w-full p-2 border rounded"
            value={newPatient.name}
            onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="年龄"
            className="w-full p-2 border rounded"
            value={newPatient.age}
            onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
          />
          <input
            type="text"
            placeholder="诊断"
            className="w-full p-2 border rounded"
            value={newPatient.diagnosis}
            onChange={(e) => setNewPatient({ ...newPatient, diagnosis: e.target.value })}
          />
          <button
            onClick={addPatient}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
          >
            <Plus size={18} className="mr-2" />
            添加患者
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">患者列表</h2>
        <ul className="space-y-4">
          {patients.map((patient) => (
            <li key={patient.id} className="flex items-center justify-between p-4 bg-gray-50 rounded">
              {editingPatient?.id === patient.id ? (
                <div className="flex-grow space-y-2">
                  <input
                    type="text"
                    value={editingPatient.name}
                    onChange={(e) => setEditingPatient({ ...editingPatient, name: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="number"
                    value={editingPatient.age}
                    onChange={(e) => setEditingPatient({ ...editingPatient, age: parseInt(e.target.value) })}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    value={editingPatient.diagnosis}
                    onChange={(e) => setEditingPatient({ ...editingPatient, diagnosis: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <User size={24} className="text-gray-500" />
                  <div>
                    <p className="font-semibold">{patient.name}</p>
                    <p className="text-sm text-gray-600">年龄: {patient.age}</p>
                    <p className="text-sm text-gray-600">诊断: {patient.diagnosis}</p>
                  </div>
                </div>
              )}
              <div className="flex space-x-2">
                {editingPatient?.id === patient.id ? (
                  <>
                    <button onClick={saveEdit} className="text-green-500 hover:text-green-700">
                      <Save size={18} />
                    </button>
                    <button onClick={cancelEditing} className="text-red-500 hover:text-red-700">
                      <X size={18} />
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEditing(patient)} className="text-blue-500 hover:text-blue-700">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => deletePatient(patient.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientManagement;