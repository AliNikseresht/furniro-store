import { TTab } from "@/types/tabs";
import Image from "next/image";
import sample from "@/public/assets/shop-bg.png";

export const tabsData: TTab = [
  {
    id: "description",
    label: "Description",
    content: (
      <div className="flex flex-col items-center gap-3">
        <Image
          src={sample}
          alt="Product Image"
          className="w-32 h-32 object-cover"
          priority
        />
        <p>
          Embodying the raw, wayward spirit of rock n roll, the Kilburn portable
          active stereo speaker takes the unmistakable look and sound of
          Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
    ),
  },
  {
    id: "additional_information",
    label: "Additional Information",
    content: <p>This is the Additional Information content.</p>,
  },
  {
    id: "reviews",
    label: "Reviews",
    content: <p>This is the Reviews content.</p>,
  },
];
