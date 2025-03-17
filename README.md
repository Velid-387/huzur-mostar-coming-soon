# Huzur Mostar - Coming Soon Page

A beautiful, responsive "Coming Soon" landing page for Huzur Mostar flower shop with light/dark mode toggle, animated logo, and typed text animation.

![Huzur Mostar Preview](assets/images/huzur-logo.png)

## Features

- ✨ Modern and clean design
- 🌓 Light/dark mode toggle with system preference detection
- 🔄 Animated rotating logo that zooms on hover (desktop) or tap (mobile)
- ⌨️ Typing animation for status message
- 📱 Fully responsive design for all screen sizes
- 🔗 Social media integration with Font Awesome icons
- 🖼️ Custom favicon for browser tabs

## File Structure

```
huzur-mostar-coming-soon/
├── index.html              # Main HTML file
├── favicon.ico             # Favicon for browsers
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── theme.js            # Light/dark mode toggle functionality
│   ├── logo-animation.js   # Logo interaction animations
│   └── typing-animation.js # Text typing animation
└── assets/
    └── images/
        ├── huzur-logo.png  # Logo image
        └── huzur-home.png  # Background image
```

## Technologies Used

- HTML5
- CSS3 with Flexbox
- Vanilla JavaScript
- Font Awesome for icons
- CSS animations and transitions

## Installation & Local Development

1. Clone this repository or download the ZIP file
2. Navigate to the project directory
3. Start a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

4. Open your browser and visit `http://localhost:8000` (or the port shown in your terminal)

## Deployment

### Deploy to Netlify

#### Option 1: Quick Deploy (Drag and Drop)

1. Create a ZIP file of the entire project
2. Go to [Netlify](https://app.netlify.com/)
3. Drag and drop the ZIP file to the Netlify dashboard

#### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your repository and follow the setup instructions
5. No build command needed, publish directory should be the root

## Customization

### Change Colors

Edit the CSS variables in the `:root` and `.dark-mode` sections of `css/styles.css`:

```css
:root {
  --highlight-color: #f7a8b8; /* Pastel pink */
  --secondary-color: #b2e2e2; /* Pastel teal */
  /* Other color variables */
}
```

### Change Content

Edit the text in `index.html` to customize the message and social media links.

### Change Images

1. Replace `assets/images/huzur-logo.png` with your own logo
2. Replace `assets/images/huzur-home.png` with your background image
3. Update `favicon.ico` with your favicon

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is available for private and commercial use with attribution.

## Credits

- Font Awesome for the icons
- SVG icons for theme toggle

---

Created with ❤️ for Huzur Mostar Flower Shop 