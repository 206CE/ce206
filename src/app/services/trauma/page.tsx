export default function TraumaInformedCarePage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#132148] py-12 px-4">
      <section className="w-full max-w-3xl rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#e5dbb7]">
          Trauma-Informed Care
        </h1>
        <p className="text-lg text-[#e5dbb7] mb-6 text-center">
          Compassionate, evidence-based support for individuals impacted by
          trauma. Our trauma-informed approach ensures safety, trust, and
          empowerment on your path to healing.
        </p>
        <div className="text-[#e5dbb7] space-y-4">
          <p>
            <strong>What is Trauma-Informed Care?</strong>
            <br />
            Trauma-informed care recognizes the widespread impact of trauma and
            understands potential paths for recovery. It emphasizes physical,
            psychological, and emotional safety for both clients and providers,
            and helps survivors rebuild a sense of control and empowerment.
          </p>

          <strong>Our Approach Includes:</strong>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Creating a safe, supportive environment</li>
            <li>Building trust and transparency</li>
            <li>Empowering clients in their healing journey</li>
            <li>
              Recognizing and respecting cultural, historical, and gender issues
            </li>
            <li>Collaborative goal setting and care planning</li>
          </ul>

          <p>
            <strong>Who Can Benefit?</strong>
            <br />
            Anyone who has experienced trauma—whether from abuse, loss,
            violence, or other life events—can benefit from trauma-informed
            care. We work with individuals, families, and organizations to
            foster resilience and recovery.
          </p>
          <p>
            <strong>Begin Your Healing Journey</strong>
            <br />
            You are not alone.{" "}
            <a href="/contact" className="text-[#e5dbb7] hover:text-[#b5b7c6]">
              Contact us
            </a>{" "}
            to learn more or schedule a confidential consultation.
          </p>
        </div>
      </section>
    </div>
  );
}
