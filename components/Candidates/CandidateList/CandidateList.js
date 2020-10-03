import Link from 'next/link';
import Card from '../../Common/Card/Card';
import './CandidateList.module.scss';

const CandidateList = props => {
  const { candidates = [] } = props;

  return (
    <div className="CandidateList row no-gutters">
      {candidates &&
        candidates.map(candidate => {
          const {
            id,
            attributes: { name, image, individual_logo: individualLogo, party }
          } = candidate;

          const {
            attributes: {
              seal_image: partySealImage,
              name_burmese: partyNameBurmese
            } = {}
          } = party || {};

          return (
            <div
              className="col-lg-6 col-12 CandidateList__itemWrapper"
              key={id}
            >
              <Link
                href="/candidates/[candidate]"
                as={`/candidates/${id}`}
                prefetch={false}
              >
                <a className="no-style">
                  <Card className="CandidateList__item box-hover">
                    <div
                      className="CandidateList__avatar"
                      style={{ backgroundImage: `url("${image}")` }}
                    />
                    <div className="CandidateList__info">
                      <div className="name">{name}</div>
                      <div className="CandidateList__party">
                        {party ? partyNameBurmese : 'တစ်သီးပုဂ္ဂလ'}
                      </div>
                      {party ? (
                        <img
                          alt="Party Flag"
                          src={partySealImage}
                          className="CandidateList__partyFlag"
                        />
                      ) : (
                        <img
                          alt="Individual Logo"
                          src={individualLogo}
                          className="CandidateList__partyFlag"
                        />
                      )}
                    </div>
                  </Card>
                </a>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default CandidateList;
