const PRODUCTS = [
  {
    id: 1,
    name: "Disponible",
    description: "Colchones cameros full size, Marca EKO, 100g poliester, Espuma suave, Tela blanca de maxima calidad, 137x190x20cm.",
    price: 170.00,
    currency: "USD",
    image: "pd1.jpg",
    bulkPrice: 135.00,
    minBulkQuantity: 5,
    tags: ["sin garantía", "sin mensajería", "sin factura"]
  },
  {
    id: 2,
    name: "Disponible",
    description: "Tv de 32 pulgadas con cajita interna y soporte incluído.",
    price: 180,
    currency: "USD",
    image: "pd2.jpg",
    bulkPrice: 160,
    minBulkQuantity: 5,
    tags: ["con garantía", "sin mensajería", "con factura"]
  },
  {
    id: 3,
    name: "Disponible",
    description: "Lavadora secadora eko de 8kg.",
    price: 300,
    currency: "USD",
    image: "pd3.jpg",
    bulkPrice: 270,
    minBulkQuantity: 5,
    tags: ["con garantía", "con mensajería", "con factura"]
  },
  {
    id: 4,
    name: "Disponible",
    description: "Refrigerador eko de 8.5 pies.",
    price: 320,
    currency: "USD",
    image: "pd4.jpg",
    bulkPrice: 290,
    minBulkQuantity: 5,
    tags: ["con garantía", "con mensajería", "con factura"]
  },
  {
    id: 5,
    name: "Disponible",
    description: "Refrigerador eko de 12 pies.",
    price: 460,
    currency: "USD",
    image: "pd5.jpg",
    bulkPrice: 430,
    minBulkQuantity: 5,
    tags: ["con garantía", "con mensajería", "con factura"]
  },
  {
    id: 6,
    name: "Disponible",
    description: "Batidora con vaso de cristal y moledor de especies.",
    price: 50,
    currency: "USD",
    image: "pd6.jpg",
    bulkPrice: 35,
    minBulkQuantity: 5,
    tags: ["con garantía", "sin mensajería", "con factura"]
  },
  {
    id: 7,
    name: "Disponible",
    description: "Cocinas inflarojo.",
    price: 45,
    currency: "USD",
    image: "pd7.jpg",
    bulkPrice: 36,
    minBulkQuantity: 5,
    tags: ["con garantía", "sin mensajería", "con factura"]
  },
  {
    id: 8,
    name: "Disponible",
    description: "Sandwichera, marca future tech.",
    price: 35,
    currency: "USD",
    image: "pd8.jpg",
    bulkPrice: 25,
    minBulkQuantity: 5,
    tags: ["con garantía", "sin mensajería", "con factura"]
  },
  {
    id: 9,
    name: "Disponible",
    description: "Ollas de precion de 5L, marca elecstar.",
    price: 35,
    currency: "USD",
    image: "pd9.jpg",
    bulkPrice: 25,
    minBulkQuantity: 5,
    tags: ["sin garantía", "sin mensajería", "sin factura"]
  },
  {
    id: 10,
    name: "Disponible",
    description: "Ollas de precion de 7L, marca elecstar.",
    price: 40,
    currency: "USD",
    image: "pd9.jpg",
    bulkPrice: 27,
    minBulkQuantity: 5,
    tags: ["sin garantía", "sin mensajería", "sin factura"]
  },
  {
    id: 11,
    name: "Disponible",
    description: "Arrocera negra, marca saco, 700w de fuerza, capacidad de 1.8L",
    price: 40,
    currency: "USD",
    image: "pd10.jpg",
    bulkPrice: 28,
    minBulkQuantity: 5,
    tags: ["con garantía", "sin mensajería", "con factura"]
  },
  {
    id: 12,
    name: "Disponible",
    description: "Arrocera roja, marca eko, 700w de fuerza, capacidad de 1.8L",
    price: 35,
    currency: "USD",
    image: "pd11.jpg",
    bulkPrice: 25,
    minBulkQuantity: 5,
    tags: ["sin garantía", "sin mensajería", "sin factura"]
  },
  {
    id: 13,
    name: "Disponible",
    description: "Arrocera negra, marca eko, 700w de fuerza, capacidad de 1.8L",
    price: 35,
    currency: "USD",
    image: "pd12.jpg",
    bulkPrice: 25,
    minBulkQuantity: 5,
    tags: ["sin garantía", "sin mensajería", "sin factura"]
  },
  {
    id: 14,
    name: "Disponible",
    description: "Olla Reina, marca eko, capacidad de 6L.",
    price: 60,
    currency: "USD",
    image: "pd13.jpg",
    bulkPrice: 47,
    minBulkQuantity: 5,
    tags: ["con garantía", "sin mensajería", "con factura"]
  },
  {
    id: 15,
    name: "Disponible",
    description: "Ventilador recargable, marca saco, con panel solar, dos bombillos.",
    price: 80,
    currency: "USD",
    image: "pd14.jpg",
    bulkPrice: 67,
    minBulkQuantity: 5,
    tags: ["con garantía", "sin mensajería", "con factura"]
  },
  {
    id: 16,
    name: "Disponible",
    description: "Ventilador recargable, marca JMD.",
    price: 55,
    currency: "USD",
    image: "pd15.jpg",
    bulkPrice: 43,
    minBulkQuantity: 5,
    tags: ["sin garantía", "sin mensajería", "sin factura"]
  },
  {
    id: 17,
    name: "Disponible",
    description: "Ventilador recargable F6, marca saco.",
    price: 60,
    currency: "USD",
    image: "pd16.jpg",
    bulkPrice: 47,
    minBulkQuantity: 5,
    tags: ["con garantía", "sin mensajería", "con factura"]
  },
  {
    id: 18,
    name: "Disponible",
    description: "Ventilador de pared con mando a distancia, marca eko.",
    price: 45,
    currency: "USD",
    image: "pd17.jpg",
    bulkPrice: 30,
    minBulkQuantity: 5,
    tags: ["con garantía", "sin mensajería", "con factura"]
  },
  {
    id: 19,
    name: "Disponible",
    description: "Lavadora + secadora al vapor.",
    price: 550,
    currency: "USD",
    image: "pd18.jpg",
    bulkPrice: 535,
    minBulkQuantity: 5,
    tags: ["con garantía", "con mensajería", "con factura"]
  }
];

let cart = JSON.parse(localStorage.getItem('iyawo-cart')) || [];
const EXPIRATION_KEY = 'iyawo-platform-expiration';
const EXPIRATION_DAYS = 90;

// Funciones para botones de contacto
const openWhatsApp = () => {
  window.open('https://wa.me/5356381539', '_blank');
};

const openGroup = () => {
  window.open('https://chat.whatsapp.com/IICxsZJ2sUn0r3Xi96ARO3?mode=hqrt2', '_blank');
};

const openLocation = () => {
  window.open('https://maps.google.com/?q=Calle+Principal+123+Ciudad', '_blank');
};

const checkPlatformExpiration = () => {
  const storedExpiration = localStorage.getItem(EXPIRATION_KEY);
  const now = new Date().getTime();
  
  if (!storedExpiration) {
    const expirationDate = now + (EXPIRATION_DAYS * 24 * 60 * 60 * 1000);
    localStorage.setItem(EXPIRATION_KEY, expirationDate.toString());
    return true;
  }
  
  const expirationTime = parseInt(storedExpiration);
  const daysRemaining = Math.ceil((expirationTime - now) / (24 * 60 * 60 * 1000));
  
  if (daysRemaining <= 0) {
    document.body.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #f8f9fa; font-family: system-ui;">
        <div style="text-align: center; padding: 2rem; background: white; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <h2 style="color: #dc3545; margin-bottom: 1rem;">Plataforma Expirada</h2>
          <p style="color: #6c757d; margin-bottom: 1.5rem;">La plataforma ha caducado. Contacta al administrador.</p>
          <button onclick="location.reload()" style="background: #007bff; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">
            Reintentar
          </button>
        </div>
      </div>
    `;
    return false;
  }
  
  if (daysRemaining <= 7) {
    const expirationNotice = document.createElement('div');
    expirationNotice.className = daysRemaining <= 3 ? 'expiration-notice warning' : 'expiration-notice';
    expirationNotice.innerHTML = `
      <strong>⚠️ Aviso Importante:</strong> 
      La plataforma caducará en ${daysRemaining} día${daysRemaining !== 1 ? 's' : ''}. 
      ${daysRemaining <= 3 ? 'En proceso de revacion.' : ''}
    `;
    document.body.insertBefore(expirationNotice, document.body.firstChild);
  }
  
  return true;
};

const requestPermissions = async () => {
  const banner = document.getElementById('permissions-banner');
  try {
    if ('Notification' in window && Notification.permission === 'default') {
      await Notification.requestPermission();
    }

    if ('geolocation' in navigator) {
      navigator.permissions.query({ name: 'geolocation' })
        .then(result => {
          if (result.state === 'prompt') {
            navigator.geolocation.getCurrentPosition(() => {}, () => {});
          }
        });
    }

    if ('storage' in navigator && 'persist' in navigator.storage) {
      await navigator.storage.persist();
    }

    if (Notification.permission === 'granted' || (await navigator.storage.persisted())) {
      banner.textContent = '✅ Permisos concedidos. ¡Gracias!';
      banner.style.background = '#e8f5e9';
      banner.style.color = '#2e7d32';
      setTimeout(() => banner.style.display = 'none', 3000);
    }
  } catch (err) {
    console.warn('Algunos permisos no pudieron ser solicitados:', err);
    banner.textContent = 'ℹ️ Algunos permisos no están disponibles.';
    setTimeout(() => banner.style.display = 'none', 4000);
  }
};

const initImageModal = () => {
  const imageModal = document.getElementById('image-modal');
  const expandedImg = document.getElementById('expanded-image');
  const imageClose = document.querySelector('.image-close');

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('product-image')) {
      expandedImg.src = e.target.src;
      expandedImg.alt = e.target.alt;
      imageModal.style.display = 'block';
    }
  });

  imageClose.addEventListener('click', () => imageModal.style.display = 'none');
  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) imageModal.style.display = 'none';
  });
};

const renderProducts = () => {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = PRODUCTS.map(p => {
    const savings = p.price - p.bulkPrice;
    const savingsPercentage = ((savings / p.price) * 100).toFixed(0);
    
    return `
    <article class="product-card" role="region" aria-label="${p.name}">
      <img 
        src="${p.image}" 
        alt="${p.name}" 
        class="product-image"
        loading="lazy"
        width="500"
        height="500"
      >
      <div class="card-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-tags">
          ${p.tags.map(tag => {
            const className = tag.includes('garantía') ? 'garantia' : 
                            tag.includes('mensajería') ? 'mensajeria' :
                            tag.includes('factura') ? 'factura' : '';
            return `<span class="product-tag ${className}">${tag}</span>`;
          }).join('')}
        </div>
        <div class="pricing-info">
          <p class="price">${p.currency} ${p.price.toFixed(2)} (individual)</p>
          <p class="bulk-price">${p.currency} ${p.bulkPrice.toFixed(2)} (mín. ${p.minBulkQuantity} unidades)</p>
          <p class="bulk-savings">¡Ahorra ${savingsPercentage}% comprando al por mayor!</p>
        </div>
        <button class="add-to-cart" data-id="${p.id}">Agregar al carrito</button>
      </div>
    </article>
  `}).join('');
  
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = parseInt(e.target.dataset.id);
      addToCart(id);
    });
  });
};

const addToCart = (productId) => {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();
  showNotification(`✅ ${product.name} agregado al carrito`);
};

const removeFromCart = (productId) => {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  renderCartModal();
};

const updateQuantity = (productId, newQuantity) => {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = newQuantity;
    saveCart();
    updateCartUI();
    renderCartModal();
  }
};

const saveCart = () => {
  localStorage.setItem('iyawo-cart', JSON.stringify(cart));
};

const updateCartUI = () => {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').textContent = count;
};

const calculateItemPrice = (item) => {
  return item.quantity >= item.minBulkQuantity ? item.bulkPrice : item.price;
};

const calculateTotalSavings = () => {
  return cart.reduce((savings, item) => {
    if (item.quantity >= item.minBulkQuantity) {
      return savings + ((item.price - item.bulkPrice) * item.quantity);
    }
    return savings;
  }, 0);
};

const renderCartModal = () => {
  const itemsDiv = document.getElementById('cart-items');
  const totalDiv = document.getElementById('cart-total');

  if (cart.length === 0) {
    itemsDiv.innerHTML = '<p>Tu carrito está vacío.</p>';
    totalDiv.textContent = 'Total: $0.00';
    return;
  }

  let subtotal = 0;
  let total = 0;
  const totalSavings = calculateTotalSavings();
  
  const itemsHTML = cart.map(item => {
    const itemPrice = calculateItemPrice(item);
    const itemTotal = itemPrice * item.quantity;
    const regularTotal = item.price * item.quantity;
    
    subtotal += regularTotal;
    total += itemTotal;
    
    return `
      <div class="cart-item">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="item-price-info">
            ${item.quantity} × ${item.currency} ${itemPrice.toFixed(2)}
            ${item.quantity >= item.minBulkQuantity ? 
              `<span class="bulk-discount">(Precio por cantidad aplicado)</span>` : 
              ''}
          </div>
          <div class="quantity-controls">
            <button class="quantity-btn minus" data-id="${item.id}">-</button>
            <span class="quantity-display">${item.quantity}</span>
            <button class="quantity-btn plus" data-id="${item.id}">+</button>
          </div>
        </div>
        <div class="cart-item-actions">
          <div class="item-total">${item.currency} ${itemTotal.toFixed(2)}</div>
          <button class="remove-item" data-id="${item.id}">Eliminar</button>
        </div>
      </div>
    `;
  }).join('');

  let savingsHTML = '';
  if (totalSavings > 0) {
    savingsHTML = `
      <div class="bulk-notification">
        ¡Estás ahorrando $${totalSavings.toFixed(2)} con precios por cantidad!
      </div>
    `;
  }

  itemsDiv.innerHTML = savingsHTML + itemsHTML;
  totalDiv.textContent = `Total: $${total.toFixed(2)}`;

  document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = parseInt(e.target.dataset.id);
      const item = cart.find(i => i.id === id);
      if (item) {
        updateQuantity(id, item.quantity - 1);
      }
    });
  });

  document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = parseInt(e.target.dataset.id);
      const item = cart.find(i => i.id === id);
      if (item) {
        updateQuantity(id, item.quantity + 1);
      }
    });
  });

  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = parseInt(e.target.dataset.id);
      removeFromCart(id);
    });
  });
};

const showNotification = (message) => {
  if (Notification.permission === 'granted') {
    new Notification('Shop Iyawo', { body: message, icon: '🛒' });
  } else {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed; bottom: 20px; right: 20px; 
      background: #28a745; color: white; padding: 12px 20px;
      border-radius: 6px; font-weight: 500; z-index: 3000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      animation: slideIn 0.3s ease-out;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }
};

const initApp = () => {
  if (!checkPlatformExpiration()) return;

  renderProducts();
  updateCartUI();
  initImageModal();

  // Inicializar botones de contacto
  document.getElementById('whatsapp-btn').addEventListener('click', openWhatsApp);
  document.getElementById('group-btn').addEventListener('click', openGroup);
  document.getElementById('location-btn').addEventListener('click', openLocation);

  const modal = document.getElementById('cart-modal');
  const cartBtn = document.getElementById('cart-btn');
  const closeBtn = document.querySelector('.close');
  
  cartBtn.addEventListener('click', () => {
    renderCartModal();
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  document.getElementById('checkout-form').addEventListener('submit', e => {
    e.preventDefault();

    let message = "🛒 *NUEVO PEDIDO - SHOP IYAWO* 🛒\n\n";
    message += "*INFORMACIÓN DE PRODUCTOS:*\n";
    
    cart.forEach((item, index) => {
      const itemPrice = calculateItemPrice(item);
      message += `\n*Producto ${index + 1}:*`;
      message += `\n📦 ${item.name}`;
      message += `\n📝 ${item.description}`;
      message += `\n🔢 Cantidad: ${item.quantity}`;
      message += `\n💰 Precio unitario: $${itemPrice.toFixed(2)}`;
      if (item.quantity >= item.minBulkQuantity) {
        message += ` (✅ Precio por cantidad aplicado)`;
      }
      message += `\n💵 Subtotal: $${(itemPrice * item.quantity).toFixed(2)}`;
      
      // Información de garantías y servicios
      message += `\n🏷️ Etiquetas: ${item.tags.join(', ')}`;
      message += `\n────────────────────────`;
    });
    
    const totalSavings = calculateTotalSavings();
    const total = cart.reduce((sum, item) => sum + (calculateItemPrice(item) * item.quantity), 0);
    
    message += `\n\n*RESUMEN DEL PEDIDO:*`;
    message += `\n📊 Total de productos: ${cart.reduce((sum, item) => sum + item.quantity, 0)}`;
    message += `\n💵 Total del pedido: *$${total.toFixed(2)}*`;
    if (totalSavings > 0) {
      message += `\n🎉 Ahorro por cantidad: *$${totalSavings.toFixed(2)}*`;
    }
    
    message += `\n\n*INFORMACIÓN DEL CLIENTE:*`;
    message += `\n👤 *Nombre:* ${document.getElementById('client-name').value}`;
    message += `\n🆔 *Carnet:* ${document.getElementById('id-card').value}`;
    message += `\n📞 *Teléfono:* ${document.getElementById('phone').value}`;
    message += `\n📍 *Dirección:* ${document.getElementById('address').value}`;
    message += `\n🏙️ *Municipio:* ${document.getElementById('municipality').value}`;
    message += `\n💳 *Método de pago:* ${document.getElementById('payment').value}`;
    message += `\n⏰ *Hora de entrega:* ${document.getElementById('delivery-time').value}`;
    
    if (document.getElementById('change').value) {
      message += `\n💰 *Vuelto requerido:* $${document.getElementById('change').value}`;
    }

    if (document.getElementById('notes').value) {
      message += `\n📝 *Notas adicionales:* ${document.getElementById('notes').value}`;
    }

    message += `\n\n*INFORMACIÓN DEL NEGOCIO:*`;
    message += `\n🏪 *Horario comercial:* 8:00 AM - 5:00 PM`;
    message += `\n📍 *Ubicación:* Calle Principal #123, Ciudad`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5356381539?text=${encodedMessage}`, '_blank');

    cart = [];
    saveCart();
    updateCartUI();
    modal.style.display = 'none';
    e.target.reset();
    
    showNotification('✅ Pedido enviado correctamente por WhatsApp');
  });

  document.getElementById('request-permissions').addEventListener('click', requestPermissions);
};

const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', initApp);