
export default function LifeP() {
    return (
      <div className="mt-20 min-h-screen flex flex-col items-center bg-[#132148] py-12 px-4">
        <section className="w-full max-w-3xl rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold mb-4 text-center text-[#e5dbb7]">
            Life Coaching
          </h1>
          <p className="text-lg text-[#e5dbb7] mb-6 text-center">
            Unlock your full potential and achieve your personal and
            professional goals with our Life Coaching services. Our experienced
            coaches provide guidance, support, and accountability to help you
            create positive change and live a more fulfilling life.
          </p>
          <div className="text-[#e5dbb7] space-y-4">
            <p>
              <strong>What is Life Coaching?</strong>
              <br />
              Life coaching is a collaborative process that empowers you to
              clarify your vision, set meaningful goals, and overcome obstacles.
              Unlike therapy, which often focuses on healing the past, life
              coaching is future-oriented and action-driven, helping you move
              forward with confidence.
            </p>
            <strong>How We Can Help:</strong>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Identify and achieve personal and professional goals</li>
              <li>Improve self-confidence and motivation</li>
              <li>Enhance work-life balance and well-being</li>
              <li>Develop effective communication and leadership skills</li>
              <li>Navigate life transitions and challenges</li>
            </ul>

            <p>
              <strong>Our Approach:</strong>
              <br />
              We believe in a personalized, strengths-based approach. Your coach
              will work with you to create a customized plan, provide
              encouragement, and celebrate your progress every step of the way.
            </p>
            <p>
              <strong>Ready to get started?</strong>
              <br />
              <a
                href="/contact"
                className="text-[#e5dbb7] hover:text-[#b5b7c6]"
              >
                Contact us
              </a>{" "}
              today to schedule your first session or learn more about how life
              coaching can benefit you.
            </p>
          </div>
        </section>
      </div>
    );
}