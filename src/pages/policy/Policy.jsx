"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Mail, MapPin, Shield, FileText, Cookie } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState("privacy")

  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash && ["privacy", "terms", "cookies"].includes(hash)) {
      setActiveTab(hash)
    }
  }, [])

  const handleTabChange = (value) => {
    setActiveTab(value)
    window.history.replaceState(null, "", `#${value}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="mb-4 sm:mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="sr-only sm:not-sr-only">Back to Home</span>
            </Link>
          </Button>

          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-2">CognixLearn</h1>
            <p className="text-base sm:text-xl text-muted-foreground">Legal Documents &amp; Policies</p>
          </div>
        </div>

        <Card className="max-w-5xl mx-auto">
          <CardHeader className="p-4 sm:p-6">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-3 gap-1 sm:gap-2">
                <TabsTrigger value="privacy" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">Privacy</span>
                </TabsTrigger>
                <TabsTrigger value="terms" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">Terms</span>
                </TabsTrigger>
                <TabsTrigger value="cookies" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2">
                  <Cookie className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">Cookies</span>
                </TabsTrigger>
              </TabsList>

              {/* ── PRIVACY POLICY ── */}
              <TabsContent value="privacy" className="mt-4 sm:mt-6">
                <CardTitle className="text-xl sm:text-3xl mb-2">Privacy Policy</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">Effective Date: 1 January 2025</p>
                <CardContent className="px-0 sm:px-0">
                  <div className="prose prose-sm sm:prose-base prose-gray dark:prose-invert max-w-none">
                    <p className="mb-4 sm:mb-6">
                      At CognixLearn (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), your privacy is very important to us. This Privacy Policy
                      explains how we collect, use, and protect your information when you use our website{" "}
                      <a href="https://cognixlearn.com" className="text-primary hover:underline">
                        https://cognixlearn.com
                      </a>
                      . By using our platform, you consent to the data practices described in this policy.
                    </p>

                    <div className="space-y-6 sm:space-y-8">
                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">1. Information We Collect</h2>
                        <p className="mb-3">We collect information to provide and improve our services. The types of information we may collect include:</p>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>
                            <strong>Personal Information:</strong> Name, email address, contact number, class, and other details
                            you voluntarily provide during registration or when submitting an enquiry.
                          </li>
                          <li>
                            <strong>Non-Personal Information:</strong> Browser type, device details, operating system, IP address,
                            referring URLs, and pages visited on our site. This data is collected automatically via cookies and
                            analytics tools and cannot be used to identify you personally.
                          </li>
                          <li>
                            <strong>Cookies &amp; Tracking Technologies:</strong> We use first-party and third-party cookies to
                            remember your preferences, analyse traffic patterns, and serve relevant advertisements. Please see
                            our Cookie Policy tab for full details.
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">2. How We Use Your Information</h2>
                        <p className="mb-3">We use the information we collect for the following purposes:</p>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>To create and manage your account and deliver our e-learning services.</li>
                          <li>To personalise the learning experience based on your class and syllabus preferences.</li>
                          <li>To communicate with you about updates, new content, promotions, or support requests.</li>
                          <li>To analyse usage patterns and improve the performance, content, and design of our website.</li>
                          <li>To display contextually relevant advertisements through Google AdSense and similar networks.</li>
                          <li>To comply with applicable legal and regulatory requirements.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">3. Google Ads &amp; Third-Party Cookies</h2>
                        <p className="mb-3">
                          CognixLearn participates in the Google AdSense programme to display advertisements. Google and its
                          partners use cookies, including the DoubleClick DART cookie, to serve ads based on your prior visits
                          to our site and other websites on the internet.
                        </p>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>
                            You may opt out of personalised advertising at any time by visiting{" "}
                            <a href="https://adssettings.google.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                              Google Ads Settings
                            </a>.
                          </li>
                          <li>
                            Alternatively, you can opt out of third-party vendor use of cookies by visiting{" "}
                            <a href="https://www.networkadvertising.org/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                              Network Advertising Initiative opt-out page
                            </a>.
                          </li>
                          <li>
                            Ads are only displayed on pages that contain sufficient original educational content. We do not
                            place ads on pages that are under construction, login/registration screens, or pages used solely
                            for navigation.
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">4. Data Sharing</h2>
                        <p className="mb-3">
                          We do not sell, trade, or rent your personal information to third parties for their own marketing
                          purposes. However, data may be shared in limited circumstances with:
                        </p>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>Trusted service providers who assist us in operating the website (e.g. hosting, email delivery, analytics).</li>
                          <li>Advertising and analytics partners (such as Google) solely for the purposes described above.</li>
                          <li>Legal authorities or regulatory bodies if required by applicable law, court order, or to protect the rights and safety of our users.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">5. Data Retention &amp; Security</h2>
                        <p className="mb-3">
                          We retain your personal information only for as long as is necessary to fulfil the purposes described
                          in this policy, or as required by law. We implement industry-standard security measures — including
                          HTTPS encryption, secure server infrastructure, and access controls — to protect your data from
                          unauthorised access, disclosure, or destruction. However, no method of internet transmission or
                          electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">6. Children&rsquo;s Privacy</h2>
                        <p>
                          CognixLearn is designed for school students. We do not knowingly collect personal information
                          from children under the age of 13 without verifiable parental consent. If you are a parent or
                          guardian and believe your child has provided us with personal information, please contact us at{" "}
                          <a href="mailto:cognixlearn@gmail.com" className="text-primary hover:underline">cognixlearn@gmail.com</a>{" "}
                          and we will delete it promptly.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">7. Your Rights</h2>
                        <p className="mb-3">You have the following rights regarding your personal information:</p>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>The right to access, correct, or delete the personal data we hold about you.</li>
                          <li>The right to opt out of marketing communications at any time by clicking &ldquo;unsubscribe&rdquo; in any email.</li>
                          <li>The right to control cookie preferences through your browser settings.</li>
                          <li>The right to lodge a complaint with the relevant data protection authority in your jurisdiction.</li>
                        </ul>
                        <p className="mt-3">To exercise any of these rights, please contact us at <a href="mailto:cognixlearn@gmail.com" className="text-primary hover:underline">cognixlearn@gmail.com</a>.</p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">8. Changes to This Policy</h2>
                        <p>
                          We may update this Privacy Policy periodically to reflect changes in our practices or legal
                          requirements. When we do, we will revise the &ldquo;Effective Date&rdquo; at the top of this page. We encourage
                          you to review this policy regularly to stay informed about how we are protecting your information.
                        </p>
                      </section>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>

              {/* ── TERMS & CONDITIONS ── */}
              <TabsContent value="terms" className="mt-4 sm:mt-6">
                <CardTitle className="text-xl sm:text-3xl mb-2">Terms and Conditions</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">Effective Date: 1 January 2025</p>
                <CardContent className="px-0 sm:px-0">
                  <div className="prose prose-sm sm:prose-base prose-gray dark:prose-invert max-w-none">
                    <p className="mb-4 sm:mb-6">
                      Welcome to CognixLearn. By accessing and using our website{" "}
                      <a href="https://cognixlearn.com" className="text-primary hover:underline">
                        https://cognixlearn.com
                      </a>
                      , you agree to be bound by the following Terms and Conditions. Please read them carefully before
                      using our platform. If you do not agree with any part of these terms, please discontinue use of our services.
                    </p>

                    <div className="space-y-6 sm:space-y-8">
                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">1. Use of Website</h2>
                        <p className="mb-3">CognixLearn grants you a limited, non-exclusive, non-transferable licence to access and use our website for personal, non-commercial educational purposes, subject to these Terms.</p>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>You must be at least 13 years old to create an account or use this site independently. Users under 13 require parental consent.</li>
                          <li>You agree not to misuse, disrupt, or attempt to gain unauthorised access to the site&rsquo;s servers, databases, or systems.</li>
                          <li>You must not use automated bots, scrapers, or similar tools to extract content from CognixLearn without prior written permission.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">2. Intellectual Property</h2>
                        <p className="mb-3">All content on CognixLearn — including but not limited to text, video lessons, study notes, images, logos, icons, graphics, and course materials — is the intellectual property of CognixLearn or its content contributors, and is protected under applicable copyright and intellectual property laws.</p>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>You may view and download content solely for your personal, non-commercial study purposes.</li>
                          <li>You may not copy, reproduce, redistribute, upload, or publish our content on any other platform, website, or medium without prior written permission from CognixLearn.</li>
                          <li>Any unauthorised use may result in legal action.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">3. User Responsibilities</h2>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>You agree to provide accurate, complete, and up-to-date information when registering or contacting us.</li>
                          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                          <li>You must not upload, share, or transmit content that is harmful, defamatory, obscene, illegal, or infringes the rights of others.</li>
                          <li>You agree not to engage in any conduct that could damage the reputation or functionality of CognixLearn.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">4. Advertising</h2>
                        <p>
                          CognixLearn displays advertisements provided by Google AdSense and other trusted ad networks to support
                          the free availability of our educational content. Ads are shown only on content-rich pages and never on
                          login, registration, or navigational screens. By using our platform, you acknowledge and accept the
                          presence of these advertisements. You are free to use ad-blocking software, though this may affect
                          certain website features.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">5. Limitation of Liability</h2>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>
                            CognixLearn is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, express or implied.
                            We do not guarantee that the platform will be error-free or uninterrupted.
                          </li>
                          <li>
                            We are not liable for any direct, indirect, incidental, or consequential loss or damage arising from
                            your use of our website or reliance on its content.
                          </li>
                          <li>
                            External links on our site lead to third-party websites that are not under our control. We are not
                            responsible for the content, privacy practices, or accuracy of those websites.
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">6. Payments &amp; Premium Access</h2>
                        <p>
                          Core content on CognixLearn is available free of charge. Where premium plans or paid features are
                          offered, full payment terms, pricing, and refund policies will be clearly communicated at the point
                          of purchase. All transactions are processed securely through authorised payment gateways. We do not
                          store your card details on our servers.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">7. Termination</h2>
                        <p>
                          CognixLearn reserves the right to suspend or permanently terminate your access to the platform, without
                          prior notice, if you are found to be in violation of these Terms and Conditions or engaging in any
                          activity that is harmful to other users, the platform, or third parties.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">8. Governing Law</h2>
                        <p>
                          These Terms and Conditions are governed by and construed in accordance with the laws of India.
                          Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction
                          of the courts in Kerala, India.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">9. Amendments</h2>
                        <p>
                          We reserve the right to modify these Terms at any time. Continued use of the platform after
                          changes are posted constitutes your acceptance of the revised Terms.
                        </p>
                      </section>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>

              {/* ── COOKIE POLICY ── */}
              <TabsContent value="cookies" className="mt-4 sm:mt-6">
                <CardTitle className="text-xl sm:text-3xl mb-2">Cookie Policy</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">Effective Date: 1 January 2025</p>
                <CardContent className="px-0 sm:px-0">
                  <div className="prose prose-sm sm:prose-base prose-gray dark:prose-invert max-w-none">
                    <p className="mb-4 sm:mb-6">
                      This Cookie Policy explains how CognixLearn uses cookies and similar tracking technologies on{" "}
                      <a href="https://cognixlearn.com" className="text-primary hover:underline">
                        https://cognixlearn.com
                      </a>
                      . By continuing to use our website, you consent to our use of cookies as described in this policy.
                    </p>

                    <div className="space-y-6 sm:space-y-8">
                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">1. What Are Cookies?</h2>
                        <p>
                          Cookies are small text files that are placed on your device (computer, tablet, or smartphone) when
                          you visit a website. They are widely used to make websites work more efficiently, to remember your
                          preferences, and to provide website owners with analytical information about how their site is used.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">2. Types of Cookies We Use</h2>
                        <ul className="space-y-3 ml-4 sm:ml-6">
                          <li>
                            <strong>Essential / Strictly Necessary Cookies:</strong> These cookies are required for the
                            basic functioning of our website, such as maintaining your login session and remembering your
                            preferences. You cannot opt out of these cookies without disabling the site.
                          </li>
                          <li>
                            <strong>Analytics Cookies:</strong> We use Google Analytics to collect anonymised data about
                            how visitors interact with our pages — including pages visited, time on site, and traffic sources.
                            This helps us improve the quality and relevance of our educational content.
                          </li>
                          <li>
                            <strong>Advertising Cookies:</strong> We use Google AdSense, which places advertising cookies
                            to serve ads that are relevant to your interests. These cookies track your browsing activity
                            across sites and are subject to Google&rsquo;s own privacy and cookie policies.
                          </li>
                          <li>
                            <strong>Preference Cookies:</strong> These cookies remember your settings, such as dark/light
                            mode preference and selected class or syllabus, so your experience is consistent across visits.
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">3. How We Use Cookies</h2>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>To keep you logged in and remember your class and syllabus preferences.</li>
                          <li>To understand which lessons, subjects, and pages are most popular among our students.</li>
                          <li>To measure the effectiveness of our content and identify areas for improvement.</li>
                          <li>To display relevant, non-intrusive advertisements that help us keep the platform free for students.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">4. Managing &amp; Blocking Cookies</h2>
                        <p className="mb-3">
                          You have the right to accept or decline cookies. Most web browsers automatically accept cookies, but
                          you can usually modify your browser settings to decline them if you prefer. The steps vary by browser:
                        </p>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and Security &rarr; Cookies and other site data.</li>
                          <li><strong>Mozilla Firefox:</strong> Options &rarr; Privacy &amp; Security &rarr; Cookies and Site Data.</li>
                          <li><strong>Safari:</strong> Preferences &rarr; Privacy &rarr; Manage Website Data.</li>
                          <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions.</li>
                        </ul>
                        <p className="mt-3">
                          Please note that disabling cookies may affect the functionality of our website and your ability to
                          access certain features, such as personalised learning preferences.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">5. Third-Party Cookies &amp; Opt-Out</h2>
                        <p className="mb-3">
                          We use third-party services — including Google AdSense and Google Analytics — which may set their
                          own cookies on your device when you visit our site. These services are governed by their own privacy
                          and cookie policies.
                        </p>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>
                            Learn more and opt out of Google advertising cookies at{" "}
                            <a href="https://adssettings.google.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                              Google Ads Settings
                            </a>.
                          </li>
                          <li>
                            Opt out of Google Analytics tracking by using the{" "}
                            <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                              Google Analytics Opt-out Browser Add-on
                            </a>.
                          </li>
                          <li>
                            For broader opt-out from multiple third-party ad networks, visit the{" "}
                            <a href="https://www.networkadvertising.org/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                              Network Advertising Initiative opt-out page
                            </a>.
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">6. Updates to This Policy</h2>
                        <p>
                          We may update this Cookie Policy from time to time as our use of cookies or applicable regulations
                          change. Any updates will be posted on this page with a revised effective date. We encourage you to
                          check back periodically to stay informed.
                        </p>
                      </section>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>

        <Separator className="my-8 sm:my-12 max-w-5xl mx-auto" />

        <Card className="max-w-5xl mx-auto">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl text-center">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="text-center space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground">For any questions about our policies, please contact us:</p>
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <a href="mailto:cognixlearn@gmail.com" className="text-sm sm:text-base text-primary hover:underline">
                    cognixlearn@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-sm sm:text-base text-muted-foreground">Malappuram, Kerala, India</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
