# Angular E-Commerce Frontend Architecture

## Project Structure

```text
src/
└── app/

    ├── core/
    │   ├── services/
    │   │   ├── api.service.ts
    │   │   ├── auth.service.ts
    │   │   ├── product.service.ts
    │   │   ├── cart.service.ts
    │   │   └── order.service.ts
    │   │
    │   ├── interceptors/
    │   │   ├── auth.interceptor.ts
    │   │   └── error.interceptor.ts
    │   │
    │   ├── guards/
    │   │   ├── auth.guard.ts
    │   │   └── admin.guard.ts
    │   │
    │   └── models/
    │       ├── product.model.ts
    │       ├── category.model.ts
    │       ├── cart.model.ts
    │       ├── order.model.ts
    │       └── user.model.ts
    │
    │
    ├── shared/
    │   ├── components/
    │   │   ├── navbar/
    │   │   ├── footer/
    │   │   ├── loader/
    │   │   ├── pagination/
    │   │   ├── search-bar/
    │   │   ├── product-card/
    │   │   ├── category-card/
    │   │   ├── image-carousel/
    │   │   ├── quantity-selector/
    │   │   ├── confirmation-dialog/
    │   │   └── empty-state/
    │   │
    │   ├── directives/
    │   └── pipes/
    │
    │
    ├── layout/
    │   ├── customer-layout/
    │   ├── admin-layout/
    │   ├── header/
    │   ├── sidebar/
    │   └── breadcrumb/
    │
    │
        ├── features/

        │   ├── home/
        │   │   ├── pages/
        │   │   │   └── home-page/
        │   │   │
        │   │   └── components/
        │   │       ├── hero-banner/
        │   │       ├── featured-products/
        │   │       ├── categories-section/
        │   │       ├── trending-products/
        │   │       ├── offer-banner/
        │   │       └── testimonials/
        │   │
        │   │
        │   ├── products/
        │   │   ├── pages/
        │   │   │   ├── product-list/
        │   │   │   └── product-details/
        │   │   │
        │   │   ├── components/
        │   │   │   ├── product-card/
        │   │   │   ├── product-filter/
        │   │   │   ├── product-sort/
        │   │   │   ├── product-gallery/
        │   │   │   ├── product-info/
        │   │   │   ├── product-specification/
        │   │   │   ├── product-review/
        │   │   │   ├── product-rating/
        │   │   │   ├── related-products/
        │   │   │   └── product-search/
        │   │   │
        │   │   ├── services/
        │   │   │   └── product.service.ts
        │   │   │
        │   │   └── models/
        │   │       └── product.model.ts
        │   │
        │   │
        │   ├── cart/
        │   │   ├── pages/
        │   │   │   └── cart-page/
        │   │   │
        │   │   ├── components/
        │   │   │   ├── cart-item/
        │   │   │   ├── cart-summary/
        │   │   │   ├── coupon-box/
        │   │   │   └── shipping-estimator/
        │   │   │
        │   │   └── services/
        │   │       └── cart.service.ts
        │   │
        │   │
        │   ├── checkout/
        │   │   ├── pages/
        │   │   │   └── checkout-page/
        │   │   │
        │   │   └── components/
        │   │       ├── address-form/
        │   │       ├── payment-method/
        │   │       ├── shipping-method/
        │   │       ├── review-order/
        │   │       └── order-summary/
        │   │
        │   │
        │   ├── orders/
        │   │   ├── pages/
        │   │   │   ├── my-orders/
        │   │   │   └── order-details/
        │   │   │
        │   │   └── components/
        │   │       ├── order-card/
        │   │       ├── order-status/
        │   │       └── tracking-timeline/
        │   │
        │   │
        │   └── auth/
        │       ├── pages/
        │       │   ├── login/
        │       │   ├── register/
        │       │   ├── forgot-password/
        │       │   └── reset-password/
        │       │
        │       └── components/
        │           ├── login-form/
        │           ├── register-form/
        │           └── social-login/
    │
    │
    ├── admin/
    │
    │   ├── dashboard/
    │   │   ├── dashboard-page/
    │   │   ├── sales-chart/
    │   │   ├── revenue-card/
    │   │   ├── order-stats/
    │   │   └── top-products/
    │   │
    │   ├── products/
    │   │   ├── product-management/
    │   │   ├── add-product/
    │   │   ├── edit-product/
    │   │   ├── product-table/
    │   │   └── product-form/
    │   │
    │   ├── categories/
    │   │   ├── category-list/
    │   │   ├── add-category/
    │   │   └── edit-category/
    │   │
    │   ├── orders/
    │   │   ├── order-list/
    │   │   ├── order-details/
    │   │   └── order-status-update/
    │   │
    │   ├── users/
    │   │   ├── user-list/
    │   │   ├── user-details/
    │   │   └── user-management/
    │   │
    │   └── inventory/
    │       ├── stock-list/
    │       ├── stock-update/
    │       └── low-stock-alert/
    │
    │
    ├── app.routes.ts
    ├── app.config.ts
    └── app.component.ts
```

---

# Customer Routes

```text
/                       -> Home
/products               -> Product Listing
/products/:id           -> Product Details
/cart                   -> Cart
/checkout               -> Checkout
/orders                 -> My Orders
/orders/:id             -> Order Details
/login                  -> Login
/register               -> Register
```

---

# Admin Routes

```text
/admin/dashboard
/admin/products
/admin/products/add
/admin/products/edit/:id
/admin/categories
/admin/orders
/admin/users
/admin/inventory
```

---

# Backend APIs

```text
/api/auth/login
/api/auth/register

/api/products
/api/products/{id}

/api/categories

/api/cart

/api/orders
/api/orders/{id}

/api/users
```

---

# Deployment Architecture

```text
Customer Browser
        │
        ▼
Angular Frontend
(shop.example.com)
        │
        ▼
Spring Boot API
(api.example.com)
        │
        ▼
PostgreSQL Database

Admin Browser
        │
        ▼
Angular Admin
(admin.example.com)
```

---

# MVP Components (Build First)

```text
Navbar
Footer

HomePage

ProductList
ProductDetails
ProductCard

CartPage
CartItem

LoginPage

AdminDashboard

ProductManagement
AddProduct

ProductService
CartService
AuthService
```

After MVP:

```text
Checkout
Orders
Reviews
Ratings
Wishlist
Coupons
Inventory
Analytics
User Management
```
