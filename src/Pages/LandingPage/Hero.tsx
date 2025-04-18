import { useState } from "react";
import {
  Users,
  Calendar,
  Award,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  School,
  UserCheck,
  BookCheck,
  Clock,
  BrainCircuit,
  ClipboardCheck as ChalkboardTeacher,
  Building,
  PieChart,
  BarChart,
  TrendingUp,
  Lightbulb,
  BookOpenCheck,
  Newspaper,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const achievements = [
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      title: "Digital Learning Excellence",
      description:
        "Transformed over 1000 classrooms into digital learning hubs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
      title: "Student Success Stories",
      description:
        "Improved student engagement by 85% across partner institutions",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      title: "Administrative Efficiency",
      description:
        "Reduced administrative workload by 60% for our partner schools",
    },
  ];

  const blogPosts = [
    {
      title: "10 Best Practices for School Administration",
      description:
        "Learn how to streamline your administrative processes and improve efficiency.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      category: "Administration",
      readTime: "5 min read",
    },
    {
      title: "The Future of Educational Technology",
      description:
        "Discover emerging trends in EdTech and how they're shaping modern education.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      category: "Technology",
      readTime: "7 min read",
    },
    {
      title: "Improving Student Engagement",
      description:
        "Strategies for keeping students motivated and engaged in the digital age.",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
      category: "Student Success",
      readTime: "6 min read",
    },
  ];

  const howItWorks = [
    {
      icon: BookOpenCheck,
      title: "Sign Up",
      description: "Create your school's account and set up your profile",
    },
    {
      icon: Users,
      title: "Add Users",
      description: "Invite administrators, teachers, and students to join",
    },
    {
      icon: Calendar,
      title: "Configure",
      description: "Set up your academic calendar and customize settings",
    },
    {
      icon: Lightbulb,
      title: "Start Managing",
      description: "Begin using the platform's features to manage your school",
    },
  ];

  const faqs = [
    {
      question: "How does EduManage help administrators?",
      answer:
        "EduManage provides comprehensive tools for administrative tasks including student enrollment management, staff scheduling, resource allocation, and detailed analytics for data-driven decision making.",
    },
    {
      question: "What features are available for teachers?",
      answer:
        "Teachers can access grade management, attendance tracking, lesson planning tools, student performance analytics, and parent communication channels all in one platform.",
    },
    {
      question: "How can students benefit from EduManage?",
      answer:
        "Students get access to their schedules, assignments, grades, and learning resources. They can also participate in online discussions and submit work digitally.",
    },
    {
      question: "Is EduManage suitable for all school sizes?",
      answer:
        "Yes! EduManage is scalable and can be customized for institutions of any size, from small private schools to large university campuses.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + achievements.length) % achievements.length
    );
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your School Management
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Streamline administration, enhance communication, and improve
                learning outcomes with our comprehensive school management
                platform.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center">
                Start Free Trial
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                alt="Students learning"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < howItWorks.length - 1 && (
                    <ArrowRight className="absolute top-1/4 -right-4 h-8 w-8 text-blue-300 hidden md:block" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Demo Video */}
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-xl">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/your-video-id?autoplay=1&mute=1"
                title="Platform Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <GraduationCap className="h-12 w-12" />
              </div>
              <h3 className="text-4xl font-bold mb-2">50K+</h3>
              <p className="text-blue-100">Students Empowered</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <School className="h-12 w-12" />
              </div>
              <h3 className="text-4xl font-bold mb-2">200+</h3>
              <p className="text-blue-100">Partner Schools</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <UserCheck className="h-12 w-12" />
              </div>
              <h3 className="text-4xl font-bold mb-2">95%</h3>
              <p className="text-blue-100">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BookCheck className="h-12 w-12" />
              </div>
              <h3 className="text-4xl font-bold mb-2">1M+</h3>
              <p className="text-blue-100">Assignments Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features for Modern Education
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Student Management</h3>
              <p className="text-gray-600">
                Efficiently manage student records, attendance, and performance
                tracking.
              </p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Schedule Planning</h3>
              <p className="text-gray-600">
                Create and manage class schedules, events, and academic
                calendar.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Grade Management</h3>
              <p className="text-gray-600">
                Record and analyze student grades with advanced reporting tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Blog & Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-blue-600">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <a
                    href="#"
                    className="text-blue-600 font-semibold inline-flex items-center"
                  >
                    Read More
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Role Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Empowering Every Educational Role
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">For Administrators</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-blue-600" />
                  Data-driven decision making
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Automated scheduling
                </li>
                <li className="flex items-center">
                  <BarChart className="h-5 w-5 mr-2 text-blue-600" />
                  Resource management
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <ChalkboardTeacher className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">For Teachers</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <BookCheck className="h-5 w-5 mr-2 text-blue-600" />
                  Lesson planning tools
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  Student progress tracking
                </li>
                <li className="flex items-center">
                  <Newspaper className="h-5 w-5 mr-2 text-blue-600" />
                  Parent communication
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <BrainCircuit className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">For Students</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Schedule management
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Performance analytics
                </li>
                <li className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-blue-600" />
                  Achievement tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Slider Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Impact in Education
          </h2>
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div className="relative">
                <img
                  src={achievements[currentSlide].image}
                  alt={achievements[currentSlide].title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {achievements[currentSlide].title}
                  </h3>
                  <p className="text-white/90">
                    {achievements[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Educators Say
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">
                "EduManage has revolutionized how we handle administrative
                tasks. It's intuitive and saves us countless hours every week."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Principal Sarah"
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-gray-500">
                    Principal, Lincoln High School
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">
                "The platform has made it so much easier to track student
                progress and communicate with parents effectively."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Teacher Michael"
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-gray-500">Teacher, Riverside Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      activeFaq === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
