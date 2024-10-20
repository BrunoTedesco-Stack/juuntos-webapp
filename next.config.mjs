/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      // Adiciona suporte ao SVGR para importar SVGs como componentes React
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  };
  
  export default nextConfig;