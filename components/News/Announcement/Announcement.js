const Announcement = (props) => {
  const {
    title,
    previewImage,
    summary,
    publishedDate,
    url,
  } = props;
  return (
    <div>
      <h1>ကြေညာချက်အမှတ် (၁၃၈ / ၂၀၂၀)</h1>
      <p>
        နိုင်ငံရေးပါတီများ ရေဒီယိုနှင့် ရုပ်မြင်သံကြား အစီစဥ်များမှ ဟောပြောခွင့်
      </p>
    </div>
  );
}