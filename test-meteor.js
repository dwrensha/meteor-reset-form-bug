if (Meteor.isClient) {
  Template.test.helpers({
    foo: function () {
      return "foo";
    }
  });
}

