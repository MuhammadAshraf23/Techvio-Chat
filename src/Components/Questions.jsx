
import React, { useState } from 'react';
import { FaPlus,FaMinus } from "react-icons/fa6";

const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleQuestionClick = (event, index) => {
    event.preventDefault();
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "What is AI automation, and how can it benefit my business?",
      answer:
        "AI automation employs advanced algorithms to streamline tasks, enhance efficiency, and provide data-driven insights, ultimately improving customer engagement and optimizing operations.",
    },
    {
      question: "Which business processes can be automated using AI?",
      answer:
        "AI can automate various tasks, including customer support, data analysis, lead generation, appointment scheduling, inventory management, and personalized marketing campaigns.",
    },
    {
      question: "What kind of ROI can we expect from AI automation?",
      answer:
        "ROI varies based on the specific implementation and goals, but AI automation typically leads to increased productivity, cost savings, revenue growth, and improved customer satisfaction.",
    },
    {
      question: "What kind of ongoing support and maintenance do you provide?",
      answer:
        "We offer continuous monitoring, updates, performance optimization, and responsive support to ensure your AI automation solution operates seamlessly and evolves with your business.",
    },
    {
      question: "How does your agency ensure the AI solution aligns with our business goals?",
      answer:
        "We collaborate closely with your team to understand your objectives and tailor the AI solution to meet your specific needs, ensuring alignment and measurable success.",
    },
    {
      question: "How secure is AI automation in handling sensitive business data?",
      answer:
        "Reputable AI automation agencies prioritize data security with encryption, access controls, and compliance measures to safeguard sensitive information.",
    },
  ];

  return (
    <div className="Faq container">
      <header className="section-header text-center">
        <h1 className='fw-bold mb-3'>Frequently Asked Questions</h1>
        <p className='mx-auto pb-5 w-50 text-center'>
          We foster a work environment where people can communicate openly and
          encourage feedback to help us learn and grow.
        </p>
      </header>
      <ul
        id="faq-list"
        className="wow fadeInUp"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        {faqData.map((item, index) => (
          <li key={index} className="faq-item">
            <div className="faq-question">
              <a
                data-toggle="collapse"
                className={`question-title ${openQuestion === index ? "open" : ""}`}
                href={`#faq${index + 1}`}
                onClick={(e) => handleQuestionClick(e, index)}
              >
                {item.question}
                {openQuestion === index ? <FaMinus /> : <FaPlus />}
              </a>
            </div>
            <div
              id={`faq${index + 1}`}
              className={`faq-answer ${openQuestion === index ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
