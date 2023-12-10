import { OrgControl } from "./_component/org-control";

type Props = {
  children: React.ReactNode;
};

const OrganizationIdLayout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
