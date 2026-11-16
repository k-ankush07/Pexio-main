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

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-[#F7F4FE]">
        <Navbar />
      </div>
      <div className="pt-[40px] sm:pt-[60px]">
        <Container>
          <h1 style={styles.title}>Privacy Policy</h1>

          <Section title="1. Introduction">
            <P>
              Welcome to Pexio (&quot;Pexio,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). Pexio is an
              eCommerce technology brand offering a comprehensive ecosystem of innovative applications designed to help
              Shopify merchants simplify store operations, enhance customer experiences, and grow their businesses.
            </P>
            <P>
              Through our website, https://pexio.app/, we provide specialized applications that address different
              aspects of eCommerce management, including custom forms and data synchronization, A/B testing,
              conversion optimization, and cart optimization. Our solutions are designed to streamline workflows,
              improve store performance, and give merchants the tools they need to build and grow successful online
              businesses.
            </P>
            <P>Our application ecosystem includes:</P>
            <List
              items={[
                <><B>Syncform:</B> Custom Shopify forms and data synchronization.</>,
                <><B>Pexio A/B Testing:</B> Storefront experimentation and conversion optimization.</>,
                <><B>Cartplus:</B> Cart optimization and revenue enhancement.</>,
              ]}
            />
            <P>
              This Privacy Policy explains how we collect, use, store, disclose, and protect information when you visit
              our website, install or use our applications, or interact with any services provided under the Pexio
              brand. By accessing our website or using our applications, you acknowledge that you have read and
              understood this Privacy Policy.
            </P>
          </Section>

          <Section title="2. Scope of This Privacy Policy">
            <P>This Privacy Policy applies to:</P>
            <List
              items={[
                'The Pexio website and its associated pages.',
                'All applications and services offered under the Pexio brand.',
                'Shopify merchants who install or use our applications.',
                'Store visitors and customers whose information may be processed through our applications.',
                'Individuals who contact us for support, business inquiries, or other purposes.',
              ]}
            />
            <P>
              Each Pexio application provides different functionality and may process different categories of
              information depending on the features enabled by the merchant.
            </P>
          </Section>

          <Section title="3. Information We Collect">
            <P>
              We may collect or process different categories of information depending on how you interact with our
              website and applications.
            </P>

            <Sub>A. Merchant Account Information</Sub>
            <P>When you install or use our applications, we may collect:</P>
            <List
              items={[
                'Name and email address.',
                'Business or store name.',
                'Shopify store URL and store identifiers.',
                'Account and authentication information.',
                'Application settings and preferences.',
                'Subscription and billing information.',
                'Customer support communications.',
                'Feedback and other information voluntarily provided to us.',
              ]}
            />

            <Sub>B. Shopify Store Information</Sub>
            <P>
              Depending on the application and permissions granted, we may access or process relevant Shopify store
              information, including:
            </P>
            <List
              items={[
                'Product names, descriptions, and details.',
                'Product and collection information.',
                'Storefront themes and templates.',
                'Storefront content and page information.',
                'Shopify customer and order information where required for enabled functionality.',
                'Store configuration and settings.',
                'Metafield information.',
                'Cart and checkout-related information.',
                'Application configurations and experiment data.',
              ]}
            />
            <P>
              We access only the information necessary to provide the relevant application functionality, subject to
              applicable permissions and requirements.
            </P>

            <Sub>C. Store Visitor and Customer Information</Sub>
            <P>
              Some Pexio applications may process information relating to visitors and customers interacting with
              participating Shopify stores. Depending on the features enabled, this information may include:
            </P>
            <List
              items={[
                'Name and email address when submitted through forms.',
                'Customer and order-related information.',
                'Browser and device information.',
                'IP address, where collected.',
                'Page views and navigation activity.',
                'Clicks and storefront interactions.',
                'Cart and checkout events.',
                'Product and purchase-related events.',
                'Experiment assignments and variant interactions.',
                'Session identifiers and cookie information.',
                'Form submissions and responses.',
              ]}
            />
            <P>
              The information processed will depend on the specific application, merchant configuration, and
              functionality being used.
            </P>
          </Section>

          <Section title="4. Information Processed by Our Applications">
            <P>
              Different Pexio applications provide different services and may process information for specific
              operational purposes.
            </P>

            <Sub>A. Syncform – Forms and Synchronization</Sub>
            <P>
              Syncform allows Shopify merchants to create custom forms and synchronize submitted information with
              Shopify. Depending on the merchant&apos;s configuration, Syncform may process:
            </P>
            <List
              items={[
                'Information submitted through custom forms.',
                'Customer contact details.',
                'Form responses and submission records.',
                'Custom form fields and configurations.',
                'Shopify Metafield information.',
                'Relevant Shopify Customer and Order records.',
              ]}
            />
            <P>
              We use this information to enable form creation, submission management, and synchronization with the
              merchant&apos;s Shopify store. Merchants are responsible for ensuring that their forms collect
              information appropriately and that visitors receive the necessary privacy disclosures.
            </P>

            <Sub>B. Pexio A/B Testing – Conversion Optimization</Sub>
            <P>
              Pexio A/B Testing helps merchants experiment with different storefront experiences and evaluate their
              performance. Depending on enabled features, we may process:
            </P>
            <List
              items={[
                'Experiment configurations.',
                'Content and copy variations.',
                'Page and template variations.',
                'Theme comparison information.',
                'Split URL experiment data.',
                'Visitor assignments to experiment variations.',
                'Audience segmentation information.',
                'Click and interaction events.',
                'Conversion and performance analytics.',
              ]}
            />
            <P>
              This information helps merchants understand customer behavior, compare different experiences, and make
              informed optimization decisions.
            </P>

            <Sub>C. Cartplus – Cart Optimization</Sub>
            <P>
              Cartplus provides cart optimization features designed to improve the shopping experience and increase
              store revenue. Depending on the features enabled, Cartplus may process:
            </P>
            <List
              items={[
                'Cart contents and product information.',
                'Cart values and quantities.',
                'Product availability and inventory information.',
                'Free shipping progress information.',
                'Cart interactions and user events.',
                'Relevant purchase and conversion events.',
              ]}
            />
            <P>
              This information is used to support cart functionality, promotional features, and performance
              measurement.
            </P>
          </Section>

          <Section title="5. How We Use Your Information">
            <P>We may use collected information for the following purposes:</P>
            <List
              items={[
                'To provide and maintain Pexio applications and services.',
                'To connect applications with Shopify stores.',
                'To create and manage custom forms.',
                'To synchronize form submissions and relevant Shopify records.',
                'To enable A/B testing and storefront experimentation.',
                'To support content, template, theme, and URL testing.',
                'To provide audience targeting and segmentation.',
                'To improve cart functionality and promotional experiences.',
                'To support checkout customization and sales funnel functionality.',
                'To provide analytics, reporting, and performance insights.',
                'To manage merchant accounts and subscriptions.',
                'To provide customer support.',
                'To improve application functionality and reliability.',
                'To detect fraud, unauthorized access, and misuse.',
                'To maintain security and prevent technical issues.',
                'To comply with applicable legal and regulatory requirements.',
              ]}
            />
          </Section>

          <Section title="6. Cookies and Tracking Technologies">
            <P>
              Our website and applications may use cookies, local storage, session identifiers, scripts, pixels, and
              similar technologies. These technologies may be used to:
            </P>
            <List
              items={[
                'Maintain user sessions and authentication.',
                'Remember application settings and preferences.',
                'Support storefront functionality.',
                'Maintain consistent A/B testing variations.',
                'Measure storefront interactions and conversions.',
                'Support cart and promotional functionality.',
                'Analyze application performance and usage.',
                'Improve the reliability of our services.',
              ]}
            />
            <P>
              Some technologies may operate on Shopify storefronts through our applications. Merchants are responsible
              for ensuring that tracking technologies used on their storefronts comply with applicable privacy and
              cookie consent requirements.
            </P>
            <P>
              Visitors may manage cookies through their browser settings. Disabling certain technologies may affect
              application or storefront functionality.
            </P>
          </Section>

          <Section title="7. How We Share Information">
            <P>We do not sell personal information to third parties. We may share information in the following circumstances:</P>

            <Sub>A. Service Providers</Sub>
            <P>We may work with trusted third-party providers to support our operations, including:</P>
            <List
              items={[
                'Cloud hosting and infrastructure providers.',
                'Database and storage providers.',
                'Analytics and monitoring services.',
                'Application security providers.',
                'Payment processing providers.',
                'Customer support platforms.',
                'Communication and email service providers.',
              ]}
            />
            <P>These providers may process information on our behalf as necessary to deliver their services.</P>

            <Sub>B. Shopify Integration</Sub>
            <P>
              Our applications integrate with Shopify to provide their functionality. Information may be exchanged with
              Shopify to support authentication, application installation, store connectivity, data synchronization,
              and other required operations. Your use of Shopify is also subject to Shopify&apos;s own privacy policy
              and applicable terms.
            </P>

            <Sub>C. Legal and Regulatory Requirements</Sub>
            <P>
              We may disclose information when required to comply with applicable laws, regulations, legal processes,
              or valid government requests.
            </P>

            <Sub>D. Business Transfers</Sub>
            <P>
              If Pexio is involved in a merger, acquisition, restructuring, or sale of business assets, relevant
              information may be transferred as part of the transaction, subject to applicable privacy requirements.
            </P>
          </Section>

          <Section title="8. Data Processing and Merchant Responsibilities">
            <P>
              When our applications process information on behalf of Shopify merchants, we generally act as a data
              processor or service provider, while the merchant acts as the data controller or business, as applicable
              under relevant privacy laws. Merchants are responsible for:
            </P>
            <List
              items={[
                'Providing appropriate privacy notices to their customers.',
                'Obtaining consent where legally required.',
                'Ensuring that information collected through their stores is handled lawfully.',
                'Configuring our applications appropriately.',
                'Responding to customer privacy requests where required.',
                'Ensuring that their use of our applications complies with applicable privacy laws.',
              ]}
            />
            <P>
              We process merchant-controlled information in accordance with applicable service arrangements, merchant
              instructions, and legal obligations.
            </P>
          </Section>

          <Section title="9. Data Retention">
            <P>
              We retain information only for as long as reasonably necessary to provide our services and fulfill the
              purposes described in this Privacy Policy. Retention periods may depend on:
            </P>
            <List
              items={[
                'The merchant\u2019s account status.',
                'The specific Pexio application being used.',
                'The duration of the merchant\u2019s use of our services.',
                'Experiment and analytics requirements.',
                'Form submissions and synchronization requirements.',
                'Legal, regulatory, and contractual obligations.',
                'Security and fraud prevention requirements.',
              ]}
            />
            <P>
              When information is no longer required, we will take reasonable steps to delete, anonymize, or securely
              dispose of it, subject to applicable legal obligations.
            </P>
          </Section>

          <Section title="10. Data Security">
            <P>
              We take reasonable technical and organizational measures to protect information against unauthorized
              access, disclosure, alteration, loss, or misuse. Our security practices are intended to protect the
              confidentiality and integrity of information processed through our website and applications.
            </P>
            <P>However, no internet-based service or electronic storage system can guarantee absolute security.</P>
          </Section>

          <Section title="11. International Data Transfers">
            <P>
              Depending on our infrastructure and third-party service providers, information may be processed or stored
              in countries other than the country where the merchant or visitor is located. Where applicable, we take
              appropriate measures to ensure that international data transfers comply with relevant data protection
              laws.
            </P>
          </Section>

          <Section title="12. Your Privacy Rights">
            <P>
              Depending on your location and applicable privacy laws, you may have certain rights regarding your
              personal information, including:
            </P>
            <List
              items={[
                'The right to request access to your personal information.',
                'The right to request correction of inaccurate information.',
                'The right to request deletion of personal information.',
                'The right to restrict or object to certain processing activities.',
                'The right to withdraw consent where processing is based on consent.',
                'The right to request a copy of your personal information.',
                'The right to lodge a complaint with the relevant data protection authority.',
              ]}
            />
            <P>To exercise these rights, please contact us using the contact information provided below.</P>
            <P>
              If you are a customer of a Shopify merchant using our applications, you may also need to contact that
              merchant directly regarding information they control.
            </P>
          </Section>

          <Section title="13. Uninstalling Applications and Data Deletion">
            <P>
              If you uninstall any Pexio application from your Shopify store, we will handle the associated information
              in accordance with applicable Shopify requirements, our data retention practices, and relevant legal
              obligations.
            </P>
            <P>
              Merchants may contact us to request deletion of information associated with their accounts or
              applications. We will also process applicable Shopify privacy and data deletion requests in accordance
              with Shopify&apos;s requirements.
            </P>
            <P>
              Certain information may be retained where required for legal compliance, security, fraud prevention, or
              other legitimate purposes permitted by law.
            </P>
          </Section>

          <Section title="14. Third-Party Websites and Services">
            <P>
              Our website and applications may contain links to third-party websites, platforms, or services. Pexio does
              not control the privacy practices of third-party services and is not responsible for their content,
              policies, or data handling practices.
            </P>
            <P>
              We encourage users to review the privacy policies of third-party services before sharing personal
              information with them.
            </P>
          </Section>

          <Section title="15. Children's Privacy">
            <P>
              Pexio provides business-focused eCommerce applications and is not intended for use by children. We do not
              knowingly collect personal information directly from children in violation of applicable privacy laws.
            </P>
            <P>
              If we become aware that such information has been collected unlawfully, we will take appropriate steps to
              address the situation.
            </P>
          </Section>

          <Section title="16. Changes to This Privacy Policy">
            <P>
              We may update this Privacy Policy from time to time to reflect changes in our website, applications,
              business practices, technology, or applicable legal requirements. Any updates will be published on this
              page along with a revised &quot;Last Updated&quot; date.
            </P>
            <P>We encourage merchants and users to review this Privacy Policy periodically.</P>
          </Section>

          <Section title="17. Contact Us">
            <P>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data protection
              practices, please contact us:
            </P>
            <P>Company: Pexio</P>
            <P>
              Website: <a href="https://pexio.app/">https://pexio.app/</a>
            </P>
            <P>
              Email: <a href="mailto:ab-support@pexio.app">ab-support@pexio.app</a>
            </P>
            <P>We will make reasonable efforts to respond to privacy-related inquiries within an appropriate timeframe.</P>
          </Section>
        </Container>
      </div>
      <Footer />
    </>
  )
}