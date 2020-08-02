import './CandidateList.module.scss';

const CandidateList = (props) => {
  const {
    dataSource,
  } = props;

  console.log(dataSource);

  return (
    <div className="CandidateList">
      {
        dataSource &&
          dataSource.map(({
            id,
            name,
            avatar,
            party: {
              flag_image: flagImage,
              name_burmese: partyBurmeseName,
            },
          }) => (
            <div className="CandidateList__item" key={id}>
              <div className="CandidateList__avatar" style={{ backgroundImage: `url${avatar}` }}></div>
              <div className="CandidateList__info">
                <div className="name">
                  { name }
                </div>
                <div className="party">
                  {
                    flagImage &&
                      <img src={flagImage} alt={partyBurmeseName} />
                  }
                  { partyBurmeseName }
                </div>
              </div>
            </div>
          ))
      }
    </div>
  );
};

export default CandidateList;
