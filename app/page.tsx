// Home page - server component
import Image from "next/image";
import Container from "@/components/layout/Container";

export default function Page() {
  return (
    <Container>
      <div className="hero-section" id="hero">
        <h1 className="text-center text-primary pb-3 font-serif">Business Law</h1>
        <h3 className="text-center text-muted-foreground">
          A Modern Textbook for Undergraduate Students and Primer for Law Students.
        </h3>
        <p className="text-3xl font-serif mb-10 mt-4 text-start ml-17">By Gavin Goldstein</p>

        <div className="mt-18 mb-0" id="home-page-body">
          <div className="relative">
            <Image
              src="/images/Gavin_B&W_001.png"
              alt="Business Law"
              width={360}
              height={360}
              className="float-right ml-6 mb-4 px-3"
            />
            <span id="book-description">
              {/* <p className="text-sm font-serif leading-relaxed tracking-wide text-justify indent-1 first-letter:float-left first-letter:text-5xl first-letter:mr-2 first-letter:font-bold first-letter:leading-none"> */}
              <p className="journal-print-wrap">
                Written in a relaxed manner that students will relate to and enjoy. (How many of your students enjoy reading their book?) The book is not intimidating or overwhelming. Rather, Gavin provides an outline and discussion of complicated legal subjects written in plain,. clear English. The &ldquo;colloquial approach.&rdquo; Real-world examples like the Enron case, the &ldquo;Cannibal Cop,&rdquo; the global distribution chain of Apple iPhones, the Paris Climate Change Agreement, and NATO illustrate and clarify key concepts. Reaches students where they are.
              </p>
              <p className="journal-print-wrap mt-3">
                The text portrays updates in the la including recent Supreme Court decisions that dramatically affect businesses -- Citizens United, Bostock v. Clayton County, Burwell v. Hobby Lobby, Dobbs v. Women&apos;s Health Organization, and Students for Fair Admissions v. Harvard. Uses modern themes and examples including the Black Lives Matter movement, BREXIT, the Student Loan Crisis, and Hamilton the Broadway musical. Incorporates the concepts of Diversity, Equity, and Inclusion by highlighting ethical business practices with an emphasis on corporate social responsibility and public benefit corporations.
              </p>
            </span>
          </div>
        </div>
      </div>
    </Container>
  )
}
