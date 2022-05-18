import React, { useState, useEffect } from 'react';

var commonStyles = {"center":"_1AwQe"};

var timerstyles = {"timerWrapper":"_racJ3","displayBlock":"_pusAQ"};

var Timer = function Timer(props) {
  var _props$classList;

  var _useState = useState(props.seconds),
      remaingSec = _useState[0],
      setRemainSeconds = _useState[1];

  var _useState2 = useState({}),
      listener = _useState2[0],
      setListener = _useState2[1];

  var getTimerFormat = function getTimerFormat(seconds) {
    var remaingSec = seconds % 60;
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    return (hours < 10 ? '0' + hours : hours) + " : " + (minutes < 10 ? '0' + minutes : minutes) + " : " + (remaingSec < 10 ? '0' + remaingSec : remaingSec);
  };

  useEffect(function () {
    setRemainSeconds(props.seconds);
  }, [props.seconds]);
  useEffect(function () {
    if (remaingSec <= 0) {
      props.onTimeEnd && props.onTimeEnd();
      return;
    }

    if (listener[remaingSec]) listener[remaingSec]();
    setTimeout(function () {
      return setRemainSeconds(function (leftSeconds) {
        return leftSeconds - 1;
      });
    }, 1000);
  }, [remaingSec]);
  useEffect(function () {
    var listener = {};
    props.listenerList && props.listenerList.forEach(function (listner) {
      listener[listner.seconds] = listner.callback;
    });
    setListener(listener);
  }, [props.listenerList]);
  return React.createElement("div", {
    style: props.styles,
    className: timerstyles.timerWrapper + " " + commonStyles.center + " " + ((_props$classList = props.classList) === null || _props$classList === void 0 ? void 0 : _props$classList.join(' ')),
    key: props.key
  }, React.createElement("span", {
    className: timerstyles.displayBlock
  }, getTimerFormat(remaingSec)));
};

export { Timer };
//# sourceMappingURL=index.modern.js.map
