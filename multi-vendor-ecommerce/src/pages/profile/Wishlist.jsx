import { useState } from 'react';
import { Heart, ShoppingCart, Trash2, Share2 } from 'lucide-react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: '1',
      productId: 'PROD-001',
      name: 'Wireless Bluetooth Headphones with Active Noise Cancellation',
      price: 2999.99,
      originalPrice: 4999.99,
      image: '🎧',
      inStock: true,
      vendor: 'TechGear India',
    },
    {
      id: '2',
      productId: 'PROD-002',
      name: 'Smart Fitness Watch with Heart Rate Monitor',
      price: 5499.00,
      originalPrice: 7999.00,
      image: '⌚',
      inStock: true,
      vendor: 'FitTech Store',
    },
    {
      id: '3',
      productId: 'PROD-003',
      name: 'Premium Laptop Backpack Water Resistant',
      price: 1899.00,
      image: '🎒',
      inStock: false,
      vendor: 'BagWorld',
    },
    {
      id: '4',
      productId: 'PROD-004',
      name: 'Mechanical Gaming Keyboard RGB',
      price: 3499.00,
      originalPrice: 5999.00,
      image: '⌨️',
      inStock: true,
      vendor: 'GameZone Pro',
    },
  ]);

  const handleRemove = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const handleAddToCart = (item) => {
    alert(`Added "${item.name}" to cart!`);
  };

  const handleShare = (item) => {
    if (navigator.share) {
      navigator.share({
        title: item.name,
        text: `Check out this product: ${item.name}`,
        url: window.location.href,
      });
    } else {
      alert('Share feature not supported on this browser');
    }
  };

  const calculateDiscount = (item) => {
    if (item.originalPrice) {
      return Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
    }
    return 0;
  };

  return (
    <div>
      <div className="section-header">
        <h1 className="profile-title">My Wishlist ❤️</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Heart size={28} style={{ color: '#E85D04' }} fill="#E85D04" />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#E85D04' }}>
            {wishlistItems.length} items
          </span>
        </div>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">💔</div>
          <h3>Your wishlist is empty</h3>
          <p>Start adding products you love!</p>
          <button className="btn btn-primary">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => {
            const discount = calculateDiscount(item);
            return (
              <div key={item.id} className="wishlist-item">
                <div className="wishlist-image">
                  {discount > 0 && (
                    <span className="discount-badge">{discount}% OFF</span>
                  )}
                  <span style={{ fontSize: '5rem' }}>{item.image}</span>
                </div>

                <div className="wishlist-content">
                  <p className="wishlist-vendor">{item.vendor}</p>
                  <h3 className="wishlist-title">{item.name}</h3>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="wishlist-price">₹{item.price.toFixed(2)}</span>
                    {item.originalPrice && (
                      <span className="wishlist-original-price">
                        ₹{item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {!item.inStock && (
                    <p style={{ color: '#DC2626', fontWeight: 'bold', marginBottom: '1rem' }}>
                      Out of Stock
                    </p>
                  )}

                  <div className="wishlist-actions">
                    <button
                      onClick={() => handleAddToCart(item)}
                      disabled={!item.inStock}
                      className="btn btn-primary"
                    >
                      <ShoppingCart size={18} />
                      {item.inStock ? 'Add to Cart' : 'Unavailable'}
                    </button>
                    <button
                      onClick={() => handleShare(item)}
                      className="btn btn-sm btn-secondary"
                      title="Share"
                    >
                      <Share2 size={18} />
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="btn btn-sm btn-outline"
                      title="Remove"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
