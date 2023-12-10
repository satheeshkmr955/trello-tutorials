type Props = {
  children: React.ReactNode;
};

const OrganizationLayout = (props: Props) => {
  const { children } = props;

  return (
    <main className="pt-20 md:pt-24 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block"></div>
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;
