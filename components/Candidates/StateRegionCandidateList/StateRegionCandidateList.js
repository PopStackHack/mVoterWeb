import { useEffect, useState } from "react";
import '../CandidateList/CandidateList';
import CandidateList from "../CandidateList/CandidateList";

import './StateRegionCandidateList.scss';

const StateRegionCandidateList = (props) => {
  const {
    candidates,
  } = props;

  const [formattedCandidates, setCandidates] = useState([]);

  useEffect(() => {
    const c = formatCandidates();
    setCandidates(c);
  }, [candidates]);


  function formatCandidates() {
    const nonEthnicCandidates = candidates.filter(({ attributes: {
      representing_ethnicity,
    } }) => !representing_ethnicity);

    let ethnicCandidates = candidates
      .filter(({
        attributes: {
          representing_ethnicity,
        },
      }) => !!representing_ethnicity)
      .sort((a, b) => b.attributes.constituency.attributes.name - a.attributes.constituency.attributes.name)

    return [
      ...nonEthnicCandidates,
      ...ethnicCandidates,
    ].reduce((previous, current) => {
      let formattedData = {
        constituencyId: null,
        constituencyName: null,
        candidates: [],
      };

      if (previous.length === 0) {
        formattedData.constituencyId = current.attributes.constituency.id;
        formattedData.constituencyName = current.attributes.constituency.attributes.name;
        formattedData.candidates.push(current);

        previous.push(formattedData);

        return previous;
      }

      const lastElement = previous[previous.length - 1];

      if (lastElement) {
        if (lastElement.constituencyId === current.attributes.constituency.id) {
          previous[previous.length - 1].candidates.push(current);
        } else {
          formattedData.constituencyId = current.attributes.constituency.id;
          formattedData.constituencyName = current.attributes.constituency.attributes.name;
          formattedData.candidates.push(current);

          previous.push(formattedData);
        }
      }

      return previous;
    }, []);
  }

  return (
    <div>
      {
        formattedCandidates.map(({
          constituencyId,
          constituencyName,
          candidates: stateRegionCandidates,
        }) => {
          return (
            <>
              <div className="text-center constituency-name">{constituencyName}</div>
              <CandidateList candidates={stateRegionCandidates} />
            </>
          )
        })
      }
    </div>
  );

}

export default StateRegionCandidateList;
