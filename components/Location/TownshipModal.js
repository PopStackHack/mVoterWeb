// TODO: Refactor this component to be able to use as a reusable collapse in the future
import { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Modal from '../Common/Modal/Modal';

import './locationCollapse.scss';

const TownshipModal = (props) => {
  const {
    isModalOpen,
    setModalOpen,
  } = props;
  const [stateRegions, setStateRegions] = useState([]);
  const [townships, setTownships] = useState([]); // { region: [townships] }
  const [isTownshipsLoading, setTownshipsLoading] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      fetchStateRegions();
    }
  }, [isModalOpen]);

  async function fetchStateRegions() {
    const response = await fetch(`/api/locations?type=state_regions`);
    const result = await response.json();

    setStateRegions(result.data);
  }

  async function fetchTownships(stateRegion) {
    setTownshipsLoading(true);
    const response = await fetch(`/api/locations?type=townships&search_str=${stateRegion}`);
    const result = await response.json();

    const townshipsClone = [...townships];
    townshipsClone.push({
      stateRegion: stateRegion,
      townships: result.data,
      collapsed: true,
    });

    setTownships(townshipsClone);
    setTownshipsLoading(false);
  }

  async function onChangeAccordion(accordionId) {
    // This is a BAD practice, but it should suffice
    const textNode = document.getElementById(`accordion__heading-${accordionId}`).textContent;
    await fetchTownships(textNode);
  }

  function renderTownships(stateRegion) {
    const containedTownships = townships.find(({ stateRegion: sr }) => sr === stateRegion);

    if (containedTownships && containedTownships.collapsed) {
      return (
        <ul className="child">
          {
            containedTownships.townships.map((township) => <li key={township}>{township}</li>)
          }
        </ul>
      )
    }
  }

  function onClickRegion(stateRegion) {
    const foundIndex = townships.findIndex(({ stateRegion: sr }) => sr === stateRegion);
    const clonedTownships = [...townships];

    if (foundIndex > -1) {
      clonedTownships[foundIndex].collapsed = !clonedTownships[foundIndex].collapsed; // For Toggle
      setTownships(clonedTownships);
    } else {
      setTownships(clonedTownships.map((item) => ({ ...item, collapsed: false })));
      fetchTownships(stateRegion);
    }
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setModalOpen(false)}
    >
      <div className="text-center text-bold">မြို့နယ်ရွေးပါ</div>
      <div className="location-collapse">
        <ul>
          {
            stateRegions.map((stateRegion, srIndex) => (
              <li key={srIndex} onClick={() => onClickRegion(stateRegion)}>
                {stateRegion}
                <ul>
                  {renderTownships(stateRegion)}
                </ul>
              </li>
            ))
          }
        </ul>
      </div>
    </Modal>
  );
};

export default TownshipModal;
