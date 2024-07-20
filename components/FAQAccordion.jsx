import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function FAQAccordion({ question, answer }) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="">
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  