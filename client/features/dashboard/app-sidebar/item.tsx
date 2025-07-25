import { AppLink } from '@/components/applink';
import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui';
import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type Props = {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
};
export const Item = (props: Props) => {
  const { title, url, icon: Icon } = props;
  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton asChild>
        <AppLink href={url} exact={true}>
          <Icon />
          <span>{title}</span>
        </AppLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
