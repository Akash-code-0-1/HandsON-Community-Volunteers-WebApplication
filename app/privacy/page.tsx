import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 5, 2023</p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <p>
                At HandsOn, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website and use our platform. Please read this privacy
                policy carefully. If you do not agree with the terms of this privacy policy, please do not access the
                site.
              </p>
              <p>
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will
                alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are
                encouraged to periodically review this Privacy Policy to stay informed of updates.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Collection of Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <p>
                We may collect information about you in a variety of ways. The information we may collect via the
                Platform includes:
              </p>

              <h3 className="text-lg font-semibold mt-4">Personal Data</h3>
              <p>
                Personally identifiable information, such as your name, email address, telephone number, and demographic
                information that you voluntarily give to us when you register with the Platform or when you choose to
                participate in various activities related to the Platform. You are under no obligation to provide us
                with personal information of any kind, however your refusal to do so may prevent you from using certain
                features of the Platform.
              </p>

              <h3 className="text-lg font-semibold mt-4">Derivative Data</h3>
              <p>
                Information our servers automatically collect when you access the Platform, such as your IP address,
                your browser type, your operating system, your access times, and the pages you have viewed directly
                before and after accessing the Platform.
              </p>

              <h3 className="text-lg font-semibold mt-4">Financial Data</h3>
              <p>
                Financial information, such as data related to your payment method (e.g., valid credit card number, card
                brand, expiration date) that we may collect when you purchase, order, return, exchange, or request
                information about our services from the Platform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use of Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                experience. Specifically, we may use information collected about you via the Platform to:
              </p>

              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Create and manage your account.</li>
                <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
                <li>Email you regarding your account or order.</li>
                <li>Enable user-to-user communications.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Platform.</li>
                <li>Generate a personal profile about you to make future visits to the Platform more personalized.</li>
                <li>Increase the efficiency and operation of the Platform.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Platform.</li>
                <li>Notify you of updates to the Platform.</li>
                <li>Offer new products, services, and/or recommendations to you.</li>
                <li>Perform other business activities as needed.</li>
                <li>Request feedback and contact you about your use of the Platform.</li>
                <li>Resolve disputes and troubleshoot problems.</li>
                <li>Respond to product and customer service requests.</li>
                <li>Send you a newsletter.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disclosure of Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <p>
                We may share information we have collected about you in certain situations. Your information may be
                disclosed as follows:
              </p>

              <h3 className="text-lg font-semibold mt-4">By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary to respond to legal process, to
                investigate or remedy potential violations of our policies, or to protect the rights, property, and
                safety of others, we may share your information as permitted or required by any applicable law, rule, or
                regulation.
              </p>

              <h3 className="text-lg font-semibold mt-4">Third-Party Service Providers</h3>
              <p>
                We may share your information with third parties that perform services for us or on our behalf,
                including payment processing, data analysis, email delivery, hosting services, customer service, and
                marketing assistance.
              </p>

              <h3 className="text-lg font-semibold mt-4">Marketing Communications</h3>
              <p>
                With your consent, or with an opportunity for you to withdraw consent, we may share your information
                with third parties for marketing purposes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">
                HandsOn
                <br />
                123 Volunteer Street
                <br />
                Community Plaza
                <br />
                New York, NY 10001
                <br />
                Email: privacy@handson.org
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

