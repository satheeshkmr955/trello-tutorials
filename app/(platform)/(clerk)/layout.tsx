type Props = {
  children: React.ReactNode;
};

const ClerkLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};

export default ClerkLayout;
