import React from 'react';
import { motion } from 'framer-motion';
import { SectionTag } from '@/components/ui/SectionTag';
import {
  FileText,
  Sparkles,
  ShieldAlert,
  Clock,
  CreditCard,
  Scale,
  RefreshCw,
  Mail,
  UserCheck,
  Cpu,
  ChevronRight,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

interface TermSection {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const TERMS_SECTIONS: TermSection[] = [
  {
    id: 'agreement',
    number: '01',
    title: 'Legal Entity & Nature of Agreement',
    icon: <FileText className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'This Master Service Agreement and Terms of Service ("Agreement") constitute a legally binding electronic contract under the Indian Contract Act, 1872 and the Information Technology Act, 2000 between Mindtrix Media ("Agency", "we", "us", or "our", having its creative studio operations in Kolkata, West Bengal, India) and the client, whether an individual, enterprise, or agency acting on behalf of a brand ("Client", "you").',
      'By visiting our website (https://creative.mindtrixmedia.com), submitting a project brief, commissioning visual assets, or approving an estimate or invoice for creative production, you expressly acknowledge that you have read, understood, and agreed to be bound by all terms, conditions, and notices contained herein.',
      'If you are entering into this Agreement on behalf of a corporate entity, you represent and warrant that you hold full legal authority to bind such brand or company to these obligations.',
    ],
  },
  {
    id: 'scope-of-services',
    number: '02',
    title: 'Scope of AI Creative & Production Services',
    icon: <Sparkles className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Mindtrix Media operates as a next-generation AI creative studio providing commercial digital content production. Our services include: (a) 9:16 vertical video commercials engineered for Instagram Reels, TikTok, YouTube Shorts, and Meta ad feeds; (b) studio-grade AI product photography and 3D e-commerce lifestyle visuals for Shopify, Amazon, and DTC storefronts; (c) AI spokesperson, UGC-style marketing assets, and social ad creatives; and (d) brand campaign direction and retainer creative pipelines.',
      'Human Curation & Creative Direction: Our deliverables are produced through a synthesis of human creative scriptwriting, artistic direction, proprietary generative AI synthesis pipelines, custom post-production editing, color grading, sound design, and visual effects.',
      'Production Schedules: Standard turnaround time for single project deliverables is 24 to 48 hours following receipt of required input assets and written brief confirmation. High-volume catalog shoots or enterprise campaigns are scheduled according to mutually agreed production milestones.',
    ],
  },
  {
    id: 'intellectual-property',
    number: '03',
    title: 'Intellectual Property & Copyright Assignment (Copyright Act, 1957)',
    icon: <Scale className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Client Input Ownership: The Client retains sole and exclusive ownership of all pre-existing trademarks, trade names, logos, physical product designs, raw product photographs, video samples, and brand collateral provided to the Agency ("Client Inputs"). Nothing in this Agreement transfers ownership of Client Inputs to the Agency.',
      'Human-Authored Curated Deliverables: Under the Indian Copyright Act of 1957 and evolving global intellectual property jurisprudence, copyright protection requires human authorship. Mindtrix Media warrants that all final deliverables incorporate substantial human creative selection, script composition, artistic prompting, editing, and post-production processing.',
      'Commercial License & Assignment: Upon full and final settlement of all invoiced fees, Mindtrix Media grants and assigns to the Client an exclusive, perpetual, worldwide, transferable, royalty-free commercial license to publish, broadcast, distribute, display, and run paid advertisements with the final curated deliverables across all digital, print, and broadcast channels.',
      'Raw Intermediate Outputs & Workflows: Mindtrix Media retains all right, title, and interest in its proprietary background workflows, technical prompt sequences, negative embeddings, custom LoRA weights, rendering configurations, and procedural production pipelines.',
      'Studio Portfolio & Demonstration Right: Unless expressly prohibited under an executed non-disclosure agreement (NDA), Mindtrix Media reserves the non-exclusive right to showcase completed non-confidential deliverables in its agency portfolio, website showcase gallery, case studies, and social media channels strictly for capability demonstration.',
    ],
  },
  {
    id: 'client-warranties',
    number: '04',
    title: 'Client Warranties & Non-Infringement Indemnity',
    icon: <ShieldAlert className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'The Client represents and warrants that: (a) it possesses all necessary rights, title, licenses, and clearances for all Client Inputs, product trademarks, logos, and packaging designs submitted for processing; (b) Client Inputs do not violate any patent, trademark, copyright, trade secret, or proprietary right of any third party; and (c) the products advertised comply with applicable consumer protection and advertising standards.',
      'Indemnification: The Client agrees to indemnify, defend, and hold harmless Mindtrix Media, its directors, artists, and contractors from and against any third-party claims, liabilities, damages, losses, or legal expenses (including reasonable attorney fees) arising from claims that Client Inputs or products infringe upon third-party intellectual property or violate applicable trade regulations.',
    ],
  },
  {
    id: 'personality-rights',
    number: '05',
    title: 'Personality Rights, Synthetic Media & Brand Safety',
    icon: <UserCheck className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Protection of Personality Rights: In strict adherence to Indian judicial precedents safeguarding common-law and constitutional personality rights, Mindtrix Media prohibits and refuses to generate synthetic likenesses, voice clones, or biometric simulations of real living celebrities, public figures, or private individuals without verified written consent and legal clearance.',
      'Synthetic Media Compliance: In compliance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules and emerging global standards on synthetic media, the Client acknowledges that digital advertising platforms (such as Meta, Google, and TikTok) may require "Altered or Synthetic Content" disclosures. The Client assumes responsibility for complying with platform-specific disclosure flags when deploying generated visual campaigns.',
    ],
  },
  {
    id: 'third-party-ai',
    number: '06',
    title: 'Third-Party AI Foundation Platforms & Flow-Down Terms',
    icon: <Cpu className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Mindtrix Media utilizes enterprise and commercially licensed foundation generative compute platforms, cloud rendering APIs, and high-performance neural compute infrastructure.',
      'Flow-Down Limitations: The Client acknowledges that asset generation is subject to the underlying operational continuity, acceptable use policies, and terms of service of foundational AI compute providers. Mindtrix Media cannot be held liable for retroactive policy shifts or infrastructure downtime imposed by third-party model providers.',
    ],
  },
  {
    id: 'pricing-payment',
    number: '07',
    title: 'Commercial Terms, Invoicing & Retainer Commitments',
    icon: <CreditCard className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Single Project Deliveries: Single commercial deliverables start from ₹999. Invoices are payable via approved payment channels (UPI, NEFT/RTGS, credit/debit card, or international wire transfer). Full payment or agreed milestone advances must be received prior to high-resolution asset dispatch.',
      'Monthly Retainer Subscriptions: Retainer plans start from ₹4,999/month, billed on a recurring monthly schedule. Retainer contracts guarantee allocated GPU compute, weekly asset delivery batches, priority turnaround windows, and dedicated creative coordination.',
      'Taxes: All rates quoted are exclusive of applicable Indian Goods and Services Tax (GST) or international cross-border processing charges unless expressly specified otherwise on the invoice.',
    ],
  },
  {
    id: 'revisions-approvals',
    number: '08',
    title: 'Revision Protocol & Acceptance Criteria',
    icon: <RefreshCw className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Standard Revisions: Each commissioned single project asset includes up to two (2) rounds of iterative adjustments (e.g., color grading, motion pacing, text overlay adjustments, or audio mix timing) requested within seven (7) business days of draft delivery.',
      'Scope Extension: Substantial brief modifications requested after rendering has commenced—such as requesting an entirely different product theme, altering core product geometry, or requesting new scripts outside the initial brief—are classified as new project milestones and invoiced accordingly.',
      'Deemed Acceptance: Deliverables are deemed irrevocably accepted and approved if no revision requests or notices are communicated in writing within seven (7) business days of preview link delivery.',
    ],
  },
  {
    id: 'cancellation-refunds',
    number: '09',
    title: 'Cancellation & Refund Policy',
    icon: <Clock className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Dedicated Compute & Custom Labor: Because our studio immediately allocates specialized human creative labor, private cloud GPU render nodes, and model parameter configurations upon project sign-off, fees paid for completed creative deliverables are strictly non-refundable.',
      'Pre-Render Cancellation: If a cancellation request is submitted in writing before generative rendering or visual scripting has commenced, the Client may receive a refund minus a 25% administrative onboarding fee.',
      'Retainer Cancellation: Monthly retainer agreements may be canceled by providing a written notice fourteen (14) days prior to the commencement of the next billing cycle. Mid-cycle cancellations are non-refundable once that month\'s production batch is in progress.',
    ],
  },
  {
    id: 'limitation-of-liability',
    number: '10',
    title: 'Limitation of Liability & Performance Disclaimer',
    icon: <ShieldAlert className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Creative Performance Disclaimer: Mindtrix Media crafts high-retention, high-converting creative assets based on empirical industry best practices. However, we do not warrant or guarantee specific financial outcomes, sales revenue, return on ad spend (ROAS), click-through rates (CTR), or algorithmic ad performance, as these depend entirely on third-party ad auction variables, client pricing, and audience dynamics.',
      'Damages Cap: To the maximum extent permitted by applicable law, in no event shall Mindtrix Media, its founders, employees, or contractors be liable for any indirect, incidental, punitive, or consequential damages (including loss of profits, data, or business goodwill). Our total cumulative liability arising under or relating to this Agreement shall strictly not exceed the total fees paid by the Client to the Agency for the specific project deliverable giving rise to liability.',
    ],
  },
  {
    id: 'dispute-resolution',
    number: '11',
    title: 'Governing Law & Dispute Resolution (Kolkata, India)',
    icon: <Scale className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Governing Law: This Agreement shall be governed by, interpreted, and construed in accordance with the substantive laws of India, without regard to its conflict of law principles.',
      'Amicable Resolution: In the event of any dispute or claim arising out of this Agreement, the parties shall first attempt to resolve the matter through good-faith mutual negotiations within thirty (30) days.',
      'Arbitration: If mutual negotiation fails, the dispute shall be referred to and finally resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted by a sole arbitrator mutually appointed by both parties. The seat and venue of arbitration shall be Kolkata, West Bengal, India. The language of arbitration shall be English.',
      'Judicial Jurisdiction: Subject to arbitration, the competent civil courts situated in Kolkata, West Bengal, India shall have exclusive territorial jurisdiction over any legal proceedings arising hereunder.',
    ],
  },
];

export const TermsContent: React.FC = () => {
  return (
    <div className="relative z-10 space-y-6 sm:space-y-8 pb-16 sm:pb-20">
      {TERMS_SECTIONS.map((section, idx) => (
        <motion.section
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4, delay: idx * 0.03 }}
          className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] bg-gradient-to-br from-white via-[#fefaf8] to-[#faf4f9] p-6 sm:p-8 md:p-10 border border-[#ebdce7] shadow-[0_10px_35px_-10px_rgba(61,32,53,0.07)] hover:shadow-[0_16px_40px_-10px_rgba(61,32,53,0.12)] hover:border-[#dcc6d5] transition-all duration-300 group"
        >
          {/* Subtle Ambient Corner Lighting */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#faede5]/30 via-[#f7edf5]/20 to-transparent rounded-full blur-2xl pointer-events-none -z-0" />

          {/* Header Row */}
          <div className="relative z-10 flex items-start sm:items-center justify-between gap-4 mb-5 sm:mb-6 pb-4 sm:pb-5 border-b border-[#ebdce7]/70">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#faede5] via-[#f7edf5] to-[#eae3fb] border border-[#ebdce7] flex items-center justify-center shrink-0 shadow-xs text-[#3d2035] group-hover:scale-105 transition-transform">
                {section.icon}
              </div>
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-black text-neutral-900 uppercase tracking-tight">
                {section.title}
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] text-[#eda970] font-mono text-xs sm:text-[13px] font-bold border border-white/15 shadow-xs shrink-0 tracking-wider">
              <span>ARTICLE</span>
              <span>{section.number}</span>
            </span>
          </div>

          {/* Paragraphs with structured highlight cards */}
          <div className="relative z-10 space-y-3.5">
            {section.content.map((paragraph, pIdx) => {
              // Format Bullet list items
              if (paragraph.startsWith('• ')) {
                const raw = paragraph.slice(2);
                const colonIdx = raw.indexOf(':');
                const hasColon = colonIdx > 0 && colonIdx < 50;

                return (
                  <div
                    key={pIdx}
                    className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-white/80 border border-[#ebdce7]/60 shadow-2xs transition-colors hover:bg-white hover:border-[#ebdce7]"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#ed4f6c] to-[#d97736] mt-2 shrink-0 shadow-2xs" />
                    <p className="text-neutral-700 text-sm sm:text-[15px] leading-relaxed">
                      {hasColon ? (
                        <>
                          <strong className="font-bold text-neutral-900">{raw.slice(0, colonIdx)}:</strong>
                          <span>{raw.slice(colonIdx + 1)}</span>
                        </>
                      ) : (
                        raw
                      )}
                    </p>
                  </div>
                );
              }

              // Format Key-Value Clauses (e.g. "Term Name: Description")
              const colonIdx = paragraph.indexOf(':');
              if (colonIdx > 0 && colonIdx < 55) {
                const lead = paragraph.slice(0, colonIdx);
                const rest = paragraph.slice(colonIdx + 1);

                return (
                  <div
                    key={pIdx}
                    className="p-3.5 sm:p-4 rounded-xl bg-white/80 border border-[#ebdce7]/60 shadow-2xs transition-colors hover:bg-white hover:border-[#ebdce7]"
                  >
                    <strong className="font-bold text-neutral-900 text-sm sm:text-[15px]">{lead}:</strong>
                    <span className="text-neutral-700 text-sm sm:text-[15px] leading-relaxed ml-1.5">{rest}</span>
                  </div>
                );
              }

              // Regular paragraph
              return (
                <p key={pIdx} className="text-neutral-700 text-sm sm:text-base leading-relaxed font-normal">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </motion.section>
      ))}

      {/* Support & Contact Card: Styled in signature website theme with properly distributed elements */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#fbf5f1] via-[#f7edf5] to-[#f0e9f8] p-6 sm:p-9 md:p-12 border border-[#ebdce7] shadow-[0_20px_50px_-20px_rgba(220,198,213,0.5)] flex flex-col justify-between"
      >
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-[#dcc6d5]/40 via-[#cfc1ee]/30 to-[#eda970]/30 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-tr from-[#eda970]/30 via-[#dcc6d5]/30 to-[#cfc1ee]/20 rounded-full blur-3xl pointer-events-none -z-0" />

        {/* Top Row: Balanced 2-Column Headline & Context */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          {/* Left: Tag + Headline */}
          <div className="flex-1 min-w-0 max-w-2xl">
            <SectionTag label="Enterprise & Custom Terms" className="mb-3.5" />

            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase text-neutral-900 tracking-tight leading-tight sm:leading-[1.12]">
              <span>HAVE QUESTIONS REGARDING</span>
              <br />
              <span className="inline-flex items-center flex-wrap gap-x-2.5 sm:gap-x-3 mt-1 sm:mt-1.5">
                <span>LICENSING OR</span>
                <span className="inline-block relative">
                  <span className="relative z-10 px-3.5 sm:px-4.5 py-0.5 rounded-[16px] sm:rounded-[20px] bg-gradient-to-r from-[#faede5] via-[#f7edf5] to-[#eae3fb] shadow-2xs inline-block transform -rotate-1 border border-[#ebdce7]">
                    <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
                      TERMS?
                    </span>
                  </span>
                </span>
              </span>
            </h3>
          </div>

          {/* Right: Description paragraph */}
          <div className="max-w-md lg:max-w-lg shrink-0">
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-normal lg:text-right">
              For master service agreements (MSA), formal vendor onboarding, enterprise non-disclosure agreements (NDA), or white-label pipelines, connect directly with our studio legal desk.
            </p>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-[#ebdce7] to-transparent my-6 sm:my-8" />

        {/* Bottom Row: Distributed Badges on Left, Action Buttons on Right */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
          {/* Badges Strip */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap text-xs font-semibold text-neutral-700">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-[#ebdce7] shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>24h Response Time</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-[#ebdce7] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3d2035]" />
              <span>Enterprise MSAs &amp; NDAs</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-[#ebdce7] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#d97736]" />
              <span>Direct Desk Support</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="mailto:mindtrixmediaindia@gmail.com"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] hover:opacity-95 text-white font-display text-xs sm:text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-md shadow-[#3d2035]/25 border border-white/15 cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-[#eda970]" />
              <span>Email Legal Desk</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#eda970]" />
            </a>
            <a
              href="https://wa.me/919073604457"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-white text-neutral-800 border border-[#ebdce7] hover:bg-neutral-50/80 font-display text-xs sm:text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-2xs cursor-pointer whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-[#3d2035]" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
