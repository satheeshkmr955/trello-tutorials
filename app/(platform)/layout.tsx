import { ClerkProvider } from "@clerk/nextjs";

type Props = {
  children: React.ReactNode;
};

const PlatformLayout = (props: Props) => {
  const { children } = props;

  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
