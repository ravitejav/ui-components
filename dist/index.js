function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var commonStyles = {"center":"_1AwQe"};

var timerstyles = {"timerWrapper":"_racJ3","displayBlock":"_pusAQ"};

var Timer = function Timer(props) {
  var _useState = React.useState(props.seconds),
      remaingSec = _useState[0],
      setRemainSeconds = _useState[1];

  var getTimerFormat = function getTimerFormat(seconds) {
    var remaingSec = seconds % 60;
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    return (hours < 10 ? '0' + hours : hours) + " : " + (minutes < 10 ? '0' + minutes : minutes) + " : " + (remaingSec < 10 ? '0' + remaingSec : remaingSec);
  };

  React.useEffect(function () {
    if (remaingSec <= 0) return;
    setTimeout(function () {
      return setRemainSeconds(function (leftSeconds) {
        return leftSeconds - 1;
      });
    }, 1000);
  }, [remaingSec]);
  return React__default.createElement("div", {
    style: props.styles,
    className: timerstyles.timerWrapper + " " + commonStyles.center
  }, React__default.createElement("span", {
    className: timerstyles.displayBlock
  }, getTimerFormat(remaingSec)));
};

exports.Timer = Timer;
//# sourceMappingURL=index.js.map
