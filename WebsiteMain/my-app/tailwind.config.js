module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '780px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1500px',

      /* Custom */

      'pcs': '500px',
      'mcs': '1310px',
      'pgs': '1675px',

      'r-md': '760px'
    },
  },
  entry: './src/index.js',
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [],
}
