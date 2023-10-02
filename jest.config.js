module.exports = {
    roots: ["<rootDir>/src"],
    setupFilesAfterEnv: ["./setupTests.js"],
    testMatch: ["**/__tests__/**/*.js?", "**/?(*.)+(test|spec).js?"],
    moduleFileExtensions: ["js", "jsx", "json", "node"]
};
