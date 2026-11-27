import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BmwModelDetailContent, {
  type BmwModelItem,
} from "@/components/inner-page/BmwModelDetailContent";
import modelsData from "@/data/models.json";

const models = modelsData as BmwModelItem[];

export function generateStaticParams() {
  return models.map((model) => ({
    slug: model.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const model = models.find((item) => item.slug === slug);

  if (!model) {
    return {
      title: "BMW Model Not Found",
    };
  }

  return {
    title: model.heroTitle,
    description: model.heroDescription,
    alternates: {
      canonical: `/models/${model.slug}`,
    },
    openGraph: {
      title: `${model.heroTitle} | Btech BMW Service & Repair`,
      description: model.heroDescription,
      url: `/models/${model.slug}`,
      images: [model.image],
    },
  };
}

export default async function BmwModelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const model = models.find((item) => item.slug === slug);

  if (!model) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <BmwModelDetailContent model={model} allModels={models} />
      </main>
      <Footer />
    </>
  );
}
