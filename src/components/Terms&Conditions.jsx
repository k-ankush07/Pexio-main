import React from 'react'
import Container from './Container'
import Navbar from './Navbar'
import Footer from './Footer'

const styles = {
  title: { fontSize: '40px', fontWeight: 700, lineHeight: 1.2, marginBottom: '20px' },
  heading: { fontSize: '24px', fontWeight: 600, lineHeight: 1.3, marginBottom: '20px' },
  subheading: { fontSize: '18px', fontWeight: 600, lineHeight: 1.4, marginBottom: '12px', marginTop: '8px' },
  text: { fontSize: '16px', lineHeight: 1.7, marginBottom: '16px' },
  list: { fontSize: '16px', lineHeight: 1.7, paddingLeft: '24px', marginBottom: '16px', listStyle: 'disc' },
  section: { marginBottom: '40px' },
}

const Section = ({ title, children }) => (
  <section style={styles.section}>
    <h2 style={styles.heading}>{title}</h2>
    {children}
  </section>
)

const Sub = ({ children }) => <h3 style={styles.subheading}>{children}</h3>

const P = ({ children }) => <p style={styles.text}>{children}</p>

const List = ({ items }) => (
  <ul style={styles.list}>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
)

const B = ({ children }) => <strong style={{ fontWeight: 600 }}>{children}</strong>

export default function TermsConditions() {
  return (
    <>
      <div className="bg-[#F7F4FE]">
        <Navbar />
      </div>
      <div className="pt-[40px] sm:pt-[60px]">
        <Container>
          <h1 style={styles.title}>Terms &amp; Conditions</h1>

          <Section title="1. Introduction">
            <P>
              Welcome to Pexio (&quot;Pexio,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). Pexio is an
              eCommerce technology brand that helps Shopify merchants grow their online businesses with smarter, more
              efficient, and scalable solutions.
            </P>
            <P>
              Pexio brings together a set of specialized applications that simplify store operations, improve customer
              experiences, optimize conversions, and open new opportunities for growth. Our applications include:
            </P>
            <List
              items={[
                <><B>Syncform:</B> Custom Shopify forms and real-time data synchronization.</>,
                <><B>Pexio A/B Testing (ab.pexio.app):</B> A/B testing, experimentation, and conversion optimization.</>,
                <><B>Cartplus:</B> Cart optimization, promotional features, and revenue enhancement.</>,
              ]}
            />
            <P>
              These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our website
              (https://pexio.app/), ab.pexio.app, our Shopify applications, features, and related services.
            </P>
            <P>
              By visiting our website, installing any Pexio application, creating an account, or using our services,
              you agree to be bound by these Terms. If you do not agree, you must stop using our website and services.
            </P>
          </Section>

          <Section title="2. Eligibility">
            <P>To use Pexio, you must:</P>
            <List
              items={[
                'Be at least 18 years old or the legal age of majority in your jurisdiction.',
                'Have the legal authority to enter into a binding agreement.',
                'Operate or be authorized to manage a Shopify store, where applicable.',
                'Provide accurate and complete information when using our services.',
                'Use our applications in compliance with applicable laws and regulations.',
              ]}
            />
            <P>
              If you use Pexio on behalf of a business or organization, you represent that you have the authority to
              bind that organization to these Terms.
            </P>
          </Section>

          <Section title="3. Our Services">
            <P>
              Pexio provides a collection of Shopify applications that support different parts of eCommerce
              operations. The functionality, availability, pricing, and features of each application may vary.
            </P>

            <Sub>3.1 Pexio A/B Testing – Conversion Optimization</Sub>
            <P>Pexio A/B Testing (ab.pexio.app) enables merchants to:</P>
            <ul style={styles.list}>
              <li><B>Content Edit:</B> Test different storefront content, headlines, text, buttons, and other page elements.</li>
              <li><B>Template Experiment:</B> Compare different page templates and layouts.</li>
              <li><B>Theme Comparison:</B> Test different Shopify themes and storefront designs.</li>
              <li><B>Split URL:</B> Compare different storefront experiences through separate URLs.</li>
              <li><B>Experiment Analytics:</B> Review experiment results, conversion metrics, and performance insights.</li>
              <li><B>Audience Targeting:</B> Set up experiments for different visitor segments, depending on your subscription plan and available features.</li>
              <li><B>Experiments:</B> Create and manage A/B and multivariate experiments.</li>
            </ul>
            <P>
              Experiment results may vary depending on visitor behavior, traffic volume, technical conditions, and
              other external factors. Pexio does not guarantee any particular increase in sales, conversion rates, or
              revenue.
            </P>

            <Sub>3.2 Syncform – Forms and Synchronization</Sub>
            <P>Syncform allows merchants to:</P>
            <List
              items={[
                'Create custom forms using configurable fields and layouts.',
                'Collect information through Shopify storefront forms.',
                'Synchronize relevant form submissions with Shopify Metafields.',
                'Connect submitted information with Shopify Customer and Order records.',
                'Manage form-related functionality through the application.',
              ]}
            />
            <P>
              Merchants are responsible for configuring forms appropriately and for handling the information collected
              through them lawfully.
            </P>

            <Sub>3.3 Cartplus – Cart Optimization</Sub>
            <P>
              Cartplus provides cart-related functionality designed to improve the shopping experience and encourage
              conversions. Its features may include:
            </P>
            <List
              items={[
                'Slide-out cart drawers.',
                'Free shipping progress bars.',
                'Cart promotions and rewards.',
                'Product recommendations and cross-selling.',
                'Inventory and availability notifications.',
                'Cart-related upselling functionality.',
              ]}
            />
            <P>Merchants are responsible for configuring promotions, pricing, rewards, and shipping offers accurately.</P>
          </Section>

          <Section title="4. Account Registration and Shopify Integration">
            <P>
              To access certain Pexio services, you may need to install our applications through Shopify and authorize
              the required permissions. By connecting your Shopify store to Pexio, you:
            </P>
            <List
              items={[
                'Authorize us to access the Shopify information necessary to provide the selected application functionality.',
                'Agree to provide accurate account and store information.',
                'Accept responsibility for maintaining the security of your Shopify account.',
                'Agree not to misuse, manipulate, or interfere with our applications.',
                'Confirm that you have the necessary authority to connect and manage the Shopify store.',
              ]}
            />
            <P>
              You are responsible for all activities conducted through your account and for keeping your account
              credentials confidential.
            </P>
            <P>
              Pexio is a third-party application provider and is not owned, operated, or endorsed by Shopify unless
              expressly stated. Your use of Shopify is independently governed by Shopify&apos;s applicable terms and
              policies.
            </P>
          </Section>

          <Section title="5. Subscription Plans, Fees, and Payments">
            <P>
              Certain Pexio applications offer free and paid subscription plans. Available plans, pricing, features,
              usage limits, and billing arrangements are displayed on the relevant application listing, pricing page,
              or subscription interface.
            </P>
            <P>
              For Pexio A/B Testing, the Free plan provides access to selected A/B testing features, basic
              experimentation tools, essential analytics, and Shopify integration without a recurring subscription fee.
              The Pro plan costs $9.99 per month and includes additional features such as advanced audience targeting,
              unlimited experiments, and priority performance insights.
            </P>
            <P>By purchasing a paid subscription, you agree to:</P>
            <List
              items={[
                'Pay the applicable subscription fees.',
                'Provide accurate billing information and use a valid payment method where required.',
                'Authorize recurring payments where applicable. Paid subscriptions follow the billing cycle displayed during activation and may automatically renew.',
                'Comply with the applicable subscription terms.',
                'Pay any applicable taxes, unless otherwise specified.',
              ]}
            />

            <Sub>5.1 Subscription Billing</Sub>
            <P>
              Subscription charges may be processed through Shopify&apos;s billing infrastructure or other payment
              providers made available by Pexio. Billing cycles, payment authorization, and subscription management may
              be governed by the applicable payment platform&apos;s terms.
            </P>

            <Sub>5.2 Free Plans and Paid Features</Sub>
            <P>
              Free plans offer limited functionality. Additional features, usage limits, or services may require a paid
              subscription. We reserve the right to modify available subscription plans, features, and pricing, subject
              to applicable laws and any required notice.
            </P>

            <Sub>5.3 Failed Payments</Sub>
            <P>
              If a payment cannot be processed, access to certain paid features may be restricted, suspended, or
              discontinued until the payment issue is resolved.
            </P>

            <Sub>5.4 Cancellation and Refunds</Sub>
            <P>
              You may cancel your subscription at any time by downgrading within the app or uninstalling the app from
              your Shopify Admin. After cancellation, your Pro features may remain active until the end of your current
              billing period, and you may continue using available Free plan features afterward.
            </P>
            <P>
              Refund eligibility is determined according to the applicable subscription terms, Shopify billing
              policies, and applicable consumer protection laws. Unless otherwise required by law or expressly stated in
              an applicable offer, subscription fees are non-refundable for partially used billing periods, and
              cancellations do not automatically qualify for refunds of previous payments.
            </P>
          </Section>

          <Section title="6. Acceptable Use">
            <P>You agree to use Pexio only for lawful business purposes. You must not:</P>
            <List
              items={[
                'Use our applications for unlawful, fraudulent, deceptive, misleading, or harmful activities, or to show unauthorized content.',
                'Violate the rights or privacy of other individuals, including collecting cookies or tracking visitor data without the consent required under GDPR or other applicable laws.',
                'Upload or transmit malicious code, viruses, or harmful software.',
                'Attempt unauthorized access to our systems or infrastructure.',
                'Reverse engineer, decompile, or attempt to extract source code from our applications, except where such restrictions are not permitted by law.',
                'Copy, resell, distribute, or commercially exploit our applications without authorization.',
                'Interfere with application functionality, security, or availability.',
                'Abuse APIs, integrations, or application resources.',
                'Use our services to collect or process information unlawfully.',
                'Circumvent subscription limits, access restrictions, or security measures.',
                'Use our applications in a way that violates Shopify\u2019s policies or other applicable third-party platform requirements.',
              ]}
            />
            <P>
              We reserve the right to investigate suspected violations and take appropriate action, including
              restricting or terminating access.
            </P>
          </Section>

          <Section title="7. Merchant Responsibilities">
            <P>
              As a merchant using Pexio, you are responsible for your Shopify store, its content, and your
              customers&apos; experience. You agree to:
            </P>
            <List
              items={[
                'Maintain accurate and lawful store information.',
                'Ensure that products, prices, promotions, and offers are accurately represented.',
                'Provide appropriate privacy notices and obtain consent where legally required.',
                'Comply with applicable data protection and consumer protection laws.',
                'Ensure that information collected through forms and storefront interactions is lawful to collect.',
                'Maintain appropriate security for your Shopify account.',
                'Configure our applications responsibly.',
                'Ensure that your use of tracking and analytics technologies complies with applicable requirements.',
                'Handle customer inquiries, complaints, refunds, and order fulfillment.',
                'Maintain compliance with Shopify\u2019s applicable policies and requirements.',
              ]}
            />
            <P>
              <B>Responsibility for Storefront Changes:</B> A/B testing changes your live storefront elements, layouts,
              themes, and URLs. You are responsible for reviewing and testing each experiment before publishing it to
              visitors, to confirm it works properly with your custom theme and third-party apps.
            </P>
            <P>
              Pexio is a technology provider and does not operate your Shopify store or assume responsibility for your
              business operations.
            </P>
          </Section>

          <Section title="8. Data Protection and Privacy">
            <P>
              Your use of Pexio is also subject to our Privacy Policy, which explains how we collect, use, process,
              store, and protect information associated with our website and applications. By using Pexio, you
              acknowledge that information may be processed as described in our Privacy Policy.
            </P>
            <P>
              When our applications process customer or visitor information on behalf of merchants, the merchant is
              generally responsible for determining the lawful purposes and means of processing, while Pexio processes
              information to provide the requested services, subject to applicable agreements and laws.
            </P>
            <P>
              You must not use Pexio to collect, process, or store personal information in violation of applicable
              privacy laws.
            </P>
          </Section>

          <Section title="9. Intellectual Property Rights">
            <P>
              All intellectual property rights associated with Pexio, including our website, application software,
              algorithms, branding, logos, trademarks, designs, interfaces, graphics, documentation, and other
              materials, belong to Pexio or its respective licensors. You may not:
            </P>
            <List
              items={[
                'Copy or reproduce our proprietary materials without permission.',
                'Modify or distribute our software without authorization.',
                'Use our branding or trademarks in a misleading manner.',
                'Claim ownership of Pexio intellectual property.',
                'Create derivative products based on our proprietary software without authorization.',
              ]}
            />
            <P>
              Subject to your compliance with these Terms and payment of applicable fees, we grant you a limited,
              non-exclusive, non-transferable, revocable license to access and use the relevant Pexio services for your
              internal business purposes on your connected Shopify store. This license does not transfer ownership of
              any intellectual property to you.
            </P>
          </Section>

          <Section title="10. Merchant Content and Data Ownership">
            <P>
              You retain ownership of your storefront content, themes, product data, branding, experiment assets, and
              other materials you provide through your Shopify store and Pexio applications.
            </P>
            <P>
              By using our services, you grant Pexio a limited right to access, host, render, process, transmit, and
              use such information solely as necessary to:
            </P>
            <List
              items={[
                'Provide the requested application functionality.',
                'Perform data synchronization.',
                'Run experiments and generate analytics.',
                'Maintain and improve service functionality.',
                'Provide technical support.',
                'Meet applicable legal obligations.',
              ]}
            />
            <P>You represent that you have the necessary rights and permissions to provide such information to Pexio.</P>
          </Section>

          <Section title="11. Third-Party Services and Integrations">
            <P>
              Pexio integrates with Shopify and may rely on third-party services, technologies, and infrastructure
              providers to deliver its functionality, including:
            </P>
            <List
              items={[
                'Shopify platform integrations.',
                'Cloud hosting and infrastructure.',
                'Payment and billing services.',
                'Analytics and monitoring tools.',
                'Database and storage services.',
                'Communication and customer support tools.',
              ]}
            />
            <P>
              Our services may also interact with third-party themes or apps installed on your store. We are not
              responsible for the independent terms, policies, availability, outages, API changes, or bugs of Shopify or
              other third-party providers. Your use of third-party services may be subject to their own terms and
              conditions.
            </P>
          </Section>

          <Section title="12. Service Availability and Modifications">
            <P>
              We aim to maintain reliable access to our website and applications. However, we do not guarantee that our
              services will always be available, uninterrupted, error-free, or compatible with every Shopify store
              configuration, custom theme, or third-party script. We may:
            </P>
            <List
              items={[
                'Update application features and functionality.',
                'Introduce new services or subscription plans.',
                'Modify existing features.',
                'Perform scheduled or emergency maintenance.',
                'Temporarily suspend access for technical or security reasons.',
                'Discontinue features or applications where necessary.',
              ]}
            />
            <P>
              Where reasonably possible, we will provide notice of significant service changes. We are not responsible
              for service interruptions caused by Shopify, third-party providers, internet connectivity issues, or
              circumstances outside our reasonable control.
            </P>
          </Section>

          <Section title="13. No Guarantee of Business Results">
            <P>
              Pexio provides tools intended to help merchants improve their store operations and performance. However,
              we do not guarantee:
            </P>
            <List
              items={[
                'Increased sales or revenue.',
                'Higher conversion rates or conversion lift.',
                'Improved customer retention.',
                'Increased average order value.',
                'Successful A/B testing outcomes.',
                'Specific marketing or business results.',
                'Uninterrupted application performance.',
              ]}
            />
            <P>
              Business outcomes depend on various factors, including store configuration, product quality, customer
              behavior, traffic, pricing, market conditions, and merchant decisions. Any analytics, recommendations, or
              experiment results provided through Pexio are intended to support business decision-making, do not
              predict future business performance, and should not be treated as guaranteed outcomes.
            </P>
          </Section>

          <Section title="14. Disclaimer of Warranties">
            <P>
              To the maximum extent permitted by applicable law, Pexio provides its website and applications on an
              &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We disclaim warranties of any kind, whether
              express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose,
              non-infringement, and uninterrupted availability.
            </P>
            <P>We do not warrant that:</P>
            <List
              items={[
                'Our applications will meet every business requirement.',
                'All errors or defects will be corrected.',
                'The services will be compatible with every third-party application or custom theme.',
                'Data transmission or storage will always be uninterrupted.',
                'Experiment results or analytics will always be complete or error-free.',
              ]}
            />
            <P>
              Nothing in these Terms excludes warranties or rights that cannot legally be excluded. You use Pexio at
              your own discretion and risk.
            </P>
          </Section>

          <Section title="15. Limitation of Liability">
            <P>
              To the maximum extent permitted by applicable law, Pexio and its owners, founders, employees, affiliates,
              partners, and service providers will not be liable for indirect, incidental, special, consequential, or
              punitive damages, including:
            </P>
            <List
              items={[
                'Loss of profits or revenue.',
                'Loss of business opportunities.',
                'Loss of customers.',
                'Loss of data.',
                'Business interruption.',
                'Loss arising from third-party platform outages.',
                'Loss resulting from merchant configuration errors.',
                'Loss resulting from inaccurate or incomplete analytics.',
              ]}
            />
            <P>
              To the maximum extent permitted by applicable law, our total aggregate liability arising out of or
              relating to the services or these Terms will not exceed the total amount paid by you to Pexio for the
              relevant application during the twelve months immediately preceding the event giving rise to the claim.
            </P>
            <P>
              Nothing in these Terms limits liability that cannot legally be limited or excluded under applicable law.
            </P>
          </Section>

          <Section title="16. Indemnification">
            <P>
              You agree to indemnify, defend, and hold harmless Pexio, its owners, officers, directors, employees,
              affiliates, agents, and service providers from and against claims, damages, losses, liabilities, costs,
              and expenses, including reasonable legal fees, arising from:
            </P>
            <List
              items={[
                'Your misuse of our website or applications.',
                'Your violation of these Terms.',
                'Your violation of applicable laws or regulations.',
                'Your infringement of third-party rights.',
                'Your Shopify store content, products, experiments, or business activities.',
                'Your unlawful collection or processing of customer information.',
                'Your failure to obtain required permissions or consents.',
              ]}
            />
            <P>This obligation applies to the extent permitted by applicable law.</P>
          </Section>

          <Section title="17. Suspension and Termination">
            <P>We reserve the right to suspend, restrict, or terminate your access to Pexio if:</P>
            <List
              items={[
                'You violate these Terms.',
                'You engage in fraudulent or unlawful activities, or activity that harms our platform or other merchants.',
                'Your use creates security risks.',
                'You misuse our applications or infrastructure.',
                'You fail to meet applicable payment obligations.',
                'We are required to do so by law or a third-party platform.',
              ]}
            />
            <P>
              You may stop using our applications at any time by discontinuing their use and uninstalling them from
              your Shopify store. Upon termination:
            </P>
            <List
              items={[
                'Your access to the relevant application may be discontinued.',
                'Certain application functionality may no longer be available.',
                'Associated information will be handled according to our Privacy Policy and applicable data deletion requirements.',
                'Outstanding payment obligations will remain enforceable where applicable.',
                'Provisions that by their nature should survive termination, including intellectual property, disclaimers, limitations of liability, and indemnification, will continue to apply.',
              ]}
            />
          </Section>

          <Section title="18. Changes to These Terms">
            <P>
              We may modify these Terms from time to time to reflect changes in our services, business practices, legal
              requirements, or application functionality. Updated Terms will be published on our website with a revised
              &quot;Last Updated&quot; date, and we will notify you via the app dashboard and email where required by
              law or where the changes are material.
            </P>
            <P>
              Your continued use of Pexio after updated Terms become effective constitutes acceptance of the revised
              Terms, to the extent permitted by applicable law.
            </P>
          </Section>

          <Section title="19. Governing Law and Dispute Resolution">
            <P>
              These Terms will be governed by and interpreted in accordance with the laws of [Insert Applicable
              Governing Law and Jurisdiction], without regard to conflict-of-law principles.
            </P>
            <P>
              Any disputes arising from or relating to these Terms or your use of Pexio will be subject to the
              jurisdiction of the competent courts of [Insert Applicable Jurisdiction], subject to mandatory consumer
              protection laws and other applicable legal requirements.
            </P>
          </Section>

          <Section title="20. Severability">
            <P>
              If any provision of these Terms is found to be invalid, unlawful, or unenforceable, the remaining
              provisions will continue in full force and effect. The invalid or unenforceable provision will be
              interpreted or modified to the extent necessary to make it enforceable, where legally permitted.
            </P>
          </Section>

          <Section title="21. Entire Agreement">
            <P>
              These Terms, together with our Privacy Policy and any applicable application-specific agreements or
              subscription terms, constitute the agreement between you and Pexio regarding your use of our website and
              services. If additional terms apply to a specific application or feature, those terms will govern that
              application or feature to the extent of any inconsistency, subject to applicable law.
            </P>
          </Section>

          <Section title="22. Contact Information">
            <P>If you have questions, concerns, or requests regarding these Terms &amp; Conditions, please contact us:</P>
            <P>Company: Pexio</P>
            <P>
              Website: <a href="https://pexio.app/">https://pexio.app/</a>
            </P>
            <P>
              Email: <a href="mailto:ab-support@pexio.app">ab-support@pexio.app</a>
            </P>
          </Section>
        </Container>
      </div>
      <Footer />
    </>
  )
}