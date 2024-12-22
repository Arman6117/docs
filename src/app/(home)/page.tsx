import Navbar from "./_components/navbar";
import TemplateGallery from "./_components/template-gallery";


export default async function Home({searchParams}:{searchParams:Promise<{query:string}>}) {
  const query = (await searchParams).query
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 right-0 left-0 z-10 h-16 bg-white p-4">
        <Navbar query={query}/>
      </div>
     <div className="mt-16">
      <TemplateGallery/>
     </div>
    </div>
  );
}
