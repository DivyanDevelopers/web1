import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Primansh Terms of Service. Please read these terms carefully before using our services."
      />

      <section className="pt-32 pb-20 section-padding min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-8">
            Terms of Service
          </h1>
          <p className="text-warm-gray mb-8">
            Last updated: March 19, 2026
          </p>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-warm-gray prose-p:leading-relaxed">
            <p>
              Please read these Terms of Service carefully before using the services offered by Primansh. By accessing or using our services, you agree to be bound by these terms.
            </p>

            <h2>1. Services</h2>
            <p>
              Primansh provides digital marketing and web development services specifically designed for chartered accountant firms in India. Our services include but are not limited to:
            </p>
            <ul>
              <li>Website design and development</li>
              <li>Search engine optimization (SEO)</li>
              <li>Content marketing</li>
              <li>Landing page creation</li>
              <li>Brand identity design</li>
              <li>Analytics and conversion rate optimization</li>
            </ul>

            <h2>2. Client Obligations</h2>
            <p>
              As a client, you agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Respond to requests for feedback and approvals in a timely manner</li>
              <li>Provide necessary content, images, and other materials</li>
              <li>Make payments according to the agreed schedule</li>
              <li>Cooperate with our team to ensure successful project completion</li>
            </ul>

            <h2>3. Payment Terms</h2>
            <p>
              Payment terms are as follows:
            </p>
            <ul>
              <li>Project fees are outlined in the proposal and contract</li>
              <li>A deposit is required before work begins</li>
              <li>Remaining payments are due according to the milestone schedule</li>
              <li>Monthly retainer fees are due in advance</li>
              <li>Late payments may incur interest charges</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              Upon full payment:
            </p>
            <ul>
              <li>You own the final website and its content</li>
              <li>You receive all source files and assets</li>
              <li>We retain the right to use the work in our portfolio</li>
              <li>Third-party materials remain subject to their original licenses</li>
            </ul>

            <h2>5. Project Timeline</h2>
            <p>
              Project timelines are estimates based on the scope of work and client responsiveness. Delays caused by:
            </p>
            <ul>
              <li>Late feedback or approvals</li>
              <li>Delayed content delivery</li>
              <li>Scope changes</li>
            </ul>
            <p>
              may result in timeline extensions.
            </p>

            <h2>6. Revisions and Changes</h2>
            <p>
              Our proposals include a specified number of revision rounds. Additional revisions or scope changes may incur additional fees. Major changes to the project scope require a change order.
            </p>

            <h2>7. Termination</h2>
            <p>
              Either party may terminate the agreement with written notice. Upon termination:
            </p>
            <ul>
              <li>You are responsible for payment for all work completed</li>
              <li>We will deliver all completed work</li>
              <li>No refunds will be provided for work already performed</li>
            </ul>

            <h2>8. Limitation of Liability</h2>
            <p>
              Primansh's liability is limited to the amount paid for the services. We are not liable for:
            </p>
            <ul>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Lost profits or revenue</li>
              <li>Data loss</li>
              <li>Third-party claims</li>
            </ul>

            <h2>9. Warranty Disclaimer</h2>
            <p>
              Our services are provided "as is" without warranties of any kind. While we strive for excellence, we cannot guarantee specific results such as search engine rankings or lead generation.
            </p>

            <h2>10. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding your business information, client data, and proprietary processes. We will not disclose confidential information to third parties without your consent.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes will be resolved in the courts of Delhi.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              For questions about these terms, please contact us:
            </p>
            <p>
              <strong>Email:</strong> legal@primansh.in<br />
              <strong>Address:</strong> Delhi NCR, India
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
