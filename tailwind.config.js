module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        heading:"#130F49",
        subheading:"#0B0736",
        block:"#FEDFB1",
        fotter:"#D9F4FF"
        
      },
      screens:{
        
        
        'sm': '375px',
        // => @media (min-width: 640px) { ... }
        'md': '590px',
        
        // => @media (min-width: 768px) { ... }
        'lg': '690px',
        // => @media (min-width: 1024px) { ... }
        'xl': '780px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1024px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
