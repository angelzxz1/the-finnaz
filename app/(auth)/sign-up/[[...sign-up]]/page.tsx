import { SignUp } from "@clerk/nextjs";
import type { SignUpTheme } from "@clerk/types";

const appearance: SignUpTheme = {
  layout: {
    socialButtonsPlacement: "bottom",
    termsPageUrl: "/terms",
  },
  elements: {
    formButtonPrimary: "bg-[#523869]",
    formField: "w-full",
    card: "rounded-none test w-full h-full flex flex-col justify-around items-center",
    rootBox:
      "overflow-hidden flex flex-col justify-center items-center rounded-[22px]",
    footer: "flex justify-around items-center w-full",
    footerActionLink: "text-[#523869] hover:text-[#524569]",
  },
};
export default function Page() {
  return <SignUp appearance={appearance} />;
}
