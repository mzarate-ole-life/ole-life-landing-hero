import { createFileRoute } from "@tanstack/react-router";
import { OleLanding } from "@/components/landing/OleLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olé Life — Seguro de vida 100% digital" },
      { name: "description", content: "Seguro de vida digital, sem exames nem papelada. Proteção de US$ 100 mil a US$ 500 mil, a partir de US$ 12 por mês." },
      { property: "og:title", content: "Olé Life — Sua vida não espera. Seu seguro também não." },
      { property: "og:description", content: "Proteção de verdade, contratada online em poucos minutos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <OleLanding />;
}
