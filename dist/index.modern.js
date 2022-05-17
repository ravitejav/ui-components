import React, { useState, useEffect } from 'react';

var commonStyles = {"center":"_1AwQe"};

var timerstyles = {"timerWrapper":"_racJ3","displayBlock":"_pusAQ"};

var Timer = function Timer(props) {
  var _useState = useState(props.seconds),
      remaingSec = _useState[0],
      setRemainSeconds = _useState[1];

  var getTimerFormat = function getTimerFormat(seconds) {
    var remaingSec = seconds % 60;
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    return (hours < 10 ? '0' + hours : hours) + " : " + (minutes < 10 ? '0' + minutes : minutes) + " : " + (remaingSec < 10 ? '0' + remaingSec : remaingSec);
  };

  useEffect(function () {
    if (remaingSec <= 0) return;
    setTimeout(function () {
      return setRemainSeconds(function (leftSeconds) {
        return leftSeconds - 1;
      });
    }, 1000);
  }, [remaingSec]);
  return React.createElement("div", {
    style: props.styles,
    className: timerstyles.timerWrapper + " " + commonStyles.center
  }, React.createElement("span", {
    className: timerstyles.displayBlock
  }, getTimerFormat(remaingSec)));
};

export { Timer };
//# sourceMappingURL=index.modern.js.map
