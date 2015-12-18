var React = require('react');
var ReactDOM = require('react-dom');
var mui = require("material-ui");
var injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

window.ReactDOM = ReactDOM;
window.React = React;
window.mui = mui;
window.mui.Menu = require('material-ui/lib/menus/menu');
window.mui.MenuItem = require('material-ui/lib/menus/menu-item');
window.mui.MenuDivider = require('material-ui/lib/menus/menu-divider');

window.mui.SvgIcons = require('material-ui/lib/svg-icons/index');
