"use strict";

annotationApp.service('comment', function(state, configurator) {
  this.conf = configurator.conf_for('comment');
  this.comments = {
    "1" : {
      "comment": "Marcus was someone."
    },
    "2" : {
      "comment": "Nothing to see here."
    },
    "3" : {
      "comment": "-"
    },
    "4" : {
      "comment": "-"
    },
  };

  this.currentComments = function() {
    var res = [];
    that = this;
    angular.forEach(state.selectedTokens, function(val, id) {
      var token = that.comments[id];
      if (token) {
        res.push(token);
      }
    });
    return res;
  };

  this.template = this.conf.template;
});
