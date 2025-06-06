/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./dist", // Changes the build output directory to `./dist/`.
  basePath: "/windowyeong", // Sets the base path to `/some-base-path`.
};

export default nextConfig;
