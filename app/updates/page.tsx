// Updates page - server component
import updates from '../../mock/book-updates.json';
import { Card, CardHeader, CardTitle, CardContentText, CardContent, CardHyperlink, CardSubtitle } from '@/components/ui/card';
import { PageTitle } from '@/components/ui/page-title';
import Container from '@/components/layout/Container';

export default function Page() {
  return (
    <Container>
      <PageTitle>Book Updates</PageTitle>
      <div className="space-y-6">
        {updates.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardSubtitle>Chapter {item.chapter}</CardSubtitle>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardContentText>{item.description}</CardContentText>
              <CardHyperlink href={item.source}>{item.source}</CardHyperlink>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
} 