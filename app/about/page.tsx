// About page - server component
import { PageTitle } from '@/components/ui/page-title';
import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function Page() {
  return (
    <Container>
      <PageTitle>About Dr. Gavin Goldstein</PageTitle>

      <div className="space-y-6 text-lg leading-relaxed">
        <div className="relative">
          <div className="float-right ml-6 mb-4 relative w-[300px]">
            <Image
              src="/images/Gavin_B&W_001.jpg"
              alt="Dr. Gavin Goldstein"
              width={300}
              height={400}
              className="rounded-lg"
              priority
            />
          </div>

          <p>
            After earning his degree in history from Syracuse University&rsquo;s Maxwell School of Citizenship and Public Affairs, Dr. Gavin Goldstein began his legal career. He received his Juris Doctor from Brooklyn Law School and started teaching part-time while simultaneously practicing law.
          </p>

          <p>
            Dr. Goldstein&rsquo;s ongoing work as an attorney ensures his classroom instruction stays grounded in both contemporary legal theory and current practice. He later joined LIM College in New York as an Assistant Professor, where he taught courses in business management and law. During his time there, he pursued a PhD in Business Management, focusing his dissertation on the intersection of Corporate Social Responsibility (CSR) and taxation. This research led to the publication of two peer-reviewed articles—coauthored with his twin brother—in the International Journal of Business & Applied Sciences in 2020.
          </p>

          <p>
            In 2023, Dr. Goldstein released his first book, &ldquo;Business Law: A Modern Textbook for Undergraduate Students and Primer for Law Students.&rdquo; His academic work continues to explore how ethical leadership and CSR intersect with the legal landscape. Outside the classroom and courtroom, he cherishes time with his extensive and vibrant family, whose support and connection remain central to his life. A dedicated and lifelong runner, he finds clarity and inspiration through long-distance running, particularly in the challenge and rhythm of marathons.
          </p>
        </div>
      </div>
    </Container>
  );
} 