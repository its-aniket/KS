export const navitems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "/about",
    }
  ]


  export interface Project {
    id: number;
    title: string;
    slug: string;
    image: string;
    category:
      | "Commercial"
      | "Hotel"
      | "Institutes"
      | "Residential"
      | "Interior design";
    aspectRatio: string;
    description: string;
    shortDescription: string;
    year?: number;
    client?: string;
    location: string;
    area?: string;
    builtarea?: string;
    services?: string[];
    team?: string[];
    awards?: string[];
    gallery?: string[];
    challenge?: string;
    solution?: string;
    status: "Completed" | "In Progress" | "Planning Phase" | "Unbuilt";
    sustainability?: string[];
    technologies?: string[];
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "ABIIL Boulevard",
      slug: "ABIIL-Boulevard",
      image: "/images/Project_1/abil_boulvard.jpg",
      category: "Commercial",
      aspectRatio: "4/3",
      description:
        "A state-of-the-art commercial complex featuring modern architecture and sustainable design principles. The project seamlessly integrates work and leisure spaces, creating a dynamic environment for businesses and their employees.",
      shortDescription:
        "Modern commercial complex with sustainable design features",
      year: 2024,
      client: "ABIL Propcon LLP",
      location: "Ghorpadi, Pune",
      area: "9400 sq ft",
      builtarea: "42,302 sq ft",
      services: ["Architectural Design"],
      team: [
        "Kaustubh Shevade",
        "Amit Chaubal",
        "Ramachandra Sadavatti",
        "Laxman Gundu",
      ],
      gallery: [
        "/images/Project_1/abil_boulvard.jpg",
        "/images/Project_1/abil_boulvard1.jpg",
        "/images/Project_1/abil_boulvard2.jpg",
      ],
      challenge:
        "Creating a sustainable commercial space that maximizes natural light while maintaining energy efficiency.",
      solution:
        "Implemented a double-skin facade system and smart building technologies.",
      status: "Completed",
    },
    {
      id: 2,
      title: "Science Research Centre, IIT Bombay",
      slug: "Science-research-center-IITBombay",
      image: "/images/Project_2/science_research_center1.jpg",
      category: "Institutes",
      aspectRatio: "3/4",
      description:
        "A state-of-the-art commercial complex featuring modern architecture and sustainable design principles. The project seamlessly integrates work and leisure spaces, creating a dynamic environment for businesses and their employees.",
      shortDescription:
        "Modern commercial complex with sustainable design features",
      year: 2016,
      client: "IIT Bombay",
      location: "IIT Bombay,Mumbai Maharashtra",
      area: "1.95 Acre",
      builtarea: "80,000 sq m",
      services: ["Architectural Design"],
      team: ["Kaustubh Shevade", "Amit Chaubal"],
      gallery: [
        "/images/Project_2/science_research_center1.jpg",
        "/images/Project_2/science_research_center2.jpg",
        "/images/Project_2/science_research_center3.jpg",
        "/images/Project_2/science_research_center4.jpg",
        "/images/Project_2/science_research_center5.jpg",
        "/images/Project_2/science_research_center6.jpg",
      ],
      challenge:
        "Creating a sustainable commercial space that maximizes natural light while maintaining energy efficiency.",
      solution:
        "Implemented a double-skin facade system and smart building technologies.",
      status: "Unbuilt",
    },
    {
      id: 3,
      title: "Sales Tax Office Mazgaon",
      slug: "Sales-Tax-Office-Mazgaon",
      image: "/images/Project_3/taxofficemazgaon1.jpg",
      category: "Commercial",
      aspectRatio: "1/1",
      description:
        "A modern educational auditorium designed for optimal acoustics and flexible usage patterns.",
      shortDescription: "State-of-the-art educational auditorium",
      year: 2012,
      client: "Sales Tax Department",
      location: "Mazgaon, Mumbai",
      area: "1,555 sq ft",
      builtarea: "54,218 sq m",
      services: ["Architectural Design"],
      team: ["Kaustubh Shevade", "Amit Chaubal"],
      gallery: [
        "/images/Project_3/taxofficemazgaon1.jpg",
        "/images/Project_3/taxofficemazgaon2.jpg",
        "/images/Project_3/taxofficemazgaon3.jpg",
        "/images/Project_3/taxofficemazgaon4.jpg",
        "/images/Project_3/taxofficemazgaon5.jpg",
      ],
      challenge:
        "Creating perfect acoustics while maintaining flexibility for different events.",
      solution: "Implemented modular acoustic panels and advanced sound systems.",
      status: "Completed",
    },
  
    {
      id: 4,
      title: "Shopping Center",
      slug: "Shopping-Center",
      image: "/images/Project_4/shoppingcenter1.jpg",
      category: "Commercial",
      aspectRatio: "3/4",
      description:
        "An elegant hotel lobby that balances luxury with functionality, featuring smart space planning and high-end finishes.",
      shortDescription: "Luxurious hotel lobby with modern amenities",
      year: 2015,
      client: "IIT Bombay",
      location: "IIT Bombay, Maharashtra",
      area: "500 sq ft",
      builtarea: "303.50 sq m",
      services: ["Architectural Design"],
      team: ["Kaustubh Shevade", "Amit Chaubal"],
      gallery: [
        "/images/Project_4/shoppingcenter1.jpg",
        "/images/Project_4/shoppingcenter2.jpg",
        "/images/Project_4/shoppingcenter3.jpg",
        "/images/Project_4/shoppingcenter4.jpg",
      ],
      challenge:
        "Balancing luxury aesthetics with practical guest flow management.",
      solution: "Created distinct zones while maintaining visual continuity.",
      status: "Unbuilt",
    },
    {
      id: 5,
      title: "CII-Godrej GBC New Building",
      slug: "cii-godrej-gbc-new-building",
      image: "/images/Project_5/cii-godrej-gbc-new-building1.JPG",
      category: "Commercial",
      aspectRatio: "4/3",
      description:
        "A competition project for the CII-Godrej GBC new building in Hyderabad, focusing on innovative and sustainable architectural design.",
      shortDescription:
        "Sustainable architectural design for CII-Godrej GBC's new building.",
      year: 2019,
      client: "CII GBC, Hyderabad",
      location: "Hyderabad",
      area: "2,744",
      builtarea: "",
      services: ["Architecture"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: [
        "/images/Project_5/cii-godrej-gbc-new-building1.JPG",
        "/images/Project_5/cii-godrej-gbc-new-building2.JPG",
        "/images/Project_5/cii-godrej-gbc-new-building3.JPG",
        "/images/Project_5/cii-godrej-gbc-new-building4.JPG",
        "/images/Project_5/cii-godrej-gbc-new-building5.JPG",
        "/images/Project_5/cii-godrej-gbc-new-building6.JPG",
        "/images/Project_5/cii-godrej-gbc-new-building7.JPG",
      ],
      challenge:
        "Designing a cutting-edge, sustainable building concept for the competition.",
      solution:
        "Proposed innovative green building techniques and efficient layouts.",
      status: "Unbuilt",
    },
    {
      id: 6,
      title: "One Avante",
      slug: "one-avante",
      image: "/images/Project_5/cii-godrej-gbc-new-building1.JPG",
      category: "Commercial",
      aspectRatio: "4/3",
      description:
        "A commercial architecture project for Avante Spaces Limited in Kothrud, Pune, showcasing innovative design solutions.",
      shortDescription: "Commercial project for Avante Spaces Limited in Pune.",
      year: 2024,
      client: "Avante Spaces Limited, Pune",
      location: "Kothrud, Pune",
      area: "",
      builtarea: "",
      services: ["Architecture"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: ["/images/img6/detail1.jpg", "/images/img6/detail2.jpg"],
      challenge: "Creating a modern and functional commercial design.",
      solution:
        "Designed a contemporary space meeting the client's needs and aesthetic expectations.",
      status: "Completed",
    },
    {
      id: 7,
      title: "BARC, Mysore",
      slug: "barc-mysore",
      image: "/images/img7.jpg",
      category: "Commercial",
      aspectRatio: "4/3",
      description:
        "Master Plan for Technology Development Facility at BARC, Mysore, Karnataka.",
      shortDescription:
        "Master planning for a technology facility at BARC, Mysore.",
      year: 2011,
      client: "BARC, Mysore",
      location: "Karnataka",
      area: "5,706,068 sq ft",
      builtarea: "",
      services: ["Architecture"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: ["/images/img7/detail1.jpg", "/images/img7/detail2.jpg"],
      challenge: "Designing a functional technology development facility.",
      solution:
        "Created a comprehensive master plan meeting BARC's requirements.",
      status: "In Progress",
    },
    {
      id: 8,
      title: "Master Plan For IIT Dharwad Campus",
      slug: "iit-dharwad-campus",
      image: "/images/Project_8/iit_d1.JPG",
      category: "Institutes",
      aspectRatio: "4/3",
      description:
        "Master Plan for IIT Dharwad Campus, an unbuilt competition project.",
      shortDescription:
        "Comprehensive master plan for the proposed IIT Dharwad Campus.",
      year: 2018,
      client: "IIT Dharwad",
      location: "Dharwad, Karnataka",
      area: "470.21 Acres",
      builtarea: "1,293,000 sq. m.",
      services: ["Architecture"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: [
        "/images/Project_8/iit_d1.JPG",
        "/images/Project_8/iit_d2.JPG",
        "/images/Project_8/iit_d3.JPG",
        "/images/Project_8/iit_d4.JPG",
        "/images/Project_8/iit_d5.JPG",
        "/images/Project_8/iit_d6.JPG",
        "/images/Project_8/iit_d7.JPG",
      ],
      challenge: "Designing a futuristic educational campus for IIT Dharwad.",
      solution: "Created an innovative master plan to align with IIT’s vision.",
      status: "Unbuilt",
    },
    {
      id: 9,
      title: "Library Building For Central University of Zharkhand",
      slug: "library-building-for-central-university-of-zharkhand",
      image: "/images/img9.jpg",
      category: "Institutes",
      aspectRatio: "16/9",
      description:
        "A modern residential project that pushes the boundaries of contemporary living spaces.",
      shortDescription: "Modern family home with innovative design",
      year: 2019,
      client: "Central University of Zharkhand",
      location: "Ranchi, Zharkhand",
      area: "",
      builtarea: "",
      services: ["Architecture"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: ["/images/img4/detail1.jpg", "/images/img4/detail2.jpg"],
      challenge:
        "Integrating modern design while maintaining warmth and livability.",
      solution:
        "Used natural materials and created flowing indoor-outdoor spaces.",
      status: "Completed",
    },
    {
      id: 11,
      title: "Hostel blocks For Central University of Zharkhand",
      slug: "hostel-building-for-central-university-of-zharkhand",
      image: "/images/img11.jpg",
      category: "Institutes",
      aspectRatio: "16/9",
      description:
        "A modern residential project that pushes the boundaries of contemporary living spaces.",
      shortDescription: "Modern family home with innovative design",
      year: 2019,
      client: "Central University of Zharkhand",
      location: "Ranchi, Zharkhand",
      area: "",
      builtarea: "",
      services: ["Architecture"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: ["/images/img4/detail1.jpg", "/images/img4/detail2.jpg"],
      challenge:
        "Integrating modern design while maintaining warmth and livability.",
      solution:
        "Used natural materials and created flowing indoor-outdoor spaces.",
      status: "Completed",
    },
    {
      id: 12,
      title:
        "Mastre Plan and Architecture For Shri Samarth Educational & Reserch Foundation Kolhapur",
      slug: "master-plan-and-architecture-for-shri-samarth-educational-research-foundation",
      image: "/images/Project_12/samartheducation1.jpg",
      category: "Institutes",
      aspectRatio: "1/9",
      description:
        "A modern residential project that pushes the boundaries of contemporary living spaces.",
      shortDescription: "Modern family home with innovative design",
      year: 2011,
      client: "Shri Samarth Educational & Reserch Foundation Kolhapur",
      location: "Kolhapur, Maharashtra",
      area: "52,500",
      builtarea: "21,923 sq m",
      services: ["Architecture"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: [
        "/images/Project_12/samartheducation1.jpg",
        "/images/Project_12/samartheducation2.jpg",
        "/images/Project_12/samartheducation5.jpg",
        "/images/Project_12/samartheducation6.jpg",
      ],
      challenge:
        "Integrating modern design while maintaining warmth and livability.",
      solution:
        "Used natural materials and created flowing indoor-outdoor spaces.",
      status: "Completed",
    },
    {
      id: 13,
      title: "School Feasibility Study, Pune",
      slug: "school-feasibility-study",
      image: "/images/Project_13/schoolstudy1.JPG",
      category: "Institutes",
      aspectRatio: "16/9",
      description:
        "A modern residential project that pushes the boundaries of contemporary living spaces.",
      shortDescription: "Modern family home with innovative design",
      year: 2019,
      client: "Pune Developer",
      location: "Pune, Maharashtra",
      area: "6,075",
      builtarea: "",
      services: ["Architecture"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: [
        "/images/Project_13/schoolstudy1.JPG",
        "/images/Project_13/schoolstudy2.JPG",
        "/images/Project_13/schoolstudy3.JPG",
        "/images/Project_13/schoolstudy4.JPG",
      ],
      challenge:
        "Integrating modern design while maintaining warmth and livability.",
      solution:
        "Used natural materials and created flowing indoor-outdoor spaces.",
      status: "Unbuilt",
    },
    {
      id: 14,
      title: "School Feasibility Study, Pune",
      slug: "School-Feasibility-Study-Pune",
      image: "/images/Project_14/school1.JPG",
      category: "Institutes",
      aspectRatio: "4/3",
      description:
        "A detailed feasibility study for a proposed school in Pune, focusing on sustainable design and architectural innovation.",
      shortDescription: "Feasibility study for a sustainable school in Pune.",
      year: 2019,
      client: "Pune Developer",
      location: "Pune",
      area: "53,540 sq ft",
      builtarea: "Unbuilt",
      services: ["Feasibility Study", "Architectural Design"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: [
        "/images/Project_14/school1.JPG",
        "/images/Project_14/school2.JPG",
        "/images/Project_14/school3.JPG",
        "/images/Project_14/school4.JPG",
        "/images/Project_14/school5.JPG",
        "/images/Project_14/school6.JPG",
      ],
      challenge:
        "Assessing the feasibility of a large-scale educational institution in Pune.",
      solution:
        "Developed a comprehensive plan focusing on sustainable and cost-effective architecture.",
      status: "Unbuilt",
    },
    {
      id: 15,
      title: "Badminton Academy Feasibility Study, Pune",
      slug: "Badminton-Academy-Feasibility-Study-Pune",
      image: "/images/img8.jpg",
      category: "Commercial",
      aspectRatio: "4/3",
      description:
        "Feasibility study for a state-of-the-art badminton academy in Pune, focusing on sustainable sports infrastructure.",
      shortDescription:
        "Sustainable badminton academy feasibility study in Pune.",
      year: 2018,
      client: "Pune Developer",
      location: "Pune",
      area: "6,075 sq ft",
      builtarea: "Unbuilt",
      services: ["Feasibility Study", "Architectural Design"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: ["/images/img8/detail1.jpg", "/images/img8/detail2.jpg"],
      challenge:
        "Evaluating the feasibility of creating a modern badminton academy with energy-efficient facilities.",
      solution:
        "Proposed an optimized layout with eco-friendly materials and sustainable designs.",
      status: "Unbuilt",
    },
    {
      id: 16,
      title: "Science Research Park, IIT Bombay, Mumbai",
      slug: "Science-Research-Park-IIT-Bombay-Mumbai",
      image: "/images/img9.jpg",
      category: "Institutes",
      aspectRatio: "4/3",
      description:
        "A visionary project to establish a cutting-edge Science Research Park at IIT Bombay, fostering innovation and collaboration.",
      shortDescription:
        "Science Research Park initiative at IIT Bombay for innovation and collaboration.",
      year: 2016,
      client: "IIT Bombay",
      location: "Mumbai",
      area: "Not Specified",
      builtarea: "Unbuilt",
      services: ["Conceptual Design", "Feasibility Study"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: ["/images/img9/detail1.jpg", "/images/img9/detail2.jpg"],
      challenge:
        "Developing a research-oriented park within a bustling academic environment, adhering to space constraints.",
      solution:
        "Proposed a sustainable and innovative design tailored to research needs and academic synergy.",
      status: "Unbuilt",
    },
    {
      id: 17,
      title: "Design College, IIT Bombay, Mumbai",
      slug: "Design-College-IIT-Bombay-Mumbai",
      image: "/images/img10.jpg",
      category: "Institutes",
      aspectRatio: "4/3",
      description:
        "Proposed a creative and functional design for a new design college at IIT Bombay, enhancing student learning and innovation.",
      shortDescription:
        "Design college initiative at IIT Bombay to nurture creativity and innovation.",
      year: 2016,
      client: "IIT Bombay",
      location: "Mumbai",
      area: "Not Specified",
      builtarea: "Unbuilt",
      services: ["Conceptual Design", "Feasibility Study"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: ["/images/img10/detail1.jpg", "/images/img10/detail2.jpg"],
      challenge:
        "Creating a unique identity for the design college while aligning with IIT Bombay's academic culture.",
      solution:
        "Developed a design emphasizing modernity, functionality, and collaborative spaces for students.",
      status: "Unbuilt",
    },
    {
      id: 18,
      title: "ESLBARC, Surat",
      slug: "ESLBARC-Surat",
      image: "/images/img11.jpg",
      category: "Institutes",
      aspectRatio: "4/3",
      description:
        "Proposed design for ESLBARC in Surat, focusing on sustainable architecture and advanced research facilities.",
      shortDescription:
        "Sustainable and functional research facility design for ESLBARC, Surat.",
      year: 2013,
      client: "BARC",
      location: "Surat",
      area: "Not Specified",
      builtarea: "Unbuilt",
      services: ["Conceptual Design", "Feasibility Study"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: ["/images/img11/detail1.jpg", "/images/img11/detail2.jpg"],
      challenge:
        "Integrating sustainable architecture with advanced research requirements.",
      solution:
        "Created a concept blending modern research needs with environmentally conscious design.",
      status: "Unbuilt",
    },
    {
      id: 19,
      title: "Master Plan and Architecture for Sayaji, Kolhapur",
      slug: "master-plan-sayaji-kolhapur",
      image: "/images/img12.jpg",
      category: "Hotel",
      aspectRatio: "4/3",
      description:
        "Comprehensive master plan and architectural design for Sayaji, Kolhapur, blending hospitality needs with sustainable architecture.",
      shortDescription:
        "Master plan and architecture for a hospitality project in Kolhapur.",
      year: 2022,
      client: "DY Patil Hospitality",
      location: "Kolhapur",
      area: "19,910 sqm",
      builtarea: "35,366 sqm",
      services: ["Master Planning", "Architectural Design"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: ["/images/img1/detail1.jpg", "/images/img1/detail2.jpg"],
      challenge:
        "Creating an efficient and aesthetically pleasing hospitality design while adhering to sustainability principles.",
      solution:
        "Developed a competition-winning concept integrating innovative hospitality features with modern architecture.",
      status: "Unbuilt",
    },
    {
      id: 20,
      title: "Façade Design Scheme for Darode Jog, Pune",
      slug: "facade-design-darode-jog",
      image: "/images/img13.jpg",
      category: "Institutes",
      aspectRatio: "4/3",
      description:
        "Façade design scheme for a mixed-use project by Darode Jog in Pune, emphasizing contemporary aesthetics and functionality.",
      shortDescription:
        "Innovative façade design for a mixed-use development in Pune.",
      year: 2014,
      client: "Darode Jog",
      location: "Pune",
      area: "",
      builtarea: "",
      services: ["Façade Design"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: ["/images/img2/detail1.jpg", "/images/img2/detail2.jpg"],
      challenge:
        "Designing a façade that balances aesthetic appeal with the functional needs of a mixed-use development.",
      solution:
        "Crafted a unique façade scheme integrating modern design principles to enhance the building's overall character.",
      status: "Unbuilt",
    },
    {
      id: 21,
      title: "Residential High Rise Elevation Concept, Mumbai",
      slug: "residential-high-rise-elevation-mumbai",
      image: "/images/img14.jpg",
      category: "Residential",
      aspectRatio: "4/3",
      description:
        "Elevation concept for a high-rise residential project in Mumbai, focusing on modern design and urban aesthetics.",
      shortDescription:
        "Innovative elevation concept for a high-rise residential building in Mumbai.",
      year: 2014,
      client: "Mumbai Developer",
      location: "Mumbai",
      area: "",
      builtarea: "",
      services: ["Concept Design"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: ["/images/img3/detail1.jpg", "/images/img3/detail2.jpg"],
      challenge:
        "Creating a modern and visually appealing elevation for a residential high-rise while addressing urban constraints.",
      solution:
        "Designed a contemporary elevation concept that balances form and functionality, enhancing the urban skyline.",
      status: "Unbuilt",
    },
    {
      id: 22,
      title: "Residential High Rise Concept, Pune",
      slug: "residential-high-rise-concept-pune",
      image: "/images/img15.jpg",
      category: "Residential",
      aspectRatio: "4/3",
      description:
        "Concept design for a residential high-rise in Pune, focusing on modern architecture and urban living.",
      shortDescription:
        "Concept design for a modern residential high-rise in Pune.",
      year: 2016,
      client: "Paranjape Schemes, Pune",
      location: "Pune",
      area: "",
      builtarea: "",
      services: ["Concept Design"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: ["/images/img4/detail1.jpg", "/images/img4/detail2.jpg"],
      challenge:
        "Creating a modern residential high-rise concept in a growing urban area, balancing functionality and aesthetics.",
      solution:
        "Developed a concept that emphasizes efficient use of space and modern architectural design, integrating well into Pune's urban landscape.",
      status: "Unbuilt",
    },
  
    {
      id: 23,
      title: "Married Student Accommodation, IIT Bombay, Mumbai",
      slug: "Married-Student-Accommodation-IIT-Bombay-Mumbai",
      image: "/images/img16.jpg",
      category: "Residential",
      aspectRatio: "",
      description: "",
      shortDescription: "",
      year: 2014,
      client: "IIT Bombay",
      location: "Mumbai",
      area: "",
      builtarea: "",
      services: ["Architecture"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: [],
      challenge: "",
      solution: "",
      status: "Unbuilt",
    },
    {
      id: 24,
      title: "Residential High Rise Concept, Hyderabad",
      slug: "Residential-High-Rise-Concept-Hyderabad",
      image: "/images/img1.jpg",
      category: "Residential",
      aspectRatio: "",
      description: "",
      shortDescription: "",
      year: 2022,
      client: "Hyderabad Developer",
      location: "Hyderabad",
      area: "",
      builtarea: "",
      services: ["Architecture"],
      team: ["Amit Chaubal", "Kaustubh Shevade"],
      gallery: [],
      challenge: "",
      solution: "",
      status: "Unbuilt",
    }  
  ];
  