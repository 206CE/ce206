export default function CrisisControlPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#132148] py-12 px-4">
      <section className="w-full max-w-3xl  rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#e5dbb7]">
          24/7 Crisis Control
        </h1>
        <p className="text-lg text-[#e5dbb7] mb-6 text-center">
          Immediate, confidential support for individuals and families facing
          urgent mental health or life crises. Our 24/7 Crisis Control service
          is here to help you navigate difficult moments with care and
          expertise.
        </p>
        <div className="text-[#e5dbb7] space-y-4">
          <p>
            <strong>When to Reach Out</strong>
            <br />
            If you or someone you know is experiencing overwhelming stress,
            anxiety, depression, suicidal thoughts, or any situation that feels
            unmanageable, our crisis team is available around the clock.
          </p>

          <strong>Our Crisis Services Include:</strong>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>24/7 phone and online support</li>
            <li>Immediate risk assessment and safety planning</li>
            <li>Emotional support and de-escalation</li>
            <li>Referrals to emergency services or further care if needed</li>
            <li>Follow-up and ongoing support</li>
          </ul>

          <p>
            <strong>You Are Not Alone</strong>
            <br />
            Crisis can happen to anyone, at any time. Our compassionate
            professionals are trained to respond quickly and effectively,
            ensuring your safety and well-being.
          </p>
          <p>
            <strong>Contact Us Now</strong>
            <br />
            If you need immediate help, please call our 24/7 crisis line or{" "}
            <a href="/contact" className="text-[#e5dbb7] hover:text-[#b5b7c6]">
              contact us
            </a>{" "}
            for confidential support.
          </p>
        </div>
      </section>
    </div>
  );
}
