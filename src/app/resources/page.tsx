export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#132148] py-12 px-4">
      {/* Replace with Resources Component */}
      <section className="w-full max-w-3xl rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#e5dbb7]">
          Resources
        </h1>
        <p className="text-lg text-[#e5dbb7] mb-6 text-center">
          Explore helpful resources, articles, and support networks for your
          journey to well-being. Below are some recommended readings and
          external links for further information and assistance.
        </p>
        <div className="text-[#e5dbb7] space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Articles & Guides</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <a
                  href="https://www.psychologytoday.com/us/basics/life-coaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e5dbb7] hover:text-[#b5b7c6]"
                >
                  What is Life Coaching? (Psychology Today)
                </a>
              </li>
              <li>
                <a
                  href="https://www.samhsa.gov/find-help/national-helpline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e5dbb7] hover:text-[#b5b7c6]"
                >
                  SAMHSA National Helpline (Addiction Support)
                </a>
              </li>
              <li>
                <a
                  href="https://www.mentalhealth.gov/basics/what-is-mental-health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e5dbb7] hover:text-[#b5b7c6]"
                >
                  Understanding Mental Health (MentalHealth.gov)
                </a>
              </li>
              <li>
                <a
                  href="https://www.mind.org.uk/information-support/types-of-mental-health-problems/trauma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e5dbb7] hover:text-[#b5b7c6]"
                >
                  Trauma Information (Mind UK)
                </a>
              </li>
              <li>
                <a
                  href="https://www.cdc.gov/mentalhealth/stress-coping/cope-with-stress/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e5dbb7] hover:text-[#b5b7c6]"
                >
                  Coping with Stress (CDC)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Support Hotlines</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <a
                  href="https://suicidepreventionlifeline.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e5dbb7] hover:text-[#b5b7c6]"
                >
                  988 Suicide & Crisis Lifeline (USA)
                </a>
              </li>
              <li>
                <a
                  href="https://www.sadag.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e5dbb7] hover:text-[#b5b7c6]"
                >
                  South African Depression and Anxiety Group (SADAG)
                </a>
              </li>
              <li>
                <a
                  href="https://www.childline.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e5dbb7] hover:text-[#b5b7c6]"
                >
                  Childline (UK)
                </a>
              </li>
              <li>
                <a
                  href="https://www.befrienders.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e5dbb7] hover:text-[#b5b7c6]"
                >
                  Befrienders Worldwide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Books & Further Reading
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <span className="font-semibold">
                  &quot;The Body Keeps the Score&quot;
                </span>{" "}
                by Bessel van der Kolk
              </li>
              <li>
                <span className="font-semibold">&quot;Atomic Habits&quot;</span>{" "}
                by James Clear
              </li>
              <li>
                <span className="font-semibold">
                  &quot;Daring Greatly&quot;
                </span>{" "}
                by Brené Brown
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
