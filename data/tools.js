export const tools = [
  {
    name: 'Algolia',
    slug: 'algolia',
    industry: 'Search API',
    stage: '$2.25bn valuation',
    image: '/img/algolia.png',
    description: 'Algolia is a hosted search API. Founded in October 2012 by Nicolas Dessaigne and Julien Lemoine. In 2023, they raised $150m at a $2.25bn valuation.',
    strategies: [
      'Products as marketing (e.g. hacker news search)',
      'Free Algolia search for developer docs',
      'Startup program with free credits',
      'Being recommended within docs by other tools e.g. Firebase',
      'Landing pages for every category and use case',
      'Direct sales - reaching out directly to companies that have a bad search experience',
      'Ambassador program (this is how I first heard about Algolia)',
    ],
    interviews: [
      {
        title: 'Interview with Natwar Maheshwari - PLG Director at Algolia',
        points: [
          'Getting started with developer marketing',
          'Importance of an experimental culture',
          'Use the expertise around you',
          'Brand building',
        ],
        src: 'https://share.transistor.fm/e/41ce151c'
      },
      {
        title: 'Interview with Julie Reboul - Senior Developer Marketer at Algolia',
        points: [
          'Cultivating a community of trust',
          'Co-marketing at Algolia',
          'Ambassador program at Algolia',
        ],
        src: 'https://share.transistor.fm/e/8a69e80d'
      }
    ],
    more: [
      { title: 'Company culture with Nicolas Dessagine', url: 'https://www.youtube.com/watch?v=jbjeSKOHvj8&ab_channel=SaaStock' },
      { title: 'Developers should do one day of support per month', url: 'https://www.youtube.com/watch?app=desktop&v=1Z6VDuQhthY&embeds_referring_euri=https%3A%2F%2Fblog.getlatka.com%2F&feature=emb_imp_woyt&ab_channel=NathanLatka' }
    ],
    links: [
      { name: 'Website', url: 'https://www.algolia.com/' },
      { name: 'Documentation', url: 'https://www.algolia.com/doc/' }
    ],
    stats: [
      { name: 'Type', value: 'Search API' },
      { name: 'Founded', value: '2013' },
      { name: 'Funding', value: '$150,000,000' },
      { name: 'Valuation (2023)', value: '$2,250,000,000' },
    ]
  },
  {
    name: 'Supabase',
    slug: 'supabase',
    industry: 'Database, Auth, Storage',
    stage: '$116m funding',
    image: '/img/supabase.svg',
    description: 'Supabase is an open source Firebase alternative. Postgres database, Authentication, Edge Functions, Storage, and Vector embeddings. Founded in January 2020 by Ant Wilson and Paul Copplestone. They\'ve raised $116m to date.',
    strategies: [
      'Positioning themselves as open source Firebase - it was a turning point in the journey',
      'Social media - especially Twitter (90k+ followers), especially memes. They\'re funny.',
      'Launch weeks - they just did their 9th launch week with community events in multiple cities',
      'Regular appearances on Hacker News frontpage & multiple successful Product Hunt launches (6000+ upvotes across 11 launches)',
      'Community - Supabase is definitely an identity for a lot of developers & has spawned Supabase-specific builders & content creators',
    ],
    interviews: [
      {
        title: 'Interview with Supabase founder Ant Wilson',
        points: [
          'How the Launchpad book showed Ant that building a company is possible',
          'Product Market Fit is always just a pivot away',
          'Differences between pre-PMF and post-PMF',
          'How Supabase stay on top of and prioritise huge volumes of product feedback',
          'How Supabase positions itself to hobbyists/startups and bigger enterprise companies - DX and scalability.',
          'Supabase\'s Twitter strategy',
          'Trial & error in marketing',
          'How does Supabase measure marketing?',
          'Spaced repetition in marketing',
          'Databases are very sticky',
          'The future of Supabase',
          'The difficulties of hiring non-technical people (Supabase is hiring!)',
        ],
        src: 'https://share.transistor.fm/e/22086486',
        quote: {
          text: 'you have to try every channel and every strategy to know what works',
          author: 'Ant Wilson',
        }
      },
      {
        title: 'Interview with Supabase\'s first marketer Ramiro Nuñez Dosio',
        points: [
          'The Supabase marketing approach',
          'Launch weeks at Supabase',
          'Keeping focus',
          'Marketing processes',
          'How to measure success',
          'How to distribute content',
        ],
        src: 'https://share.transistor.fm/e/20c8ebe7'
      }
    ],
    more: [
      { title: 'Interview with CEO Paul Copplestone talks about the positioning vs Firebase', url: 'https://oss-startup-podcast.launchnotes.io/announcements/episode-43-building-supabase-the-open-source-firebase-alternative' },
      { title: 'Supabase founders talking about how they hire', url: 'https://www.youtube.com/watch?v=-BG9XptyCKI&ab_channel=Supabase' },
      { title: 'Q&A with Ant Wilson', url: 'https://www.youtube.com/watch?v=3VDfjOZd27Y&ab_channel=Founderopedia' },
      { title: 'The Launchpad book - Ant\'s favourite book', url: 'https://www.amazon.co.uk/Launch-Pad-Combinator-Exclusive-Startups/dp/0670923494' },
      { title: 'How Supabase does Twitter marketing (very detailed breakdown)', url: 'https://www.developermarkepear.com/blog/developer-marketing-twitter' },
      { title: 'Supabase happy hour - Paul covers some of the history of Supabase', url: 'https://youtube.com/watch?v=_k7GqVDSFvw&ab_channel=Supabase' },
      { title: 'Interview with Paul - mostly on Supabase\'s relationship with Open Source', url: 'https://www.youtube.com/watch?v=oik5fY6b6GM&ab_channel=OpenSauced' }
    ],
    links: [
      { name: 'Website', url: 'https://supabase.com' },
      { name: 'GitHub Repository', url: 'https://github.com/supabase/supabase' },
      { name: 'Documentation', url: 'https://supabase.com/docs' }
    ],
    stats: [
      { name: 'Type', value: 'Database, Auth, Storage' },
      { name: 'Founded', value: '2020' },
      { name: 'Funding', value: '$116,000,000' },
      { name: 'Valuation (2023)', value: 'N/A' },
    ]
  },
  {
    name: 'Clerk',
    slug: 'clerk',
    industry: 'Authentication API',
    stage: '$29m funding',
    image: '/img/clerklogo.jpeg',
    description: 'Clerk is an authentication API that focuses on providing UI out the box, particularly for JavaScript developers. Founded in June 2019 by brothers Colin Sidoti and Braden Sidoti - originally as a rails gem. Clerk has raised $29m to date.',
    strategies: [
      'DevEx - drop a component & get a signup screen. Has to be faster than free, open source alternatives.',
      'Helping with compliance - e.g. NIST 80063B',
      'Growing with Jamstack - Clerk has tailored its offering to jamstack developers and always has up-to-date UI and docs for react',
      'Sponsorship/influence - in the early days, tweets from Guillermo Rauch helped and now Clerk sponsors technical content creators like Theo and Traversy Media. It works extra well because people like their product.',
    ],
    interviews: [
      {
        title: 'Interview with Colin Sidoti, Cofounder of Clerk',
        points: [
          'What does it look like if we give everything out the box?',
        ],
        src: 'https://share.transistor.fm/e/6b72a0a1',
        quote: {
          text: 'What does it look like if we give everything out the box?',
          author: 'Colin Sidoti, Clerk',
        }
      }
    ],
    more: [
      {
        title: 'The pivot - from rails gem to jamstack',
        description: 'Colin & Braden originally built a rails gem but they quickly pivoted to building for the jamstack community after discovering they were much more excited about drop-in authentication.',
        image: '/img/clerk.jpeg',
      }
    ],
    links: [
      { name: 'Website', url: 'https://clerk.com/' },
    ],
    stats: [
      { name: 'Type', value: 'Authentication API' },
      { name: 'Founded', value: '2019' },
      { name: 'Funding', value: '$29,000,000' },
    ]
  },
  {
    name: 'Polypane',
    slug: 'polypane',
    industry: 'Browser',
    stage: 'Bootstrapped',
    image: '/img/polypane.jpeg',
    description: 'Polypane is a browser built specifically for developers. Founded in March 2019 by indie developer Kilian Valkhof. Polypane is bootstrapped and profitable.',
    strategies: [
      'Great email onboarding process',
      'Kilian\'s personal Twitter brand',
      'Great case studies',
    ],
    interviews: [
      {
        title: 'Interview with Kilian Valkhof, Founder of Polypane',
        points: [
          'I did everything wrong in email marketing but now it works',
        ],
        src: 'https://share.transistor.fm/e/c0aef212',
        quote: {
          text: 'I did everything wrong in email marketing but now it works',
          author: 'Kilian Valkhof, Polypane',
        }
      }
    ],
    more: [
      {
        title: 'Deep dive on Polypane\'s email onboarding',
        points: [
          'The marketing expert\'s strategies didn\'t work',
          'Two types of emails during the trial: 1. status updates (e.g. you\'re halfway through)  2. information gathering',
          'Ask them why they don\'t convert after the trial (frequently they just didn\'t get time to try it)',
          'I purposely don\'t design the emails well. They are simple.',
          'Email responses go directly to Kilian',
          'New cadence is an order of magnitude better than initial state',
        ],
      },
      {
        title: 'Cadence of email onboarding',
        points: [
          'One day after: How to get the best out of your Polypane trial (getting started tutorial & video)',
          'A few days in: Quick question - let me know what you like/don\'t like',
          'Halfway - email with customer testimonial. Good testimonials e.g. what takes 30 mins in Chrome takes 6 mins in Polypane.',
          '3 days before - reminder it\'s almost over and option to extend it',
          '24 hours left - link them to an ROI calculator to justify Polypane or realise they can ask their employer',
          'Trial ended - another email trial ended, here\'s a link to subscribe',
          '2 weeks out - if anything missing let me know',
          '3 weeks out - here\'s what we\'ve done since you\'ve been gone',
        ],
      }
    ],
    links: [
      { name: 'Website', url: 'https://polypane.app/' },
    ],
    stats: [
      { name: 'Type', value: 'Browser' },
      { name: 'Founded', value: '2019' },
      { name: 'Stage', value: 'Bootstrapped' },
      { name: 'Location', value: 'Amsterdam' },
    ]
  },
  {
    name: 'FusionAuth',
    slug: 'fusion-auth',
    industry: 'Identity and Access Management',
    stage: '$65m funding',
    image: '/img/fusionauth.png',
    description: 'FusionAuth is an open source, developer-focused identity and access management platform. Founded in 2018 by Brian Pontarelli and Daniel DeGroff. It span out of CleanSpeak - a profanity filter and moderation platform. Today FusionAuth has around 30 employees and seven-figure revenue and recently raised $65mn after being bootstrapped for years.',
    strategies: [
      'Not an OSS product, but "free as in beer" w/o being overly restricted',
      'Docs investment',
      'Comparison/migration docs/pages to market leaders',
      'Advertising (newsletters)',
      'Content marketing: non-vendor content (/articles) e.g. sponsoring Screaming Into The Cloud',
      'Use forums instead of Slack',
    ],
    interviews: [
      {
        title: 'Interview with Dan Moore, Head of DevRel at FusionAuth',
        points: [
          'Don\'t use Slack, use a forum.',
        ],
        src: 'https://share.transistor.fm/e/4411a461',
        quote: {
          text: 'Don\'t use Slack, use a forum.',
          author: 'Dan Moore, Head of DevRel',
        }
      }
    ],
    more: [
      {
        title: 'Fusion\'s pivot',
        points: [
          'The founders used their previous company CleanSpeak to fund FusionAuth',
          'Their first customer reached out to them after finding an article they wrote about "a new player in town". And comparing themselves to Auth0 etc.',
        ],
      }
    ],
    links: [
      { name: 'Website', url: 'https://fusionauth.io/' },
      { name: 'GitHub Repository', url: 'https://github.com/fusionauth' },
    ],
    stats: [
      { name: 'Type', value: 'Identity and Access Management' },
      { name: 'Founded', value: '2018' },
      { name: 'Funding', value: '$65,000,000' },
      { name: 'Location', value: 'Colorado/Remote' },
    ]
  },
  {
    name: 'DevCycle',
    slug: 'devcycle',
    industry: 'Feature Flag Management',
    stage: '$5m funding',
    image: '/img/devcycle.png',
    description: 'DevCycle is a feature flag management tool. Founded in 2014 originally as Taplytics (an A/B testing tool) by Jonathan Norris, Aaron Glazer, Andrew Norris and Cobi Druxeman, raising $7.8m. Despite creating a million-dollar business, in 2022, they raised $5m and pivoted to DevCycle.',
    strategies: [
      'Focus on developer experience',
      'Developing an open source standard SDK',
    ],
    interviews: [
      {
        title: 'Interview with Jonathan Norris, Brad Van Vugt and Andrew MacLean',
        points: [
          'It\'s not about building the flashiest and most marketable features',
        ],
        src: 'https://share.transistor.fm/e/20d02990',
        quote: {
          text: 'It\'s not about building the flashiest and most marketable features',
          author: 'Jonathan Norris, DevCycle',
        }
      }
    ],
    more: [
      {
        title: 'Managing a pivot',
        points: [
          'Have good relationships with your big customers',
          'Ensure continuity for your customers',
        ],
        url: '../blog/devcycle-pivoting-story.html',
      },
      {
        title: 'What is developer experience?',
        points: [
          'It\'s not about building the flashiest and most marketable features.',
          'It\'s about continually iterating on the core features.',
          'Open-source & standardise interfaces',
        ],
      }
    ],
    links: [
      { name: 'Website', url: 'https://devcycle.com/' },
    ],
    stats: [
      { name: 'Type', value: 'Feature Flag Management' },
      { name: 'Founded', value: '2014' },
      { name: 'Funding', value: '$5,000,000' },
      { name: 'Location', value: 'Toronto/Remote' },
    ]
  },
  {
    name: 'StreamPot',
    slug: 'streampot',
    industry: 'Video Processing API',
    stage: 'Early stage',
    image: '/img/streampot.svg', 
    description: "StreamPot is a video processing API that allows you to run FFmpeg in production without the hassle. It's a game-changer for developers who need to process videos in production but don't want to deal with the complexity of running FFmpeg themselves.",
    strategies: [
      'Writing articles on dev.to to attract initial users',
      'Sharing the product on Reddit to gain traction',
      'Focusing on developer experience with an easy-to-use API',
      'Addressing a common pain point (difficulty in using FFmpeg in production)',
    ],
    interviews: [], 
    more: [
      {
        title: 'Origin of StreamPot',
        points: [
          'Idea born from founders\' frustration with running FFmpeg in production environments',
          'Aims to simplify programmatic media file processing',
        ],
      }
    ],
    links: [
      { name: 'StreamPot', url: 'https://streampot.io/' }, 
    ],
    stats: [
      { name: 'Type', value: 'Video Processing API' },
      { name: 'Founded', value: '2024' },
      { name: 'Stage', value: 'Early stage' },
      { name: 'Founders', value: 'Jack Bridger, Ostap Brehin' },
    ]
  },
  {
    name: 'CometChat',
    slug: 'cometchat',
    industry: 'Chat/Voice/Video APIs',
    stage: '$5m funding',
    image: 'https://www.muvi.com/wp-content/uploads/2023/02/1675944466-cometchat_logo.png',
    description: 'CometChat is a comprehensive communication solution that empowers businesses to seamlessly integrate real-time chat, voice, and video calling features into their applications and websites.',
    strategies: [
      'Focus on docs experience',
      'Developing a feature-rich UIKit',
      'Landing pages for every industry and use case',
      'Startup program with 50% off',
      'Focus on email onboarding',
      'Comparison/migration docs/pages to PMs and Devs',
    ],
    interviews: [
    
    ],
    more: [

    ],
    links: [
      { name: 'Website', url: 'https://www.cometchat.com/' },
    ],
    stats: [
      { name: 'Type', value: 'Chat/Voice/Video APIs' },
      { name: 'Founded', value: '2009' },
      { name: 'Funding', value: '$5,000,000' },
      { name: 'Location', value: 'Denver' },
    ]
  },
];
