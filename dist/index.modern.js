import React, { useState, useEffect } from 'react';

var commonStyles = {"center":"_styles-module__center__1AwQe"};

var timerstyles = {"timerWrapper":"_Timer-module__timerWrapper__racJ3","displayBlock":"_Timer-module__displayBlock__pusAQ"};

const Timer = props => {
  var _props$classList;

  const [remaingSec, setRemainSeconds] = useState(props.seconds);
  const [listener, setListener] = useState({});

  const getTimerFormat = seconds => {
    const remaingSec = seconds % 60;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${remaingSec < 10 ? '0' + remaingSec : remaingSec}`;
  };

  useEffect(() => {
    if (remaingSec <= 0) {
      props.onTimeEnd && props.onTimeEnd();
      return;
    }

    if (listener[remaingSec]) listener[remaingSec]();
    setTimeout(() => setRemainSeconds(leftSeconds => leftSeconds - 1), 1000);
  }, [remaingSec]);
  useEffect(() => {
    const listener = {};
    props.listenerList && props.listenerList.forEach(listner => {
      listener[listner.seconds] = listner.callback;
    });
    setListener(listener);
  }, [props.listenerList]);
  return React.createElement("div", {
    style: props.styles,
    className: `${timerstyles.timerWrapper} ${commonStyles.center} ${(_props$classList = props.classList) === null || _props$classList === void 0 ? void 0 : _props$classList.join(' ')}`,
    key: props.key
  }, React.createElement("span", {
    className: timerstyles.displayBlock
  }, getTimerFormat(remaingSec)));
};

export { Timer };
//# sourceMappingURL=index.modern.js.map
