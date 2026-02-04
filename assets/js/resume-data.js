/**
 * Shared resume data for khary.net
 * Single source of truth for both index.html and resume.html
 */
const RESUME_DATA = {
    // Personal Info
    personal: {
        name: "Khary A. Mendez",
        title: "Senior Principal Consultant",
        tagline: "Solving hard problems through systems thinking, resilience, and mentorship.",
        subtitle: "Technical Leader | Team Multiplier | Problem Solver",
        summary: "Solving hard problems through systems thinking, resilience, and mentorship. 25+ years of experience in software engineering, cloud architecture, and technical leadership. Red Hat Certified Architect with multiple professional certifications. Proven track record of enabling 50+ teams and delivering enterprise-scale solutions.",
        location: "Huntersville, NC",
        linkedin: "linkedin.com/in/kharymendez",
        github: "github.com/kharyam",
        website: "khary.net",
        email: "",
        phone: ""
    },

    // Metrics (from dashboard)
    metrics: {
        yearsExperience: 25,
        certifications: 17,
        teamsEnabled: 50,
        projectsDelivered: 50
    },

    // Work Experience
    experience: [
        {
            id: "redhat",
            company: "Red Hat, LLC",
            role: "Senior Principal Consultant",
            dates: "2011 - Present",
            logo: "assets/images/redhat-logo.svg",
            summary: "Architecting cloud-native transformations for federal agencies and Fortune 500 enterprises",
            highlights: [
                "Led 15+ enterprise engagements across federal agencies, defense contractors, and Fortune 500 companies",
                "Specialized in OpenShift/Kubernetes architecture, CI/CD automation, and cloud-native transformation",
                "Trusted advisor and mentor to customer teams and Red Hat consultants alike",
                "Delivered middleware integration solutions and established DevOps best practices"
            ],
            techStack: ["OpenShift", "Kubernetes", "Java", "Linux", "Middleware", "Ansible", "ArgoCD", "Jenkins", "AWS"],
            projects: [
                {
                    name: "Large Federal Tax Agency",
                    dates: "2021 - Present",
                    description: "Lead consultant supporting enterprise-wide OpenShift 4.x migration initiative.",
                    bullets: [
                        "Mentor, train, and guide teams unfamiliar with container technology",
                        "Assist teams with updating code and configuration to support OpenShift 4.x",
                        "Enable and support Red Hat consultants migrating application teams to OpenShift",
                        "Technologies: Java, EAP, SpringBoot, Tekton, Jenkins, GitHub Actions, ArgoCD, Kafka, AMQ"
                    ]
                },
                {
                    name: "Government Software Contractor",
                    dates: "2025",
                    description: "Joined a troubled engagement mid-project to turn around customer relationship and deliver results.",
                    bullets: [
                        "Conducted architecture reset—built system diagrams in real-time to drive clarity on requirements",
                        "Created comprehensive 40+ page EAP tuning guide with optimization rubric for diverse deployment scenarios",
                        "Enabled customer to diagnose and configure middleware for their government stakeholders",
                        "Achieved complete customer turnaround: \"Khary was phenomenal to work with\""
                    ]
                },
                {
                    name: "Customer Success Application Services Team",
                    dates: "2020 - 2022",
                    description: "Internal Red Hat team focused on application development support and enablement.",
                    bullets: [
                        "Provide support, guidance, and mentoring to projects oriented around application development",
                        "Created container images, documentation, and pipeline components for trusted software supply chain",
                        "Review technical content and documentation created by the team"
                    ]
                },
                {
                    name: "State Health Department Vaccination Systems",
                    dates: "2021",
                    description: "Supported development and release management for critical public health applications.",
                    bullets: [
                        "Provide support for release management using OpenShift, Jenkins, GitLab, ArgoCD",
                        "Implement new features, enhancements, and fixes to the Java code base",
                        "Mentor and support team members"
                    ]
                },
                {
                    name: "Federal Healthcare Agency",
                    dates: "2020 - 2021",
                    description: "Assisted with OpenShift 4 rollout to a large federal healthcare organization.",
                    bullets: [
                        "Requirements gathering and discovery from development and infrastructure teams",
                        "Architecture design primarily in the area of CI/CD",
                        "Education of customer in the areas of OpenShift, security, and CoreOS"
                    ]
                },
                {
                    name: "Defense Contractor - Submarine Systems",
                    dates: "2020",
                    description: "Provided architectural design guidance for tactical systems running on OpenShift 4.x.",
                    bullets: [
                        "Interacted with architecture team to map Red Hat technologies to system requirements",
                        "Created and presented demos on OpenShift 4.x features",
                        "Technologies: Vertical Pod Autoscaler, Compliance Operator, Prometheus/Grafana"
                    ]
                },
                {
                    name: "Defense Contractor - Cyber Command",
                    dates: "2019 - 2020",
                    description: "Reviewed and improved OpenShift deployment architecture on AWS.",
                    bullets: [
                        "Automated and containerized deployment of customer application onto OpenShift",
                        "Automated deployment of Enterprise DB onto OpenShift",
                        "Provided mentoring and guidance on Ansible"
                    ]
                },
                {
                    name: "Defense Contractor - Unified Platform (DoD)",
                    dates: "2019 - 2020",
                    description: "Trained and mentored team on modern application deployment techniques.",
                    bullets: [
                        "Stood up and architected CI/CD tools including OpenSCAP, TwistLock, OWASP ZAP, Anchore",
                        "Created automation via Red Hat Ansible to support tool deployment",
                        "Demoed and presented work products to stakeholders"
                    ]
                },
                {
                    name: "Defense Contractor - Air Force Radar Project",
                    dates: "2018 - 2019",
                    description: "Trained and mentored team on OpenShift Container Platform for C++ applications.",
                    bullets: [
                        "Created CI/CD pipelines demonstrating promotion of C++ code through deployment to OpenShift",
                        "Created custom container images for OpenSCAP scans and C++ builds",
                        "Integrated Nexus, OpenSCAP, GitLab, and OpenShift into the pipeline"
                    ]
                },
                {
                    name: "Federal Immigration Agency",
                    dates: "2017 - 2018",
                    description: "Provided on-site support for development and production OpenShift clusters.",
                    bullets: [
                        "Mentored and educated staff on maintenance, debugging, and troubleshooting of OpenShift",
                        "Assisted with roll-out of publicly facing containerized applications",
                        "Provided inputs into OpenShift deployment architecture"
                    ]
                },
                {
                    name: "Large Federal Tax Agency - Initial Deployment",
                    dates: "2016 - 2018",
                    description: "Provided architectural guidance for enterprise-wide OpenShift deployment.",
                    bullets: [
                        "Created supporting architectural documentation for multi-cluster deployment",
                        "Mentored and trained staff in usage of OpenShift platform as a service",
                        "Presented OCP concepts and architecture to executives"
                    ]
                },
                {
                    name: "Federal Agricultural Agency",
                    dates: "2015 - 2017",
                    description: "Designed and implemented invoice reconciliation system using Red Hat middleware.",
                    bullets: [
                        "Implemented solution using JBoss Fuse, EAP, and BRMS (Apache Camel, Drools)",
                        "Integrated with existing Agile and CI/CD processes (Jira, Bamboo, BitBucket)",
                        "Returned to provide ongoing support as an architect"
                    ]
                },
                {
                    name: "Federal Benefits Agency",
                    dates: "2015 - 2016",
                    description: "Delivered OpenShift deployments within AWS for development and production environments.",
                    bullets: [
                        "Transitioned applications to containerized Docker environments on OpenShift",
                        "Designed and implemented system architecture and deployment automation",
                        "On-boarded development teams defining DevOps practices and processes"
                    ]
                },
                {
                    name: "State Health Department",
                    dates: "2015",
                    description: "Assisted in installation of BRMS and Fuse Service Works.",
                    bullets: [
                        "Prepared and delivered workshops on Git, BRMS, and continuous delivery",
                        "Stood up continuous delivery environment using Jenkins",
                        "Mentored .NET developers on Java technologies"
                    ]
                },
                {
                    name: "Federal Courts",
                    dates: "2011 - 2015",
                    description: "Provided architectural design in \"Next Generation\" technology areas.",
                    bullets: [
                        "Technologies: JSF, JPA (Hibernate), JAX-RS Web Services, SOA, NIEM schema development",
                        "Recommended and configured continuous integration environment (Jenkins, Sonar, Maven, Nexus)",
                        "Coordinated with and educated team members across multiple groups"
                    ]
                }
            ]
        },
        {
            id: "lockheed",
            company: "Lockheed Martin",
            role: "Staff Software Engineer",
            dates: "1998 - 2011",
            logo: "assets/images/lockheed.svg",
            summary: "Mission-critical software for satellite systems and space-based defense programs",
            highlights: [
                "13-year tenure across satellite systems, tactical networks, and space-based defense programs",
                "Progressed from Software Engineer to Staff Engineer and Architect, leading services and mentoring teams",
                "Recognized C++ expert with additional expertise in Java, SOA, and real-time systems",
                "Delivered software for international customers including on-site support in Japan and UK"
            ],
            techStack: ["C++", "Java", "SOA", "JBoss", "Linux", "CORBA", "System Integration", "Database"],
            projects: [
                {
                    name: "Environmental Satellite Processing and Distribution System (ESPDS)",
                    dates: "2010 - 2011",
                    description: "Developed SOA architecture for integration of environmental satellite systems.",
                    bullets: [
                        "Assisted in development of SOA architecture to support legacy and upcoming satellite systems (GOES-R)",
                        "Developed SOA-based prototype using WSO2 ESB, Gadget Server (web portal), and Amazon EC2",
                        "Developed Java prototype to model environmental satellite data sectorization and resolution reduction"
                    ]
                },
                {
                    name: "Warfighter Information Network Tactical (WIN-T)",
                    dates: "2007 - 2010",
                    description: "Designed and developed Java code within a Service Oriented Architecture.",
                    bullets: [
                        "Worked on role-based access control (Apache Rampart, Active Directory, OpenDS, WSO2 Identity Server)",
                        "Developed report and workflow services (ActiveVOS/BPEL), serving as lead for all three services",
                        "Supported customer development efforts on-site for approximately 1 year"
                    ]
                },
                {
                    name: "Space Based Infrared Satellite System (SBIRS)",
                    dates: "2002 - 2007",
                    description: "Developed C++ software for satellite systems using object-oriented methodologies.",
                    bullets: [
                        "Developed, unit tested, and peer reviewed C++ code; served as language expert for peer reviews",
                        "Developed user interface software using ILOG Views and ILOG Maps",
                        "Developed real-time prototype using SmartSockets and multi-threading",
                        "Taught a Java book club based on \"Just Java 2\" by Peter Van Der Linden"
                    ]
                },
                {
                    name: "Internal Research and Development",
                    dates: "2001 - 2002",
                    description: "Integrated satellite command and control systems with visualization tools.",
                    bullets: [
                        "Integrated satellite command and control system (SCS-21) with NetExpert",
                        "Developed code using C++, CORBA, TCP/IP socket programming on Solaris",
                        "Demonstrated system to the Ministry of Defense in the United Kingdom",
                        "Developed Java client and UI for J2EE application, integrated with STK and ILOG JViews"
                    ]
                },
                {
                    name: "Multi-function Transport Satellite Based Augmentation System (MSAS)",
                    dates: "1998 - 2001",
                    description: "Designed, coded, and unit tested software for satellite systems.",
                    bullets: [
                        "Developed software for the MSAS system (UNIX, C programming)",
                        "Worked with SNMP and MIBs for monitoring network devices via custom software",
                        "Wrote and executed procedures for formal system test for the customer (NEC of Japan)",
                        "Supported system integration and test in Japan"
                    ]
                }
            ]
        },
        {
            id: "montgomery",
            company: "Montgomery College",
            role: "Adjunct Professor",
            dates: "2011",
            logo: "assets/montgomery_college.png",
            summary: "Shaping future software engineers through hands-on curriculum and mentorship",
            highlights: [
                "Taught introductory programming course covering C++ fundamentals and problem-solving",
                "Developed curriculum materials and provided extensive student mentorship"
            ],
            techStack: ["C++", "Visual Studio", "Teaching"],
            projects: [
                {
                    name: "CS140: Introduction to Programming and Problem Solving using C++",
                    dates: "Jan 2011 - May 2011",
                    description: "Taught introductory computer science course in the Computer Science and Information Interactive Technologies department.",
                    bullets: [
                        "Lectured weekly on the basics of programming concepts and problem-solving techniques",
                        "Created and evaluated labs, quizzes, and exams",
                        "Taught the process of creating, compiling, executing, and debugging programs in Microsoft Visual Studio",
                        "Spent extensive time before and after class teaching and mentoring students"
                    ]
                }
            ]
        }
    ],

    // Education
    education: [
        {
            school: "Johns Hopkins University",
            degree: "M.S. Computer Science",
            year: "2002",
            logo: "assets/images/jhu-logo.png",
            logoStyle: "width: auto; height: 70px;"
        },
        {
            school: "Carnegie Mellon University",
            degree: "B.S. Computer Science",
            minor: "Mathematics",
            year: "1998",
            logo: "assets/images/cmu-logo.svg"
        }
    ],

    // Certifications
    certifications: {
        cloud: [
            { name: "Certified Scrum Master", issuer: "Scrum Alliance", logo: "assets/images/scrum-logo.svg", detailsUrl: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster" },
            { name: "Certified Kubernetes Administrator (CKA)", issuer: "Cloud Native Computing Foundation", logo: "assets/images/cncf-logo.svg", detailsUrl: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/" },
            { name: "Certified Kubernetes Application Developer (CKAD)", issuer: "Cloud Native Computing Foundation", logo: "assets/images/cncf-logo.svg", detailsUrl: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/" },
            { name: "Certified Kubernetes Security Specialist (CKS)", issuer: "Cloud Native Computing Foundation", logo: "assets/images/cncf-logo.svg", detailsUrl: "https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/" },
            { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", logo: "assets/images/aws-logo.svg", detailsUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
            { name: "FAA Certified Remote Pilot (Part 107)", issuer: "Federal Aviation Administration", logo: "assets/images/faa-logo.svg", detailsUrl: "https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot" }
        ],
        architect: [
            { name: "Red Hat Certified OpenShift Architect Level II", issuer: "Red Hat", date: "November 2024", featured: true, logo: "assets/images/redhat-logo.svg", detailsUrl: "https://www.redhat.com/en/services/certification/red-hat-certified-openshift-architect" },
            { name: "Red Hat Certified Architect in Enterprise Applications Level II", issuer: "Red Hat", date: "November 2024", featured: true, logo: "assets/images/redhat-logo.svg", detailsUrl: "https://www.redhat.com/en/services/certification/rhca#for-rhcemds--rhccds" },
            { name: "Red Hat Certified Architect in Infrastructure Level III", issuer: "Red Hat", date: "August 2023", featured: true, logo: "assets/images/redhat-logo.svg", detailsUrl: "https://www.redhat.com/en/services/certification/rhca#for-rhces" }
        ],
        redhat: [
            { name: "Red Hat Certified Specialist in OpenShift AI", date: "November 2024", logo: "assets/images/redhat-logo.svg", detailsUrl: "https://www.redhat.com/en/services/certification/ex267-red-hat-certified-specialist-openshift-ai" },
            { name: "Red Hat Certified Cloud-native Developer", date: "November 2024", logo: "assets/images/redhat-logo.svg", detailsUrl: "https://www.redhat.com/en/services/certification/red-hat-certified-cloud-native-developer" },
            { name: "Red Hat Certified OpenShift Application Developer", date: "October 2024", logo: "assets/images/redhat-logo.svg", detailsUrl: "https://www.redhat.com/en/services/certification/rhcs-openshift-application-development" },
            { name: "Red Hat Certified Specialist in OpenShift Virtualization", date: "August 2024", logo: "assets/images/redhat-logo.svg", detailsUrl: "https://www.redhat.com/en/services/certification/red-hat-certified-specialist-openshift-virtualization" },
            { name: "Red Hat Certified Specialist in API Management", date: "August 2024", logo: "assets/images/redhat-logo.svg", detailsUrl: "https://www.redhat.com/en/services/certification/red-hat-certified-specialist-api-management" },
            { name: "Red Hat Certified Specialist in MultiCluster Management", date: "September 2023", logo: "assets/images/redhat-logo.svg", detailsUrl: "https://www.redhat.com/en/services/certification/red-hat-certified-specialist-multicluster-management" },
            { name: "Red Hat Certified Specialist in Service Mesh", date: "August 2023", logo: "assets/images/redhat-logo.svg", detailsUrl: "https://www.redhat.com/en/services/certification/rhcs-building-resilient-microservices" },
            { name: "Red Hat Certified Specialist in Enterprise Application Server Administration", date: "August 2023", logo: "assets/images/redhat-logo.svg", detailsUrl: "https://www.redhat.com/en/services/certification/rhcs-app-server-admin" },
            { name: "Red Hat Certified Engineer (RHCE)", date: "June 2019", logo: "assets/images/redhat-logo.svg", detailsUrl: "https://www.redhat.com/en/services/certification/rhce" },
            { name: "Red Hat Certified System Administrator (RHCSA)", date: "October 2015", logo: "assets/images/redhat-logo.svg", detailsUrl: "https://www.redhat.com/en/services/certification/rhcsa" }
        ]
    },

    // Verification links
    verificationLinks: [
        {
            title: "Credly Verification",
            url: "https://www.credly.com/users/khary-mendez/badges",
            icon: "medal",
            description: "View verified digital credentials and badges"
        },
        {
            title: "Red Hat Verify",
            url: "https://rhtapps.redhat.com/verify/?certId=150-047-298",
            icon: "redhat",
            iconSrc: "assets/images/redhat-logo.svg",
            description: "Official certification validation"
        }
    ],

    // Publications
    publications: [
        {
            title: "OpenShift Security Guide",
            type: "book",
            year: "2020",
            role: "Co-Author",
            url: "https://www.amazon.com/OpenShift-Security-Guide-Red-Hat-ebook/dp/B087YSL9L2",
            description: "Comprehensive guide addressing security considerations for Red Hat OpenShift, covering essential security practices, protocols, and best practices for enterprise container environments.",
            icon: "book"
        },
        {
            title: "Supercharging DevOps with OpenShift Container Storage",
            type: "video",
            year: "2018",
            publisher: "Red Hat",
            url: "https://www.youtube.com/watch?v=-GiPGLxZHEA",
            description: "Red Hat Consulting whiteboard video exploring how OpenShift Container Storage leverages Gluster to simplify and streamline application storage requests for microservices.",
            icon: "video"
        },
        {
            title: "Getting Started with OpenShift 4 Security",
            type: "video",
            year: "2020",
            publisher: "Red Hat",
            url: "https://www.youtube.com/watch?v=PHiUMcr5OuM",
            description: "Red Hat Consulting video describing security and compliance processes directly applicable to OpenShift 4 enterprise container platforms.",
            icon: "video"
        },
        {
            title: "Ansible & Red Hat JBoss AMQ 7",
            type: "video",
            year: "2018",
            publisher: "Red Hat",
            url: "https://www.youtube.com/watch?v=0bknoLTU6TM",
            description: "Red Hat Consulting walkthrough of high-availability architecture for AMQ 7, demonstrating Ansible deployment and Infrastructure as Code practices.",
            icon: "video"
        },
        {
            title: "Continuous Integration: Servers and Tools",
            type: "refcard",
            role: "Co-Author",
            publisher: "DZone",
            url: "https://dzone.com/refcardz/continuous-integration-servers",
            description: "DZone Refcard #087 covering CI/DevOps tooling, pipeline configuration with Jenkins, Gerrit, and Nexus, including a ready-to-use Docker container image.",
            icon: "refcard"
        }
    ],

    // Skills (aggregated from tech-badges across the site)
    skills: {
        platforms: ["OpenShift", "Kubernetes", "Linux", "RHEL", "AWS"],
        languages: ["Java", "Python", "Go", "C++", "Bash"],
        devops: ["Ansible", "ArgoCD", "Jenkins", "Tekton", "GitHub Actions", "GitLab CI"],
        middleware: ["JBoss EAP", "AMQ", "Kafka", "Fuse", "3scale"],
        other: ["Git", "Docker", "Prometheus", "Grafana", "Helm"]
    },

    // Impact Stories - methodology cards
    impactStories: {
        cards: [
            {
                id: "understand",
                frontEmoji: "🎯",
                frontTitle: "UNDERSTAND\nDEEPLY",
                frontHint: "Click to explore",
                backTitle: "Deep Understanding",
                backContent: "Joined a troubled engagement midway through with a frustrated government contractor. Did a complete reset—built their architecture diagram in real-time, asked probing questions that forced clarity, and uncovered the true need: optimizing their enterprise middleware for diverse deployment scenarios.",
                metrics: [
                    { icon: "📊", text: "40+ page tuning guide with optimization rubric" },
                    { icon: "🔄", text: "Complete customer turnaround in 2 weeks" },
                    { icon: "⭐", text: "\"Khary was phenomenal to work with\"" }
                ],
                showOnResume: true
            },
            {
                id: "multiply",
                frontEmoji: "👥",
                frontTitle: "MULTIPLY\nTHROUGH PEOPLE",
                frontHint: "Click to explore",
                backTitle: "Team Multiplication",
                backContent: "When onboarding customer teams, I have them do the work while I teach—building self-sufficiency so we can expand our footprint. Internally, I encouraged colleagues to present at our annual conference, submitted proposals on their behalf, and coached them through it. I mentor consultants and am a go-to resource for solving difficult problems.",
                metrics: [
                    { icon: "🎤", text: "Helped colleagues become conference speakers" },
                    { icon: "🚀", text: "New team members now leading migrations" },
                    { icon: "🤝", text: "Teams become self-sufficient, not dependent" }
                ],
                showOnResume: true
            },
            {
                id: "deliver",
                frontEmoji: "✨",
                frontTitle: "DELIVER\nRESULTS",
                frontHint: "Click to explore",
                backTitle: "Production Results",
                backContent: "When a customer literally laughed at OpenShift installation requirements, we plowed through—found champions, and now run successfully with a backlog of demand. On another engagement, discovered developers were .NET, not Java. Created learning resources, ran intensive sessions, and they delivered the middleware migration on a strict deadline.",
                metrics: [
                    { icon: "✅", text: "OpenShift running for years with growing demand" },
                    { icon: "🎓", text: "Upskilled entire team from zero to delivery" },
                    { icon: "🏆", text: "First successful engagement with that customer" }
                ],
                showOnResume: true
            }
        ]
    },

    // GitHub Projects
    projects: {
        items: [
            {
                id: "litra-driver",
                path: "~/projects/litra-driver",
                name: "Litra Driver",
                description: "Linux CLI and GUI for controlling Logitech Litra Glow & Beam lighting devices. Reverse-engineered USB protocols enable brightness and color temperature control without proprietary software. Originally built in Python, then rewritten in Go for improved performance.",
                languages: [
                    { name: "Python", dotClass: "python" },
                    { name: "Go", dotClass: "go" }
                ],
                stats: [
                    { type: "stars", value: "195+ stars", icon: "star" }
                ],
                features: ["USB Control", "CLI + GUI", "Reverse Engineering", "Cross-Platform"],
                links: [
                    { url: "https://github.com/kharyam/litra-driver", label: "Python Version", icon: "github" },
                    { url: "https://github.com/kharyam/go-litra-driver", label: "Go Version", icon: "github" }
                ]
            },
            {
                id: "openshift-networking",
                path: "~/projects/openshift-networking",
                name: "OpenShift Networking Presentation",
                description: "Interactive, web-based technical presentation on OpenShift networking. Features 20 animated slides, 12 interactive SVG diagrams with zoom/pan, presenter mode with speaker notes, and embedded live demos. Built with pure HTML5—no frameworks, no dependencies.",
                languages: [
                    { name: "HTML5 / SVG", dotClass: "html" }
                ],
                stats: [
                    { type: "info", value: "20 slides", icon: "plus" },
                    { type: "info", value: "12 diagrams", icon: "plus" }
                ],
                features: ["Interactive Diagrams", "Presenter Mode", "Live Demos", "AI-Assisted"],
                links: [
                    { url: "https://github.com/kharyam/openshift-networking-presentation", label: "View Source", icon: "github" },
                    { url: "https://kharyam.github.io/openshift-networking-presentation/", label: "Live Demo", icon: "external" }
                ]
            }
        ]
    },

    // Connect Links
    connectLinks: {
        items: [
            {
                id: "linkedin",
                url: "https://linkedin.com/in/kharymendez",
                icon: "💼",
                iconType: "emoji",
                label: "LinkedIn",
                description: "Professional network and career highlights"
            },
            {
                id: "github",
                url: "https://github.com/kharyam",
                icon: "💻",
                iconType: "emoji",
                label: "GitHub",
                description: "Open source projects and code samples"
            },
            {
                id: "kam-dynamics",
                url: "https://kamdynamics.com",
                icon: "assets/images/kam-logo.svg",
                iconType: "image",
                iconStyle: "height: 80px; width: auto; max-width: 120px;",
                label: "KAM Dynamics",
                description: "Drone videography & technology consulting"
            },
            {
                id: "resume",
                url: "resume.html",
                icon: "📄",
                iconType: "emoji",
                label: "Resume",
                description: "Multi-format resume generator"
            }
        ]
    },

    // Testimonials
    testimonials: [
        {
            quote: "Deep technical expertise across virtually all subject areas in Computer Science. His breadth and depth are impressive—Application Development, Infrastructure, Networking, Artificial Intelligence, DevOps. The go-to expert in all domains. His calm tone and humble attitude make him a pleasure to work with.",
            role: "Senior Technical Leader",
            context: "Enterprise Cloud Migration"
        },
        {
            quote: "In a project with misaligned scope and tight deadlines, he stepped in with less than two weeks remaining. Within a day, he was leading customer meetings with a calm demeanor that immediately put everyone at ease. We delivered a comprehensive solution that exceeded expectations.",
            role: "Project Lead",
            context: "Complex Enterprise Engagement"
        },
        {
            quote: "He finds a way to support many people without overstepping. Always makes himself available while letting us complete our work. When a blocker comes up, we know he'll dive into difficult technical solutions.",
            role: "Senior Consultant",
            context: "Platform Team"
        },
        {
            quote: "Technically very strong and always willing to help. When I took on a new technology I had little experience with, he encouraged me to take the additional responsibility and supported me every step of the way.",
            role: "Consultant",
            context: "Application Migration"
        },
        {
            quote: "Has the complete trust of the customer because of his focus on their success and ability to build relationships. When we presented the plan for him to step into the architect role, the customer expressed no concerns whatsoever.",
            role: "Engagement Manager",
            context: "Federal Agency"
        },
        {
            quote: "Seamlessly stepped into a larger role, picked up leadership of critical workstreams, and proactively comes up with solutions. He exceeded expectations in every way.",
            role: "Team Lead",
            context: "Application Services"
        }
    ]
};

// Export for use in both browser and module contexts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RESUME_DATA;
}
