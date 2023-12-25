import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "../../components/providers/query-provider";

type Props = {
  children: React.ReactNode;
};

const PlatformLayout = (props: Props) => {
  const { children } = props;

  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
