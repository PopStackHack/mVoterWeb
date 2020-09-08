import { useRouter } from 'next/router';
import Card from '../../Common/Card/Card';
import './CandidateList.module.scss';

const CandidateList = (props) => {
  const {
    candidates = [],
  } = props;

  const router = useRouter();

  function onClickCandidate(candidateId) {
    router.push(`/candidates/[candidate]`, `/candidates/${candidateId}`);
  }

  return (
    <div className="CandidateList row no-gutters">
      {
        candidates &&
          candidates.map((candidate, index) => {
            const {
              id,
              attributes: {
                name,
                image,
                individual_logo: individualLogo,
                party,
              },
            } = candidate;

            const {
              attributes: {
                flag_image: partyFlagImage,
                name_burmese: partyNameBurmese,
              } = {},
            } = party || {};

            return (
              <div className="col-lg-6 col-xs-12 CandidateList__itemWrapper" key={id}>
                <Card className="CandidateList__item" onClick={() => onClickCandidate(id)}>
                  <div className="CandidateList__avatar" style={{ backgroundImage: `url(${encodeURI(image)}` }}></div>
                  <div className="CandidateList__info">
                    <div className="name">
                      { name }
                    </div>
                    <div className="CandidateList__party">
                      {
                        // Determine if this is individual candidate
                        party &&
                          (
                            <>
                              <img src={partyFlagImage} className="flag" />&nbsp;
                              {partyNameBurmese}
                            </>
                          )
                      }
                      {
                        !party &&
                          (
                            <>
                              <img src={individualLogo}  className="flag"/>&nbsp;
                              {'တစ်သီးပုက္ကလ'}
                            </>
                          )
                      }
                    </div>
                  </div>
                </Card>
              </div>
            );
          })
      }
    </div>
  );
};

export default CandidateList;
