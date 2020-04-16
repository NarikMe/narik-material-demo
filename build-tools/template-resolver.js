class TemplateResolver {
  Resolve(key) {
    switch (key) {
      case "NarikListUi":
        return {
          template: "",
          templateUrl: "./src/app/templates/list-template.html"
        };
      case "NarikEditUi":
        return {
          template: "",
          templateUrl: "./src/app/templates/edit-template.html"
        };
      case "widget":
        return {
          template: "",
          templateUrl: "./src/app/templates/widget-template.html"
        };
      case "widget2":
        return {
          template: "",
          templateUrl: "./src/app/templates/widget-template2.html"
        };

      default:
        break;
    }
  }
}
module.exports = TemplateResolver;
