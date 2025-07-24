import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Separator,
  SidebarTrigger,
} from '@/components/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export const Header = () => {
  const pathname = usePathname();
  const list = pathname.split('/').map((i) => ({
    title: i,
    url: i === 'dashboard' ? '/dashboard' : `/dashboard/${i}`,
  }));

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <Breadcrumb>
        <BreadcrumbList>
          {list.map((i, idx) => {
            const isLast = idx === list.length - 1;
            return (
              <Fragment key={idx}>
                <BreadcrumbItem className="hidden md:block">
                  {isLast ? (
                    <BreadcrumbPage className="capitalize">
                      {i.title}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={i.url} className="capitalize">
                        {i.title}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && (
                  <BreadcrumbSeparator className="hidden md:block" />
                )}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};
