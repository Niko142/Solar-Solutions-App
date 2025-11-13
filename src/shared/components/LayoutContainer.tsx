interface LayoutContainerProps {
  children: React.ReactNode;
}

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return <div className="mx-auto max-w-[1440px]">{children}</div>;
};
