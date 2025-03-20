import { Button } from "./ui/button";
import Image from "next/image";
interface ButtonProps {
  isloading: boolean;
  className: string;
  children: React.ReactNode;
}
function SubmitButton({ isloading, className, children }: ButtonProps) {
  return (
    <Button
      type="submit"
      className={className ?? "shad-primary-btn w-full"}
      disabled={isloading}
    >
      {isloading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="spinner"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading.....
        </div>
      ) : (
        children
      )}
    </Button>
  );
}

export default SubmitButton;
