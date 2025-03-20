import Image from "next/image";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

import { getPatient } from "@/lib/actions/patient.actions";
export default async function newAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo1.svg"
            alt="medilab Logo"
            height={1000}
            width={1000}
            className="mb-8 h-20 w-fit"
          />
          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />
          <p className="copyright mt-10 py-12">
            © 2025 MediLab Hospiatl. All rights reserved.
          </p>
        </div>
      </section>
      <Image
        src="/assets/icons/appointment-img.jpg"
        alt="appointment"
        height={1200}
        width={1000}
        className="side-img max-w-[500px] bg-bottom"
      />
    </div>
  );
}
