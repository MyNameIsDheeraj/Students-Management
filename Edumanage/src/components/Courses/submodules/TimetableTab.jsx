import React from 'react';
import { Edit, User } from 'lucide-react';

const TimetableTab = ({ timetable }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Class Timetable Management</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <select className="form-control" style={{ width: '150px' }}>
            <option value="">Select Class</option>
            <option value="8A">8A</option>
            <option value="8B">8B</option>
            <option value="9A">9A</option>
            <option value="9B">9B</option>
            <option value="10A">10A</option>
            <option value="10B">10B</option>
          </select>
          <button className="btn btn-primary">
            <Edit size={16} />
            Edit Timetable
          </button>
        </div>
      </div>

      <div className="card">
        <h4 style={{ marginBottom: '20px' }}>Weekly Timetable - All Classes</h4>
        <div style={{ overflowX: 'auto' }}>
          <table className="table">
            <thead>
              <tr>
                <th style={{ minWidth: '100px' }}>Time</th>
                <th style={{ minWidth: '150px' }}>Monday</th>
                <th style={{ minWidth: '150px' }}>Tuesday</th>
                <th style={{ minWidth: '150px' }}>Wednesday</th>
                <th style={{ minWidth: '150px' }}>Thursday</th>
                <th style={{ minWidth: '150px' }}>Friday</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((slot, index) => (
                <tr key={index}>
                  <td style={{ fontWeight: '500', backgroundColor: '#f8f9fa' }}>{slot.time}</td>
                  <td>{slot.monday}</td>
                  <td>{slot.tuesday}</td>
                  <td>{slot.wednesday}</td>
                  <td>{slot.thursday}</td>
                  <td>{slot.friday}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h4 style={{ marginBottom: '20px' }}>Teacher Assignments</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Teacher</th>
              <th>Subject</th>
              <th>Classes Assigned</th>
              <th>Total Periods/Week</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. Sarah Johnson</td>
              <td>Mathematics</td>
              <td>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  <span className="badge badge-info">10A</span>
                  <span className="badge badge-info">10B</span>
                  <span className="badge badge-info">11A</span>
                </div>
              </td>
              <td>15</td>
              <td>
                <button className="btn btn-secondary">
                  <Edit size={14} />
                  Reassign
                </button>
              </td>
            </tr>
            <tr>
              <td>Mr. David Wilson</td>
              <td>Physics</td>
              <td>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  <span className="badge badge-info">11A</span>
                  <span className="badge badge-info">11B</span>
                </div>
              </td>
              <td>10</td>
              <td>
                <button className="btn btn-secondary">
                  <Edit size={14} />
                  Reassign
                </button>
              </td>
            </tr>
            <tr>
              <td>Ms. Emily Brown</td>
              <td>English</td>
              <td>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  <span className="badge badge-info">9A</span>
                  <span className="badge badge-info">9B</span>
                  <span className="badge badge-info">10A</span>
                </div>
              </td>
              <td>12</td>
              <td>
                <button className="btn btn-secondary">
                  <Edit size={14} />
                  Reassign
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimetableTab;