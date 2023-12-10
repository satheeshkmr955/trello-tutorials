import { Navbar } from "../_component/navbar";

type Props = {
  children: React.ReactNode;
};

const OrganizationLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default OrganizationLayout;
