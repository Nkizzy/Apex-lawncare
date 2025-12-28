# Tips and Toes Salon Website

A modern, responsive website for Tips and Toes Salon featuring a captivating hero section, services, gallery, reviews, social media embeds, interactive map, and contact form.

## Features

- ✨ Modern and classy design
- 📱 Fully responsive (mobile and desktop)
- 🎨 Captivating hero section
- 💅 Services showcase
- 📸 Image gallery with lightbox
- ⭐ Customer reviews section
- 📱 Facebook and Instagram embed sections
- 🗺️ Interactive map integration
- 📧 Contact form
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

1. **Images**: Replace placeholder images in `src/components/Gallery.jsx` with your actual photos
2. **Address**: Update the address in `src/components/Map.jsx` and `src/components/Contact.jsx`
3. **Contact Info**: Update phone, email, and address in `src/components/Contact.jsx` and `src/components/Footer.jsx`
4. **Hours**: Update business hours in `src/components/Map.jsx` and `src/components/Contact.jsx`
5. **Social Media**: 
   - Add your Facebook page embed code in `src/components/SocialMedia.jsx`
   - Add your Instagram embed code in `src/components/SocialMedia.jsx`
   - Update social media links in `src/components/Footer.jsx`

### Google Maps Integration

To add an interactive Google Map:

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Update `YOUR_API_KEY` in `src/components/Map.jsx` with your actual API key
3. Update the `address` variable with your salon's address
4. Uncomment the iframe code in `src/components/Map.jsx`

Alternatively, you can use an iframe embed code directly from Google Maps.

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

