import React, { useState } from 'react';
import { SectionTag } from '@/components/ui/SectionTag';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: "Which platforms do you work with?",
    answer: "We work across all major social platforms, including Instagram, TikTok, YouTube, and X. Every asset is natively formatted with optimized aspect ratios, retention hooks, and platform-specific audio strategies.",
  },
  {
    question: "How long before we see results?",
    answer: "Most brands see measurable increases in engagement, clicks, and ROAS within the first 14 to 30 days of running our AI ads and high-converting reels.",
  },
  {
    question: "Do you offer custom plans?",
    answer: "Yes, absolutely. In addition to our Per Project and Monthly Growth tiers, we customize tailored visual packages for enterprise brands with specific high-volume production needs.",
  },
  {
    question: "What services do you offer?",
    answer: "We deliver full-cycle creative production: AI commercial product photography, viral TikTok & Instagram reels, UGC-style performance video ads, scriptwriting, kinetic editing, and multi-platform publishing.",
  },
  {
    question: "How do we get started?",
    answer: "Simply book a discovery call or choose your tier. We will onboard your brand assets, map out your first creative batch, and deliver your initial batch of studio-grade reels within 48 to 72 hours.",
  },
];

interface FaqSectionProps {
  onBookCall?: () => void;
  onContactUs?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onBookCall,
  onContactUs,
}) => {
  // Default first card open just like the reference screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative w-full py-14 sm:py-16 md:py-20 px-4 md:px-8 lg:px-12 xl:px-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #faede5 45%, #f7edf5 100%)',
      }}
    >
      {/* Website Theme Ambient Radial Glows (Blush mauve, soft lavender & warm peach) */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-[#dcc6d5]/35 via-[#cfc1ee]/25 to-[#eda970]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-l from-[#3d2035]/12 via-[#dcc6d5]/20 to-[#eda970]/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl lg:max-w-[960px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10">
          
          {/* Left Column: Heading, Description & CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full lg:w-[46%] max-w-[430px] flex flex-col items-start shrink-0"
          >
            <SectionTag label="Common Questions" className="mb-3.5" />
            {/* Main Headline with Signature Section Header Design */}
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-black tracking-normal leading-tight md:leading-[1.1] text-neutral-900 mb-3.5 uppercase">
              <span>GOT QUESTIONS?</span>
              <br />
              <span className="inline-flex items-center flex-wrap gap-x-2.5 sm:gap-x-3.5 mt-1 sm:mt-1.5">
                <span>WE&apos;VE GOT</span>
                {/* Highlight Pill Container for ANSWERS. - Styled in Website Theme */}
                <span className="inline-block relative">
                  <span className="relative z-10 px-4 sm:px-6 py-0.5 sm:py-1 rounded-[18px] sm:rounded-[24px] bg-gradient-to-r from-[#faede5] via-[#f7edf5] to-[#eae3fb] shadow-sm inline-block transform -rotate-1 border border-[#ebdce7]">
                    <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
                      ANSWERS.
                    </span>
                  </span>
                </span>
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-6 max-w-prose">
              Common questions about how we work and what to expect. Everything you need to know before getting started with us.
            </p>

            {/* CTA Buttons matching website theme */}
            <div className="flex items-center gap-3.5 flex-wrap">
              <button
                type="button"
                onClick={onBookCall}
                className="bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] text-white px-7 py-3 rounded-full font-bold text-xs sm:text-sm shadow-[0_12px_28px_-6px_rgba(61,32,53,0.35)] hover:opacity-95 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/10"
              >
                Book A Call
              </button>

              <button
                type="button"
                onClick={onContactUs}
                className="bg-white text-neutral-800 border border-[#ebdce7] px-7 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md hover:bg-neutral-50 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Right Column: Adjusted Width FAQ Question Accordion */}
          <div className="w-full lg:w-[56%] max-w-[475px] flex flex-col gap-3 sm:gap-3.5">
            {FAQ_DATA.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  onClick={() => toggleItem(index)}
                  className={`group rounded-2xl sm:rounded-[20px] p-4 sm:p-4.5 sm:px-5.5 transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? 'bg-white border-2 border-[#542947]/40 shadow-[0_12px_36px_-8px_rgba(61,32,53,0.14)]'
                      : 'bg-white/95 backdrop-blur-xs border border-[#ebdce7] shadow-[0_4px_16px_rgba(61,32,53,0.04)] hover:shadow-[0_8px_24px_rgba(61,32,53,0.08)] hover:border-[#dcc6d5]'
                  }`}
                >
                  {/* Header Row: Question Title & Theme Circular Button */}
                  <div className="flex items-center justify-between gap-3">
                    <h3
                      className={`font-bold text-xs sm:text-[14.5px] leading-snug transition-colors pr-2 ${
                        isOpen ? 'text-[#3d2035]' : 'text-neutral-900 group-hover:text-neutral-800'
                      }`}
                    >
                      {item.question}
                    </h3>

                    {/* Circular Action Button in Website Theme Plum-Noir Gradient */}
                    <div
                      className={`w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] text-white flex items-center justify-center shrink-0 transition-transform duration-300 shadow-[0_4px_14px_rgba(61,32,53,0.3)] border border-white/10 ${
                        isOpen ? 'rotate-90' : 'group-hover:scale-105'
                      }`}
                    >
                      {isOpen ? (
                        <X className="w-3.5 h-3.5 text-[#eda970] stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Content with Smooth Height Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-neutral-600 text-xs sm:text-[13.5px] leading-relaxed pt-3 pr-2">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
