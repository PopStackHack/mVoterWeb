import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Layout from '../../components/Layout/Layout';
import { useState, useEffect } from 'react';

const FAQ = () => {
  const [faqs, setFaqs] = useState([1, 2, 3]);

  return (
    <Layout>
      <section id="faq">
        <Accordion allowZeroExpanded>
          {
            faqs.map((faq, i) => {
              return (
                <AccordionItem key={i}>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Exercitation in fugiat est ut ad ea cupidatat ut in
                      cupidatat occaecat ut occaecat consequat est minim minim
                      esse tempor laborum consequat esse adipisicing eu
                      reprehenderit enim.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })
          }
        </Accordion>
      </section>
    </Layout>
  );
}

export default FAQ;
