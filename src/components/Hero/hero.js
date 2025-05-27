import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="custom-container mx-auto">
        <div className="space-y-10">
          <div className="flex items-center justify-center w-full">
            <Image
              src={"/Slogan.png"}
              alt="Slogan"
              width={1000}
              height={1000}
            />
          </div>
          <div className="space-y-8 font-ovo text-xl text-justify">
            <p className="">
              Welcome to ASK International, Bangladesh&apos;s foremost provider
              of an extensive array of premium products across a spectrum of
              categories
            </p>
            <p>
              At ASK International, we pride ourselves on being the go-to
              destination for discerning consumers and businesses alike, seeking
              superior quality in garments, machineries, computer hardware,
              security equipment, defense apparatus, and spare parts. Our
              commitment to excellence is unwavering, as we tirelessly pursue
              customer satisfaction with a dedication unmatched in the industry.
            </p>
            <p className="font-semibold">
              Unrivaled Expertise in Diverse Offerings
            </p>
            <p>
              With a wealth of experience and a keen understanding of market
              dynamics, we have curated a comprehensive selection of products to
              cater to the multifaceted demands of our clientele. From the
              latest trends in fashion to cutting-edge technological
              advancements, our inventory is meticulously sourced to ensure
              top-notch quality and reliability across every category.
            </p>
            <p className="font-semibold">A Commitment to Excellence</p>
            <p>
              At ASK International, excellence isn&apos;t just a goal; it&apos;s
              our standard. We adhere to stringent quality control measures at
              every stage of procurement and distribution, ensuring that each
              product that bears our name meets the highest standards of
              craftsmanship and performance. Our dedication to excellence
              extends beyond the products themselves, encompassing every
              interaction with our valued customers.
            </p>
            <p className="font-semibold">Your Trusted Procurement Partner</p>
            <p>
              With our comprehensive range of offerings and unwavering
              commitment to customer satisfaction, we aspire to be your trusted
              procurement partner, simplifying the process of sourcing premium
              products for your diverse needs. Whether you&apos;re a business
              looking to enhance operational efficiency or an individual seeking
              the latest innovations, ASK International is your one-stop
              solution for all your procurement requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
