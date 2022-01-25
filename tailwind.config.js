module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '2px 2px 10px #6366F1',
      },
      inset: {
        '1/10': '10%',
        "27.5/100" : "27.5%",
        "12.5/100" : "12.5%"
      },
      spacing: {
        'loginMDW': '650px',
        "loginMDH" : "500px"
      },
      backgroundImage: {
        'login': "url('/login.webp')",
        "homeIntro" : "url('/shape3.svg')",
        "shape5_1" : "url('/shape5_1.svg')",
        "shape5_2" : "url('/shape5_2.svg')",
        "shape5_3" : "url('/shape5_3.svg')",
        "shape6" : "url('/shape6.svg')",
        "shape10" : "url('/shape10.svg')",
        "footer" : "url('/bg_footer.svg')"
      },
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
        sidebarClose: 'sidebarClose .1s ease-in-out forwards',
        sidebarOpen : "sidebarOpen .1s ease-in-out forwards",
        childrenOpen : "childrenOpen .1s ease-in-out forwards",
        childrenClose : "childrenClose .1s ease-in-out forwards"
      }
    },
  },
  plugins: [],
}
