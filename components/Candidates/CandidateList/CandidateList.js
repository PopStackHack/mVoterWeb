import Link from 'next/link';
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
                seal_image: partySealImage,
                flag_image: partyFlagImage,
                name_burmese: partyNameBurmese,
              } = {},
            } = party || {};

            return (
              <div className="col-lg-6 col-12 CandidateList__itemWrapper" key={id}>
                <Link href={`/candidates/[candidate]`} as={`/candidates/${id}`} prefetch={false}>
                  <a className="no-style">
                    <Card className="CandidateList__item box-hover">
                      <div className="CandidateList__avatar"
                      style={{ backgroundImage: `url("${image}")` }}></div>
                      <div className="CandidateList__info">
                        <div className="name">
                          { name }
                        </div>
                        <div className="CandidateList__party">
                          { party ? partyNameBurmese : 'တစ်သီးပုဂ္ဂလ' }
                        </div>
                        {
                          party ?
                            <img src={partySealImage} className="flag" className="CandidateList__partyFlag" />
                            :
                            <img src={individualLogo} className="flag" className="CandidateList__partyFlag" />
                        }
                      </div>
                    </Card>
                  </a>
                </Link>
              </div>
            );
          })
      }
    </div>
  );
};

export default CandidateList;
