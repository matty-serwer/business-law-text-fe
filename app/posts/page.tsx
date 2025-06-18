// Posts page - server component
import posts from '@/mock/linkedin-posts.json';
import { Card, CardHeader, CardTitle, CardContent, CardHyperlink, CardContentText, CardSubtitle } from '@/components/ui/card';
import { PageTitle } from '@/components/ui/page-title';
import Image from 'next/image';
import linkedinLogo from '@/public/images/linkedin_in_logo.svg';
import Container from '@/components/layout/Container';

export default function Page() {
  return (
    <Container>
      <PageTitle>LinkedIn Posts</PageTitle>

      <div className="space-y-6">
        {posts.posts.map((post, idx) => {
          // Format the date to be more readable
          const date = new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          return (
            <Card key={idx}>
              <CardHeader>
                <CardSubtitle>{date}</CardSubtitle>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardContentText>View this post on LinkedIn to read more and join the discussion.</CardContentText>
                <div className="flex justify-end mt-4">
                  <CardHyperlink href={post.url} className="flex items-center gap-2">
                    Read on LinkedIn
                    <Image
                      src={linkedinLogo}
                      alt="LinkedIn"
                      width={16}
                      height={16}
                    />
                  </CardHyperlink>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Container>
  );
} 