export default function CareerCoachingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#132148] py-12 px-4">
      <section className="w-full max-w-3xl rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#e5dbb7]">
          Career Coaching
        </h1>
        <p className="text-lg text-[#e5dbb7] mb-6 text-center">
          Take charge of your professional journey with our personalized career
          coaching services. Whether you are just starting out, seeking a
          change, or aiming for advancement, we are here to help you achieve
          your goals.
        </p>
        <div className="text-[#e5dbb7] space-y-4">
          <p>
            <strong>What is Career Coaching?</strong>
            <br />
            Career coaching is a collaborative process that helps you clarify
            your career direction, identify strengths and opportunities, and
            develop a plan for success. Our coaches provide guidance, resources,
            and accountability every step of the way.
          </p>

          <strong>Our Career Coaching Services Include:</strong>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Career exploration and goal setting</li>
            <li>Resume and cover letter development</li>
            <li>Interview preparation and job search strategies</li>
            <li>Professional skills assessment and development</li>
            <li>Support for career transitions and advancement</li>
          </ul>

          <p>
            <strong>Why Choose Us?</strong>
            <br />
            We take a personalized approach, focusing on your unique strengths,
            values, and aspirations. Our experienced coaches are committed to
            helping you build confidence and achieve meaningful, lasting
            results.
          </p>
          <p>
            <strong>Start Your Career Journey</strong>
            <br />
            Ready to take the next step?{" "}
            <a href="/contact" className="text-[#e5dbb7] hover:text-[#b5b7c6]">
              Contact us
            </a>{" "}
            to schedule a session or learn more about our career coaching
            services.
          </p>
        </div>
      </section>
    </div>
  );
}
