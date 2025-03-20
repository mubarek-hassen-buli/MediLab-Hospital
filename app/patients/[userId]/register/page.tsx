import Image from "next/image";
import { getUser } from "@/lib/actions/patient.actions";
import RegisterForm from "@/components/forms/RegisterForm";
async function Registration({ params }: SearchParamProps) {
  const { userId } = await params; // Await params here
  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo1.svg"
            alt="medilab Logo"
            height={1000}
            width={1000}
            className="mb-8 h-24 w-fit"
          />
          <RegisterForm user={user} />
          <div className="text-14-regular mt-20 flex justify-center">
            <p className="jcopyright text-dark-600 py-12">
              © 2025 MediLab Hospital. All rights reserved.
            </p>
          </div>
        </div>
      </section>
      <Image
        src="/assets/icons/register-img.jpg"
        alt="onboarding image"
        height={1000}
        width={1000}
        className="side-img max-w-[400px]"
      />
    </div>
  );
}

export default Registration;
