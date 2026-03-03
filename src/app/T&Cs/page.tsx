import React from 'react';

interface Terms {
  effDate?: string;
  pageUrl?: string;
  companyName?: string;
  regNumber?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export default function TCs({
  effDate = '2026/03/03',
  pageUrl = 'https://ce206.vercel.app',
  companyName = 'CE206',
  regNumber = '',
  address = '19 Carpi Diem, Baillie Park, Potchefstroom, 2025, South Africa',
  email = 'jacobotha206@gmail.com',
  phone = '+27 79 497 2646',
}: Terms) {
  return (
    <div className='terms-container max-w-4xl mx-auto px-4 py-12 prose prose-slate'>
      <h1 className='text-3xl font-bold mb-8'>Terms and Conditions</h1>

      <p className='text-sm text-gray-600 mb-8'>
        Last updated: {new Date().toLocaleDateString('en-ZA')}
        Effective date: {effDate}
      </p>

      <section className='mb-10'>
        <h2 className='text-2xl font-semibold mb-4'>1. Introduction</h2>
        <p>
          These Terms and Conditions (&quot;Terms&quot;) govern your access to
          and use of the website located at {pageUrl} (the &quot;Website&quot;),
          operated by {companyName}, registration number {regNumber}, with
          registered address at {address}, South Africa (&quot;we&quot;,
          &quot;us&quot;, &quot;our&quot;, &quot;Company&quot;).
        </p>
        <p className='mt-4'>
          By accessing, browsing or using the Website, you agree to be bound by
          these Terms. If you do not agree, please do not use the Website.
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-semibold mb-4'>
          2. ECT Act Section 43 Disclosures
        </h2>
        <p>
          In compliance with section 43(1) of the Electronic Communications and
          Transactions Act 25 of 2002 (&quot;ECT Act&quot;):
        </p>
        <ul className='list-disc pl-6 mt-3 space-y-2'>
          <li>
            <strong>Legal name of the supplier:</strong> {companyName}
          </li>
          <li>
            <strong>Registration number:</strong> {regNumber}
          </li>
          <li>
            <strong>Physical address:</strong> {address}
          </li>
          <li>
            <strong>Telephone number:</strong> {phone}
          </li>
          <li>
            <strong>Email address:</strong> {email}
          </li>
          <li>
            <strong>Website address:</strong> {pageUrl}
          </li>
          <li>
            <strong>Direct marketing opt-out:</strong> You may opt out of
            marketing communications at any time by emailing
            {email}
          </li>
        </ul>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-semibold mb-4'>3. Use of the Website</h2>
        <p>
          You may use the Website for lawful purposes only. You agree not to:
        </p>
        <ul className='list-disc pl-6 mt-3 space-y-2'>
          <li>Violate any South African law or regulation</li>
          <li>Infringe any intellectual property rights</li>
          <li>Transmit viruses, malware or harmful code</li>
          <li>
            Attempt to gain unauthorised access to any part of the Website
          </li>
        </ul>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-semibold mb-4'>
          4. Intellectual Property
        </h2>
        <p>
          All content on the Website (text, graphics, logos, images, software)
          is owned by us or our licensors and protected by South African and
          international copyright, trademark and other laws. You may view and
          print content for personal, non-commercial use only. No reproduction,
          distribution or commercial use is permitted without our prior written
          consent.
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-semibold mb-4'>
          5. Limitation of Liability & Disclaimer
        </h2>
        <p>
          The Website and all content are provided &quot;as is&quot; without
          warranties of any kind, express or implied. To the fullest extent
          permitted by law (including the Consumer Protection Act 68 of 2008 –
          &quot;CPA&quot;), we disclaim liability for any loss, damage, or
          injury arising from use of the Website, including but not limited to
          indirect, consequential or special damages.
        </p>
        <p className='mt-4'>
          Nothing in these Terms excludes or limits our liability for
          death/personal injury caused by our gross negligence, or any liability
          that cannot be excluded under the CPA or applicable law.
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-semibold mb-4'>
          6. Consumer Rights (CPA & ECT Act)
        </h2>
        <p>
          If you are a &quot;consumer&quot; as defined in the CPA, you have
          rights including fair dealing, quality goods/services, and (where
          applicable to electronic transactions) a cooling-off period under
          section 44 of the ECT Act.
        </p>
        <p className='mt-4'>
          These Terms do not intend to limit any rights you have under the CPA
          or ECT Act that cannot be waived or varied by agreement.
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-semibold mb-4'>7. Privacy</h2>
        <p>
          Your use of the Website is also governed by our Privacy Policy [link
          to /privacy-policy], which explains how we collect, use and protect
          your personal information in accordance with the Protection of
          Personal Information Act 4 of 2013 (&quot;POPIA&quot;).
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-semibold mb-4'>8. Amendments</h2>
        <p>
          We may update these Terms at any time. The updated version will be
          posted here with a revised &quot;Last updated&quot; date.
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-semibold mb-4'>
          9. Governing Law & Jurisdiction
        </h2>
        <p>
          These Terms are governed by the laws of the Republic of South Africa.
          Any disputes shall be subject to the exclusive jurisdiction of the
          courts of South Africa.
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-semibold mb-4'>10. Contact Us</h2>
        <p>If you have any questions about these Terms, contact us at:</p>
        <ul className='list-disc pl-6 mt-3 space-y-2'>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
          <li>Physical address: {address}</li>
        </ul>
      </section>

      <p className='text-sm text-gray-500 mt-12'>
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </p>
    </div>
  );
}
