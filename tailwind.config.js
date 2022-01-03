module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        sidebarClose: {
          "0%": { width : "240px" , overflow : "hidden"},
          '100%': { width : "0" , overflow : "hidden" },
        },
        sidebarOpen : {
          "0%": { width : "0" },
          '100%': { width : "240px" },
        },
        childrenOpen : {
          "0%": { marginLeft : "0" },
          '100%': { marginLeft : "240px" },
        },
        childrenClose : {
          "0%": { marginLeft : "240px" },
          '100%': { marginLeft : "0" },
        }
        
      },
      animation: {
        sidebarClose: 'sidebarClose .3s ease-in-out forwards',
        sidebarOpen : "sidebarOpen .3s ease-in-out forwards",
        childrenOpen : "childrenOpen .3s ease-in-out forwards",
        childrenClose : "childrenClose .3s ease-in-out forwards"
      }
    },
  },
  plugins: [],
}
