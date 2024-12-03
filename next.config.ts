import type { NextConfig } from "next";

import "./src/env";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ["."],
  },
};

export default nextConfig;
