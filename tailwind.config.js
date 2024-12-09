module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            savoy_blue: {
              DEFAULT: '#4b61d1',
              100: '#0c112d',
              200: '#17235b',
              300: '#233488',
              400: '#2f45b6',
              500: '#4b61d1',
              600: '#7082da',
              700: '#94a1e3',
              800: '#b8c0ed',
              900: '#dbe0f6'
            },
            syracuse_red_orange: {
              DEFAULT: '#d44500',
              100: '#2b0e00',
              200: '#561d00',
              300: '#812b00',
              400: '#ab3900',
              500: '#d44500',
              600: '#ff6112',
              700: '#ff894e',
              800: '#ffb089',
              900: '#ffd8c4'
            },
            taupe_gray: {
              DEFAULT: '#8b8589',
              100: '#1c1a1b',
              200: '#383437',
              300: '#544f52',
              400: '#6f696d',
              500: '#8b8589',
              600: '#a29ca0',
              700: '#b9b5b8',
              800: '#d0ced0',
              900: '#e8e6e7'
            },
            naples_yellow: {
              DEFAULT: '#f4d35e',
              100: '#3f3204',
              200: '#7e6509',
              300: '#bd970d',
              400: '#efc21e',
              500: '#f4d35e',
              600: '#f6dc7d',
              700: '#f8e59e',
              800: '#faedbe',
              900: '#fdf6df'
            },
            black_olive: {
              DEFAULT: '#3b3c36',
              100: '#0c0c0b',
              200: '#171815',
              300: '#232320',
              400: '#2e2f2b',
              500: '#3b3c36',
              600: '#63655b',
              700: '#8c8e82',
              800: '#b2b3ab',
              900: '#d9d9d5'
            }
          }
        }
      },
      plugins: [],
    }
