// Home page - server component
import Image from "next/image";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative min-h-[calc(100vh-33px)]">
      <div id="page-background" className="absolute inset-0 bg-[url(/backgrounds/blue_mountains_001.jpg)] bg-cover bg-bottom opacity-70" />
      <div id="gradient-overlay" className="absolute inset-0 bg-gradient-to-t from-transparent via-white/70 to-white" />
      <div className="relative min-h-[calc(100vh-33px)]">
        <Container>
          <div className="hero-section" id="hero">
            <h1 className="text-center text-primary pb-2 sm:pb-4 mt-6 sm:mt-10 font-serif text-4xl sm:text-5xl md:text-6xl">Business Law</h1>
            <h3 className="text-center text-muted-foreground text-sm sm:text-base md:text-lg px-4 sm:px-8">
              A Modern Textbook for Undergraduate Students and Primer for Law Students
            </h3>
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 sm:mb-10 mt-4 sm:mt-8 text-center sm:text-start sm:ml-17">By Dr. Gavin R. Goldstein, JD, PhD</p>

            <div className="mt-8 sm:mt-26 mb-6 sm:mb-10" id="home-page-body">
              <div className="relative flex flex-col sm:block">
                <Image
                  src="/images/Gavin_B&W_001.png"
                  alt="Business Law"
                  width={360}
                  height={360}
                  className="mx-auto sm:float-right sm:ml-6 mb-6 sm:mb-4 px-3 w-[280px] sm:w-[360px]"
                />
                <span id="book-description">
                  <p className="journal-print-wrap text-sm sm:text-base px-4 sm:px-0">
                    Written in a relaxed manner that students will relate to and enjoy. (How many of your students enjoy reading their book?) The book is not intimidating or overwhelming. Rather, Gavin provides an outline and discussion of complicated legal subjects written in plain, clear English. The &ldquo;colloquial approach.&rdquo; Real-world examples like the Enron case, the &ldquo;Cannibal Cop,&rdquo; the global distribution chain of Apple iPhones, the Paris Climate Change Agreement, and NATO illustrate and clarify key concepts. Reaches students where they are.
                  </p>
                  <p className="journal-print-wrap mt-3 text-sm sm:text-base px-4 sm:px-0">
                    The text portrays updates in the la including recent Supreme Court decisions that dramatically affect businesses -- Citizens United, Bostock v. Clayton County, Burwell v. Hobby Lobby, Dobbs v. Women&apos;s Health Organization, and Students for Fair Admissions v. Harvard. Uses modern themes and examples including the Black Lives Matter movement, BREXIT, the Student Loan Crisis, and Hamilton the Broadway musical. Highlights ethical business practices with an emphasis on corporate social responsibility and public benefit corporations.
                  </p>
                </span>
              </div>

              <div className="mt-10 sm:mt-36 flex flex-col items-center">
                <Button
                  asChild
                  size="lg"
                  variant="accent"
                  className="font-semibold text-sm sm:text-base"
                >
                  <Link
                    href="https://collegepublishing.sagepub.com/products/business-law-1-298068"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get the Book!
                  </Link>
                </Button>

                <Card className="mt-2 max-w-xl bg-background/80 backdrop-blur-sm">
                  <div id="sage-publishing-text" className="p-6">
                    <p className="journal-print-wrap text-sm sm:text-base">Published by Sage College Publishing, a leading independent academic publisher committed to affordable textbooks, trusted authorship, and excellent service. Sage's guaranteed independence supports an equitable academic future and invests in new ideas that drive education forward.</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
