import { useState } from 'react';
import { CreditCard, Plus, Trash2, Check } from 'lucide-react';

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: '1',
      type: 'card',
      cardNumber: '**** **** **** 1234',
      cardHolder: 'JOHN DOE',
      expiryDate: '12/25',
      cardType: 'Visa',
      isDefault: true,
    },
    {
      id: '2',
      type: 'card',
      cardNumber: '**** **** **** 5678',
      cardHolder: 'JOHN DOE',
      expiryDate: '08/26',
      cardType: 'Mastercard',
      isDefault: false,
    },
    {
      id: '3',
      type: 'upi',
      upiId: 'john.doe@paytm',
      isDefault: false,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this payment method?')) {
      setPaymentMethods(methods => methods.filter(m => m.id !== id));
    }
  };

  const handleSetDefault = (id) => {
    setPaymentMethods(methods =>
      methods.map(m => ({ ...m, isDefault: m.id === id }))
    );
  };

  return (
    <div>
      <div className="section-header">
        <h1 className="profile-title">Payment Methods</h1>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn btn-primary"
        >
          <Plus size={20} />
          Add New
        </button>
      </div>

      {/* Add New Payment Form */}
      {showAddForm && (
        <div style={{
          background: '#FFF5E1',
          padding: '2rem',
          borderRadius: '16px',
          marginBottom: '2rem',
          border: '2px solid #E85D04'
        }}>
          <h3 style={{ color: '#2E003E', marginBottom: '1.5rem', fontSize: '1.25rem' }}>
            Add New Payment Method
          </h3>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
              Payment Type
            </label>
            <select style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #386641',
              borderRadius: '8px',
              fontSize: '1rem'
            }}>
              <option>Credit/Debit Card</option>
              <option>UPI</option>
              <option>Net Banking</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
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
                Cardholder Name
              </label>
              <input
                type="text"
                placeholder="JOHN DOE"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #386641',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  textTransform: 'uppercase'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2E003E' }}>
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                maxLength={5}
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
                CVV
              </label>
              <input
                type="password"
                placeholder="***"
                maxLength={3}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #386641',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input type="checkbox" id="setDefaultPayment" />
            <label htmlFor="setDefaultPayment" style={{ cursor: 'pointer' }}>
              Set as default payment method
            </label>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button className="btn btn-secondary">
              <CreditCard size={18} />
              Save Payment Method
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

      {/* Saved Payment Methods */}
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            style={{
              padding: '2rem',
              borderRadius: '16px',
              border: `2px solid ${method.isDefault ? '#E85D04' : '#386641'}`,
              background: method.isDefault ? '#FFF5E1' : 'white',
              transition: 'all 0.3s',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div style={{ display: 'flex', gap: '1.5rem', flex: 1 }}>
                <div style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: '#E85D04',
                  height: 'fit-content'
                }}>
                  <CreditCard size={32} color="white" />
                </div>

                <div style={{ flex: 1 }}>
                  {method.type === 'card' ? (
                    <>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2E003E', margin: 0 }}>
                          {method.cardNumber}
                        </h3>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '6px',
                          background: '#386641',
                          color: 'white',
                          fontSize: '0.75rem',
                          fontWeight: 'bold'
                        }}>
                          {method.cardType}
                        </span>
                      </div>
                      <p style={{ color: '#666', margin: '0 0 0.5rem 0' }}>{method.cardHolder}</p>
                      <p style={{ color: '#666', margin: 0, fontSize: '0.875rem' }}>
                        Expires: {method.expiryDate}
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2E003E', margin: '0 0 0.5rem 0' }}>
                        UPI ID
                      </h3>
                      <p style={{ color: '#666', margin: 0, fontSize: '1.1rem' }}>{method.upiId}</p>
                    </>
                  )}

                  {method.isDefault && (
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginTop: '1rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      background: '#386641',
                      color: 'white',
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      <Check size={16} />
                      DEFAULT
                    </span>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {!method.isDefault && (
                  <button
                    onClick={() => handleSetDefault(method.id)}
                    className="btn btn-sm btn-secondary"
                    title="Set as default"
                  >
                    <Check size={18} />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(method.id)}
                  className="btn btn-sm"
                  style={{ background: '#DC2626', color: 'white' }}
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
