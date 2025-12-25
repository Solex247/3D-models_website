import type { CategoryPageProps } from "@/app/types/Index";
import { getCategoryBySlug } from "@/app/lib/categories";
import { getModels } from "@/app/lib/models";
import type { Model } from "@/app/types/Index";
import ModelsGrid from "@/app/components/ModelsGrid";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);
  const getCategoryContent: Model[] = await getModels({
    category: categoryName,
  });

  return (
    <ModelsGrid title={category.displayName} models={getCategoryContent} />
  );
}
