interface ListWrapperProps {
  children: React.ReactNode;
}

export const ListWrapper = (props: ListWrapperProps) => {
  const { children } = props;

  return <li className="shrink-0 h-full w-[272px] select-none">{children}</li>;
};
