!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],e):r.reactBasicErrorBoundary=e(r.react,r.PropTypes)}(this,function(r,e){e=e&&e.hasOwnProperty("default")?e.default:e;var t=function(r){function e(e){r.call(this,e),this.state={hasError:!1,error:null}}return r&&(e.__proto__=r),(e.prototype=Object.create(r&&r.prototype)).constructor=e,e.getDerivedStateFromError=function(r){return{hasError:!0,error:r}},e.prototype.componentDidCatch=function(r,e){var t=this.props.onError;"function"==typeof t&&t(r,e)},e.prototype.render=function(){var r=this.state,e=this.props,t=e.children;return r.hasError?(0,e.fallback)(r.error):t},e}(r.Component);return t.propTypes={fallback:e.oneOfType([e.string,e.func]).isRequired,onError:e.func},t.defaultProps={fallback:function(){return null}},t});
