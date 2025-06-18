// Updates page - server component
import updates from '../../mock/book-updates.json';
import { Card, CardHeader, CardTitle, CardContentText, CardContent, CardHyperlink, CardSubtitle } from '@/components/ui/card';
import { PageTitle } from '@/components/ui/page-title';

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto py-10">

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
    </div>
  );
} 