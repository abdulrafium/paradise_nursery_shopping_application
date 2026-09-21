import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onNavigateHome }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate dynamic total number of items in cart (Task 6)
  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // 3 Categories with 6 unique houseplants each (Total 18 plants)
  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=600&q=80',
          description: 'Filters airborne toxins like benzene and releases oxygen overnight for deeper sleep.',
          cost: '$18',
        },
        {
          name: 'Spider Plant',
          image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
          description: 'Resilient and child-safe air purifier that thrives in bright indirect sunlight.',
          cost: '$15',
        },
        {
          name: 'Peace Lily',
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80',
          description: 'Graceful white spathes that absorb acetone vapors and elevate room humidity.',
          cost: '$22',
        },
        {
          name: 'Boston Fern',
          image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=600&q=80',
          description: 'Feathery arching fronds that naturally restore moisture to dry indoor spaces.',
          cost: '$17',
        },
        {
          name: 'Rubber Plant',
          image: 'https://images.unsplash.com/photo-1599598425947-320b5f10642f?auto=format&fit=crop&w=600&q=80',
          description: 'Broad, glossy emerald leaves that eliminate indoor air pollutants and dust.',
          cost: '$25',
        },
        {
          name: 'English Ivy',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
          description: 'Vigorous trailing climber renowned for drastically reducing airborne mold.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Aromatic & Fragrant Plants',
      plants: [
        {
          name: 'French Lavender',
          image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80',
          description: 'Calming floral aroma that reduces stress, eases anxiety, and encourages peaceful sleep.',
          cost: '$20',
        },
        {
          name: 'Sweet Jasmine',
          image: 'https://images.unsplash.com/photo-1592722247656-62b1b3fb18a9?auto=format&fit=crop&w=600&q=80',
          description: 'Intoxicating sweet night fragrance with delicate star-shaped white blossoms.',
          cost: '$24',
        },
        {
          name: 'Rosemary Herb',
          image: 'https://images.unsplash.com/photo-1515586000433-a5bc720b3603?auto=format&fit=crop&w=600&q=80',
          description: 'Invigorating pine-scented culinary herb that sharpens focus and memory.',
          cost: '$12',
        },
        {
          name: 'Peppermint',
          image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80',
          description: 'Crisp refreshing mint aroma that acts as a natural insect repellent and room refresher.',
          cost: '$10',
        },
        {
          name: 'Lemon Balm',
          image: 'https://images.unsplash.com/photo-1596724803734-7a2e2be855f4?auto=format&fit=crop&w=600&q=80',
          description: 'Zesty citrus scent with delicate leaves that can be brewed into soothing herbal teas.',
          cost: '$14',
        },
        {
          name: 'Silver Dollar Eucalyptus',
          image: 'https://images.unsplash.com/photo-1516048015710-7a3b4c86be43?auto=format&fit=crop&w=600&q=80',
          description: 'Crisp menthol essence that opens airways and infuses rooms with spa-like aroma.',
          cost: '$26',
        },
      ],
    },
    {
      category: 'Low Maintenance & Succulents',
      plants: [
        {
          name: 'Aloe Vera',
          image: 'https://images.unsplash.com/photo-1509587584298-0f3b313a4890?auto=format&fit=crop&w=600&q=80',
          description: 'Hardy desert succulent containing soothing gel for skin irritation and minor burns.',
          cost: '$12',
        },
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
          description: 'Near-indestructible glossy foliage that tolerates drought and deep shade effortlessly.',
          cost: '$22',
        },
        {
          name: 'Jade Plant',
          image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=600&q=80',
          description: 'Fleshy succulent symbolizing good fortune, thriving with infrequent watering.',
          cost: '$16',
        },
        {
          name: 'Golden Pothos',
          image: 'https://images.unsplash.com/photo-1596724814361-923ca5df6d09?auto=format&fit=crop&w=600&q=80',
          description: 'Lush golden-variegated trailing vine that thrives under almost any indoor light.',
          cost: '$15',
        },
        {
          name: 'Cast Iron Plant',
          image: 'https://images.unsplash.com/photo-1587556930799-8dca6aef3dc2?auto=format&fit=crop&w=600&q=80',
          description: 'Robust dark green foliage that survives low humidity, temperature shifts, and neglect.',
          cost: '$28',
        },
        {
          name: 'Haworthia Zebra',
          image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80',
          description: 'Compact miniature succulent adorned with striking raised white zebra stripes.',
          cost: '$13',
        },
      ],
    },
  ];

  // Add plant to cart and disable button (Task 6)
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  // Check if plant is added to cart
  const isPlantAdded = (plantName) => {
    return addedToCart[plantName] || cart.some((item) => item.name === plantName);
  };

  const handlePlantsLinkClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartLinkClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleHomeLinkClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      setShowCart(false);
    }
  };

  return (
    <div className="product-list-wrapper">
      {/* Navbar appearing on both Product Listing and Cart pages (Task 6) */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={handleHomeLinkClick}>
          <div className="brand-logo-icon">🌿</div>
          <div className="brand-text">
            <span className="brand-name">Paradise Nursery</span>
            <span className="brand-subtext">Where Green Living Begins</span>
          </div>
        </div>

        <div className="navbar-links">
          <button
            className={`nav-link-btn ${!showCart ? 'active' : ''}`}
            onClick={handlePlantsLinkClick}
          >
            Plants
          </button>
          <button className="nav-link-btn" onClick={handleHomeLinkClick}>
            Home
          </button>
          <div className="cart-nav-box" onClick={handleCartLinkClick} title="View Shopping Cart">
            <svg
              className="cart-svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-count-badge">{totalCartCount}</span>
          </div>
        </div>
      </nav>

      {/* Main Content: Either Product Catalog or Cart Page */}
      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <main className="product-catalog-container">
          <header className="catalog-hero-header">
            <span className="catalog-badge">🌿 Curated Houseplants</span>
            <h2 className="catalog-title">Transform Your Space with Greenery</h2>
            <p className="catalog-subtitle">
              Browse our nursery-grown selection of air-purifying, aromatic, and easy-care plants.
            </p>
          </header>

          <div className="categories-wrapper">
            {plantsArray.map((categoryObj) => (
              <section className="category-section" key={categoryObj.category}>
                <div className="category-header">
                  <h3 className="category-title">{categoryObj.category}</h3>
                  <span className="category-count">
                    {categoryObj.plants.length} botanical varieties
                  </span>
                </div>

                <div className="plant-cards-grid">
                  {categoryObj.plants.map((plant) => {
                    const alreadyAdded = isPlantAdded(plant.name);
                    return (
                      <article className="plant-card" key={plant.name}>
                        <div className="plant-image-container">
                          <img
                            src={plant.image}
                            alt={plant.name}
                            className="plant-thumbnail"
                            loading="lazy"
                          />
                          <span className="plant-price-pill">{plant.cost}</span>
                        </div>

                        <div className="plant-info-container">
                          <h4 className="plant-name">{plant.name}</h4>
                          <p className="plant-description">{plant.description}</p>
                          <div className="plant-card-footer">
                            <span className="plant-price-label">
                              Price: <strong>{plant.cost}</strong>
                            </span>
                            <button
                              className={`btn-add-to-cart ${alreadyAdded ? 'added' : ''}`}
                              disabled={alreadyAdded}
                              onClick={() => handleAddToCart(plant)}
                            >
                              {alreadyAdded ? '✓ Added to Cart' : 'Add to Cart'}
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default ProductList;
