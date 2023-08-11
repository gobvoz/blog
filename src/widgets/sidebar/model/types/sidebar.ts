export interface SidebarItemType {
  path: string;
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}
