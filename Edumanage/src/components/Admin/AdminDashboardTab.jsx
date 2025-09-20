import React from 'react';
import { Users, GraduationCap, BookOpen, DollarSign, Shield, Database, Activity, TrendingUp, AlertTriangle, CheckCircle, Eye, Edit, Trash2, Plus } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const AdminDashboardTab = ({ users, systemStats, userActivity, moduleUsage, auditLogs }) => {
  // Calculate some additional metrics
  const totalTeachers = users.filter(user => user.designation && user.designation.includes('Teacher')).length;
  const totalStudents = 1245; // This would come from actual data in a real app
  const recentActivities = auditLogs.slice(0, 5);
  
  // Quick stats for the admin dashboard
  const adminStats = [
    { title: 'Total Users', value: users.length, icon: Users, color: 'var(--primary)', change: '+12%' },
    { title: 'Total Teachers', value: totalTeachers, icon: GraduationCap, color: 'var(--success)', change: '+5%' },
    { title: 'Total Students', value: totalStudents.toLocaleString(), icon: BookOpen, color: 'var(--warning)', change: '+3%' },
    { title: 'System Health', value: '98%', icon: Activity, color: 'var(--info)', change: '+2%' }
  ];

  // System performance data
  const performanceData = [
    { name: 'CPU', usage: 45, color: '#007bff' },
    { name: 'Memory', usage: 68, color: '#28a745' },
    { name: 'Disk', usage: 32, color: '#ffc107' },
    { name: 'Network', usage: 75, color: '#dc3545' }
  ];

  // Recent audit logs for the dashboard
  const recentLogs = auditLogs.slice(0, 5);

  // User growth data for area chart
  const userGrowthData = [
    { month: 'Jan', users: 1200 },
    { month: 'Feb', users: 1220 },
    { month: 'Mar', users: 1245 },
    { month: 'Apr', users: 1260 },
    { month: 'May', users: 1280 },
    { month: 'Jun', users: 1305 }
  ];

  return (
    <div>
      {/* Welcome Section with Gradient Background */}
      <div style={{ 
        marginBottom: '30px',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--info) 100%)',
        borderRadius: 'var(--border-radius-lg)',
        padding: '30px',
        color: 'white',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '8px', color: 'white' }}>Admin Dashboard</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', maxWidth: '600px' }}>
          Welcome back! Here's what's happening in your system today. 
          Manage users, monitor system performance, and track activities from this centralized dashboard.
        </p>
      </div>

      {/* Quick Stats with Enhanced Design */}
      <div className="grid grid-4" style={{ marginBottom: '30px', gap: '20px' }}>
        {adminStats.map((stat, index) => (
          <div key={index} className="card" style={{ 
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--border-color)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            padding: '20px',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  {stat.title}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: stat.color }}>
                  {stat.value}
                </div>
              </div>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                backgroundColor: `${stat.color}15`, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <stat.icon size={24} color={stat.color} />
              </div>
            </div>
            {stat.change && (
              <div style={{ 
                fontSize: '0.875rem', 
                color: stat.change.startsWith('+') ? 'var(--success)' : 'var(--danger)',
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <TrendingUp size={14} style={{ marginRight: '4px' }} />
                {stat.change} from last month
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Charts Section with Enhanced Design */}
      <div className="grid grid-2" style={{ marginBottom: '30px', gap: '24px' }}>
        {/* User Growth Chart */}
        <div className="card" style={{ 
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--border-color)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          padding: '24px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: '0' }}>User Growth Trend</h3>
            <div style={{ 
              fontSize: '12px', 
              padding: '4px 10px', 
              backgroundColor: 'var(--primary)15', 
              color: 'var(--primary)', 
              borderRadius: '20px',
              fontWeight: '500'
            }}>
              Last 6 months
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis 
                dataKey="month" 
                stroke="var(--text-secondary)" 
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                stroke="var(--text-secondary)" 
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--background-card)', 
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                  borderRadius: 'var(--border-radius)',
                  boxShadow: 'var(--shadow)'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="users" 
                stroke="var(--primary)" 
                strokeWidth={3}
                fill="url(#colorUsers)"
                fillOpacity={0.2}
              />
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Module Usage Chart */}
        <div className="card" style={{ 
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--border-color)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          padding: '24px'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: '0 0 20px 0' }}>Module Usage Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={moduleUsage}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
                paddingAngle={2}
              >
                {moduleUsage.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--background-card)', 
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                  borderRadius: 'var(--border-radius)',
                  boxShadow: 'var(--shadow)'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '15px', 
            flexWrap: 'wrap',
            marginTop: '20px'
          }}>
            {moduleUsage.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ 
                  width: '12px', 
                  height: '12px', 
                  backgroundColor: item.color, 
                  borderRadius: '50%' 
                }}></div>
                <span style={{ fontSize: '12px' }}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Performance and Recent Activities */}
      <div className="grid grid-2" style={{ marginBottom: '30px', gap: '24px' }}>
        {/* System Performance */}
        <div className="card" style={{ 
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--border-color)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          padding: '24px'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: '0 0 20px 0' }}>System Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={systemStats.performance} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" horizontal={false} />
              <XAxis 
                type="number" 
                domain={[0, 100]} 
                stroke="var(--text-secondary)" 
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                dataKey="metric" 
                type="category" 
                stroke="var(--text-secondary)" 
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--background-card)', 
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                  borderRadius: 'var(--border-radius)',
                  boxShadow: 'var(--shadow)'
                }} 
              />
              <Bar 
                dataKey="value" 
                name="Usage %"
                radius={[0, 4, 4, 0]}
              >
                {systemStats.performance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color || performanceData[index]?.color || '#007bff'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activities */}
        <div className="card" style={{ 
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--border-color)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          padding: '24px'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: '0 0 20px 0' }}>Recent System Activities</h3>
          <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
            {recentLogs.map((log) => (
              <div key={log.id} style={{ 
                padding: '12px 0', 
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'flex-start'
              }}>
                <div style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '50%', 
                  backgroundColor: log.status === 'Success' ? 'var(--success)15' : 'var(--danger)15',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px',
                  marginTop: '2px'
                }}>
                  {log.status === 'Success' ? (
                    <CheckCircle size={18} color="var(--success)" />
                  ) : (
                    <AlertTriangle size={18} color="var(--danger)" />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    marginBottom: '4px'
                  }}>
                    <strong style={{ fontSize: '14px' }}>{log.user}</strong>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      {log.timestamp}
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    <span style={{ 
                      padding: '2px 6px', 
                      backgroundColor: 'var(--info)15', 
                      color: 'var(--info)', 
                      borderRadius: '4px',
                      fontSize: '11px',
                      marginRight: '6px'
                    }}>
                      {log.module}
                    </span>
                    {log.action}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {log.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions with Enhanced Design */}
      <div className="card" style={{ 
        borderRadius: 'var(--border-radius-lg)',
        border: '1px solid var(--border-color)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        padding: '24px',
        marginBottom: '30px'
      }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: '0 0 20px 0' }}>Quick Actions</h3>
        <div className="grid grid-4" style={{ gap: '16px' }}>
          <button className="btn btn-primary" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px',
            height: '120px',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--border-color)',
            transition: 'all 0.2s ease',
            backgroundColor: 'white'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--primary)15', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '12px'
            }}>
              <Users size={24} color="var(--primary)" />
            </div>
            <span>Add User</span>
          </button>
          
          <button className="btn btn-success" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px',
            height: '120px',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--border-color)',
            transition: 'all 0.2s ease',
            backgroundColor: 'white'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--success)15', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '12px'
            }}>
              <GraduationCap size={24} color="var(--success)" />
            </div>
            <span>Add Teacher</span>
          </button>
          
          <button className="btn btn-warning" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px',
            height: '120px',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--border-color)',
            transition: 'all 0.2s ease',
            backgroundColor: 'white'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--warning)15', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '12px'
            }}>
              <BookOpen size={24} color="var(--warning)" />
            </div>
            <span>Add Course</span>
          </button>
          
          <button className="btn btn-info" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px',
            height: '120px',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--border-color)',
            transition: 'all 0.2s ease',
            backgroundColor: 'white'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--info)15', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '12px'
            }}>
              <Shield size={24} color="var(--info)" />
            </div>
            <span>System Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardTab;