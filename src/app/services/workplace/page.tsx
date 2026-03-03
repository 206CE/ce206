import React from "react";

export default function EmployeeCounsellingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#132148] py-12 px-4">
      <section className="w-full max-w-3xl  rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#e5dbb7]">
          Workplace & Employee Counselling
        </h1>
        <p className="text-lg text-[#e5dbb7] mb-6 text-center">
          Supporting organizations and their employees with professional
          counselling services to foster well-being, productivity, and a
          positive work environment.
        </p>
        <div className="text-[#e5dbb7] space-y-4">
          <p>
            <strong>Why Employee Counselling?</strong>
            <br />
            The modern workplace can be a source of both opportunity and stress.
            Employee counselling provides a confidential space for staff to
            address personal and work-related challenges, improve mental health,
            and enhance job satisfaction.
          </p>

          <strong>Our Services Include:</strong>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>One-on-one counselling for employees</li>
            <li>Group workshops and wellness programs</li>
            <li>Conflict resolution and mediation</li>
            <li>Stress management and resilience training</li>
            <li>Support for managers and HR professionals</li>
          </ul>

          <strong>Benefits for Your Organization:</strong>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Reduced absenteeism and presenteeism</li>
            <li>Improved morale and workplace culture</li>
            <li>Increased productivity and engagement</li>
            <li>Early intervention for mental health concerns</li>
          </ul>

          <p>
            <strong>Get Started</strong>
            <br />
            Invest in your team&apos;s well-being.{" "}
            <a href="/contact" className="text-[#e5dbb7] hover:text-[#b5b7c6]">
              Contact us
            </a>{" "}
            to discuss a tailored employee counselling program for your
            organization.
          </p>
        </div>
      </section>
    </div>
  );
}
