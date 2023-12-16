import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

type Props = {
  children: React.ReactNode;
};

const PlatformLayout = (props: Props) => {
  const { children } = props;

  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
