import {
  Users,
  Target,
  Heart,
  LinkedinIcon,
  TwitterIcon,
  GraduationCap,
  BookOpen,
  Award,
  Globe,
  ClipboardCheck as ChalkboardTeacher,
  BrainCircuit,
  Briefcase,
  Building2,
  GraduationCap as Education,
} from "lucide-react";

const About = () => {
  const leaders = [
    {
      name: "Prince John",
      role: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "With over 15 years of experience in EdTech, Prince has been instrumental in revolutionizing educational technology across Africa. His vision for NEXT stems from a deep-rooted belief in making quality education management accessible to all institutions.",
      achievements: [
        "Led 3 successful EdTech startups",
        "Forbes 30 Under 30 in Education",
        "World Economic Forum Young Global Leader",
      ],
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Tobi Ajayi",
      role: "Chief Operating Officer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      bio: "Tobi brings 12 years of operational excellence to NEXT, previously scaling educational platforms across multiple countries. His focus on efficiency and user experience has transformed how schools interact with management software.",
      achievements: [
        "Scaled operations across 15 countries",
        "Harvard Business Review contributor",
        "EdTech Innovation Award 2023",
      ],
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Daniel Eromonsele",
      role: "Chief Marketing Officer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "Daniel's innovative marketing strategies have helped position NEXT as a leading educational management platform. With a background in both education and technology, he understands the unique challenges schools face.",
      achievements: [
        "20+ years in EdTech marketing",
        "TEDx speaker on Digital Education",
        "Author of 'Future of Learning'",
      ],
      linkedin: "#",
      twitter: "#",
    },
  ];

  const milestones = [
    {
      year: 2018,
      title: "Foundation",
      description:
        "NEXT was founded with a vision to transform education management",
      icon: BookOpen,
    },
    {
      year: 2019,
      title: "First Partnership",
      description: "Launched pilot program with 10 leading schools",
      icon: ChalkboardTeacher,
    },
    {
      year: 2020,
      title: "Global Expansion",
      description: "Expanded operations to 5 countries",
      icon: Globe,
    },
    {
      year: 2021,
      title: "Innovation Award",
      description: "Received Global EdTech Innovation Award",
      icon: Award,
    },
    {
      year: 2022,
      title: "AI Integration",
      description: "Launched AI-powered learning analytics",
      icon: BrainCircuit,
    },
    {
      year: 2023,
      title: "Enterprise Growth",
      description: "Partnered with 200+ institutions globally",
      icon: Building2,
    },
  ];

  const partnerships = [
    {
      name: "UNESCO",
      description: "Official partner for digital education initiatives",
      icon: Education,
    },
    {
      name: "World Bank",
      description: "Strategic partner for educational development",
      icon: Briefcase,
    },
    {
      name: "Microsoft Education",
      description: "Technology integration partner",
      icon: GraduationCap,
    },
  ];

  return (
    <div>
      <div className="pt-20">
        {/* Vision & Mission Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
              Transforming Education Management
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              At NEXT, we're committed to revolutionizing how educational
              institutions operate, making administration simpler and learning
              more effective.
            </p>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg flex items-center justify-center">
                  <Target className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the global leader in educational management solutions,
                  empowering institutions to deliver excellence in education.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg flex items-center justify-center">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide innovative, user-friendly management tools that
                  streamline educational operations and enhance learning
                  outcomes.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg flex items-center justify-center">
                  <Heart className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Innovation, integrity, and inclusivity guide everything we do
                  as we work to transform education management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Journey Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Our Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div key={index} className="flex mb-8 last:mb-0">
                    <div className="flex flex-col items-center mr-8">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      {index !== milestones.length - 1 && (
                        <div className="w-px h-full bg-blue-200 my-2" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {milestone.year}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Meet Our Leadership Team
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {leaders.map((leader) => (
                <div
                  key={leader.name}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-blue-600 mb-4">{leader.role}</p>
                    <p className="text-gray-600 mb-6">{leader.bio}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {leader.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={leader.linkedin}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <LinkedinIcon className="h-6 w-6" />
                      </a>
                      <a
                        href={leader.twitter}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <TwitterIcon className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Partnerships */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Strategic Partnerships
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {partnerships.map((partner, index) => {
                const Icon = partner.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <Icon className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{partner.name}</h3>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-white">
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-2">2018</h3>
                <p className="text-blue-100">Founded</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-2">50+</h3>
                <p className="text-blue-100">Team Members</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-2">10+</h3>
                <p className="text-blue-100">Countries</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-2">1M+</h3>
                <p className="text-blue-100">Users Served</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
