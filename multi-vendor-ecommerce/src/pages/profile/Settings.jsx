import { useState } from 'react';
import { User, Mail, Phone, Lock, Bell, Eye, EyeOff } from 'lucide-react';

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
    sms: false,
  });

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div>
      <h1 className="profile-title">Account Settings</h1>

      {/* Personal Information */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
          Personal Information
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
              <User size={18} />
              Full Name
            </label>
            <input
              type="text"
              defaultValue="John Doe"
              style={{
                width: '100%',
                padding: '0.875rem',
                border: '2px solid #386641',
                borderRadius: '10px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
              <Mail size={18} />
              Email Address
            </label>
            <input
              type="email"
              defaultValue="john.doe@example.com"
              style={{
                width: '100%',
                padding: '0.875rem',
                border: '2px solid #386641',
                borderRadius: '10px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
              <Phone size={18} />
              Phone Number
            </label>
            <input
              type="tel"
              defaultValue="+91 98765 43210"
              style={{
                width: '100%',
                padding: '0.875rem',
                border: '2px solid #386641',
                borderRadius: '10px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
              Date of Birth
            </label>
            <input
              type="date"
              defaultValue="1995-06-15"
              style={{
                width: '100%',
                padding: '0.875rem',
                border: '2px solid #386641',
                borderRadius: '10px',
                fontSize: '1rem'
              }}
            />
          </div>
        </div>

        <button className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          Save Changes
        </button>
      </div>

      {/* Change Password */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
          Change Password
        </h2>

        <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '600px' }}>
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
              <Lock size={18} />
              Current Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter current password"
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  paddingRight: '3rem',
                  border: '2px solid #386641',
                  borderRadius: '10px',
                  fontSize: '1rem'
                }}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              style={{
                width: '100%',
                padding: '0.875rem',
                border: '2px solid #386641',
                borderRadius: '10px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
              Confirm New Password
            </label>
            <input
              type="password"
              placeholder="Re-enter new password"
              style={{
                width: '100%',
                padding: '0.875rem',
                border: '2px solid #386641',
                borderRadius: '10px',
                fontSize: '1rem'
              }}
            />
          </div>
        </div>

        <button className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>
          Update Password
        </button>
      </div>

      {/* Notification Preferences */}
      <div>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
          <Bell size={24} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
          Notification Preferences
        </h2>

        <div style={{ display: 'grid', gap: '1rem', maxWidth: '600px' }}>
          {[
            { key: 'orderUpdates', label: 'Order Updates', desc: 'Get notified about your order status' },
            { key: 'promotions', label: 'Promotions & Offers', desc: 'Receive updates about sales and discounts' },
            { key: 'newsletter', label: 'Newsletter', desc: 'Weekly newsletter with product recommendations' },
            { key: 'sms', label: 'SMS Notifications', desc: 'Receive important updates via SMS' },
          ].map((item) => (
            <div
              key={item.key}
              style={{
                padding: '1.5rem',
                border: '2px solid #386641',
                borderRadius: '12px',
                background: notifications[item.key] ? '#FFF5E1' : 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.3s'
              }}
            >
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', color: '#2E003E', fontSize: '1.1rem' }}>
                  {item.label}
                </h4>
                <p style={{ margin: 0, color: '#666', fontSize: '0.875rem' }}>
                  {item.desc}
                </p>
              </div>

              <label style={{ position: 'relative', display: 'inline-block', width: '60px', height: '34px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={notifications[item.key]}
                  onChange={() => handleNotificationChange(item.key)}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: notifications[item.key] ? '#386641' : '#ccc',
                  borderRadius: '34px',
                  transition: '0.4s',
                }}>
                  <span style={{
                    position: 'absolute',
                    content: '',
                    height: '26px',
                    width: '26px',
                    left: notifications[item.key] ? '30px' : '4px',
                    bottom: '4px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    transition: '0.4s',
                  }} />
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div style={{ marginTop: '4rem', padding: '2rem', border: '2px solid #DC2626', borderRadius: '16px', background: '#FFF5E1' }}>
        <h3 style={{ color: '#DC2626', marginBottom: '1rem', fontSize: '1.25rem' }}>
          Danger Zone
        </h3>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <button
          className="btn"
          style={{ background: '#DC2626', color: 'white' }}
          onClick={() => {
            if (window.confirm('Are you absolutely sure you want to delete your account? This action cannot be undone.')) {
              alert('Account deletion process initiated. You will receive a confirmation email.');
            }
          }}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
