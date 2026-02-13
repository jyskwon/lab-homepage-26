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

// --- Shared Lab Data ---
const labInfo = {
  name: "Designing Intelligence Augmentation Group (DIAG)",
  university: "Yonsei University, HASS / IID",
  description: (
    <>
      In the Designing Intelligence Augmentation Group (DIAG [daɪˈæg]), we research how to <strong>empower people through design and technology</strong>. Rooted in the vision of Intelligence Augmentation (IA), we study and build innovative AI-infused tools that enhance human cognitive abilities—such as reasoning, creativity, and decision-making—rather than replacing them. We explore how state-of-the-art techniques can be aligned with human intent to foster meaningful individual and social progress.
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

const newsData = [
  { id: 1, date: "2024.12", title: "Active Research in Incheon", text: "DIAG Lab is researching new methods for augmenting human creativity through generative AI at our Incheon Campus.", category: "Research" },
  { id: 2, date: "2024.11", title: "Conference Presentations", text: "DIAG members presented their latest findings on AI-infused design at major HCI conferences.", category: "Achievement" },
  { id: 3, date: "2024.09", title: "New Collaborative Projects", text: "Exciting new collaborative projects on Human-AI Interaction have officially kicked off this fall.", category: "Project" },
  { id: 4, date: "2024.06", title: "Summer Internships", text: "We welcome our new cohort of summer research interns joining us from diverse engineering and design backgrounds.", category: "Members" },
  { id: 5, date: "2024.03", title: "Lab Opening", text: "DIAG officially begins its journey at Yonsei HASS IID to explore the future of Intelligence Augmentation.", category: "Event" }
];

const researchAreas = [
  { 
    id: "project-0",
    title: "AI-Augmented Education & Learning", 
    description: "Designing collaborative tools that help students and educators leverage AI to enhance critical thinking and creativity.", 
    icon: <GraduationCap className="w-8 h-8 text-[#407EC9]" />,
    detailedDescription: "This area explores how intelligent systems can act as scaffolds for the learning process. We focus on building prototypes that foster inquiry and deep understanding rather than mere automation of academic tasks."
  },
  { 
    id: "project-1",
    title: "Human-Centered Content Moderation", 
    description: "Investigating how design and AI can support the management of digital spaces to ensure safer social interaction.", 
    icon: <ShieldAlert className="w-8 h-8 text-[#407EC9]" />,
    detailedDescription: "We build and evaluate tools that assist human moderators in social media contexts. Our research focuses on cognitive support, policy transparency, and the ethical alignment of automated filtering systems."
  },
  { 
    id: "project-2",
    title: "Crowdsourcing for Machine Learning", 
    description: "Exploring the synergy between collective human intelligence and the development of robust machine learning models.", 
    icon: <Network className="w-8 h-8 text-[#407EC9]" />,
    detailedDescription: "This research focuses on the design of interactive systems for data labeling and human-in-the-loop training. We look at how to maintain high data quality while creating meaningful and empowering experiences for crowd workers."
  },
  { 
    id: "project-3",
    title: "Lifestyle Empowerment in Healthcare", 
    description: "Empowering individuals to manage their wellbeing through intelligent systems that promote health-conscious behaviors.", 
    icon: <HeartPulse className="w-8 h-8 text-[#407EC9]" />,
    detailedDescription: "We design and prototype tools that align health data with human intent. By focusing on personal agency, we explore how AI-infused healthcare systems can support long-term lifestyle changes and self-care."
  }
];

// --- Sub-components for Sections ---

const NewsItemWidget = ({ date, text }) => (
  <div className="flex gap-4 items-start pb-4 border-b border-[#A2AAAD]/20 last:border-0">
    <div className="bg-[#FFC72C] text-[#00205B] px-3 py-1 rounded text-xs font-bold whitespace-nowrap">
      {date}
    </div>
    <p className="text-[#333F48] text-sm leading-tight">{text}</p>
  </div>
);

const HomePage = ({ onNavigate }) => (
  <div className="animate-in fade-in duration-500 relative z-10">
    {/* Hero Section */}
    <header className="pt-24 pb-12 lg:pt-40 lg:pb-16 bg-gradient-to-br from-[#A2AAAD]/10 via-white to-white overflow-hidden border-b border-[#A2AAAD]/10">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#00205B] text-white text-xs font-bold tracking-wider uppercase mb-6">
            Human-AI Interaction Research @ Yonsei
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#00205B] tracking-tight mb-8 leading-[1.15]">
            Empowering Human Potential through <span className="text-[#407EC9]">Design</span> and <span className="text-[#407EC9]">Technology</span>.
          </h1>
          <div className="text-lg lg:text-xl text-[#333F48] mb-10 leading-relaxed max-w-3xl">
            {labInfo.description}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button onClick={() => onNavigate('research')} className="bg-[#407EC9] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#00205B] transition-all shadow-lg shadow-[#407EC9]/20 flex items-center gap-2">
              Explore Our Research <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('contact')} className="bg-white text-[#333F48] border border-[#A2AAAD]/30 px-8 py-4 rounded-xl font-bold hover:bg-[#A2AAAD]/10 transition-all">
              Join the Lab
            </button>
          </div>
        </div>
        
        {/* News Widget */}
        <div className="mt-20 lg:absolute lg:top-0 lg:right-6 lg:mt-40 lg:max-w-sm w-full">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-[#A2AAAD]/20">
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
    </header>

    {/* Group Photo Banner Section */}
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl bg-[#A2AAAD]/10 h-[300px] md:h-[450px] lg:h-[550px]">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
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
          <div className="absolute bottom-8 left-8 bg-black/30 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Designing Intelligence Augmentation Group</span>
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

    {/* Research Philosophy Section - Centered Column */}
    <section className="py-24 bg-white border-t border-[#A2AAAD]/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
          <h2 className="text-sm font-black text-[#407EC9] uppercase tracking-[0.3em]">Our Approach</h2>
          <p className="text-3xl lg:text-5xl font-bold text-[#00205B] leading-tight">
            Building to <span className="italic font-normal">Understand</span>,<br /> 
            Designing to <span className="italic font-normal">Empower</span>.
          </p>
          <p className="text-xl text-[#333F48] opacity-70 pt-4 max-w-2xl mx-auto">
            We use <strong>rapid prototyping</strong> as a primary vehicle for HCI inquiry, uncovering the needs and nuances of AI-infused human experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#00205B] flex items-center gap-3">
              <FlaskConical className="w-6 h-6 text-[#407EC9]" /> Rapid Prototyping as Research
            </h3>
            <p className="text-[#333F48] leading-relaxed">
              Our lab isn't about building "robust, production-ready software." Instead, we focus on <strong>building to learn</strong>. We develop high-fidelity functional prototypes that act as "probes" into the future. By putting these tools in people's hands, we observe how AI-infused systems can best support human needs and creativity. This iterative cycle of building and evaluating allows us to stay at the cutting edge of HCI research.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#00205B] flex items-center gap-3">
              <Search className="w-6 h-6 text-[#FFC72C]" /> Deep Qualitative Insight
            </h3>
            <p className="text-[#333F48] leading-relaxed">
              We believe that code alone cannot answer research questions. We value <strong>interview studies and participatory design</strong> as critical components of our workflow. These qualitative methods provide the "Why" behind the "How," ensuring our systems are grounded in real human contexts and address genuine social or professional challenges.
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
          We collaborate across boundaries, working with AI and CS departments to infuse to computational rigor with deep interaction design and social inquiry..
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

const NewsPage = () => (
  <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-[#00205B]">Lab News</h2>
          <p className="text-xl text-[#333F48] opacity-70">Updates, achievements, and major milestones from DIAG.</p>
        </div>

        <div className="space-y-8">
          {newsData.map((item) => (
            <div key={item.id} className="bg-white border border-[#A2AAAD]/20 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold bg-[#FFC72C] text-[#00205B] px-3 py-1 rounded-full uppercase tracking-tighter">
                      {item.category}
                    </span>
                    <span className="text-sm font-bold text-[#A2AAAD] font-mono">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#00205B] group-hover:text-[#407EC9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#333F48] leading-relaxed opacity-80">
                    {item.text}
                  </p>
                </div>
                <div className="md:w-24 flex md:justify-end">
                   <div className="p-4 bg-[#A2AAAD]/10 rounded-2xl text-[#407EC9] opacity-40 group-hover:opacity-100 group-hover:bg-[#407EC9] group-hover:text-white transition-all">
                      <Bell className="w-6 h-6" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ResearchPage = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[#00205B]">Research Areas</h2>
          <p className="text-xl text-[#333F48] leading-relaxed font-medium">
            We bridge the gap between computer science and social science to create next-generation intelligent systems that empower human potential.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-[#A2AAAD]/20 bg-white hover:shadow-2xl transition-all group hover:border-[#407EC9]/50">
              <div className="mb-6 p-4 bg-[#A2AAAD]/10 rounded-2xl inline-block group-hover:bg-[#407EC9] group-hover:text-white transition-colors">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#00205B]">{area.title}</h3>
              <p className="text-[#333F48] text-sm leading-relaxed mb-6 h-16 overflow-hidden">{area.description}</p>
              <button 
                onClick={() => onNavigate(area.id)}
                className="text-[#407EC9] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn more <ChevronRight className="w-4 h-4" />
              </button>
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

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <div className="inline-block p-4 bg-[#A2AAAD]/10 rounded-2xl text-[#407EC9] mb-4">
                {project.icon}
              </div>
              <h1 className="text-5xl font-extrabold text-[#00205B] leading-tight uppercase tracking-tight">
                {project.title}
              </h1>
              <p className="text-2xl text-[#333F48] font-medium opacity-80 leading-relaxed border-l-4 border-[#FFC72C] pl-6">
                {project.detailedDescription}
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-[#00205B] flex items-center gap-2">
                <Search className="w-6 h-6 text-[#407EC9]" /> Research Overview
              </h2>
              <div className="bg-[#A2AAAD]/5 rounded-[2rem] p-10 border border-[#A2AAAD]/10">
                <p className="text-[#333F48] leading-loose">
                  [This section is currently being updated with latest research findings and project details. 
                  Our lab is actively working on building novel systems and conducting user studies in this domain.]
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-[#00205B] flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#FFC72C]" /> Key Objectives
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
                <h3 className="font-bold text-[#00205B] flex items-center gap-2">
                  <Code className="w-5 h-5 text-[#407EC9]" /> Core Tools
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

          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-[#00205B] rounded-[2rem] p-8 shadow-xl sticky top-40">
              <h3 className="text-[#00205B] font-bold mb-6 flex items-center gap-2 border-b border-[#A2AAAD]/20 pb-4 uppercase text-sm tracking-widest">
                <Users className="w-5 h-5" /> Related Members
              </h3>
              <div className="space-y-6 mb-8">
                <p className="text-sm text-[#333F48]/60 italic text-center">No members listed for this project yet.</p>
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full bg-[#00205B] text-white font-bold py-4 rounded-xl hover:bg-[#407EC9] transition-all text-sm uppercase tracking-wider"
              >
                Inquire about this area
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PublicationsPage = () => {
  const pubs = [
    {
      year: 2024,
      items: [
        { title: "Augmenting Human Creativity through Generative AI Feedback Loops", authors: "Lee, S., & Kim, J.", venue: "CHI 2024", link: "#" },
        { title: "Towards Transparent Collaboration in Multi-Agent Systems", authors: "Park, H., et al.", venue: "CSCW 2024", link: "#" }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-[#00205B]">Publications</h2>
            <p className="text-xl text-[#333F48]">Selected work from top-tier venues in HCI and AI.</p>
          </div>
          <a href="#" className="flex items-center gap-2 text-[#407EC9] font-bold hover:underline">
            Google Scholar <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-12">
          {pubs.map((yearGroup) => (
            <div key={yearGroup.year}>
              <h3 className="text-2xl font-bold text-[#A2AAAD] mb-6 border-b border-[#A2AAAD]/20 pb-2">{yearGroup.year}</h3>
              <div className="space-y-4">
                {yearGroup.items.map((pub, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-[#A2AAAD]/10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#333F48] mb-2 leading-tight">{pub.title}</h4>
                      <p className="text-[#333F48]/70 text-sm italic mb-1">{pub.authors}</p>
                      <p className="text-[#407EC9] font-bold text-sm uppercase tracking-wider">{pub.venue}</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-5 py-2.5 bg-[#407EC9] text-white text-xs font-bold rounded-xl hover:bg-[#00205B] transition-colors">Paper PDF</button>
                      <button className="px-5 py-2.5 bg-[#A2AAAD]/10 text-[#333F48] text-xs font-bold rounded-xl hover:bg-[#A2AAAD]/30 transition-colors">BibTeX</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MembersPage = () => {
  const team = [
    {
      role: "Principal Investigator",
      people: [{ name: "Prof. PI", title: "Assistant Professor", bio: "Leading research in HCI and Human-AI interaction.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" }]
    },
    {
      role: "Research Members",
      people: [
        { name: "Researcher A", title: "PhD Student", bio: "Focusing on Intelligence Augmentation.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
        { name: "Researcher B", title: "Masters Student", bio: "Focusing on Social AI.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
        { name: "Researcher C", title: "PhD Student", bio: "HCI and Human-Centric Systems.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
        { name: "Researcher D", title: "Researcher", bio: "Interface design & AI interaction.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" }
      ]
    }
  ];

  const alumni = [
    { name: "Jim Carry", position: "Undergrad Intern", affiliation: "DGIST", duration: "Spring 2024 - Summer 2024" },
    { name: "Jim Carry", position: "Undergrad Intern", affiliation: "DGIST", duration: "Spring 2024 - Summer 2024" }
  ];

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
                  <h4 className="text-lg font-bold text-[#00205B] mb-1">{p.name}</h4>
                  <p className="text-[#407EC9] font-semibold text-[10px] uppercase tracking-wider mb-3">{p.title}</p>
                  <p className="text-[#333F48] text-[11px] leading-relaxed max-w-[180px] opacity-80">{p.bio}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-32 pt-16 border-t border-[#A2AAAD]/20">
          <h3 className="text-xs font-bold text-[#407EC9] uppercase tracking-[0.2em] mb-10 pb-2">Alumni</h3>
          <div className="space-y-4">
            {alumni.map((member, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-[#333F48] hover:bg-gray-50 p-3 rounded-xl transition-colors">
                <span className="font-bold text-[#00205B]">{member.name}</span>
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
  const courses = [
    { title: "Human-AI Interaction", provider: "@Yonsei UIC", description: "Examines how humans interact with intelligent systems, with emphasis on explainability, ethics, collaboration, and the design of human-centered AI experiences." },
    { title: "Introduction to Social Computing", provider: "@Yonsei UIC", description: "Explores how digital technologies mediate social behavior, focusing on social media, online collaboration, and computational analysis of social interaction." },
    { title: "Interaction Design", provider: "@Yonsei UIC", description: "Teaches the principles and processes of designing interactive systems, focusing on usability, prototyping, and human-centered design thinking." },
    { title: "Techno Art Capstone Project", provider: "@Yonsei UIC", description: "A project-based course where students integrate technology and art to create innovative, expressive, and interactive final works through iterative design and critique." },
    { title: "Introduction to Programming", description: "Provides foundational programming skills using Python, covering data types, control structures, functions, file handling, and basic problem-solving." },
    { title: "Human-Computer Interaction and User Study", description: "Introduces principles of user-centered design and empirical methods for studying user behavior to inform interactive system design." },
    { title: "Artificial Intelligence Basics", description: "Covers fundamental AI concepts such as search, logic, learning, and perception, with hands-on exercises." }
  ];

  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#00205B]">Courses</h2>
          <p className="text-xl text-[#333F48] font-medium opacity-70">What We Teach</p>
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
              <div className="pt-6 border-t border-[#A2AAAD]/10 flex items-center justify-between text-[#407EC9] font-bold text-xs uppercase tracking-wider">
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

const AboutPage = () => {
  const coreSkills = [
    { name: "User research", icon: <Users className="w-4 h-4" /> },
    { name: "Desk research", icon: <Search className="w-4 h-4" /> },
    { name: "Qualitative analysis", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "Interaction design", icon: <Layout className="w-4 h-4" /> },
    { name: "Prototyping", icon: <Layers className="w-4 h-4" /> },
    { name: "AI prototyping literacy", icon: <Wand2 className="w-4 h-4" /> },
    { name: "Technical fluency with AI/ML systems", icon: <Cpu className="w-4 h-4" /> },
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
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <UserCheck className="w-64 h-64 text-[#A2AAAD]" />
          </div>
          
          <h2 className="text-3xl font-bold text-[#00205B] mb-12 flex items-center gap-4">
             <GraduationCap className="w-10 h-10 text-[#407EC9]" /> For Prospective Interns and Graduate Students
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="bg-[#00205B] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 opacity-10 p-10"><Box className="w-48 h-48" /></div>
              <h3 className="text-2xl font-bold mb-6 text-[#FFC72C]">Who is the right fit?</h3>
              <p className="mb-8 text-blue-50/80 leading-relaxed font-medium">
                We look for students who want to become well-rounded researchers—comfortable both with a code editor and a user interview script.
              </p>
              <ul className="space-y-4">
                {[
                  "Curious about human behavior and societal impact of AI",
                  "Eager to build rapid prototypes using AI/ML techniques",
                  "Ready to conduct design workshops and qualitative studies",
                  "Able to bridge technical implementation and social science methods"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="mt-1 bg-[#FFC72C] rounded-full p-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#00205B]" />
                    </div>
                    <span className="text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-xs italic text-blue-100/70 leading-relaxed">
                  "Our mission is to design the next generation of intelligence augmentation tools through a cycle of creative building and rigorous human-centered inquiry."
                </p>
              </div>
            </div>

            <div className="space-y-8 pt-4">
              <p className="text-[#333F48] text-lg leading-relaxed">
                Before joining our lab, we expect applicants to have demonstrated experience in at least <strong>three to four</strong> of the following core research skills for Human-AI Interaction research:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreSkills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white border border-[#A2AAAD]/10 rounded-xl hover:bg-[#FFC72C]/5 transition-colors group">
                    <div className="p-2 bg-[#A2AAAD]/10 rounded-lg text-[#407EC9] group-hover:bg-[#407EC9] group-hover:text-white transition-all shadow-sm">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-bold text-[#333F48]">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-10 bg-blue-50 border border-blue-100 rounded-[2.5rem] relative overflow-hidden">
             <div className="relative z-10 space-y-6">
                <h4 className="font-extrabold text-[#00205B] text-xl">Building Your Foundation</h4>
                <p className="text-[#333F48] leading-relaxed max-w-2xl">
                  If you're still building these skills, we recommend taking <strong>hands-on HCI or AI courses</strong>, or practicing independently through prototyping, coding, or user research.
                </p>
                <div className="flex items-center gap-3 text-[#407EC9] font-black text-xl tracking-tight">
                  <Lightbulb className="w-7 h-7 text-[#FFC72C]" />
                  We value your initiative, curiosity, and willingness to learn.
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ContactPage = () => (
  <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-[#00205B] text-center uppercase tracking-tight">Contact Us</h2>
        <p className="text-xl text-[#333F48] mb-16 leading-relaxed text-center font-medium">Interested in collaboration? We'd love to hear from you.</p>
        
        <div className="space-y-12 mb-20">
          <div className="bg-white border border-[#A2AAAD]/20 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow max-w-2xl mx-auto w-full">
            <div className="flex gap-5 items-start">
              <div className="p-4 bg-[#A2AAAD]/10 rounded-2xl text-[#407EC9]"><Mail className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-[#00205B] mb-2 uppercase text-xs tracking-wider">General Inquiry</h4>
                <a href={`mailto:${labInfo.email}`} className="text-lg text-[#333F48] hover:text-[#407EC9] transition-colors font-semibold whitespace-nowrap">{labInfo.email}</a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold text-[#407EC9] uppercase tracking-[0.2em] mb-2 border-b border-[#A2AAAD]/20 pb-2 text-center">Our Locations</h3>
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
          <h3 className="text-2xl font-bold text-[#00205B] mb-4 flex items-center justify-center gap-3"><Calendar className="w-7 h-7 text-[#407EC9]" /> Schedule a Meeting</h3>
          <div className="bg-white border-2 border-[#A2AAAD]/10 rounded-3xl overflow-hidden shadow-2xl min-h-[600px] relative group">
            <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2AKVitUu7lYIdWrmPktOtXJb-nuU_tgsQ6DyDU9QkNuMAGGQHV4d21BUFbl7tRmCftFS_0UAt3?gv=true" style={{ border: 0 }} width="100%" height="700" frameBorder="0" className="w-full" title="DIAG Appointment Scheduling"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (pageId) => {
    setCurrentPage(pageId);
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
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  const renderContent = () => {
    if (currentPage.startsWith('project-')) {
      return <ProjectDetailPage projectId={currentPage} onNavigate={navigate} />;
    }
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'news': return <NewsPage />;
      case 'research': return <ResearchPage onNavigate={navigate} />;
      case 'publications': return <PublicationsPage />;
      case 'members': return <MembersPage />;
      case 'courses': return <CoursesPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#333F48] selection:bg-[#FFC72C]/30 relative">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('home')}>
            <div className="h-10 flex items-center">
              <img src={scrolled || currentPage !== 'home' ? "logo-dark.png" : "logo-light.png"} alt="DIAG Logo" className="h-full object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <span className="hidden font-bold text-xl text-[#00205B]">DIAG</span>
            </div>
          </div>
          <div className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => navigate(item.id)} className={`text-sm font-bold transition-all hover:text-[#407EC9] relative py-1 ${currentPage === item.id || (currentPage.startsWith('project-') && item.id === 'research') ? 'text-[#407EC9] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#407EC9]' : (scrolled || currentPage !== 'home' ? 'text-[#333F48]' : 'text-[#333F48]/80')}`}>
                {item.name}
              </button>
            ))}
          </div>
          <button className={`md:hidden ${scrolled || currentPage !== 'home' ? 'text-[#333F48]' : 'text-[#333F48]'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white fixed inset-0 z-50 p-6 flex flex-col gap-8 pt-24 animate-in fade-in duration-300">
            <button className="absolute top-6 right-6 text-[#333F48]" onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8" /></button>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => navigate(item.id)} className={`text-left text-3xl font-extrabold ${currentPage === item.id ? 'text-[#407EC9]' : 'text-[#00205B]'}`}>{item.name}</button>
            ))}
          </div>
        )}
      </nav>

      <main className="min-h-[80vh] relative z-10">{renderContent()}</main>

      <footer 
        className="py-20 relative text-white bg-[#00205B] overflow-hidden z-10" 
        style={{ backgroundImage: "linear-gradient(rgba(0, 32, 91, 0.9), rgba(0, 32, 91, 0.95)), url('intro-bg-2023.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-black text-[#FFC72C] mb-2">DIAG</h4>
              <p className="text-sm text-[#A2AAAD] italic max-w-sm">Designing Intelligence Augmentation Group — Empowering people through design and technology to augment human intellect.</p>
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
          <div className="mt-20 pt-8 border-t border-[#A2AAAD]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A2AAAD]">
            <p>© 2024 Designing Intelligence Augmentation Group. All rights reserved.</p>
            <div className="flex gap-6"><a href="#" className="hover:text-white">Privacy Policy</a><a href="#" className="hover:text-white">Terms of Service</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;