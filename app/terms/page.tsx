import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 5, 2023</p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <p>
                These Terms of Service constitute a legally binding agreement made between you and HandsOn, concerning
                your access to and use of the HandsOn website and platform. You agree that by accessing the Platform,
                you have read, understood, and agree to be bound by all of these Terms of Service.
              </p>
              <p>
                IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
                PLATFORM AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
              <p>
                We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service
                at any time and for any reason. We will alert you about any changes by updating the "Last updated" date
                of these Terms of Service, and you waive any right to receive specific notice of each such change.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Registration</CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <p>
                You may be required to register with the Platform. You agree to keep your password confidential and will
                be responsible for all use of your account and password. We reserve the right to remove, reclaim, or
                change a username you select if we determine, in our sole discretion, that such username is
                inappropriate, obscene, or otherwise objectionable.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your account and password, including but not
                limited to the restriction of access to your computer and/or account. You agree to accept responsibility
                for any and all activities or actions that occur under your account and/or password.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Conduct</CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <p>By using the Platform, you represent and warrant that:</p>

              <ol className="list-decimal pl-5 space-y-1 mt-2">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>
                  You will maintain the accuracy of such information and promptly update such registration information
                  as necessary.
                </li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>
                  You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental
                  permission to use the Platform.
                </li>
                <li>
                  You will not access the Platform through automated or non-human means, whether through a bot, script,
                  or otherwise.
                </li>
                <li>You will not use the Platform for any illegal or unauthorized purpose.</li>
                <li>Your use of the Platform will not violate any applicable law or regulation.</li>
              </ol>

              <p className="mt-4">
                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right
                to suspend or terminate your account and refuse any and all current or future use of the Platform (or
                any portion thereof).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prohibited Activities</CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <p>
                You may not access or use the Platform for any purpose other than that for which we make the Platform
                available. The Platform may not be used in connection with any commercial endeavors except those that
                are specifically endorsed or approved by us.
              </p>

              <p>As a user of the Platform, you agree not to:</p>

              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  Systematically retrieve data or other content from the Platform to create or compile, directly or
                  indirectly, a collection, compilation, database, or directory without written permission from us.
                </li>
                <li>
                  Make any unauthorized use of the Platform, including collecting usernames and/or email addresses of
                  users by electronic or other means for the purpose of sending unsolicited email, or creating user
                  accounts by automated means or under false pretenses.
                </li>
                <li>Use the Platform to advertise or offer to sell goods and services.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Platform.</li>
                <li>Engage in unauthorized framing of or linking to the Platform.</li>
                <li>
                  Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account
                  information such as user passwords.
                </li>
                <li>
                  Engage in any automated use of the system, such as using scripts to send comments or messages, or
                  using any data mining, robots, or similar data gathering and extraction tools.
                </li>
                <li>
                  Interfere with, disrupt, or create an undue burden on the Platform or the networks or services
                  connected to the Platform.
                </li>
                <li>Attempt to impersonate another user or person or use the username of another user.</li>
                <li>
                  Use any information obtained from the Platform in order to harass, abuse, or harm another person.
                </li>
                <li>
                  Use the Platform as part of any effort to compete with us or otherwise use the Platform and/or the
                  Content for any revenue-generating endeavor or commercial enterprise.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <p>
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
                DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
                PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE PLATFORM, EVEN IF WE
                HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose">
              <p>
                In order to resolve a complaint regarding the Platform or to receive further information regarding use
                of the Platform, please contact us at:
              </p>
              <p className="mt-2">
                HandsOn
                <br />
                123 Volunteer Street
                <br />
                Community Plaza
                <br />
                New York, NY 10001
                <br />
                Email: terms@handson.org
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

