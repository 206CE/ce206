"use client";

import Testify from "@/_Components/Content/Testify";
export default function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#132148] py-12 px-4">
      <section className="w-full max-w-5xl mx-auto">
        <Testify
          heading="What Our Clients Say"
          subheading="Hear from them"
          testimonials={[
            {
              name: "Philip Viljoen",
              role: "Unknown",
              message:
                "If you ask God to help you he will. A real man can face the world. Never give up, never lose hope. God is always there for you.",
              link: "https://www.facebook.com/61571825697218/videos/4122658884723326",
              linkText: "See for yourself",
            },
          ]}
          columns={1}
        />
      </section>
    </div>
  );
}
