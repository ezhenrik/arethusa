"use strict";

angular.module('arethusa.core').service('globalSettings', [
  'configurator',
  function(configurator) {
    var self = this;

    var confKeys = [
      "alwaysDeselect",
      "colorizer"
    ];

    self.defaultConf = {
      alwaysDeselect: false,
      colorizer: 'morph'
    };

    function configure() {
      self.conf = configurator.configurationFor('main').globalSettings || {};
      configurator.delegateConf(self, confKeys, true); // true makes them sticky

      self.settings = {};
      self.colorizers = {};

      defineSettings();
    }

    function Conf(property, type, options) {
      this.property = property;
      this.label = "globalSettings." + property;
      this.type = type || 'checkbox';

      if (this.type === 'select') {
        this.options = options;
      }
    }

    function defineSettings() {
      defineSetting('alwaysDeselect');
      defineSetting('colorizer', 'select', self.colorizers);
    }

    function defineSetting(property, type, options) {
      self.settings[property] = new Conf(property, type, options);
    }

    this.toggle = function() {
      self.active = !self.active;
    };

    configure();
  }
]);
