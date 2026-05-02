<!-- ═══ NAVBAR ═══ -->
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#" class="nav-brand" id="nav-brand">
        <span class="brand-icon">🛒</span>
        <span class="brand-text">Fresh<span class="brand-accent">Cart</span></span>
      </a>
      <div class="nav-search" id="nav-search">
        <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input type="text" id="search-input" placeholder="Search groceries..." autocomplete="off" />
        <kbd class="search-kbd">Esc</kbd>
      </div>
      <div class="nav-actions">
        <button class="nav-btn" id="orders-btn" title="My Orders">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          <span class="nav-btn-label">Orders</span>
          <span class="badge orders-badge hidden" id="orders-badge">0</span>
        </button>
        <button class="nav-btn cart-btn" id="cart-btn" title="Shopping Cart">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span class="nav-btn-label">Cart</span>
          <span class="badge cart-badge" id="cart-badge">0</span>
        </button>
      </div>
    </div>
  </nav>
