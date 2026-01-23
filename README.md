# Sample Business Website

A modern, responsive website for Sample Business featuring a professional hero section, services showcase, gallery, customer reviews, social media embeds, interactive map, and contact information.

## Features

- ✨ Modern and professional design
- 📱 Fully responsive (mobile and desktop)
- 🎨 Captivating hero section with parallax effect
- 🌿 Lawncare services showcase
- 📸 Image gallery with lightbox
- ⭐ Customer reviews carousel
- 📱 Facebook and Instagram embed sections
- 🗺️ Interactive map integration
- 📧 Contact information and form
- 🧭 Smooth scrolling navigation

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## Customization

### Replace Placeholder Content

1. **Logo**: Add your company logo to `src/assets/` directory. The logo will automatically appear in the header and navigation.
2. **Images**: Replace placeholder images in `src/components/Gallery.jsx` and `src/components/Hero.jsx` with your actual lawncare and snow removal photos
3. **Address**: Update the address in `src/components/Map.jsx` and `src/components/Contact.jsx`
4. **Contact Info**: Update phone, email, and address in `src/components/Contact.jsx` and `src/components/Footer.jsx`
5. **Hours**: Update business hours in `src/components/Map.jsx` and `src/components/Contact.jsx`
6. **Social Media**: 
   - Add your Facebook page embed code in `src/components/SocialMedia.jsx`
   - Update Instagram handle and link in `src/components/SocialMedia.jsx`
   - Update social media links in `src/components/Footer.jsx`
7. **Services**: Customize services, descriptions, and pricing in `src/components/Services.jsx` to match your offerings
8. **Reviews**: Replace placeholder reviews in `src/components/Reviews.jsx` with actual customer testimonials

### Google Maps Integration

To add an interactive Google Map:

1. Get a Google Maps embed code from [Google Maps](https://www.google.com/maps)
2. Find your business location on Google Maps
3. Click "Share" and select "Embed a map"
4. Copy the iframe code and update the iframe in `src/components/Map.jsx`
5. Update the `address` variable with your business address

Alternatively, you can use a Google Maps API key for more customization options.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- React 18
- Vite
- React Icons
- CSS3 (Custom properties, Grid, Flexbox)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

