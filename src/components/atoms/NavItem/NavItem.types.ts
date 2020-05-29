export interface NavItemProps {
  label: string;
  path: string;
  exact?: boolean;
  className?: string;
  Icon?: <T>(props: T) => JSX.Element;
}
