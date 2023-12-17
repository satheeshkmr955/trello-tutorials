import { startCase } from "lodash";
import { auth } from "@clerk/nextjs";

import { OrgControl } from "./_component/org-control";

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
}

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
