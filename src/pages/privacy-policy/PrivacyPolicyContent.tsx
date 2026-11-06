import React from 'react';
import { motion } from 'framer-motion';
import { SectionTag } from '@/components/ui/SectionTag';
import {
  ShieldCheck,
  Eye,
  Lock,
  Database,
  FileCheck,
  Cookie,
  UserCheck,
  Mail,
  Scale,
  Server,
  AlertCircle,
  ChevronRight,
  MessageSquare,
  CheckCircle2,
  Clock,
} from 'lucide-react';

interface PrivacySection {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: 'commitment',
    number: '01',
    title: 'Data Fiduciary & Privacy Commitment (DPDPA, 2023)',
    icon: <ShieldCheck className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Mindtrix Media ("Agency", "we", "us", or "our"), having its operational creative studio in Kolkata, West Bengal, India, acts as a "Data Fiduciary" under the Digital Personal Data Protection Act, 2023 (DPDPA) and the Information Technology Act, 2000 regarding the digital personal and business data processed through our website (https://creative.mindtrixmedia.com) and creative production pipelines.',
      'We are committed to absolute transparency, data minimization, and purpose limitation. We collect, store, and process personal and commercial data strictly for legitimate commercial creative execution, vendor coordination, and communication.',
      'We uphold a strict zero-sale policy: we do not sell, rent, monetize, or trade client personal records, brand specifications, or visual media to data brokers, advertising networks, or third-party marketing aggregators.',
    ],
  },
  {
    id: 'information-collected',
    number: '02',
    title: 'Categories of Information We Collect',
    icon: <Database className="w-5 h-5 text-[#3d2035]" />,
    content: [
      '1. Contact & Identity Data: When you submit our contact or project inquiry form, we collect your full name, brand/company name, business email address, phone/WhatsApp number, preferred engagement model (Per Project or Monthly Retainer), selected services, and project requirements.',
      '2. Client Media & Creative Inputs: In order to synthesize commercial video ads, 9:16 reels, and studio photography, clients upload raw smartphone product photos, high-resolution product images, packaging files, video b-roll, brand logos, color guidelines, and creative scripts.',
      '3. Commercial & Transaction Data: Invoice records, GST numbers (where applicable for Indian entities), transaction identifiers, billing addresses, and payment milestone confirmations (payment processing itself is handled through encrypted, certified third-party payment gateways; we never store raw credit card numbers or banking passwords on our servers).',
      '4. Technical Telemetry & Device Data: Standard server request telemetry, including internet protocol (IP) address, browser version, operating system, timestamp of requests, and referral source, captured to ensure cyber protection and service uptime.',
    ],
  },
  {
    id: 'lawful-basis',
    number: '03',
    title: 'Lawful Grounds & Purposes of Processing',
    icon: <Eye className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Under the DPDPA 2023 and global privacy frameworks, we process your information strictly under the following lawful grounds:',
      '(a) Contractual Necessity: Fulfilling client agreements, generating requested quotes, rendering AI commercial videos, synthesizing 4K product photos, delivering preview drafts, and processing revisions.',
      '(b) Informed Consent: Processing contact details submitted voluntarily via our contact form to schedule creative consultations or WhatsApp discussions regarding project briefs.',
      '(c) Legal & Statutory Obligation: Complying with statutory invoicing, taxation (GST compliance), and accounting record-keeping requirements under Indian law.',
      '(d) Legitimate Business Interest: Monitoring platform security, mitigating cyber threats, and optimizing video streaming latency across our CDN networks.',
    ],
  },
  {
    id: 'ai-media-protection',
    number: '04',
    title: 'AI Generative Media Protection & Model Privacy Policy',
    icon: <FileCheck className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Confidential Studio Ingestion: All physical product photographs, 3D assets, unreleased packaging designs, and brand guidelines provided to Mindtrix Media are treated as strictly confidential commercial assets.',
      'Zero Public AI Model Training: Mindtrix Media explicitly covenants that client product photographs, proprietary artwork, and brand imagery are NEVER uploaded to public open-source foundational AI repositories, public training pools, or distributed to community image banks.',
      'Isolated Processing Instances: All model fine-tuning, LoRA configurations, and neural rendering workflows are executed on isolated, enterprise-licensed compute instances with restricted artist access.',
      'Non-Reuse of Unique Brand Elements: Custom asset models, 3D product reconstructions, and lighting set models calibrated for your brand are reserved solely for your deliverables and are never applied to deliverables for competing brands.',
    ],
  },
  {
    id: 'subprocessors',
    number: '05',
    title: 'Authorized Third-Party Sub-Processors',
    icon: <Server className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Mindtrix Media engages reputable, enterprise-grade cloud sub-processors to maintain world-class site performance and instant video streaming. All third-party sub-processors are vetted for strict data protection compliance:',
      '• Cloudinary Ltd.: Enterprise Content Delivery Network (CDN) utilized for high-efficiency, multi-resolution adaptive streaming of showcase product videos and optimized images (encrypted in transit via TLS 1.3).',
      '• Resend, Inc.: Transactional email infrastructure utilized to securely route client inquiry notifications to agency personnel and deliver instant confirmation receipts to clients.',
      '• Vercel, Inc.: Edge cloud hosting infrastructure hosting our web applications and serverless API endpoints with automated DDoS mitigation and SSL/TLS certificate management.',
    ],
  },
  {
    id: 'security-retention',
    number: '06',
    title: 'Data Security & Storage Limitation (SPDI Rules, 2011)',
    icon: <Lock className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Reasonable Security Practices: In compliance with Rule 8 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, we deploy comprehensive technical, organizational, and physical safeguards. All web communication is encrypted using 256-bit SSL/TLS protocol.',
      'Access Controls: Access to raw client files and project communication is governed by strict role-based access controls (RBAC) limited exclusively to creative directors and video production editors assigned to the account.',
      'Retention & Expungement: Client contact and billing records are retained for the duration required by applicable financial and tax laws. Raw creative product files and rendered draft assets are securely archived for up to ninety (90) days following final asset delivery to allow re-downloads and minor edits, after which they are automatically queued for permanent expungement unless an extended retainer agreement is active.',
      'Client Expungement on Demand: Clients may request immediate, verified permanent deletion of their archived raw media inputs at any time following final delivery.',
    ],
  },
  {
    id: 'cookies-analytics',
    number: '07',
    title: 'Cookies & Browser Tracking',
    icon: <Cookie className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Essential Operational Cookies: We use minimal, non-invasive cookies necessary for website functionality, smooth page transitions, video player volume state, and CDN cache routing.',
      'No Invasive Ad Tracking: We do not deploy invasive third-party cross-site data harvesting or sell web activity data to external programmatic advertising networks.',
      'Browser Management: You can configure your browser settings to reject or delete cookies. Note that disabling essential functional cookies may affect video playback and smooth carousel navigation.',
    ],
  },
  {
    id: 'data-principal-rights',
    number: '08',
    title: 'Your Legal Rights as a Data Principal',
    icon: <UserCheck className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Under the Digital Personal Data Protection Act, 2023, you hold the following statutory rights regarding your personal data:',
      '• Right to Access: Request a summary of the personal data we hold about you and details of processing activities.',
      '• Right to Correction & Updating: Request correction or updating of inaccurate, outdated, or incomplete personal data.',
      '• Right to Erasure: Request the complete deletion of your personal data when it is no longer necessary for the purpose for which it was collected or when consent is withdrawn.',
      '• Right to Grievance Redressal: Access readily available grievance redressal mechanisms through our designated Grievance Officer.',
      '• Right to Nominate: Nominate an individual who may exercise rights on your behalf in the event of death or incapacity.',
      'To exercise any of these rights, email us at privacy@mindtrixmedia.com with the subject line "Data Principal Request".',
    ],
  },
  {
    id: 'children-privacy',
    number: '09',
    title: "Children's Privacy Protection",
    icon: <AlertCircle className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'Our creative services and website are directed strictly to commercial brand owners, marketing directors, e-commerce managers, and business professionals aged eighteen (18) years or older.',
      'We do not knowingly collect, process, or track the personal data of individuals under the age of eighteen (18). If we discover that personal data of a minor has been inadvertently submitted, we will expunge such data from our records immediately.',
    ],
  },
  {
    id: 'grievance-officer',
    number: '10',
    title: 'Grievance Redressal Officer & Regulatory Contact (India)',
    icon: <Scale className="w-5 h-5 text-[#3d2035]" />,
    content: [
      'In compliance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, the details of our designated Grievance Officer are set forth below:',
      'Designation: Grievance Redressal & Data Privacy Officer',
      'Agency: Mindtrix Media',
      'Operational Address: Kolkata, West Bengal, PIN 700001, India',
      'Direct Email: privacy@mindtrixmedia.com (copy: mindtrixmediaindia@gmail.com)',
      'Phone / WhatsApp: +91 90736 04457 / +91 89100 92451',
      'Response Time: All privacy-related inquiries, data principal requests, or security grievances will be acknowledged within 24 hours and addressed within the statutory timeframe prescribed under Indian law (not exceeding 30 days).',
    ],
  },
];

export const PrivacyPolicyContent: React.FC = () => {
  return (
    <div className="relative z-10 space-y-6 sm:space-y-8 pb-16 sm:pb-20">
      {PRIVACY_SECTIONS.map((section, idx) => (
        <motion.section
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4, delay: idx * 0.03 }}
          className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] bg-gradient-to-br from-white via-[#fefaf8] to-[#faf4f9] p-5 sm:p-8 md:p-10 border border-[#ebdce7] shadow-[0_10px_35px_-10px_rgba(61,32,53,0.07)] hover:shadow-[0_16px_40px_-10px_rgba(61,32,53,0.12)] hover:border-[#dcc6d5] transition-all duration-300 group"
        >
          {/* Subtle Ambient Corner Lighting */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#faede5]/30 via-[#f7edf5]/20 to-transparent rounded-full blur-2xl pointer-events-none -z-0" />

          {/* Header Row: Perfectly aligned on mobile (top emblem + badge, full title) and desktop (single flex row) */}
          <div className="relative z-10 grid grid-cols-[auto_1fr] sm:flex sm:items-center sm:justify-between gap-x-3.5 gap-y-3 sm:gap-4 mb-5 sm:mb-6 pb-4 sm:pb-5 border-b border-[#ebdce7]/70">
            {/* Icon: Row 1 Col 1 on mobile, 1st item on desktop */}
            <div className="col-start-1 row-start-1 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#faede5] via-[#f7edf5] to-[#eae3fb] border border-[#ebdce7] flex items-center justify-center shrink-0 shadow-xs text-[#3d2035] group-hover:scale-105 transition-transform sm:order-1">
              {section.icon}
            </div>

            {/* Badge: Row 1 Col 2 on mobile (aligned right), 3rd item on desktop */}
            <div className="col-start-2 row-start-1 flex justify-end items-center sm:order-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 rounded-full bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] text-[#eda970] font-mono text-xs sm:text-[13px] font-bold border border-white/15 shadow-xs shrink-0 tracking-wider">
                <span>SECTION</span>
                <span>{section.number}</span>
              </span>
            </div>

            {/* Title: Row 2 Col 1-2 (full-width) on mobile, 2nd item (flex-1) on desktop */}
            <h2 className="col-span-2 sm:col-auto font-display text-base sm:text-xl md:text-2xl font-black text-neutral-900 uppercase tracking-tight leading-snug sm:order-2 sm:flex-1 sm:min-w-0">
              {section.title}
            </h2>
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

              // Format Key-Value Clauses (e.g. "Term Name: Description" or "1. Term Name: Description")
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

      {/* Contact & Data Requests Card: Styled in signature website theme with properly distributed elements */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#fbf5f1] via-[#f7edf5] to-[#f0e9f8] p-5 sm:p-9 md:p-12 border border-[#ebdce7] shadow-[0_20px_50px_-20px_rgba(220,198,213,0.5)] flex flex-col justify-between"
      >
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-[#dcc6d5]/40 via-[#cfc1ee]/30 to-[#eda970]/30 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-tr from-[#eda970]/30 via-[#dcc6d5]/30 to-[#cfc1ee]/20 rounded-full blur-3xl pointer-events-none -z-0" />

        {/* Top Row: Balanced 2-Column Headline & Context */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          {/* Left: Tag + Headline */}
          <div className="flex-1 min-w-0 max-w-2xl">
            <SectionTag label="Data Privacy & Grievance Desk" className="mb-3.5" />

            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase text-neutral-900 tracking-tight leading-tight sm:leading-[1.12]">
              <span>NEED DATA DELETION OR</span>
              <br />
              <span className="inline-flex items-center flex-wrap gap-x-2.5 sm:gap-x-3 mt-1 sm:mt-1.5">
                <span>PRIVACY</span>
                <span className="inline-block relative">
                  <span className="relative z-10 px-3.5 sm:px-4.5 py-0.5 rounded-[16px] sm:rounded-[20px] bg-gradient-to-r from-[#faede5] via-[#f7edf5] to-[#eae3fb] shadow-2xs inline-block transform -rotate-1 border border-[#ebdce7]">
                    <span className="bg-gradient-to-r from-[#3d2035] via-[#ed4f6c] to-[#d97736] bg-clip-text text-transparent font-black">
                      SUPPORT?
                    </span>
                  </span>
                </span>
              </span>
            </h3>
          </div>

          {/* Right: Description paragraph */}
          <div className="max-w-md lg:max-w-lg shrink-0">
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-normal lg:text-right">
              Our Grievance Redressal Officer reviews all data inquiries directly. You can request asset expungement, marketing data removal, or confidentiality verifications with zero friction.
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
              <Clock className="w-3.5 h-3.5 text-[#3d2035]" />
              <span>24h Grievance Redressal</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-[#ebdce7] shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Asset Expungement</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-[#ebdce7] shadow-2xs">
              <Lock className="w-3.5 h-3.5 text-[#d97736]" />
              <span>DPDPA 2023 Compliant</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="mailto:mindtrixmediaindia@gmail.com"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-gradient-to-r from-[#2f182a] via-[#3d2035] to-[#542947] hover:opacity-95 text-white font-display text-xs sm:text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-md shadow-[#3d2035]/25 border border-white/15 cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-[#eda970]" />
              <span>Email Privacy Officer</span>
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

export const PrivacyContent = PrivacyPolicyContent;

