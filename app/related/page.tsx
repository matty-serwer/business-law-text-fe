import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTitle } from "@/components/ui/page-title"
import Container from "@/components/layout/Container"

// Related page - server component
export default function Page() {
  return (
    <Container>
      <PageTitle>Related Research</PageTitle>

      <Tabs defaultValue="qualitative" orientation="vertical" className="flex flex-col items-center mt-6">
        <TabsList className="flex flex-col h-fit mb-6">
          <TabsTrigger
            value="qualitative"
            className="text-left w-[400px] justify-start px-7"
          >
            A Qualitative Inquiry
          </TabsTrigger>
          <TabsTrigger
            value="followup"
            className="text-left w-[400px] justify-start px-7"
          >
            A Follow Up to Our Qualitative Inquiry
          </TabsTrigger>
        </TabsList>

        {/* PDF Content */}
        <div className="w-full">
          <TabsContent value="qualitative" className="mt-0">
            <iframe
              src="/documents/A_Qualitative_Inquiry.pdf"
              className="w-full h-[800px] border rounded-lg"
            />
          </TabsContent>
          <TabsContent value="followup" className="mt-0">
            <iframe
              src="/documents/A_Follow_Up_to_Our_Qualitative Inquiry.pdf"
              className="w-full h-[800px] border rounded-lg"
            />
          </TabsContent>
        </div>
      </Tabs>
    </Container>
  )
} 