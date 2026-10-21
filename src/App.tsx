import SculptureHero from "@/components/ui/liquid-sculpture-hero"

const studioLinks = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Approach", href: "#approach" },
  { label: "Journal", href: "#journal" },
]

export default function App() {
  return (
    <main className="min-h-screen bg-[#ebe9e5]">
      <SculptureHero
        brand="Atelier/11"
        navLinks={studioLinks}
        navCta={{ label: "Contact", href: "#contact" }}
        eyebrow="Independent creative studio — Est. 2019"
        headline={"Form that\nanswers back."}
        headlineAccent="answers back."
        body="We shape products, identities and spaces with the precision of engineering and the patience of craft — work that holds up under attention."
        primaryCta={{ label: "Start a project", href: "#contact" }}
        secondaryCta={{ label: "Selected work", href: "#work" }}
        backdropText="atelier"
        imageAlt="Abstract sculpture of interwoven metallic filaments and particles"
        showCredit
      />
    </main>
  )
}
