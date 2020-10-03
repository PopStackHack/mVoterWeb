import React, { useEffect, useState } from 'react';
import ConstituencyPlace from '../ConstituencyPlace/ConstituencyPlace';
import CandidateList from '../CandidateList/CandidateList';
import './StateRegionCandidateList.scss';

const StateRegionCandidateList = props => {
  const { candidates } = props;

  const [formattedCandidates, setCandidates] = useState([]);
  function groupCandidates() {
    const nonEthnicCandidates = candidates.filter(
      ({ attributes: { representing_ethnicity: representingEthnicity } }) =>
        !representingEthnicity
    );

    const ethnicCandidates = candidates
      .filter(
        ({ attributes: { representing_ethnicity: representingEthnicity } }) =>
          !!representingEthnicity
      )
      .sort(
        (a, b) =>
          b.attributes.constituency.attributes.name -
          a.attributes.constituency.attributes.name
      );

    return [...nonEthnicCandidates, ...ethnicCandidates].reduce(
      (previous, current) => {
        const formattedData = {
          constituencyId: null,
          constituencyName: null,
          candidates: []
        };

        if (previous.length === 0) {
          formattedData.constituencyId = current.attributes.constituency.id;
          formattedData.constituencyName =
            current.attributes.constituency.attributes.name;
          formattedData.candidates.push(current);

          previous.push(formattedData);

          return previous;
        }

        const lastElement = previous[previous.length - 1];

        if (lastElement) {
          if (
            lastElement.constituencyId === current.attributes.constituency.id
          ) {
            previous[previous.length - 1].candidates.push(current);
          } else {
            formattedData.constituencyId = current.attributes.constituency.id;
            formattedData.constituencyName =
              current.attributes.constituency.attributes.name;
            formattedData.candidates.push(current);

            previous.push(formattedData);
          }
        }

        return previous;
      },
      []
    );
  }
  useEffect(() => {
    const groupedCandidates = groupCandidates();
    setCandidates(groupedCandidates);
  }, [candidates]);

  return (
    <div>
      {formattedCandidates.map(
        ({
          constituencyId,
          constituencyName,
          candidates: stateRegionCandidates
        }) => {
          return (
            <React.Fragment key={constituencyId}>
              <ConstituencyPlace
                className="state-constituency-name"
                place={constituencyName}
              />
              <CandidateList candidates={stateRegionCandidates} />
            </React.Fragment>
          );
        }
      )}
    </div>
  );
};

export default StateRegionCandidateList;
