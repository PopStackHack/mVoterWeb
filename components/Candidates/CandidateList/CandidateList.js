import { useRouter } from 'next/router';
import Card from '../../Common/Card/Card';
import './CandidateList.module.scss';

const CandidateList = (props) => {
  const {
    dataSource,
  } = props;

  const router = useRouter();

  function onClickCandidate(candidateId) {
    router.push(`/candidates/[candidate]`, `/candidates/${candidateId}`);
  }

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
            <Card className="CandidateList__item" key={id} onClick={() => onClickCandidate(id)}>
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
            </Card>
          ))
      }
    </div>
  );
};

export default CandidateList;
