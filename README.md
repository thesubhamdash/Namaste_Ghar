# 🏠 Namaste Ghar

<p align="center">
  A full-stack property listing web application — browse, add, edit, and delete holiday rental listings with ease.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
</p>

---

## 📖 About

**Namaste Ghar** (Hindi for *"Hello Home"*) is a holiday rental listing platform inspired by Airbnb. Users can browse through curated property listings from around the world, view detailed information about each property, add new listings, edit existing ones, and delete listings — all through a clean, responsive UI.

This project was built as a hands-on exercise in full-stack web development using the **MEN stack** (MongoDB, Express, Node.js) with server-side rendering via **EJS**.

---

## 📸 Screenshots

| All Listings | Listing Detail |
|:---:|:---:|
| ![All Listings](public/screenshots/All%20Listings.png) | ![Listing Details](public/screenshots/Listing%20Details.png) |

| Add New Listing | Edit Listing |
|:---:|:---:|
| ![Add New Listing](public/screenshots/Add%20New%20Listing.png) | ![Edit Listing](public/screenshots/Edit%20Listing%20Details.png) |

---

## ✨ Features

- 🗂️ **Browse All Listings** — View all available property listings in a responsive card grid
- 🔍 **Listing Details** — See full details of any listing including description, price, location, country, and image
- ➕ **Add a Listing** — Create a new property listing with a title, description, image URL, price, location, and country
- ✏️ **Edit a Listing** — Update any details of an existing listing
- 🗑️ **Delete a Listing** — Remove a listing permanently
- 🌍 **30 Seed Listings** — Pre-loaded with 30 real-world sample listings across various countries
- 📱 **Responsive Design** — Works across desktop, tablet, and mobile using Bootstrap 5
- 🔠 **Custom Typography** — Uses *Plus Jakarta Sans* from Google Fonts
- 🧭 **Sticky Navbar** — Navigation with links to Home, All Listings, and Add New Listing

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js v5 |
| Database | MongoDB (local) |
| ODM | Mongoose v9 |
| Templating | EJS + ejs-mate |
| Styling | Bootstrap 5.3 + Custom CSS |
| Icons | Font Awesome 7 |
| Fonts | Google Fonts — Plus Jakarta Sans |
| Form Method Override | method-override |

---

## 📁 Project Structure

```
Namaste_Ghar/
├── app.js                  # Main Express application & all routes
├── package.json
│
├── models/
│   └── listing.js          # Mongoose schema & model for listings
│
├── init/
│   ├── data.js             # 30 seed listings with Unsplash images
│   └── index.js            # DB seeder script
│
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs # Base HTML layout (navbar + footer)
│   ├── includes/
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   └── listings/
│       ├── index.ejs       # All listings (grid view)
│       ├── show.ejs        # Single listing detail page
│       ├── newListing.ejs  # Create new listing form
│       └── edit.ejs        # Edit existing listing form
│
└── public/
    └── css/
        └── style.css       # Custom styles
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on port `27017`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Namaste_Ghar.git
   cd Namaste_Ghar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Seed the database**
   ```bash
   node init/index.js
   ```
   This will populate MongoDB with 30 sample listings.

4. **Start the server**
   ```bash
   node app.js
   ```

5. **Open in your browser**
   ```
   http://localhost:8080/listings
   ```

---

## 🔗 Routes

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Homepage |
| `GET` | `/listings` | View all listings |
| `GET` | `/listings/new` | New listing form |
| `POST` | `/listings` | Create a new listing |
| `GET` | `/listings/:id` | View a single listing |
| `GET` | `/listings/:id/edit` | Edit listing form |
| `PUT` | `/listings/:id` | Update a listing |
| `DELETE` | `/listings/:id` | Delete a listing |

---

## 🗃️ Data Model

```js
// models/listing.js
{
  title:       String  // required
  description: String
  image:       String  // URL, has default fallback image if left empty
  price:       Number
  location:    String
  country:     String
}
```

> If the image URL is left empty, a default Unsplash image is automatically applied via a Mongoose `set` hook.

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `express` | ^5.2.1 | Web framework |
| `mongoose` | ^9.9.4 | MongoDB ODM |
| `ejs` | ^6.0.1 | Templating engine |
| `ejs-mate` | ^4.0.0 | EJS layout support |
| `method-override` | ^3.0.0 | PUT/DELETE form support |

---

## 🌱 Future Improvements

- [ ] User authentication (sign up / log in)
- [ ] Only allow listing owners to edit or delete their own listings
- [ ] Image file upload support (Cloudinary + Multer)
- [ ] Search and filter listings by location or price
- [ ] Reviews & ratings system
- [ ] Map integration (Mapbox / Google Maps)
- [ ] Pagination for the listings page
- [ ] Input validation & error handling

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

<p align="center">Made with ❤️ and Node.js</p>
