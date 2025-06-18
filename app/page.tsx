// Home page - server component
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="max-w-3xl mx-auto py-10 hero-section" id="hero">
        <h1 className="text-center text-primary pb-3 font-serif">Business Law</h1>
        <h3 className="text-center text-muted-foreground">
          A Modern Textbook for Undergraduate Students and Primer for Law Students.
        </h3>
        <div className="flex flex-col md:flex-row gap-6 mt-6 mb-0">
          <div className="flex-1">
            <p className="text-3xl font-serif mb-8">By Gavin Goldstein</p>
            <p className="md:pr-6 text-sm font-serif">
              Written in a relaxed manner that students will relate to and enjoy. (How many of your students enjoy reading their book?) The book is not intimidating or overwhelming. Rather, Gavin provides an outline and discussion of complicated legal subjects written in plain,. clear English. The "colloquial approach." Real-world examples like the Enron case, the "Cannibal Cop," the global distribution chain of Apple iPhones, the Paris Climate Change Agreement, and NATO illustrate and clarify key concepts. Reaches students where they are. The text portrays updates in the law after 2020
            </p>


          </div>
          <div className="flex-1 pt-10">
            <Image
              src="/images/Gavin_B&W_001.png"
              alt="Business Law"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

        </div>
        <div className="flex-1">
          <p className="md:pr-6 text-sm font-serif">
            including recent Supreme Court decisions that dramatically affect businesses -- Citizens United, Bostock v. Clayton County, Burwell v. Hobby Lobby, Dobbs v. Women's Health Organization, and Students for Fair Admissions v. Harvard. Uses modern themes and examples including the Black Lives Matter movement, BREXIT, the Student Loan Crisis, and Hamilton the Broadway musical. Incorporates the concepts of Diversity, Equity, and Inclusion by highlighting ethical business practices with an emphasis on corporate social responsibility and public benefit corporations.
          </p>
        </div>

      </div>
    </div>
  )
}
