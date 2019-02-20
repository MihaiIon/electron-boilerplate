// ======================================================
// App / Scripts / Initialize
// ======================================================

// Add styles
// ======================================================

// Compile SASS to CSS
const scssFilePath = path.resolve(__dirname, "./styles/main.scss");
const scssContent = fs.readFileSync(scssFilePath, "utf8");
Sass.compile(scssContent, {}, function(result) {
  switch (result.status) {
    case 0:
      // Extract CSS
      const css = result.text;
      // Insert Style in Head
      const head = document.getElementsByTagName("head")[0];
      const style = document.createElement("style");
      style.type = "text/css";
      if (style.styleSheet) style.styleSheet.cssText = css;
      else style.appendChild(document.createTextNode(css));
      head.appendChild(style);
      break;
    default:
      // Errors
      console.log(result.message);
  }
});
