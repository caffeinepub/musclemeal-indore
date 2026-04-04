import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const FAQS = [
  {
    id: "how-to-start",
    q: "How do I get started?",
    a: "Simply WhatsApp us at 7724047283, tell us your goal (fat loss or muscle gain), and we will set up your plan. It's that simple!",
  },
  {
    id: "delivery-time",
    q: "What time is delivery?",
    a: "Every morning between 7–8 AM — freshly prepared daily. Your meals are made the night before and delivered straight to your door every morning.",
  },
  {
    id: "change-meals",
    q: "Can I change my meal selections?",
    a: "On the Elite plan, yes. On other plans the weekly menu is fixed. For weekly changes, WhatsApp us at least 24 hours in advance.",
  },
  {
    id: "payment",
    q: "How do I pay?",
    a: "Both UPI and cash on delivery are available. Payment is simple and secure — settled before your first delivery.",
  },
  {
    id: "delivery-area",
    q: "Do you only deliver in Indore?",
    a: "Currently yes — only in Indore. We cover Vijay Nagar, Palasia, Scheme 54, AB Road, New Palasia and many more areas. Check your area or WhatsApp us!",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-hf-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Got Questions?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              data-ocid={`faq.item.${idx + 1}`}
              className="bg-white border border-gray-200 rounded-xl px-6 overflow-hidden data-[state=open]:border-primary"
            >
              <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-primary hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
