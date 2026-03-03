import Link from "next/link";

export default function AddictionCounsellingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#132148] py-12 px-4">
      <section className="w-full max-w-3xl rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#e5dbb7]">
          Addiction Counselling
        </h1>
        <p className="text-lg text-[#e5dbb7] mb-6 text-center">
          Compassionate support and evidence-based strategies to help you or
          your loved one overcome addiction and reclaim a healthy, fulfilling
          life.
        </p>
        <div className="text-[#e5dbb7] space-y-4">
          <p>
            <strong>Understanding Addiction</strong>
            <br />
            Addiction is a complex condition that affects the mind, body, and
            spirit. It can impact anyone, regardless of age, background, or
            circumstance. Our approach recognizes the unique challenges each
            person faces and provides a safe, non-judgmental space for healing.
          </p>
          <p>
            <Link
              target="_blank"
              href="https://www.facebook.com/61571825697218/videos/2213319495766318/"
              className="text-[#e5dbb7] hover:text-[#b5b7c6] mb-4"
            >
              Watch our video on understanding addiction
            </Link>
          </p>

          <strong>Our Counselling Services Include:</strong>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Individual and group counselling sessions</li>
            <li>Family support and education</li>
            <li>Relapse prevention planning</li>
            <li>Trauma-informed care</li>
            <li>Referrals to additional resources and treatment programs</li>
          </ul>

          <p>
            <strong>How We Help:</strong>
            <br />
            Our experienced counsellors use a holistic, client-centered
            approach. We work with you to identify triggers, build coping
            skills, and set achievable goals for recovery. We believe in
            empowering you to make lasting, positive changes.
          </p>
          <p>
            <strong>Take the First Step</strong>
            <br />
            Recovery is possible, and you don&apos;t have to do it alone.{" "}
            <a href="/contact" className="text-[#e5dbb7] hover:text-[#b5b7c6]">
              Contact us
            </a>{" "}
            today to learn more or schedule a confidential consultation.
          </p>
        </div>
      </section>
    </div>
  );
}
