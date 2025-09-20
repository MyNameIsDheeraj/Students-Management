import React from 'react';
import { Bell, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const DashboardTab = ({ currentChild, feeData, performanceData, attendanceData, events }) => {
  return (
    <div>
      <div className="grid grid-4" style={{ marginBottom: '30px' }}>
        <div className="stats-card">
          <div className="stats-number">{currentChild.gpa}</div>
          <div className="stats-label">Current GPA</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}>
          <div className="stats-number">{currentChild.attendance}%</div>
          <div className="stats-label">Attendance</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)' }}>
          <div className="stats-number">{currentChild.pendingAssignments}</div>
          <div className="stats-label">Pending Assignments</div>
        </div>
        <div className="stats-card" style={{ background: 'linear-gradient(135deg, #17a2b8 0%, #6f42c1 100%)' }}>
          <div className="stats-number">₹{feeData.pendingFees.toLocaleString()}</div>
          <div className="stats-label">Pending Fees</div>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Academic Progress</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[7, 10]} />
              <Tooltip />
              <Line type="monotone" dataKey="gpa" stroke="#007bff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Monthly Attendance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="present" fill="#28a745" name="Present" />
              <Bar dataKey="absent" fill="#dc3545" name="Absent" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Bell size={20} />
            Recent Updates
          </h3>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <div style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <h4 style={{ fontSize: '14px', marginBottom: '5px' }}>Assignment Submitted</h4>
              <p style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Physics Lab Report submitted successfully</p>
              <span style={{ fontSize: '11px', color: '#999' }}>2 hours ago</span>
            </div>
            <div style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <h4 style={{ fontSize: '14px', marginBottom: '5px' }}>Exam Schedule Updated</h4>
              <p style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Mathematics exam rescheduled to Feb 5</p>
              <span style={{ fontSize: '11px', color: '#999' }}>1 day ago</span>
            </div>
            <div style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <h4 style={{ fontSize: '14px', marginBottom: '5px' }}>Fee Payment Reminder</h4>
              <p style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Next installment due on Jan 30</p>
              <span style={{ fontSize: '11px', color: '#999' }}>2 days ago</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar size={20} />
            Upcoming Events
          </h3>
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {events.map((event) => (
              <div key={event.id} style={{ 
                padding: '12px 0', 
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '5px' }}>
                    {event.title}
                  </h4>
                  <span style={{ fontSize: '12px', color: '#666' }}>{event.date}</span>
                </div>
                <span className={`badge badge-${
                  event.type === 'exam' ? 'danger' : 
                  event.type === 'meeting' ? 'warning' : 
                  event.type === 'holiday' ? 'success' : 'info'
                }`}>
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTab;