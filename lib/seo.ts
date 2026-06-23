export const siteUrl = "https://review.vercel.app";

export const targetKeywords = ['상품리뷰', '상품리뷰 보호소', '상품리뷰 파양', '상품리뷰'] as const;

export const siteTitle = "상품리뷰 | 상품리뷰 전문 안내";

export const siteDescription =
  "상품리뷰·상품리뷰 전문 상담센터입니다. 보호소 연계, 입양·파양 안내. 전화 0505-707-0401";

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "상품리뷰",
        description: siteDescription,
        inLanguage: "ko-KR",
      },
      {
        "@type": "AnimalShelter",
        "@id": `${siteUrl}/#organization`,
        name: "상품리뷰",
        url: siteUrl,
        description: siteDescription,
        telephone: "0505-707-0401",
        knowsAbout: [...targetKeywords],
      },
    ],
  };
}
