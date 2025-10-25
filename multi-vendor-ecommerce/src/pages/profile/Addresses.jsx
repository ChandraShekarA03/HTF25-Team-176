import { useState } from 'react';
import { MapPin, Plus, Edit, Trash2, Home, Briefcase } from 'lucide-react';

const Addresses = () => {
  const [addresses, setAddresses] = useState([
    {
      id: '1',
      type: 'home',
      fullName: 'John Doe',
      phone: '+91 98765 43210',
      addressLine1: '123, MG Road',
      addressLine2: 'Near Central Mall',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      isDefault: true,
    },
    {
      id: '2',
      type: 'work',
      fullName: 'John Doe',
      phone: '+91 98765 43210',
      addressLine1: '456, Tech Park',
      addressLine2: 'Building A, Floor 5',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560001',
      isDefault: false,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      setAddresses(addresses.filter(addr => addr.id !== id));
    }
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  return (
    <div>
      <div className="section-header">
        <h1 className="profile-title">My Addresses</h1>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn btn-primary"
        >
          <Plus size={20} />
          Add New Address
        </button>
      </div>

      {/* Add New Address Form */}
      {showAddForm && (
        <div style={{
          background: '#FFF5E1',
          padding: '2rem',
          borderRadius: '16px',
          marginBottom: '2rem',
          border: '2px solid #E85D04'
        }}>
          <h3 style={{ color: '#2E003E', marginBottom: '1.5rem', fontSize: '1.25rem' }}>
            Add New Address
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
                Full Name *
              </label>
              <input
                type="text"
                placeholder="John Doe"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #386641',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #386641',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
                Address Line 1 *
              </label>
              <input
                type="text"
                placeholder="House No., Building Name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #386641',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
                Address Line 2
              </label>
              <input
                type="text"
                placeholder="Area, Landmark"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #386641',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
                City *
              </label>
              <input
                type="text"
                placeholder="Mumbai"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #386641',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
                State *
              </label>
              <input
                type="text"
                placeholder="Maharashtra"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #386641',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
                Pincode *
              </label>
              <input
                type="text"
                placeholder="400001"
                maxLength={6}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #386641',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
                Address Type *
              </label>
              <select style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #386641',
                borderRadius: '8px',
                fontSize: '1rem'
              }}>
                <option value="home">Home</option>
                <option value="work">Work</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input type="checkbox" id="setDefault" />
            <label htmlFor="setDefault" style={{ cursor: 'pointer' }}>
              Set as default address
            </label>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button className="btn btn-secondary">
              Save Address
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="btn btn-outline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Saved Addresses */}
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {addresses.map((address) => {
          const Icon = address.type === 'home' ? Home : address.type === 'work' ? Briefcase : MapPin;
          
          return (
            <div
              key={address.id}
              style={{
                padding: '2rem',
                borderRadius: '16px',
                border: `2px solid ${address.isDefault ? '#E85D04' : '#386641'}`,
                background: address.isDefault ? '#FFF5E1' : 'white',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{
                      padding: '0.75rem',
                      borderRadius: '10px',
                      background: '#E85D04',
                      color: 'white'
                    }}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2E003E', margin: '0 0 0.25rem 0', textTransform: 'capitalize' }}>
                        {address.type}
                      </h3>
                      <p style={{ margin: 0, color: '#666', fontSize: '0.875rem' }}>
                        {address.fullName} • {address.phone}
                      </p>
                    </div>
                  </div>

                  <p style={{ color: '#2E003E', lineHeight: 1.6, margin: 0 }}>
                    {address.addressLine1}<br />
                    {address.addressLine2 && <>{address.addressLine2}<br /></>}
                    {address.city}, {address.state} - {address.pincode}
                  </p>

                  {address.isDefault && (
                    <span style={{
                      display: 'inline-block',
                      marginTop: '1rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      background: '#386641',
                      color: 'white',
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      DEFAULT
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {!address.isDefault && (
                    <button
                      onClick={() => handleSetDefault(address.id)}
                      className="btn btn-sm btn-secondary"
                      title="Set as default"
                    >
                      <MapPin size={18} />
                    </button>
                  )}
                  <button className="btn btn-sm btn-outline" title="Edit">
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(address.id)}
                    className="btn btn-sm"
                    style={{ background: '#DC2626', color: 'white' }}
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Addresses;
