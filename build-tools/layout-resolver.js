class LayoutResolver {
  Resolve(key) {
    switch (key) {
      case "NarikListUi":
        return {
          layout: "",
          layoutUrl: "./src/app/layouts/list-layout.html",
        };
      case "NarikEditUi":
        return {
          layout: "",
          layoutUrl: "./src/app/layouts/edit-layout.html",
        };
      case "widget":
        return {
          layout: "",
          layoutUrl: "./src/app/layouts/widget-layout.html",
        };
      case "widget2":
        return {
          layout: "",
          layoutUrl: "./src/app/layouts/widget-layout2.html",
        };

      default:
        break;
    }
  }
}
module.exports = LayoutResolver;
