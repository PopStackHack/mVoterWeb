// TODO: PROPERLY FIX COUNTDOWN LOGIC DOWN TO MS PRECISION
import myanmarNumbers from 'myanmar-numbers';
import { useEffect, useState } from 'react';
import { handleCountdown } from '../../utils/helpers';
import './ElectionCountdown.scss';

const ElectionCountdown = () => {
  const [time, setTime] = useState();
  const [timeType, setTimeType] = useState('');

  useEffect(() => {
    handleCountdown((value, type) => {
      setTime(value);
      setTimeType(type);
    });
  }, []);

  function formatTime(timeStr) {
    const splitStr = timeStr.split('-');
    return `${myanmarNumbers(splitStr[0], 'my')}:${myanmarNumbers(
      splitStr[1],
      'my'
    )}:${myanmarNumbers(splitStr[2], 'my')}`;
  }

  return (
    <div className="text-center mb-3" style={{ lineHeight: '2.25rem' }}>
      <div>
        {timeType === 'day' && (
          <span>
            ရွေးကောက်ပွဲကျင်းပရန်
            <br />
            <span className="color-primary text-bold countdown-text">
              {myanmarNumbers(time, 'my')}
            </span>
            <br /> ရက်သာ လိုတော့သည်
          </span>
        )}
        {timeType === 'over' && (
          <span className="text-bold countdown-text">
            မဲရုံများပိတ်သွားပါပြီ
          </span>
        )}
        {timeType === 'start' && (
          <span>
            ရွေးကောက်ပွဲကျင်းပရန် <br />
            <span className="color-primary text-bold countdown-text">
              {formatTime(time)}
            </span>
            <br />
            သာလိုတော့သည်
          </span>
        )}
        {timeType === 'close' && (
          <span>
            မဲရုံများပိတ်ရန် <br />
            <span className="color-primary text-bold countdown-text">
              {formatTime(time)}
            </span>
            <br />
            သာလိုတော့သည်
          </span>
        )}
      </div>
    </div>
  );
};

export default ElectionCountdown;
