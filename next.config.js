/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {},
  async redirects() {
    return [
      {
        source: '/createRaffle',
        destination: '/createRaffle/1',
        permanent: true,
      },
    ];
  },
};
