class TemplateResolver {
  Resolve(key) {
    switch (key) {
      case "NarikListUi":
        return {
          template: "",
          templateUrl: "./src/app/templates/list-template.html"
        };
      case "NarikDetailUi":
        return {
          template: "",
          templateUrl: "./src/app/templates/detail-template.html"
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
