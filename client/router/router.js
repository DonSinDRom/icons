BlazeLayout.setRoot('body');

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("app", { app: "icons" });
  }
});

FlowRouter.route('/icons', {
  action: function() {
    BlazeLayout.render("app", { app: "icons" });
  }
});

FlowRouter.route('/am', {
  action: function() {
    BlazeLayout.render("app", { app: "am" });
  }
});
