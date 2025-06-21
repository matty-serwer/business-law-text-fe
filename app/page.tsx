// Home page - server component
import Image from "next/image";
import Container from "@/components/layout/Container";
import BackgroundFade from "@/components/layout/BackgroundFade";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative min-h-[calc(100vh-33px)]">
      <div id="page-background" className="absolute inset-0 bg-[url(/backgrounds/blue_mountains_001.jpg)] bg-cover bg-bottom opacity-70" />
      <div id="gradient-overlay" className="absolute inset-0 bg-gradient-to-t from-transparent via-white/70 to-white" />
      <div className="relative min-h-[calc(100vh-33px)]">
        <Container>
          <div className="hero-section" id="hero">
            <h1 className="text-center text-primary pb-4 mt-10 font-serif">Business Law</h1>
            <h3 className="text-center text-muted-foreground">
              A Modern Textbook for Undergraduate Students and Primer for Law Students.
            </h3>
            <p className="text-4xl font-serif mb-10 mt-8 text-start ml-17">by Dr.Gavin Goldstein</p>

            <div className="mt-26 mb-10" id="home-page-body">
              <div className="relative">
                <Image
                  src="/images/Gavin_B&W_001.png"
                  alt="Business Law"
                  width={360}
                  height={360}
                  className="float-right ml-6 mb-4 px-3"
                />
                <span id="book-description">
                  <p className="journal-print-wrap">
                    Written in a relaxed manner that students will relate to and enjoy. (How many of your students enjoy reading their book?) The book is not intimidating or overwhelming. Rather, Gavin provides an outline and discussion of complicated legal subjects written in plain,. clear English. The &ldquo;colloquial approach.&rdquo; Real-world examples like the Enron case, the &ldquo;Cannibal Cop,&rdquo; the global distribution chain of Apple iPhones, the Paris Climate Change Agreement, and NATO illustrate and clarify key concepts. Reaches students where they are.
                  </p>
                  <p className="journal-print-wrap mt-3">
                    The text portrays updates in the la including recent Supreme Court decisions that dramatically affect businesses -- Citizens United, Bostock v. Clayton County, Burwell v. Hobby Lobby, Dobbs v. Women&apos;s Health Organization, and Students for Fair Admissions v. Harvard. Uses modern themes and examples including the Black Lives Matter movement, BREXIT, the Student Loan Crisis, and Hamilton the Broadway musical. Incorporates the concepts of Diversity, Equity, and Inclusion by highlighting ethical business practices with an emphasis on corporate social responsibility and public benefit corporations.
                  </p>
                </span>
              </div>

              <div className="my-36 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="accent"
                  className="font-semibold"
                >
                  <Link
                    href="https://collegepublishing.sagepub.com/products/business-law-1-298068"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get the Book!
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
