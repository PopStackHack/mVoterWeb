// TODO: PROPERLY FIX COUNTDOWN LOGIC DOWN TO MS PRECISION
import moment from 'moment';
import myanmarNumbers from 'myanmar-numbers';
import { useEffect, useState } from 'react';

const ElectionCountdown = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const now = moment().utcOffset('+0630');
  const towards = moment().set({
    year: 2020,
    months: 10,
    date: 8,
    hours: 6,
    minute: 0,
  }).utcOffset('+0630');

  useEffect(() => {
    // Change to epoch for easier calculation
    setInterval(() => {
      const current = moment();
      const nowEpoch = current.unix();
      const towardsEpoch = towards.unix();

      const duration = moment
        .duration((towardsEpoch - nowEpoch) * 1000, 'milliseconds');

      // Still need to fix for precision
      const hoursUntil = Math.round(duration.asHours());
      const minutesUntil = Math.round(duration.asMinutes() - now.get('minutes') / 60) % 60;
      const secondsUntil = Math.round(duration.asSeconds() - now.get('seconds')) % 60;

      setHours(hoursUntil);
      setMinutes(minutesUntil);
      setSeconds(secondsUntil);
    }, 1000);
  }, []);

  const remainingDays = towards.diff(now, 'days');

  if (remainingDays > 0) {
    return (
      <div className="text-center mb-3" style={{ lineHeight: '2rem' }}>
        <div>
          ရွေးကောက်ပွဲ ကျင်းပရန်
        </div>
        <div>
          <span className="color-primary text-bold">{myanmarNumbers(remainingDays, 'my')}</span> ရက်
        </div>
        <div>
          သာ လိုတော့သည်
        </div>
      </div>
    );
  }

  return (
    <div className="text-center mb-3" style={{ lineHeight: '2rem' }}>
      <div>
        ရွေးကောက်ပွဲ ကျင်းပရန်
      </div>
      <div>
        <span className="color-primary text-bold">{myanmarNumbers(hours, 'my')}</span> နာရီ&nbsp;
        <span className="color-primary text-bold">{myanmarNumbers(minutes, 'my')}</span> မိနစ်&nbsp;
        <span className="color-primary text-bold">{myanmarNumbers(seconds, 'my')}</span> စက္ကန့်&nbsp;
      </div>
      <div>
        သာ လိုတော့သည်
      </div>
    </div>
  );
};

export default ElectionCountdown;
