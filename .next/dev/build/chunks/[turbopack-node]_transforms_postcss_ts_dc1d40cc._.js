module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/SyntaxWeb/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/59d4b_c34610aa._.js",
  "chunks/[root-of-the-server]__d61b5c3a._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/SyntaxWeb/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];