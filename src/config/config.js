const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Arbi & Laura",
    // Opening message/description of the invitation
    description:
      "We are getting married and invite you to celebrate this special moment with us.",
    // Groom's name
    groomName: "Arbi",
    // Bride's name
    brideName: "Laura",
    // Groom's parents names
    parentGroom: "Mr. & Mrs. Groom",
    // Bride's parents names
    parentBride: "Mr. & Mrs. Bride",
    // Wedding date (format: YYYY-MM-DD)
    date: "2026-05-16",
    // Google Maps link for location (short clickable link)
    maps_url: "https://maps.app.goo.gl/JE1Lf569J7CSTs347",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2989.291853612173!2d19.729521!3d41.476272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDI4JzM0LjYiTiAxOcKwNDMnNDYuMyJF!5e0!3m2!1sit!2sit!4v1764437007700!5m2!1sit!2sit",
    // Event time (free format, example: "10:00 AM - 12:00 PM")
    time: "19:00 - TBD",
    // Venue/building name
    location: "Vathi Kompleks",
    // Full address of the wedding venue
    address: "Rruga e Krujes, Fushë Krujë, Albania (search for Vathi Kompleks on Google Maps, it's the new building. Before the one shown, you turn right. Further directions will be provided in place.)",
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "Wedding Ceremony",
        // Event date (format: YYYY-MM-DD)
        date: "2026-05-16",
        // Start time (format: HH:MM)
        startTime: "16:16",
        // End time (format: HH:MM)
        endTime: "17:30",
        // Event venue
        location: "Grand Ballroom, Hotel Majesty",
        // Full address
        address: "Jl. Jend. Sudirman No.1, Jakarta",
      },
      {
        // Second event name
        title: "Wedding Reception",
        date: "2026-05-16",
        startTime: "16:16",
        endTime: "17:30",
        location: "Grand Ballroom, Hotel Majesty",
        address: "Jl. Jend. Sudirman No.1, Jakarta",
      }
      // You can add more agenda items with the same format
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/Valle!.mp3",
      // Music title to display
      title: "Valle! - Albanian Wedding Dance",
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        // Bank name
        bank: "Bank Central Asia",
        // Account number
        accountNumber: "1234567890",
        // Account holder name (all uppercase)
        accountName: "ARBI",
      },
      {
        bank: "Bank Mandiri",
        accountNumber: "0987654321",
        accountName: "LAURA",
      }
      // You can add more banks with the same format
    ]
  }
};

export default config;