function r(r){return r&&"object"==typeof r&&"default"in r?r.default:r}var t=require("react"),o=(r(t),r(require("prop-types"))),e=function(r){function t(t){r.call(this,t),this.state={hasError:!1,error:null}}return r&&(t.__proto__=r),(t.prototype=Object.create(r&&r.prototype)).constructor=t,t.getDerivedStateFromError=function(r){return{hasError:!0,error:r}},t.prototype.componentDidCatch=function(r,t){var o=this.props.onError;"function"==typeof o&&o(r,t)},t.prototype.render=function(){var r=this.state,t=this.props,o=t.children;return r.hasError?(0,t.fallback)(r.error):o},t}(t.Component);e.propTypes={fallback:o.oneOfType([o.string,o.func]).isRequired,onError:o.func},e.defaultProps={fallback:function(){return null}},module.exports=e;
