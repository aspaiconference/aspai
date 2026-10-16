// Site Search for ASPAI 2026
(function() {
  // Search index - pages and their content keywords
  const searchIndex = [
    {
      url: 'index.html',
      title: 'Home',
      keywords: 'ASPAI 2026 Asia-Pacific Symposium Process Artificial Intelligence Pohang Korea August conference summer school welcome APPI Network',
      content: 'Welcome to South Korea! ASPAI 2026: Industry Day August 24 in Seoul; Conference August 25-26 and Process Mining Summer School August 27-28 at POSTECH, Pohang.'
    },
    {
      url: 'general-info.html',
      title: 'General Information',
      keywords: 'key dates paper submission notification camera-ready registration deadline accommodation hotels venue POSTECH POSCO International Center committee chairs',
      content: 'Key Dates: Paper Submission March 30, Notification April 30, Camera-Ready May 14, Registration Deadline May 31, Symposium August 24-28. Accommodation options include POSCO International Center, Hotels in Youngildae, Noblion Hotel, Lahan Hotel.'
    },
    {
      url: 'general-info.html#key-dates',
      title: 'Key Dates',
      keywords: 'dates deadline submission notification camera-ready registration',
      content: 'Paper Submission: March 30, 2026. Notification: April 30, 2026. Camera-Ready: May 14, 2026. Registration Deadline: May 31, 2026. Symposium: August 24-28, 2026.'
    },
    {
      url: 'general-info.html#accommodation',
      title: 'Accommodation',
      keywords: 'hotel accommodation stay lodging Yeongildae Noblion',
      content: 'Hotel Yeongildae 20-30 min from venue, Noblion Hotel 20-30 min from venue.'
    },
    {
      url: 'general-info.html#venue',
      title: 'Venue',
      keywords: 'venue location POSTECH POSCO International Center Changeup Ground Pohang address map',
      content: 'POSTECH POSCO International Center, 77 Cheongam-ro, Nam-gu, Pohang, South Korea (conference paper sessions and summer school). Changeup Ground, 87 Cheongam-ro, Pohang (Pohang Industry Day and the August 25 registration, lunch, opening and keynote).'
    },
    {
      url: 'general-info.html#shuttle-bus',
      title: 'Shuttle Bus',
      keywords: 'shuttle bus transport timetable schedule boarding point Pohang Station Caffe Bene Lahan Hotel Noblion Hotel Yeongildae POSTECH pick-up',
      content: 'Complimentary shuttle buses on August 25-26 between the official hotels, Pohang Station and POSTECH. Bus 1 serves Lahan Hotel Pohang and Pohang Station; Bus 2 serves Noblion Hotel and Hotel Yeongildae. At Pohang Station, gather in front of Caffe Bene where staff will be waiting with an ASPAI 2026 placard; at the hotels, board in the lobby.'
    },
    {
      url: 'general-info.html#committee',
      title: 'Organizing Committee',
      keywords: 'committee chairs organizers program Mahendrawathi Jongchan Kim members',
      content: 'Program Chairs: Mahendrawathi ER (Institut Teknologi Sepuluh Nopember), Jongchan Kim (Yonsei University). Program Committee members from QUT, POSTECH, UNIST, and more.'
    },
    {
      url: 'conference.html',
      title: 'Conference Program',
      keywords: 'conference program schedule keynote speakers sessions presentations Predictive Analytics Anomaly Detection Process Intelligence Practical Application Case Studies APPI-NET Pohang August 25 26 Changeup Ground POSCO International Center venue',
      content: 'ASPAI 2026 detailed schedule (Pohang, August 25-26). Aug 25 at Changeup Ground (Event Hall): Registration, Lunch, Opening, Keynote by Wil van der Aalst (Using Object-Centric Process Mining to Unravel Complexity and Enable Enterprise-Level AI/ML). Aug 25 at POSCO International Center: Predictive Analytics session, Anomaly Detection session, APPI-NET Meeting, Dinner. Aug 26: Case Studies I, Practical Application session, Process Intelligence session, Closing, Tour and Dinner in Gyeongju.'
    },
    {
      url: 'industry-day.html#program-seoul',
      title: 'Industry Day Program',
      keywords: 'industry day program schedule Seoul Pohang Celonis SAP BTM Business Transformation Management Puzzle Data Samsung LG Wil van der Aalst Yonghan Lee Gia-Thi Nguyen Tony Park RaeSung Park Julian Lebherz Youngil Kim Jinyeon Lee Bongsu Cho automated chaos intelligent processes enterprise AI semiconductor fab autonomous enterprise context process atoms company memory vision AI Changeup Ground Event Hall August 24 August 25',
      content: 'Process Mining Industry Day, held in Seoul and Pohang. Seoul (Monday, August 24): Celonis From Automated Chaos to Intelligent Processes: Making Enterprise AI Pay Off (Wil van der Aalst, Yonghan Lee); SAP BTM The Autonomous Enterprise runs on Context: Process Atoms and Company Memory (Gia-Thi Nguyen, Tony (RaeSung) Park); Puzzle Data Process Excellence in the AI Era and Use Cases of a Process Intelligence Platform (Youngil Kim, CEO); Samsung Applying Process Mining in Semiconductor Fab Operations: A Case Study (Dr. Jinyeon Lee). Pohang (Tuesday, August 25, in parallel with the conference — Changeup Ground, Event Hall): Opening; Keynote by Wil van der Aalst (Using Object-Centric Process Mining to Unravel Complexity and Enable Enterprise-Level AI/ML); SAP BTM The Autonomous Enterprise runs on Context: Process Atoms and Company Memory (Tony (RaeSung) Park, Julian Lebherz); Puzzle Data Process Excellence in the AI Era (Youngil Kim, CEO); LG Process Improvement with Vision AI (Bongsu Cho).'
    },
    {
      url: 'conference.html#keynotes',
      title: 'Keynote Speakers',
      keywords: 'keynote speakers Wil van der Aalst Jan vom Brocke',
      content: 'Keynote Speakers: Wil van der Aalst (RWTH Aachen University), Jan vom Brocke (University of Münster).'
    },
    {
      url: 'conference.html#poster-session',
      title: 'Poster Session',
      keywords: 'poster session posters LLMs process mining object-centric event log IoT smart farming semantic integrity multi-LLM consensus event-data imperfection patterns process voids missing data James Hyunseo Cho Gyunam Park Minsu Cho Yudhi Kurniawan Mahendrawathi Er Faizal Mahananto Ifrina Nuritha Vandha Pradwiyasma Widartha Sareh Sadeghianasl Moe Wynn Robert Andrews Wil van der Aalst Jonghyeon Ko Adam Burke',
      content: 'Poster Session: Where do LLMs fit in process mining? (James Hyunseo Cho, Gyunam Park, Minsu Cho); Designing an Object-Centric Event Log for IoT-Driven Smart Farming (Yudhi Kurniawan, Mahendrawathi Er, Faizal Mahananto); Semantic Integrity Preservation in Event Log Augmentation via Multi-LLM Consensus (Ifrina Nuritha, Vandha Pradwiyasma Widartha, Mahendrawathi Er); Object-Centric Event-Data Imperfection Patterns (Sareh Sadeghianasl, Moe Wynn, Robert Andrews, Wil M. P. van der Aalst, Jonghyeon Ko); Process Voids: Analysis With Missing Data (Adam Burke, Moe Wynn).'
    },
    {
      url: 'call-for-papers.html',
      title: 'Call for Papers',
      keywords: 'call for papers CFP submission topics AI process mining governance ethics digital transformation CEUR publication poster session EasyChair',
      content: 'Submit papers on Process Intelligence & AI, Governance, Risk, Ethics, Digital Transformation, Industry Practice. Full papers max 10 pages, Short papers max 5 pages. Proceedings shall be submitted to CEUR-WS.org for online publication. Double-blind peer review.'
    },
    {
      url: 'accepted-papers.html',
      title: 'Accepted Papers',
      keywords: 'accepted papers list presentations process mining anomaly detection predictive process monitoring multi-agent orchestration IoT threat detection trace encoding graph neural networks causal mapping translucent event logs transformer conformance Indonesian context',
      content: 'Papers accepted for presentation at ASPAI 2026: Pre-Readiness for Process Mining, PaCHITA channel-independent transformer for anomaly detection, comparative analysis of trace encoding for next activity prediction, multi-agent orchestration for process mining query answering, IoT threat detection using process conformance, fault management data preprocessing case study, work-in-process prediction with graph neural networks, cross-process causal mapping, and predictive process monitoring via translucent event logs.'
    },
    {
      url: 'summer-school.html',
      title: 'Summer School',
      keywords: 'summer school 3rd process mining summer school Aachen Bolzano training workshop hands-on PM4Py Celonis',
      content: 'The 3rd Process Mining Summer School, following the previous editions in Aachen, Germany (2022) and Bolzano, Italy (2026), and the first edition held in the Asia-Pacific region. August 27-28, 2026 at POSTECH. Learn process discovery, conformance checking, performance analysis, OCPM, predictive analytics.'
    },
    {
      url: 'summer-school-program.html',
      title: 'Summer School Program Details',
      keywords: 'summer school program schedule August 27 28 POSCO International Center process intelligence process mining process discovery event logs conformance checking token-based replay alignments data foundations event log quality hands-on Celonis SAP BTM AI agent mining predictive generative AI LLM federated process mining case studies healthcare evidence-based Wil van der Aalst Moe Wynn Poornima Dhall Julian Lebherz Tony Park RaeSung Park Marco Comuzzi Minseok Song Bernardo Nugroho Yahya Angelina Prima Kurniati Simon Poon dinner networking',
      content: 'Summer School Program (POSCO International Center, Large-size Meeting Room 1F). Day 1 (August 27, Thursday): Opening (Minseok Song, Marco Comuzzi), Unlocking Process Intelligence: A 360 Degree Introduction to Process Mining (Wil van der Aalst), From Event Logs to Process Logic: The Basics of Process Discovery (Wil van der Aalst), Conformance Checking: Token-Based Replay and Alignments (Wil van der Aalst), Building Strong Data Foundations for Process Mining (Moe Wynn), Process Mining Hands-On A (Poornima Dhall, Celonis), Process Mining Hands-On B: AI Agent Mining in Practice (Julian Lebherz, Tony (RaeSung) Park, SAP BTM), Dinner and Networking (18:00). Day 2 (August 28, Friday): Unleashing Predictive and Generative AI in Process Mining (Marco Comuzzi), Federated Process Mining: Federated Event Log Generation for Process Discovery across Organizational Boundaries (Bernardo Nugroho Yahya), Process Mining Case Studies (Angelina Prima Kurniati), Evidence-Based Evaluation of Process Mining in Healthcare (Simon Poon), Closing (Minseok Song, Marco Comuzzi), Lunch (12:30).'
    },
    {
      url: 'summer-school-preparation.html',
      title: 'Summer School Preparation',
      keywords: 'preparation prepare before arrival laptop install tools software download datasets ProM ProM Lite 6.15 1.4 Java 8 Docker Celonis Academic Edition signup registration Disco Fluxicon academic license data extraction checklist Pizzeria event log case table Excel xlsx pmdata2026 Wil van der Aalst hands-on DFG BPMN instructions requirements',
      content: 'What to do before the Summer School: bring your own laptop to all classes; install ProM 6.15 or ProM Lite 1.4 (requires Java 8, Docker alternative available), obtain access to the Celonis Academic Edition, and install Disco from Fluxicon using your university email address. Review the Fluxicon data extraction and data extraction checklist resources. Download the Day 1 datasets (pmdata2026.zip) used by Prof. Wil van der Aalst, and the two Pizzeria Excel datasets (Pizzeria_Event.xlsx and Pizzeria_Case_enriched.xlsx) used in the Celonis hands-on session.'
    },
    {
      url: 'summer-school-lecturers.html',
      title: 'Summer School Lecturers',
      keywords: 'lecturers speakers instructors Wil van der Aalst Moe Wynn Poornima Dhall Julian Lebherz Tony Park RaeSung Park Marco Comuzzi Bernardo Nugroho Yahya Angelina Prima Kurniati Simon Poon RWTH Aachen QUT Celonis SAP BTM Business Transformation Management UNIST Telkom University of Sydney',
      content: 'Summer School Lecturers: Prof. Wil van der Aalst (RWTH Aachen University), Prof. Moe Wynn (Queensland University of Technology), Poornima Dhall (Celonis), Julian Lebherz (SAP BTM), Tony (RaeSung) Park (SAP BTM), Prof. Marco Comuzzi (UNIST), Prof. Bernardo Nugroho Yahya (Hankuk University of Foreign Studies), Prof. Angelina Prima Kurniati (Telkom University), Prof. Simon Poon (The University of Sydney).'
    },
    {
      url: 'registration.html',
      title: 'Registration',
      keywords: 'registration fee price cost conference summer school USD payment',
      content: 'Conference: USD $200 (Aug 25-26). Summer School: USD $150 (Aug 27-28). Conference + Summer School: USD $300 (Aug 25-28).'
    },
    {
      url: 'visa-information.html',
      title: 'Visa Information',
      keywords: 'visa information entry guide K-ETA Korea passport C-3-1 short-term visit invitation letter immigration KVAC embassy consulate exemption document support',
      content: 'Visa and Entry Guide for ASPAI 2026. Check your entry type: Visa Required (Short-Term Visit Visa C-3-1, e.g. Indonesia, Sri Lanka, China), K-ETA Required (apply at k-eta.go.kr, KRW 10,000, ~72 hours), or Visa/K-ETA Exempt. Passport must be valid at least six months. Organizer provides Official Invitation Letter and Registration Confirmation Letter. Request visa support documents by emailing eon7777@postech.ac.kr.'
    },
    {
      url: 'sponsors.html',
      title: 'Sponsors',
      keywords: 'sponsors partners Celonis SAP Puzzle Data support',
      content: 'Proudly sponsored by Celonis, SAP, and Puzzle Data.'
    },
    {
      url: 'faq.html',
      title: 'FAQs',
      keywords: 'FAQ frequently asked questions help contact support',
      content: 'For any questions about the ASPAI conference, please contact eon7777@postech.ac.kr'
    }
  ];

  function search(query) {
    if (!query || query.length < 2) return [];
    
    const lowerQuery = query.toLowerCase();
    const results = [];
    
    searchIndex.forEach(page => {
      const titleMatch = page.title.toLowerCase().includes(lowerQuery);
      const keywordMatch = page.keywords.toLowerCase().includes(lowerQuery);
      const contentMatch = page.content.toLowerCase().includes(lowerQuery);
      
      if (titleMatch || keywordMatch || contentMatch) {
        let score = 0;
        if (titleMatch) score += 10;
        if (keywordMatch) score += 5;
        if (contentMatch) score += 1;
        
        // Create snippet with highlighted text
        let snippet = page.content;
        const queryIndex = snippet.toLowerCase().indexOf(lowerQuery);
        if (queryIndex !== -1) {
          const start = Math.max(0, queryIndex - 40);
          const end = Math.min(snippet.length, queryIndex + query.length + 60);
          snippet = (start > 0 ? '...' : '') + 
                    snippet.substring(start, end) + 
                    (end < snippet.length ? '...' : '');
        } else {
          snippet = snippet.substring(0, 100) + '...';
        }
        
        // Highlight matches
        const regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        snippet = snippet.replace(regex, '<mark>$1</mark>');
        
        results.push({
          url: page.url,
          title: page.title,
          snippet: snippet,
          score: score
        });
      }
    });
    
    // Sort by score descending
    results.sort((a, b) => b.score - a.score);
    
    return results.slice(0, 8); // Return top 8 results
  }

  function renderResults(results, query) {
    const container = document.getElementById('searchResults');
    if (!container) return;
    
    if (results.length === 0) {
      container.innerHTML = '<div class="search-no-results">No results found for "' + query + '"</div>';
      container.classList.add('active');
      return;
    }
    
    let html = '<div class="search-results-header">' + results.length + ' result' + (results.length > 1 ? 's' : '') + ' found</div>';
    
    results.forEach(result => {
      html += '<a href="' + result.url + '" class="search-result-item">' +
              '<div class="search-result-title">' + result.title + '</div>' +
              '<div class="search-result-snippet">' + result.snippet + '</div>' +
              '</a>';
    });
    
    container.innerHTML = html;
    container.classList.add('active');
  }

  function hideResults() {
    const container = document.getElementById('searchResults');
    if (container) {
      container.classList.remove('active');
    }
  }

  // Initialize search
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput) return;
    
    // Search on input
    let debounceTimer;
    searchInput.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function() {
        const query = searchInput.value.trim();
        if (query.length >= 2) {
          const results = search(query);
          renderResults(results, query);
        } else {
          hideResults();
        }
      }, 200);
    });
    
    // Search on button click
    searchBtn.addEventListener('click', function() {
      const query = searchInput.value.trim();
      if (query.length >= 2) {
        const results = search(query);
        renderResults(results, query);
      }
    });
    
    // Search on Enter key
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query.length >= 2) {
          const results = search(query);
          renderResults(results, query);
        }
      }
      if (e.key === 'Escape') {
        hideResults();
        searchInput.blur();
      }
    });
    
    // Hide results when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.search-box')) {
        hideResults();
      }
    });
    
    // Show results on focus if there's a query
    searchInput.addEventListener('focus', function() {
      const query = searchInput.value.trim();
      if (query.length >= 2) {
        const results = search(query);
        renderResults(results, query);
      }
    });
  });
})();
