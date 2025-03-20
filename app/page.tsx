import Image from "next/image";
import Link from "next/link";
import PatientForm from "@/components/forms/patientForm";
import PassKeyModal from "@/components/PassKeyModal";
export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PassKeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo1.svg"
            alt="medilab Logo"
            height={1000}
            width={1000}
            className="mb-8 h-24 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 MediLab Hospital. All rights reserved.
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/icons/home-img.jpg"
        alt="onboarding image"
        height={500}
        width={600}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
