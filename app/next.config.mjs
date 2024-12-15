/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/aboutMe',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
