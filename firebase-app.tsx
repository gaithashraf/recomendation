import React, { useState, useEffect } from 'react';
import { Book, LineChart, PenTool, User } from 'lucide-react';
import { LineChart as RechartLineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const initialData = {
  courses: [
    { id: 1, title: 'Mathematics 101', instructor: 'Dr. Smith', progress: 75 },
    { id: 2, title: 'Physics Fundamentals', instructor: 'Prof. Johnson', progress: 45 },
    { id: 3, title: 'Computer Science Basics', instructor: 'Dr. Williams', progress: 90 }
  ],
  grades: [
    { id: 1, courseId: 1, score: 85, courseName: 'Mathematics 101' },
    { id: 2, courseId: 2, score: 78, courseName: 'Physics Fundamentals' },
    { id: 3, courseId: 3, score: 92, courseName: 'Computer Science Basics' }
  ],
  recommendations: [
    { id: 1, title: 'Advanced Calculus Tutorial', description: 'Recommended based on your Math performance' },
    { id: 2, title: 'Physics Lab Simulation', description: 'Interactive physics experiments' }
  ],
  examStats: [
    { subject: 'Mathematics', passed: 85, failed: 15 },
    { subject: 'Physics', passed: 75, failed: 25 },
    { subject: 'Computer Science', passed: 90, failed: 10 }
  ],
  progressData: [
    { month: 'Jan', Mathematics: 65, Physics: 45, ComputerScience: 78 },
    { month: 'Feb', Mathematics: 70, Physics: 52, ComputerScience: 82 },
    { month: 'Mar', Mathematics: 75, Physics: 58, ComputerScience: 85 },
    { month: 'Apr', Mathematics: 78, Physics: 62, ComputerScience: 88 },
    { month: 'May', Mathematics: 82, Physics: 68, ComputerScience: 90 }
  ]
};

const Navigation = ({ setCurrentPage }) => (
  <nav className="bg-slate-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">EduPlatform</div>
      <div className="flex space-x-6">
        <button onClick={() => setCurrentPage('dashboard')} className="flex items-center space-x-2 hover:text-blue-300">
          <User size={20} />
          <span>Dashboard</span>
        </button>
        <button onClick={() => setCurrentPage('courses')} className="flex items-center space-x-2 hover:text-blue-300">
          <Book size={20} />
          <span>Courses</span>
        </button>
        <button onClick={() => setCurrentPage('exams')} className="flex items-center space-x-2 hover:text-blue-300">
          <PenTool size={20} />
          <span>Exams</span>
        </button>
        <button onClick={() => setCurrentPage('progress')} className="flex items-center space-x-2 hover:text-blue-300">
          <LineChart size={20} />
          <span>Progress</span>
        </button>
      </div>
    </div>
  </nav>
);

const Dashboard = () => {
  const [recommendations] = useState(initialData.recommendations);
  const [grades] = useState(initialData.grades);
  const [progressData] = useState(initialData.progressData);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Personal Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="Mathematics" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="Physics" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="ComputerScience" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Grades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={grades}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="courseName" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recommended Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map(rec => (
              <div key={rec.id} className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
                <h3 className="font-semibold">{rec.title}</h3>
                <p className="text-gray-600">{rec.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Courses = () => {
  const [courses] = useState(initialData.courses);
  const [progressData] = useState(initialData.progressData);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Course Progress Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartLineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Mathematics" stroke="#8884d8" />
                <Line type="monotone" dataKey="Physics" stroke="#82ca9d" />
                <Line type="monotone" dataKey="ComputerScience" stroke="#ffc658" />
              </RechartLineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <Card key={course.id}>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Book className="w-8 h-8 text-blue-500" />
                <CardTitle>{course.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <p className="text-right mt-2 text-sm text-gray-600">{course.progress}% Complete</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ExamQuestion = ({ question, selectedAnswers, onAnswerSelect, showResults }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg">{question.text}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <div 
              key={index} 
              className={`p-3 border rounded cursor-pointer transition-colors
                ${selectedAnswers[question.id] === option ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'}
                ${showResults ? 
                  option === question.correctAnswer ? 'border-green-500 bg-green-50' :
                  selectedAnswers[question.id] === option ? 'border-red-500 bg-red-50' : ''
                  : ''
                }`}
              onClick={() => !showResults && onAnswerSelect(question.id, option)}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center
                  ${selectedAnswers[question.id] === option ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300'}
                `}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span>{option}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const Exams = () => {
  const [examStats] = useState(initialData.examStats);
  const [activeExam, setActiveExam] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const exams = [
    {
      id: 1,
      title: 'Mathematics Midterm',
      duration: 3600,
      subject: 'Mathematics',
      questions: [
        {
          id: 1,
          text: 'What is the derivative of x²?',
          options: ['x', '2x', '2', 'x²'],
          correctAnswer: '2x'
        },
        {
          id: 2,
          text: 'Solve for x: 2x + 5 = 13',
          options: ['x = 4', 'x = 8', 'x = 3', 'x = 6'],
          correctAnswer: 'x = 4'
        },
        {
          id: 3,
          text: 'What is the integral of 2x?',
          options: ['x²', 'x² + C', '2x² + C', 'x'],
          correctAnswer: 'x² + C'
        }
      ]
    },
    {
      id: 2,
      title: 'Physics Quiz',
      duration: 1800,
      subject: 'Physics',
      questions: [
        {
          id: 1,
          text: 'What is the unit of force?',
          options: ['Newton', 'Joule', 'Watt', 'Pascal'],
          correctAnswer: 'Newton'
        },
        {
          id: 2,
          text: 'What is the acceleration due to gravity on Earth?',
          options: ['9.8 m/s²', '10 m/s²', '8.9 m/s²', '11 m/s²'],
          correctAnswer: '9.8 m/s²'
        }
      ]
    }
  ];

  useEffect(() => {
    let timer;
    if (activeExam && timeLeft > 0 && !showResults) {
      timer = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            clearInterval(timer);
            submitExam();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [activeExam, timeLeft, showResults]);

  const startExam = (exam) => {
    setActiveExam(exam);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setTimeLeft(exam.duration);
    setShowResults(false);
  };

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const submitExam = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    if (!activeExam) return 0;
    const totalQuestions = activeExam.questions.length;
    const correctAnswers = activeExam.questions.filter(
      q => selectedAnswers[q.id] === q.correctAnswer
    ).length;
    return Math.round((correctAnswers / totalQuestions) * 100);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Exams</h1>
      
      {!activeExam ? (
        <>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Exam Performance Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={examStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="passed" stackId="a" fill="#82ca9d" name="Passed" />
                    <Bar dataKey="failed" stackId="a" fill="#ff8042" name="Failed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map(exam => (
              <Card key={exam.id}>
                <CardHeader>
                  <CardTitle>{exam.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Duration: {formatTime(exam.duration)}</p>
                  <p className="text-gray-600 mb-4">Questions: {exam.questions.length}</p>
                  <button
                    onClick={() => startExam(exam)}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                  >
                    Start Exam
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <div className="max-w-3xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{activeExam.title}</CardTitle>
                <div className={`text-lg font-semibold ${timeLeft < 300 ? 'text-red-500' : ''}`}>
                  Time Left: {formatTime(timeLeft)}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {!showResults ? (
                <>
                  <div className="mb-6">
                    <p className="text-gray-600 mb-2">
                      Question {currentQuestionIndex + 1} of {activeExam.questions.length}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${((currentQuestionIndex + 1) / activeExam.questions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <ExamQuestion
                    question={activeExam.questions[currentQuestionIndex]}
                    selectedAnswers={selectedAnswers}
                    onAnswerSelect={handleAnswerSelect}
                    showResults={false}
                  />

                  <div className="flex justify-between mt-6">
                    <button
                      onClick={() => setCurrentQuestionIndex(i => Math.max(0, i - 1))}
                      disabled={currentQuestionIndex === 0}
                      className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    {currentQuestionIndex === activeExam.questions.length - 1 ? (
                      <button
                        onClick={submitExam}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        Submit Exam
                      </button>
                    ) : (
                      <button
                        onClick={() => setCurrentQuestionIndex(i => Math.min(activeExam.questions.length - 1, i + 1))}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Next
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div>
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-2">Exam Complete!</h2>
                    <p className="text-xl">Your Score: {calculateScore()}%</p>
                  </div>

                  {activeExam.questions.map((question, index) => (
                    <ExamQuestion
                      key={question.id}
                      question={question}
                      selectedAnswers={selectedAnswers}
                      onAnswerSelect={() => {}}
                      showResults={true}
                    />
                  ))}

                  <button
                    onClick={() => setActiveExam(null)}
                    className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Return to Exam List
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

const Progress = () => {
  const [progressData] = useState(initialData.progressData);
  const skillsData = [
    { subject: 'Problem Solving', Mathematics: 80, Physics: 65, ComputerScience: 90 },
    { subject: 'Theory', Mathematics: 75, Physics: 70, ComputerScience: 85 },
    { subject: 'Practical', Mathematics: 70, Physics: 75, ComputerScience: 95 },
    { subject: 'Assignments', Mathematics: 85, Physics: 60, ComputerScience: 88 },
    { subject: 'Participation', Mathematics: 78, Physics: 72, ComputerScience: 82 }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Course Progress</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Progress Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartLineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Mathematics" stroke="#8884d8" />
                  <Line type="monotone" dataKey="Physics" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="ComputerScience" stroke="#ffc658" />
                </RechartLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Mathematics" dataKey="Mathematics" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Radar name="Physics" dataKey="Physics" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                  <Radar name="Computer Science" dataKey="ComputerScience" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'courses':
        return <Courses />;
      case 'exams':
        return <Exams />;
      case 'progress':
        return <Progress />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;