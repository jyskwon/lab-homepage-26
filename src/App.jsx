import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  BookOpen, 
  Users, 
  Mail, 
  MapPin, 
  ExternalLink, 
  FileText, 
  ChevronRight, 
  FlaskConical, 
  Award, 
  Calendar, 
  Globe, 
  ArrowRight, 
  Target, 
  Info, 
  CheckCircle2, 
  Lightbulb, 
  GraduationCap, 
  Book,
  Code,
  Layers,
  Cpu,
  ArrowLeft,
  Search,
  Zap,
  Layout,
  MessageSquare,
  Wand2,
  Box,
  BrainCircuit,
  Bell,
  Heart,
  Terminal,
  BarChart3,
  Presentation,
  ClipboardList,
  UserCheck,
  Clock,
  Sparkles,
  ShieldAlert,
  Network,
  HeartPulse,
  Image as ImageIcon
} from 'lucide-react';

// Import content from JSON files
import newsData from '../content/news.json';
import membersData from '../content/members.json';
import publicationsData from '../content/publications.json';
import coursesData from '../content/courses.json';
import keywordsData from '../content/keywords.json';
import labPhotosData from '../content/lab-photos.json';

// --- Shared Lab Data ---
const labInfo = {
  name: "Designing Intelligence Augmentation Group (DIAG)",
  university: "Yonsei University, HASS / IID",
  description: (
    <>
      In the Designing Intelligence Augmentation Group (DIAG [daɪˈæg]), we research how to empower people through design and technology. Rooted in the vision of Intelligence Augmentation (IA), we study and build innovative AI-infused tools that enhance human cognitive abilities, such as reasoning, creativity, and decision-making, rather than replacing them. We explore how to align AI with complex human values, ensuring technology serves as a tool for meaningful individual and social progress.
    </>
  ),
  subDescription: "Situated within the Humanities, Arts, and Social Sciences (HASS) division and the Information and Interaction Design (IID) major, DIAG is an interdisciplinary hub where engineering, design, and social science converge to augment human intellect.",
  email: "jeansong at yonsei dot ac dot kr",
  locations: [
    { 
      name: "Incheon Campus", 
      address: "Libertas B #421, Yonsei University, 85 Songdogwahak-ro, Yeonsu-gu, Incheon, Republic of Korea 21983" 
    }
  ]
};


const researchAreas = [
  { 
    id: "project-0",
    title: "AI-Augmented Education & Learning", 
    description: "Designing collaborative tools that help students and educators leverage AI to enhance critical thinking and creativity.", 
    icon: <GraduationCap className="w-6 h-6 text-[#407EC9]" />,
    detailedDescription: "This area explores how intelligent systems can act as scaffolds for the learning process. We focus on building prototypes that foster inquiry and deep understanding rather than mere automation of academic tasks.",
    keywords: ["Education", "Learning Systems", "ESL Learning", "Human-AI Interaction"]
  },
  { 
    id: "project-1",
    title: "Human-Centered Content Moderation", 
    description: "Investigating how design and AI can support the management of digital spaces to ensure safer social interaction.", 
    icon: <ShieldAlert className="w-6 h-6 text-[#407EC9]" />,
    detailedDescription: "We build and evaluate tools that assist human moderators in social media contexts. Our research focuses on cognitive support, policy transparency, and the ethical alignment of automated filtering systems.",
    keywords: ["Content Moderation", "Social Media", "Mental Health", "Crowdsourcing"]
  },
  { 
    id: "project-2",
    title: "Crowdsourcing for Machine Learning", 
    description: "Exploring the synergy between collective human intelligence and the development of robust machine learning models.", 
    icon: <Network className="w-6 h-6 text-[#407EC9]" />,
    detailedDescription: "This research focuses on the design of interactive systems for data labeling and human-in-the-loop training. We look at how to maintain high data quality while creating meaningful and empowering experiences for crowd workers.",
    keywords: ["Crowdsourcing", "Machine Learning", "Human-in-the-Loop"]
  },
  { 
    id: "project-3",
    title: "Lifestyle Empowerment in Healthcare", 
    description: "Empowering individuals to manage their wellbeing through intelligent systems that promote health-conscious behaviors.", 
    icon: <HeartPulse className="w-6 h-6 text-[#407EC9]" />,
    detailedDescription: "We design and prototype tools that align health data with human intent. By focusing on personal agency, we explore how AI-infused healthcare systems can support long-term lifestyle changes and self-care.",
    keywords: ["Healthcare", "Wellbeing", "Lifestyle"]
  }
];

// --- Sub-components for Sections ---

const NewsItemWidget = ({ date, text }) => (
  <div className="flex gap-2 items-start pb-4 border-b border-[#A2AAAD]/20 last:border-0">
    <div className="bg-[#FFC72C] text-[#00205B] px-2 py-1 rounded text-xs font-bold whitespace-nowrap shrink-0">
      {date}
    </div>
    <p className="text-[#333F48] text-sm leading-tight flex-1 min-w-0">{text}</p>
  </div>
);

const HomePage = ({ onNavigate }) => (
  <div className="animate-in fade-in duration-500 relative z-10">
    {/* Hero Section */}
    <header className="pt-24 pb-12 lg:pt-40 lg:pb-16 bg-gradient-to-br from-[#A2AAAD]/10 via-white to-white overflow-hidden border-b border-[#A2AAAD]/10">
      <div className="container mx-auto px-6 relative">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#00205B] text-white text-xs font-bold tracking-wider uppercase mb-6">
            Human-AI Interaction Research @ Yonsei
          </span>
        
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 xl:gap-20">
          <div className="flex-1">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#00205B] tracking-tight mb-8 leading-[1.15]">
            Unlocking human potential through <span className="text-[#407EC9]">Design</span> and <span className="text-[#407EC9]">Technology</span>.
          </h1>
          <div className="text-sm lg:text-base text-[#333F48] mb-10 leading-relaxed">
            {labInfo.description}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button onClick={() => onNavigate('research')} className="bg-[#407EC9] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#00205B] transition-all shadow-lg shadow-[#407EC9]/20 flex items-center gap-2">
              Explore Our Research <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('contact')} className="bg-white text-[#333F48] border border-[#A2AAAD]/30 px-8 py-4 rounded-xl font-bold hover:bg-[#A2AAAD]/10 transition-all">
              Work with Us
            </button>
          </div>
        </div>
        
        {/* News Widget */}
          <div className="mt-20 lg:mt-0 lg:max-w-md w-full lg:w-auto">
            <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[#A2AAAD]/20">
            <h3 className="flex items-center gap-2 font-bold text-[#00205B] mb-6 uppercase text-sm tracking-widest">
              <Calendar className="w-4 h-4 text-[#407EC9]" />
              Latest Updates
            </h3>
            <div className="space-y-4">
              {newsData.slice(0, 3).map(item => (
                <NewsItemWidget key={item.id} date={item.date} text={item.text} />
              ))}
            </div>
            <button 
              onClick={() => onNavigate('news')}
              className="mt-6 w-full py-3 bg-[#A2AAAD]/5 hover:bg-[#A2AAAD]/10 text-[#407EC9] text-xs font-bold uppercase tracking-widest rounded-xl transition-all border border-[#A2AAAD]/10 flex items-center justify-center gap-2"
            >
              View All News <ChevronRight className="w-4 h-4" />
            </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Group Photo Banner Section */}
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl bg-[#A2AAAD]/10 h-[300px] md:h-[450px] lg:h-[550px]">
          <img 
            src="group_photo2025.png" 
            alt="DIAG Lab Group" 
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-[0.4] group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden absolute inset-0 items-center justify-center bg-[#A2AAAD]/5 text-[#A2AAAD]">
             <div className="flex flex-col items-center gap-4">
                <ImageIcon size={64} strokeWidth={1} />
                <span className="font-bold text-sm tracking-widest uppercase">Lab Group Photo Placeholder</span>
             </div>
          </div>
          <div className="absolute bottom-8 left-8 bg-black/30 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/20">
            <span className="text-white text-sm font-bold tracking-[0.2em] uppercase">Group Photo, Fall 2025</span>
          </div>
        </div>
      </div>
    </section>

    {/* Sub-description / HASS-IID Section */}
    <section className="pb-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-md text-[#333F48]/70 font-medium italic border-l-4 border-[#FFC72C] pl-6 leading-relaxed">
            {labInfo.subDescription}
          </p>
        </div>
      </div>
    </section>

    {/* Selected Publications Section */}
    <section className="py-24 bg-white border-t border-[#A2AAAD]/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <h2 className="text-3xl font-bold text-[#00205B]">Selected Publications</h2>
            <button 
              onClick={() => onNavigate('publications')}
              className="flex items-center gap-2 text-[#407EC9] font-bold hover:underline"
            >
              View All Publications <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-6">
            {(() => {
              const pubs = (publicationsData && publicationsData.publications) ? publicationsData.publications : (Array.isArray(publicationsData) ? publicationsData : []);
              // Collect all publications with selected: true across all years
              const selectedPubs = [];
              pubs.forEach(yearGroup => {
                if (yearGroup.items) {
                  yearGroup.items.forEach(pub => {
                    if (pub.selected === true) {
                      selectedPubs.push(pub);
                    }
                  });
                }
              });
              
              if (selectedPubs.length === 0) {
                return (
                  <div className="text-center py-12">
                    <p className="text-[#333F48] opacity-70">No selected publications available.</p>
                  </div>
                );
              }

              return (
                <div className="space-y-4">
                  {selectedPubs.map((pub, i) => (
                    <div key={i} className="pb-4 last:pb-0">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-[#333F48] mb-2 leading-tight">{pub.title}</h4>
                          <p className="text-[#333F48]/70 text-sm italic mb-2">{pub.authors}</p>
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <p className="text-[#407EC9] font-bold text-sm uppercase tracking-wider">{pub.venue}</p>
                            {pub.type && (
                              <span className="text-xs font-bold bg-[#A2AAAD] text-white px-2 py-1 rounded-full uppercase tracking-tight whitespace-nowrap">
                                {pub.type}
                              </span>
                            )}
                            {pub.note && (
                              <span className="text-xs text-[#333F48] opacity-70 italic">({pub.note})</span>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-3 flex-shrink-0">
                          {pub.pdf && pub.pdf !== "#" ? (
                            <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#FFC72C] text-[#00205B] text-xs font-bold rounded-xl hover:bg-[#FFC72C]/80 transition-colors inline-block text-center">Paper PDF</a>
                          ) : null}
                          {pub.bibtex && pub.bibtex !== "#" ? (
                            <a href={pub.bibtex} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#A2AAAD]/10 text-[#333F48] text-xs font-bold rounded-xl hover:bg-[#A2AAAD]/30 transition-colors inline-block text-center">BibTeX</a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>

    {/* Research Philosophy Section - Centered Column */}
    <section className="py-24 bg-white border-t border-[#A2AAAD]/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
          <h2 className="text-sm font-black text-[#407EC9] uppercase tracking-[0.3em]">Our Approach</h2>
          <p className="text-3xl lg:text-5xl font-bold text-[#00205B] leading-tight">
            Building to <span className="italic font-normal">Understand</span>,<br /> 
            Designing to <span className="italic font-normal">Empower</span>.
          </p>
        
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 flex-1 min-w-0">
            <h3 className="text-2xl font-bold text-[#00205B] flex items-center gap-3 whitespace-normal lg:whitespace-nowrap">
              <FlaskConical className="w-6 h-6 text-[#407EC9] shrink-0" /> Rapid Prototyping as Research
            </h3>
            <p className="text-[#333F48] leading-relaxed">
              We develop high-fidelity functional prototypes that act as "probes" into the future. By putting these tools in people's hands, we observe how AI-infused systems can best support human needs, productivity, and creativity. This iterative cycle of building and evaluating allows us to stay at the cutting edge of HCI research.
            </p>
          </div>

          <div className="space-y-6 flex-1 min-w-0">
            <h3 className="text-2xl font-bold text-[#00205B] flex items-center gap-3">
              <Search className="w-6 h-6 text-[#FFC72C]" /> Deep Qualitative Insight
            </h3>
            <p className="text-[#333F48] leading-relaxed">
              We believe that code alone cannot answer research questions. We value interview studies and participatory design as critical components of our workflow. These qualitative methods provide the "Why" behind the "How," ensuring our systems are grounded in real human contexts and address genuine social or professional challenges.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Collaborative Network */}
    <section className="py-20 bg-[#A2AAAD]/5 border-y border-[#A2AAAD]/10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-xs font-bold text-[#407EC9] uppercase tracking-[0.2em] mb-12">An Interdisciplinary Hub</h3>
        <p className="text-sm text-[#333F48] opacity-60 mb-12 max-w-2xl mx-auto">
          We collaborate across boundaries, working with AI and CS departments to infuse to computational rigor with deep interaction design and social inquiry.
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-[#00205B]">CS</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Engineering</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-[#00205B]">IID</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Interaction Design</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-[#00205B]">HASS</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Social Science</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const NewsPage = () => {
  // Group news by year
  const newsByYear = newsData.reduce((acc, item) => {
    // Extract year from date (format: "2026.01" -> 2026)
    const year = parseInt(item.date.split('.')[0]);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {});

  // Convert to array and sort by year (descending)
  const sortedYears = Object.keys(newsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const scrollToYear = (year) => {
    const element = document.getElementById(`news-year-${year}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
  <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
    <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-[#00205B]">Lab News</h2>
              </div>
        </div>

            <div className="space-y-12">
              {sortedYears.map((year) => (
                <div key={year} id={`news-year-${year}`} className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-[#A2AAAD] mb-6 border-b border-[#A2AAAD]/20 pb-2">{year}</h3>
                  <div className="space-y-3">
                    {newsByYear[year].map((item) => (
                      <div key={item.id} className="pb-3 border-b border-[#A2AAAD]/10 last:border-0 last:pb-0">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                            <div className="flex items-center gap-3 flex-shrink-0">
                              <span className="text-xs font-bold bg-[#FFC72C] text-[#00205B] px-3 py-1 rounded-full uppercase tracking-tighter whitespace-nowrap">
                      {item.category}
                    </span>
                              <span className="text-sm font-bold text-[#A2AAAD] font-mono whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                            <h3 className="text-lg font-bold text-[#333F48] leading-tight flex-1">
                    {item.title}
                  </h3>
                          </div>
                          <p className="text-[#333F48]/70 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
                   </div>
                    ))}
                </div>
              </div>
              ))}
            </div>
          </div>

          {/* Year Navigation Sidebar */}
          <div className="lg:w-48 flex-shrink-0">
            <div className="sticky top-32">
              <div className="bg-white border border-[#A2AAAD]/20 rounded-2xl p-4 shadow-sm">
                <h3 className="text-xs font-bold text-[#407EC9] uppercase tracking-[0.2em] mb-4">Jump to Year</h3>
                <div className="flex flex-col gap-2">
                  {sortedYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => scrollToYear(year)}
                      className="text-left text-sm font-semibold text-[#333F48] hover:text-[#407EC9] transition-colors py-1 px-2 rounded hover:bg-[#407EC9]/10"
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
);
};

const ResearchPage = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[#00205B]">Research Areas</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, idx) => (
            <div 
              key={idx} 
              onClick={() => onNavigate(area.id)}
              className="bg-white border border-[#A2AAAD]/20 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#407EC9]/30 transition-all flex flex-col group cursor-pointer"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="p-3 bg-[#A2AAAD]/10 rounded-2xl group-hover:bg-[#FFC72C] transition-colors">
                  <div className="text-[#407EC9] group-hover:text-[#00205B] transition-colors">
                    {area.icon}
                  </div>
                </div>
                {area.keywords && area.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {area.keywords.map((keyword, kidx) => (
              <button 
                        key={kidx}
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('publications', keyword);
                        }}
                        className="text-xs font-semibold text-[#407EC9] bg-[#407EC9]/10 px-2 py-1 rounded-full hover:bg-[#407EC9]/20 transition-colors cursor-pointer"
                      >
                        #{keyword}
              </button>
                    ))}
                  </div>
                )}
              </div>
              <h3 className="text-lg font-bold mb-4 text-[#00205B] leading-snug group-hover:text-[#407EC9] transition-colors">{area.title}</h3>
              <p className="text-[#333F48] text-sm leading-relaxed opacity-80 mb-6 flex-grow">{area.description}</p>
              <div className="pt-6 border-t border-[#A2AAAD]/10 flex items-center gap-2 text-[#407EC9] font-bold text-xs uppercase tracking-wider w-full">
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectDetailPage = ({ projectId, onNavigate }) => {
  const project = researchAreas.find(p => p.id === projectId) || researchAreas[0];

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-500 relative z-10">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => onNavigate('research')}
          className="flex items-center gap-2 text-[#407EC9] font-bold text-sm mb-12 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </button>

        <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <div className="inline-block p-4 bg-[#A2AAAD]/10 rounded-2xl text-[#407EC9] mb-4">
                {project.icon}
              </div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-[#00205B] leading-tight uppercase tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg lg:text-xl text-[#333F48] font-medium opacity-80 leading-relaxed border-l-4 border-[#FFC72C] pl-6">
                {project.detailedDescription}
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-xl lg:text-2xl font-bold text-[#00205B] flex items-center gap-2">
                <Search className="w-5 h-5 lg:w-6 lg:h-6 text-[#407EC9]" /> Research Overview
              </h2>
              <div className="bg-[#A2AAAD]/5 rounded-[2rem] p-8 lg:p-10 border border-[#A2AAAD]/10">
                <p className="text-[#333F48] text-sm lg:text-base leading-loose">
                  [This section is currently being updated with latest research findings and project details. 
                  Our lab is actively working on building novel systems and conducting user studies in this domain.]
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-base lg:text-lg font-bold text-[#00205B] flex items-center gap-2">
                  <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-[#FFC72C]" /> Key Objectives
                </h3>
                <ul className="space-y-3">
                  {["Goal 1: Knowledge Discovery", "Goal 2: User-AI Synergy", "Goal 3: Experimental Prototyping"].map((goal, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[#333F48]/80 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#407EC9] shrink-0" /> {goal}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-base lg:text-lg font-bold text-[#00205B] flex items-center gap-2">
                  <Code className="w-4 h-4 lg:w-5 lg:h-5 text-[#407EC9]" /> Core Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Python", "LLM APIs", "Interaction Frameworks"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-[#A2AAAD]/20 rounded-full text-xs font-bold text-[#A2AAAD]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

const PublicationsPage = ({ keywordFilter, navigate }) => {
  const pubs = (publicationsData && publicationsData.publications) ? publicationsData.publications : (Array.isArray(publicationsData) ? publicationsData : []);
  const postersDemosWorkshops = (publicationsData && publicationsData.postersDemosWorkshops) ? publicationsData.postersDemosWorkshops : [];
  
  // Extract all unique keywords actually used in publications and posters/demos/workshops
  const usedKeywords = new Set();
  pubs.forEach(yearGroup => {
    yearGroup.items.forEach(pub => {
      if (pub.keywords && Array.isArray(pub.keywords)) {
        pub.keywords.forEach(keyword => usedKeywords.add(keyword));
      }
    });
  });
  postersDemosWorkshops.forEach(yearGroup => {
    yearGroup.items.forEach(item => {
      if (item.keywords && Array.isArray(item.keywords)) {
        item.keywords.forEach(keyword => usedKeywords.add(keyword));
      }
    });
  });
  
  // Use centralized keywords that are actually used in publications, sorted
  const availableKeywords = keywordsData.all
    .filter(kw => usedKeywords.has(kw))
    .sort();
  
  // Initialize selected keywords from URL param or empty array
  const [selectedKeywords, setSelectedKeywords] = useState(
    keywordFilter ? [keywordFilter] : []
  );
  
  // Sync from URL to state when user lands with a keyword (e.g. link from elsewhere).
  // When URL has no keyword, do not clear state—allows multiple checkboxes to stay selected.
  useEffect(() => {
    if (keywordFilter) {
      setSelectedKeywords([keywordFilter]);
    }
  }, [keywordFilter]);
  
  const toggleKeyword = (keyword) => {
    setSelectedKeywords(prev => {
      const newKeywords = prev.includes(keyword) 
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword];
      
      // Update URL if needed (only if single keyword for URL compatibility)
      if (newKeywords.length === 0) {
        navigate('publications');
      } else if (newKeywords.length === 1) {
        navigate('publications', newKeywords[0]);
      } else {
        // Multiple keywords - just update state, don't change URL
        navigate('publications');
      }
      
      return newKeywords;
    });
  };
  
  // Filter publications based on selected keywords
  const filteredPubs = selectedKeywords.length === 0 
    ? pubs 
    : pubs.map(yearGroup => ({
        ...yearGroup,
        items: yearGroup.items.filter(pub => 
          pub.keywords && pub.keywords.some(k => selectedKeywords.includes(k))
        )
      })).filter(yearGroup => yearGroup.items.length > 0);

  // Filter posters/demos/workshops based on selected keywords
  const filteredPostersDemosWorkshops = selectedKeywords.length === 0
    ? postersDemosWorkshops
    : postersDemosWorkshops.map(yearGroup => ({
        ...yearGroup,
        items: yearGroup.items.filter(item =>
          item.keywords && item.keywords.some(k => selectedKeywords.includes(k))
        )
      })).filter(yearGroup => yearGroup.items.length > 0);

  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
      <div className="container mx-auto px-6">
        {/* Keyword Filter Section - Moved above header */}
        {availableKeywords.length > 0 && (
          <div className="mb-12 p-6 bg-white border border-[#A2AAAD]/20 rounded-2xl shadow-sm">
            <h3 className="text-sm font-bold text-[#407EC9] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <Search className="w-4 h-4" /> Filter by Keywords
            </h3>
            <div className="flex flex-wrap gap-3">
              {availableKeywords.map(keyword => (
                <label key={keyword} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedKeywords.includes(keyword)}
                    onChange={() => toggleKeyword(keyword)}
                    className="w-4 h-4 text-[#407EC9] border-[#A2AAAD]/30 rounded focus:ring-[#407EC9] focus:ring-2 cursor-pointer"
                  />
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full transition-all ${
                    selectedKeywords.includes(keyword)
                      ? 'bg-[#407EC9] text-white'
                      : 'bg-[#407EC9]/10 text-[#407EC9] group-hover:bg-[#407EC9]/20'
                  }`}>
                    #{keyword}
                  </span>
                </label>
              ))}
            </div>
            {selectedKeywords.length > 0 && (
              <button
                onClick={() => {
                  setSelectedKeywords([]);
                  navigate('publications');
                }}
                className="mt-4 text-xs text-[#407EC9] font-bold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-[#00205B]">Publications</h2>
            <p className="text-xl text-[#333F48]">Refereed Conference and Journal Papers.</p>
          </div>
          <a href="#" className="flex items-center gap-2 text-[#407EC9] font-bold hover:underline">
            Google Scholar <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-12">
          {!filteredPubs || filteredPubs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#333F48] opacity-70">
                {keywordFilter ? `No publications found for this keyword.` : 'No publications available.'}
              </p>
            </div>
          ) : (
            filteredPubs.map((yearGroup) => (
            <div key={yearGroup.year}>
              <h3 className="text-2xl font-bold text-[#A2AAAD] mb-6 border-b border-[#A2AAAD]/20 pb-2">{yearGroup.year}</h3>
              <div className="space-y-4">
                {yearGroup.items.map((pub, i) => (
                    <div key={i} className="pb-4 last:pb-0">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#333F48] mb-2 leading-tight">{pub.title}</h4>
                          <p className="text-[#333F48]/70 text-sm italic mb-2">{pub.authors}</p>
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                      <p className="text-[#407EC9] font-bold text-sm uppercase tracking-wider">{pub.venue}</p>
                            {pub.type && (
                              <span className="text-xs font-bold bg-[#A2AAAD] text-white px-2 py-1 rounded-full uppercase tracking-tight whitespace-nowrap">
                                {pub.type}
                              </span>
                            )}
                            {pub.note && (
                              <span className="text-xs text-[#333F48] opacity-70 italic">({pub.note})</span>
                            )}
                    </div>
                          {pub.keywords && pub.keywords.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {pub.keywords.map((keyword, idx) => (
                                <span key={idx} className="text-xs font-semibold text-[#407EC9] bg-[#407EC9]/10 px-2 py-0.5 rounded-full">
                                  #{keyword}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex gap-3 flex-shrink-0">
                          {pub.pdf && pub.pdf !== "#" ? (
                            <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#FFC72C] text-[#00205B] text-xs font-bold rounded-xl hover:bg-[#FFC72C]/80 transition-colors inline-block text-center">Paper PDF</a>
                          ) : null}
                          {pub.bibtex && pub.bibtex !== "#" ? (
                            <a href={pub.bibtex} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#A2AAAD]/10 text-[#333F48] text-xs font-bold rounded-xl hover:bg-[#A2AAAD]/30 transition-colors inline-block text-center">BibTeX</a>
                          ) : null}
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            ))
          )}
        </div>

        {/* Posters, Demos, and Workshop Papers Section */}
        {filteredPostersDemosWorkshops.length > 0 && (
          <div className="mt-32 pt-16 border-t border-[#A2AAAD]/20">
            <h2 className="text-4xl font-bold mb-4 text-[#00205B]">Posters, Demos, and Workshop Papers</h2>
            <p className="text-xl text-[#333F48] mb-12">Additional contributions.</p>
            
            <div className="space-y-12">
              {filteredPostersDemosWorkshops.map((yearGroup) => (
                <div key={yearGroup.year}>
                  <h3 className="text-2xl font-bold text-[#A2AAAD] mb-6 border-b border-[#A2AAAD]/20 pb-2">{yearGroup.year}</h3>
                  <div className="space-y-4">
                    {yearGroup.items.map((item, i) => (
                      <div key={i} className="pb-4 last:pb-0">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-[#333F48] mb-2 leading-tight">{item.title}</h4>
                          <p className="text-[#333F48]/70 text-sm italic mb-2">{item.authors}</p>
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <p className="text-[#407EC9] font-bold text-sm uppercase tracking-wider">{item.venue}</p>
                            {item.type && (
                              <span className="text-xs font-bold bg-[#A2AAAD] text-white px-2 py-1 rounded-full uppercase tracking-tight whitespace-nowrap">
                                {item.type}
                              </span>
                            )}
                            {item.location && (
                              <span className="text-xs text-[#333F48] opacity-70 italic">{item.location}</span>
                            )}
                          </div>
                          {item.keywords && item.keywords.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {item.keywords.map((keyword, idx) => (
                                <span key={idx} className="text-xs font-semibold text-[#407EC9] bg-[#407EC9]/10 px-2 py-0.5 rounded-full">
                                  #{keyword}
                                </span>
          ))}
        </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MembersPage = ({ navigate }) => {
  const team = membersData.team;
  const alumni = membersData.alumni || [];

  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-[#00205B]">Our Team</h2>
        {team.map((group, idx) => (
          <div key={idx} className="mb-20 last:mb-0">
            <h3 className="text-xs font-bold text-[#407EC9] uppercase tracking-[0.2em] mb-10 border-b border-[#A2AAAD]/20 pb-2">{group.role}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
              {group.people.map((p, i) => (
                <div key={i} className="group flex flex-col items-center text-center">
                  <div className="relative mb-6 overflow-hidden rounded-3xl w-32 h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 bg-[#A2AAAD]/10 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:ring-4 group-hover:ring-[#FFC72C]/20">
                    <img src={p.image} alt={p.name} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  {p.homepage ? (
                    <a href={p.homepage} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#00205B] mb-1 hover:text-[#407EC9] transition-colors">
                      {p.name}
                    </a>
                  ) : (
                  <h4 className="text-lg font-bold text-[#00205B] mb-1">{p.name}</h4>
                  )}
                  <p className="text-[#407EC9] font-semibold text-sm uppercase tracking-wider mb-2">{p.title}</p>
                  {p.interest && (
                    <p className="text-[#333F48] text-sm leading-relaxed max-w-[200px] opacity-80 mb-3 whitespace-pre-line">{p.interest}</p>
                  )}
                  {p.keywords && p.keywords.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {p.keywords.map((keyword, idx) => (
                        <button
                          key={idx}
                          onClick={() => navigate('publications', keyword)}
                          className="text-xs font-semibold text-[#407EC9] bg-[#407EC9]/10 px-2 py-0.5 rounded-full hover:bg-[#407EC9]/20 transition-colors cursor-pointer"
                        >
                          #{keyword}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-32 pt-16 border-t border-[#A2AAAD]/20">
          <h3 className="text-xs font-bold text-[#407EC9] uppercase tracking-[0.2em] mb-10 pb-2">Alumni</h3>
          <div className="space-y-1">
            {alumni.map((member, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-[#333F48] hover:bg-gray-50 p-2 rounded-xl transition-colors">
                {member.homepage ? (
                  <a href={member.homepage} target="_blank" rel="noopener noreferrer" className="font-bold text-[#00205B] hover:text-[#407EC9] transition-colors">
                    {member.name}
                  </a>
                ) : (
                <span className="font-bold text-[#00205B]">{member.name}</span>
                )}
                <span className="hidden sm:block text-[#A2AAAD]/40">|</span>
                <span className="opacity-80">{member.position} ({member.affiliation})</span>
                <span className="hidden sm:block text-[#A2AAAD]/40">|</span>
                <span className="text-[#A2AAAD] italic">{member.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CoursesPage = () => {
  const courses = coursesData;

  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#00205B]">Courses</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white border border-[#A2AAAD]/20 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#407EC9]/30 transition-all flex flex-col group">
              <div className="mb-6 flex items-start justify-between">
                <div className="p-3 bg-[#A2AAAD]/10 rounded-2xl text-[#407EC9] group-hover:bg-[#407EC9] group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                {course.provider && (
                  <span className="text-[10px] font-bold bg-[#FFC72C] text-[#00205B] px-3 py-1 rounded-full uppercase tracking-tight">
                    {course.provider}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-[#00205B] mb-4 leading-snug group-hover:text-[#407EC9] transition-colors">{course.title}</h3>
              <p className="text-[#333F48] text-sm leading-relaxed opacity-80 mb-6 flex-grow">{course.description}</p>
              <div className="pt-6 border-t border-[#A2AAAD]/10 flex items-center gap-2 text-[#407EC9] font-bold text-xs uppercase tracking-wider">
                <span>Course Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LabPhotosPage = () => {
  const photos = labPhotosData;

  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#00205B]">Lab Photos</h2>
        </div>
        {photos && photos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="relative rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] bg-[#A2AAAD]/10">
                <img 
                  src={photo.image} 
                  alt={photo.caption || `Lab photo ${photo.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center bg-[#A2AAAD]/10 text-[#A2AAAD]">
                  <div className="text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-xs font-semibold">{photo.caption || `Lab Photo ${photo.id}`}</p>
                  </div>
                </div>
                {(photo.caption || photo.date) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-semibold">{photo.caption}</p>
                    {photo.date && <p className="text-white/80 text-xs mt-1">{photo.date}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#333F48] opacity-70">No lab photos available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const AboutPage = () => {
  const coreSkills = [
    { name: "User research", icon: <Users className="w-4 h-4" /> },
    { name: "Desk research", icon: <Search className="w-4 h-4" /> },
    { name: "Qualitative analysis", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "Interaction design", icon: <Layout className="w-4 h-4" /> },
    { name: "Prototyping", icon: <Layers className="w-4 h-4" /> },
    { name: "AI prototyping literacy", icon: <Wand2 className="w-4 h-4" /> },
    { name: "Technical fluency with ML", icon: <Cpu className="w-4 h-4" /> },
    { name: "Usability & UX evaluation", icon: <CheckCircle2 className="w-4 h-4" /> },
    { name: "Quantitative analysis", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "Data visualization", icon: <Globe className="w-4 h-4" /> },
    { name: "Academic writing", icon: <FileText className="w-4 h-4" /> },
    { name: "Academic presentation", icon: <Presentation className="w-4 h-4" /> }
  ];

  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section 1: Research Goals and Lab Logistics */}
        <section className="mb-32">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl font-extrabold text-[#00205B] mb-8 flex items-center gap-4">
              <Target className="w-10 h-10 text-[#407EC9]" /> Research Goals and Lab Logistics
            </h2>
            <p className="text-xl text-[#333F48] leading-relaxed mb-10">
              Our lab is dedicated to cultivating independent researchers through supporting students in developing the critical thinking, methodological rigor, and communication skills necessary for high-impact research. Specifically, we aim to help students:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-xs font-bold text-[#407EC9] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <ClipboardList className="w-4 h-4" /> Lab Training & Research Competencies
              </h3>
              <div className="grid gap-4">
                {[
                  "Formulate research problems and questions",
                  "Understand state-of-the-art AI techniques",
                  "Design rigorous studies and prototypes",
                  "Conduct and interpret data analysis",
                  "Communicate research effectively"
                ].map((aim, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white border border-[#A2AAAD]/20 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-6 h-6 text-[#407EC9] shrink-0" />
                    <span className="text-[#333F48] font-semibold">{aim}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xs font-bold text-[#407EC9] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Lab Culture and Expectations
              </h3>
              
              <div className="space-y-8 p-10 bg-white border border-[#A2AAAD]/10 rounded-[2.5rem] shadow-sm">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-[#00205B] flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#407EC9]" /> Weekly Cadence
                  </h4>
                  <p className="text-sm text-[#333F48] leading-relaxed">
                    We hold weekly lab meetings that include lightning updates, informal paper discussions, and research progress presentations to foster continuous learning and collaborative thinking. Students also participate in weekly one-on-one meetings to receive in-depth research feedback.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-[#00205B] flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#407EC9]" /> Academic Ambition
                  </h4>
                  <p className="text-sm text-[#333F48] leading-relaxed">
                    All lab members are expected to actively engage in the full research cycle and aim to publish their work in top-tier conferences and journals in HCI, AI, or related fields.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-[#00205B] flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#FFC72C]" /> Values and Community
                  </h4>
                  <p className="text-sm text-[#333F48] leading-relaxed">
                    We cultivate a lab culture that encourages students to be responsible, hardworking, and warm-hearted, ensuring members support one another with a balance of intellectual rigor and genuine kindness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Name, Our Mission */}
        <section className="mb-32 bg-[#00205B] text-white p-10 lg:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('intro-bg-2023.jpg')] bg-cover bg-center pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-[#FFC72C]">Our Name, Our Mission</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-blue-50 leading-relaxed text-sm">
                <p>
                  Our lab name <span className="font-mono font-bold bg-white/10 px-2 rounded text-[#FFC72C]">[daɪˈæg]</span> draws inspiration from multiple domains. In linear algebra, diagonal elements often carry key structural properties of a matrix, just as our lab brings together key people to tackle critical research topics.
                </p>
                <p>
                  In numerical computing libraries like Python's NumPy or MATLAB, the <code className="font-mono bg-white/10 px-1 text-[#FFC72C]">diag</code> function is used to extract the principal diagonal elements of a matrix. This operation mirrors our research mission: identifying the most critical properties and essential components that drive successful human-AI collaborative design.
                </p>
                <p>
                  DIAG is also a nod to the University of Michigan's iconic open space—a hub for intellectual exchange and student gathering.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-56 h-56 border-4 border-[#FFC72C] rounded-3xl rotate-3 flex items-center justify-center relative group">
                  <div className="absolute inset-0 border-4 border-[#407EC9] rounded-3xl -rotate-6 transition-transform group-hover:rotate-0" />
                  <span className="text-6xl font-black text-[#FFC72C]">DIAG</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: For Prospective Interns and Graduate Students */}
        <section className="bg-white border-2 border-[#A2AAAD]/10 rounded-[3rem] p-10 lg:p-16 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl font-bold text-[#00205B] mb-12 flex items-center gap-4">
             <GraduationCap className="w-10 h-10 text-[#407EC9]" /> For Prospective Interns and Graduate Students
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="bg-[#00205B] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <h3 className="text-xl font-bold mb-6 text-[#FFC72C]">Who is the right fit?</h3>
              <p className="mb-8 text-blue-50/80 text-sm leading-relaxed font-medium">
                We look for students who want to become well-rounded researchers—comfortable both with a code editor and a user interview script.
              </p>
              <ul className="space-y-4">
                {[
                  "Curious about human behavior and societal impact of AI",
                  "Eager to build rapid prototypes using AI/ML techniques",
                  "Ready to conduct design workshops and qualitative studies",
                  "Able to bridge technical implementation and social science methods"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center">
                    <div className="bg-[#FFC72C] rounded-full p-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#00205B]" />
                    </div>
                    <span className="text-xs font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 pt-4">
              <p className="text-[#333F48] text-base leading-relaxed">
                Before joining our lab, we expect applicants to have demonstrated experience in at least <strong>three to four</strong> of the following core research skills for Human-AI Interaction research:
              </p>
              
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 list-disc list-inside text-[#333F48]">
                {coreSkills.map((skill, i) => (
                  <li key={i} className="text-sm font-medium">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="p-10 bg-blue-50 border border-blue-100 rounded-[2.5rem] relative overflow-hidden">
             <div className="relative z-10 space-y-6">
                <h4 className="font-extrabold text-[#00205B] text-xl">Building Your Foundation</h4>
                <p className="text-[#333F48] leading-relaxed">
                  If you're still building these skills, we recommend taking <strong>hands-on HCI or AI courses</strong>, or practicing independently through prototyping, coding, or user research.
                </p>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ContactPage = ({ onNavigate }) => (
  <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
    <div className="container mx-auto px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-[#00205B] text-center uppercase tracking-tight">Contact Us</h2>
        
        <div className="space-y-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-[#407EC9] uppercase tracking-[0.2em] mb-2 text-center">General Inquiry</h3>
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-white border border-[#A2AAAD]/20 rounded-3xl p-8 shadow-sm max-w-2xl mx-auto w-full">
                <div className="flex gap-5 items-center">
                  <div className="p-4 bg-[#A2AAAD]/10 rounded-2xl text-[#A2AAAD]"><Mail className="w-6 h-6" /></div>
                  <div>
                    <a href={`mailto:${labInfo.email}`} className="text-[#333F48] text-sm leading-relaxed font-medium opacity-80 hover:text-[#407EC9] transition-colors">{labInfo.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold text-[#407EC9] uppercase tracking-[0.2em] mb-2 text-center">Our Locations</h3>
            <div className="grid md:grid-cols-1 gap-8">
              {labInfo.locations.map((loc, i) => (
                <div key={i} className="bg-white border border-[#A2AAAD]/20 rounded-3xl p-8 shadow-sm max-w-2xl mx-auto w-full overflow-hidden">
                  <div className="flex gap-5 items-start mb-6">
                    <div className="p-4 bg-[#A2AAAD]/10 rounded-2xl text-[#A2AAAD]"><MapPin className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-[#00205B] mb-3">{loc.name}</h4>
                      <p className="text-[#333F48] text-sm leading-relaxed whitespace-pre-line font-medium opacity-80">{loc.address}</p>
                    </div>
                  </div>
                  <div className="w-full h-64 rounded-2xl overflow-hidden border border-[#A2AAAD]/10">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Location Map"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-[#A2AAAD]/20">
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-[#407EC9] uppercase tracking-[0.2em] mb-2 text-center">For Prospective Interns and Graduate Students</h3>
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-white border border-[#A2AAAD]/20 rounded-3xl p-8 shadow-sm max-w-2xl mx-auto w-full">
                <div className="flex gap-5 items-start mb-6">
                  <div className="flex-1">
                    <h4 className="font-bold text-[#00205B] mb-4">Who is the right fit?</h4>
                    <p className="text-[#333F48] text-sm leading-relaxed font-medium opacity-80 mb-6">
                      We look for students who want to become well-rounded researchers—comfortable both with a code editor and a user interview script.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[
                        "Curious about human behavior and societal impact of AI",
                        "Eager to build rapid prototypes using AI/ML techniques",
                        "Ready to conduct design workshops and qualitative studies",
                        "Able to bridge technical implementation and social science methods"
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 items-center text-[#333F48] text-sm">
                          <div className="bg-[#FFC72C] rounded-full p-0.5 shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-[#00205B]" />
                          </div>
                          <span className="font-medium opacity-80">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div>
                      <p className="text-[#333F48] text-sm leading-relaxed font-medium opacity-80 mb-4">
                        Before joining our lab, we expect applicants to have demonstrated experience in at least <strong>three to four</strong> of the following core research skills for Human-AI Interaction research:
                      </p>
                      {(() => {
                        const coreSkills = [
                          "User research",
                          "Desk research",
                          "Qualitative analysis",
                          "Interaction design",
                          "Prototyping",
                          "AI prototyping literacy",
                          "Usability & UX evaluation",
                          "Quantitative analysis",
                          "Data visualization",
                          "Academic writing",
                          "Academic presentation",
                          "Technical fluency with ML"
                        ];
                        
                        return (
                          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 list-disc list-inside text-[#333F48]">
                            {coreSkills.map((skill, i) => (
                              <li key={i} className="text-sm font-medium opacity-80">
                                {skill}
                              </li>
                            ))}
                          </ul>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-[#A2AAAD]/20 text-center">
          <h3 className="text-lg lg:text-xl font-bold text-[#00205B] mb-6 flex items-center justify-center gap-3">
            <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-[#407EC9]" /> Book a time to meet with us
          </h3>
          <button
            onClick={() => onNavigate('schedule')}
            className="bg-[#407EC9] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#00205B] transition-all shadow-lg shadow-[#407EC9]/20 flex items-center gap-2 text-base mx-auto"
          >
            <Calendar className="w-5 h-5" />
            Schedule a Meeting
            <ArrowRight className="w-4 h-4" />
          </button>
          </div>
      </div>
    </div>
  </div>
);

const SchedulingPage = () => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#00205B] flex items-center gap-3">
              <Calendar className="w-8 h-8 text-[#407EC9]" /> Schedule a Meeting
            </h2>
            <p className="text-base lg:text-lg text-[#333F48] opacity-70">To finalize the schedule, please send the PI an email including the specific details of your request.</p>
          </div>
          <div className="bg-white border-2 border-[#A2AAAD]/10 rounded-3xl overflow-hidden shadow-2xl min-h-[600px] relative group">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2AKVitUu7lYIdWrmPktOtXJb-nuU_tgsQ6DyDU9QkNuMAGGQHV4d21BUFbl7tRmCftFS_0UAt3?gv=true" 
              style={{ border: 0 }} 
              width="100%" 
              height="700" 
              frameBorder="0" 
              className="w-full" 
              title="DIAG Appointment Scheduling"
            />
        </div>
      </div>
    </div>
  </div>
);
};

const App = () => {
  // Initialize currentPage from URL hash or default to 'home'
  const getPageFromHash = () => {
    const hash = window.location.hash.slice(1) || 'home';
    // Check if hash contains a keyword parameter (e.g., "publications?keyword=Crowdsourcing")
    if (hash.includes('?')) {
      return hash.split('?')[0];
    }
    return hash;
  };

  // Get keyword from URL hash
  const getKeywordFromHash = () => {
    const hash = window.location.hash.slice(1);
    if (hash.includes('?keyword=')) {
      return decodeURIComponent(hash.split('?keyword=')[1]);
    }
    return null;
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash());
  const [keywordFilter, setKeywordFilter] = useState(getKeywordFromHash());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromHash();
      const keyword = getKeywordFromHash();
      setCurrentPage(page);
      setKeywordFilter(keyword);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);


  const navigate = (pageId, keyword = null) => {
    setCurrentPage(pageId);
    setKeywordFilter(keyword);
    // Update URL hash without triggering page reload
    const hash = keyword ? `${pageId}?keyword=${encodeURIComponent(keyword)}` : pageId;
    window.history.pushState({ page: pageId, keyword }, '', `#${hash}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'News', id: 'news' },
    { name: 'Members', id: 'members' },
    { name: 'Research', id: 'research' },
    { name: 'Publications', id: 'publications' },
    { name: 'Courses', id: 'courses' },
    { name: 'Lab Photos', id: 'lab-photos' },
    { name: 'Contact', id: 'contact' }
  ];

  const renderContent = () => {
    if (currentPage.startsWith('project-')) {
      return <ProjectDetailPage projectId={currentPage} onNavigate={navigate} />;
    }
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'news': return <NewsPage />;
      case 'research': return <ResearchPage onNavigate={navigate} navigate={navigate} />;
      case 'publications': return <PublicationsPage keywordFilter={keywordFilter} navigate={navigate} />;
      case 'members': return <MembersPage navigate={navigate} />;
      case 'courses': return <CoursesPage />;
      case 'lab-photos': return <LabPhotosPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage onNavigate={navigate} />;
      case 'schedule': return <SchedulingPage />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#333F48] selection:bg-[#FFC72C]/30 relative">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('home')}>
            <div className="h-10 flex items-center gap-2">
              <img src="logo.png" alt="Logo" className="h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              <img src={scrolled || currentPage !== 'home' ? "logo-dark.png" : "logo-light.png"} alt="DIAG Logo" className="h-full object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <span className="font-bold text-xl text-[#00205B]">DIAG</span>
            </div>
          </div>
          <div className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => navigate(item.id)} className={`text-sm font-bold transition-all hover:text-[#407EC9] relative py-1 ${currentPage === item.id || (currentPage.startsWith('project-') && item.id === 'research') ? 'text-[#407EC9] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#407EC9]' : (scrolled || currentPage !== 'home' ? 'text-[#333F48]' : 'text-[#333F48]/80')}`}>
                {item.name}
              </button>
            ))}
          </div>
          <button className={`md:hidden relative z-[60] ${scrolled || currentPage !== 'home' ? 'text-[#333F48]' : 'text-[#333F48]'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-[100] bg-white" style={{ position: 'fixed' }}>
          <div className="p-6 flex flex-col gap-8 pt-24 h-full w-full overflow-y-auto">
            <button className="absolute top-6 right-6 text-[#333F48] z-10 bg-white p-2 rounded-full hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8" /></button>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => navigate(item.id)} className={`text-left text-3xl font-extrabold ${currentPage === item.id ? 'text-[#407EC9]' : 'text-[#00205B]'}`}>{item.name}</button>
            ))}
          </div>
        </div>
      )}

      <main className="min-h-[80vh] relative z-10">{renderContent()}</main>

      <footer 
        className="py-20 relative text-white bg-[#00205B] overflow-hidden z-10" 
        style={{ backgroundImage: "linear-gradient(rgba(0, 32, 91, 0.9), rgba(0, 32, 91, 0.95)), url('intro-bg-2023.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <div className="flex flex-wrap items-center gap-2 text-sm text-[#A2AAAD]">
                © 2026 Designing Intelligence Augmentation Group. All rights reserved.
              </div>
            </div>
            <div className="flex gap-12 text-sm">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-[#407EC9] uppercase tracking-widest">Sitemap</span>
                {navItems.map(item => (<button key={item.id} onClick={() => navigate(item.id)} className="text-[#A2AAAD] hover:text-white text-left transition-colors">{item.name}</button>))}
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-[#407EC9] uppercase tracking-widest">Connect</span>
                <a href="#" className="text-[#A2AAAD] hover:text-white transition-colors">GitHub</a>
                <a href="#" className="text-[#A2AAAD] hover:text-white transition-colors">Twitter (X)</a>
                <a href="#" className="text-[#A2AAAD] hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;