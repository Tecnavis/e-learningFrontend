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
    // Handle hash navigation
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
            <p className="text-base sm:text-xl text-muted-foreground">Legal Documents & Policies</p>
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

              <TabsContent value="privacy" className="mt-4 sm:mt-6">
                <CardTitle className="text-xl sm:text-3xl mb-2">Privacy Policy</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">Effective Date: [Insert Date]</p>
                <CardContent className="px-0 sm:px-0">
                  <div className="prose prose-sm sm:prose-base prose-gray dark:prose-invert max-w-none">
                    <p className="mb-4 sm:mb-6">
                      At CognixLearn ("we," "our," or "us"), your privacy is very important to us. This Privacy Policy
                      explains how we collect, use, and protect your information when you use our website{" "}
                      <a href="https://cognixlearn.com" className="text-primary hover:underline">
                        https://cognixlearn.com
                      </a>
                      .
                    </p>

                    <div className="space-y-6 sm:space-y-8">
                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">1. Information We Collect</h2>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>
                            <strong>Personal Information:</strong> Name, email, contact number, or other details
                            provided during registration or inquiry.
                          </li>
                          <li>
                            <strong>Non-Personal Information:</strong> Browser type, device details, IP address, and
                            pages visited.
                          </li>
                          <li>
                            <strong>Cookies:</strong> We use cookies to improve user experience, analyze traffic, and
                            serve relevant ads.
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">2. How We Use Information</h2>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>To provide and improve our services.</li>
                          <li>To communicate with you about updates, promotions, or support.</li>
                          <li>To analyze usage for website improvement.</li>
                          <li>To comply with legal and regulatory requirements.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">3. Google Ads & Third-Party Cookies</h2>
                        <p className="mb-3">We use Google AdSense and other third-party advertising networks.</p>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>
                            Google uses cookies (including DoubleClick DART cookie) to serve ads based on your
                            interests.
                          </li>
                          <li>You can opt-out of personalized advertising by visiting Ads Settings.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">4. Data Sharing</h2>
                        <p className="mb-3">
                          We do not sell or rent your personal information. However, data may be shared with:
                        </p>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>Service providers who help us operate the site.</li>
                          <li>Advertising and analytics partners.</li>
                          <li>Legal authorities, if required by law.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">5. Data Security</h2>
                        <p>
                          We take appropriate security measures to protect your information, but no system is 100%
                          secure.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">6. Your Rights</h2>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>Access, update, or delete your information.</li>
                          <li>Opt-out of marketing emails.</li>
                          <li>Control cookie preferences in your browser.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">7. Changes to This Policy</h2>
                        <p>
                          We may update this Privacy Policy at any time. Updates will be posted here with the revised
                          date.
                        </p>
                      </section>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="terms" className="mt-4 sm:mt-6">
                <CardTitle className="text-xl sm:text-3xl mb-2">Terms and Conditions</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">Effective Date: [Insert Date]</p>
                <CardContent className="px-0 sm:px-0">
                  <div className="prose prose-sm sm:prose-base prose-gray dark:prose-invert max-w-none">
                    <p className="mb-4 sm:mb-6">
                      Welcome to CognixLearn. By accessing and using our website{" "}
                      <a href="https://cognixlearn.com" className="text-primary hover:underline">
                        https://cognixlearn.com
                      </a>
                      , you agree to the following Terms and Conditions:
                    </p>

                    <div className="space-y-6 sm:space-y-8">
                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">1. Use of Website</h2>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>You must be at least 13 years old to use this site.</li>
                          <li>
                            You agree not to misuse or interfere with the site's security, functionality, or
                            availability.
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">2. Intellectual Property</h2>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>
                            All content (text, images, logos, videos, and courses) is owned by CognixLearn unless stated
                            otherwise.
                          </li>
                          <li>
                            You may not copy, reproduce, or distribute our content without prior written permission.
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">3. User Responsibilities</h2>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>You agree to provide accurate information when registering or communicating with us.</li>
                          <li>You must not upload harmful, illegal, or infringing content.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">4. Limitation of Liability</h2>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>
                            We are not responsible for any loss, damage, or inconvenience caused by using our website.
                          </li>
                          <li>
                            External links on our site are not under our control, and we are not responsible for their
                            content.
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">5. Payments (if applicable)</h2>
                        <p>
                          If you purchase services or courses, payment terms and refund policies will be provided
                          separately.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">6. Termination</h2>
                        <p>
                          We reserve the right to suspend or terminate access to our site for violation of these terms.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">7. Governing Law</h2>
                        <p>These terms are governed by the laws of [Your Country/State].</p>
                      </section>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="cookies" className="mt-4 sm:mt-6">
                <CardTitle className="text-xl sm:text-3xl mb-2">Cookie Policy</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">Effective Date: [Insert Date]</p>
                <CardContent className="px-0 sm:px-0">
                  <div className="prose prose-sm sm:prose-base prose-gray dark:prose-invert max-w-none">
                    <p className="mb-4 sm:mb-6">
                      This Cookie Policy explains how CognixLearn uses cookies and similar technologies on{" "}
                      <a href="https://cognixlearn.com" className="text-primary hover:underline">
                        https://cognixlearn.com
                      </a>
                      .
                    </p>

                    <div className="space-y-6 sm:space-y-8">
                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">1. What Are Cookies?</h2>
                        <p>
                          Cookies are small files placed on your device to store information about your activity on our
                          site.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">2. Types of Cookies We Use</h2>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>
                            <strong>Essential Cookies:</strong> Required for site functionality.
                          </li>
                          <li>
                            <strong>Analytics Cookies:</strong> To understand how users interact with our site (Google
                            Analytics, etc.).
                          </li>
                          <li>
                            <strong>Advertising Cookies:</strong> Used by Google Ads and third parties to show relevant
                            ads.
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">3. How We Use Cookies</h2>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>Improve user experience and site performance.</li>
                          <li>Show relevant advertisements.</li>
                          <li>Analyze site traffic and engagement.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">4. Managing Cookies</h2>
                        <p>
                          You can manage or block cookies in your browser settings. Please note that disabling cookies
                          may affect website functionality.
                        </p>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">5. Third-Party Cookies</h2>
                        <p className="mb-3">
                          We use third-party services like Google AdSense and Analytics, which may use cookies to
                          deliver targeted ads.
                        </p>
                        <ul className="space-y-2 ml-4 sm:ml-6">
                          <li>Learn more at Google Privacy & Terms.</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">6. Updates to This Policy</h2>
                        <p>We may update this Cookie Policy from time to time. Updates will be posted here.</p>
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
                  <span className="text-sm sm:text-base text-muted-foreground">Malappuram, Kerala</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}