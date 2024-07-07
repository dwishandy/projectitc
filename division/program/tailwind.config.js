/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        homebg: "url('assets/bghome.png')",
      },
      fontFamily: {
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
      },
      colors: {
        mainblue: "#3D85D7",
        bluetxt: "#0B417D",
        blueline: "#0A4587",
        footer: "#0A4587",
      },
      screens: {
        "4K": "1550px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
