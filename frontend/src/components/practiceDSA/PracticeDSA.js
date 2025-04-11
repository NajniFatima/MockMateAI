import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './practiceDSA.css';

function App() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/problems')
      .then((res) => setProblems(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleStatusChange = async (id, currentStatus) => {
    const newStatus = !currentStatus;

    try {
      await axios.put(`http://localhost:5000/api/problems/${id}`, {
        status: newStatus
      });

      setProblems(problems.map(p => p._id === id ? { ...p, status: newStatus } : p));
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  return (
    <div className="container">
      <h1>Implement Data Structures</h1>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Problem</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem._id}>
              <td>
                <input
                  type="checkbox"
                  className="status-checkbox"
                  checked={problem.status}
                  onChange={() => handleStatusChange(problem._id, problem.status)}
                />
              </td>
              <td>
                <a href={problem.link} target="_blank" rel="noopener noreferrer">
                  {problem.title}
                </a>
              </td>
              <td className={problem.difficulty.toLowerCase()}>{problem.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
