function applyStyle(config) {
    let { style = "normal" } = config; // Default to "normal" if style is not provided
    console.log(`Applying style: ${style}`);
}

applyStyle({ style: "underline" }); // Applying style: underline
applyStyle({}); // Applying style: normal (default value)
