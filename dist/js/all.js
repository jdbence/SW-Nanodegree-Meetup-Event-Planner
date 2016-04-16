'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.name = 'Super Awesome App!';
    this._app = null;

    this.init = function () {
      console.log('Application is now ready');
    };

    this._app = document.querySelector('#app');

    // only load webcomponent polyfill if needed
    if (!this.supportWebComponents()) {
      var script = document.createElement('script');
      script.async = true;
      script.src = 'bower_components/webcomponentsjs/webcomponents-lite.js';
      script.onload = this.init;
      document.head.appendChild(script);
    } else {
      this.init();
    }
  }

  /**
   * Check browser support for webcomponents
   *
   */


  _createClass(App, [{
    key: 'supportWebComponents',
    value: function supportWebComponents() {
      return 'registerElement' in document && 'import' in document.createElement('link') && 'content' in document.createElement('template');
    }

    /**
     * Application is now ready
     *
     */

  }]);

  return App;
}();

new App();
//# sourceMappingURL=all.js.map
