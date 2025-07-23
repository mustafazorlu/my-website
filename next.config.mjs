/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    sassOptions: {
        includePaths: ["./styles"],
    },
    images: {
        unoptimized: true, // eğer next/image kullanıyorsan şart
    },
};

export default nextConfig;
