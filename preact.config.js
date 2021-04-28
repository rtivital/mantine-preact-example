export default {
  webpack(config, env) {
    if (env.production) {
      config.output.publicPath = "/mantine-preact-example";
    }

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      },
    };

    return config;
  },
};
